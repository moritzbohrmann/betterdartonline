import * as match from "../state/MatchReducer";
import * as playerlist from "../state/PlayerlistReducer";
import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useProfile } from "../state/ProfileReducer";

const SocketContext = createContext();

const getSocket = (address) => {
   const s = io(`http://${address}`, { transports: ["websocket"] });

   s.connect();

   return s;
};

const SocketProvider = ({ address, children }) => {
   const socket = getSocket(address);

   initSocket(socket);

   return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

const initSocket = (socket) => {
   const dispatch = useDispatch();
   const profile = useProfile();

   useEffect(() => {
      socket.on("join", (player) => {
         player.id !== profile.id && dispatch(playerlist.addPlayerReady(player));
      });
      socket.on("quit", (player) => {
         if (player.id === profile.id) return;
         dispatch(playerlist.removePlayerReady(player));
         dispatch(playerlist.removeRequestSent(player));
         dispatch(playerlist.removeRequestReceived(player));
      });
      socket.on("match-continue", (match) => {
         localStorage.setItem("match", JSON.stringify(match));

         window.location.href = "/match";
      });
      socket.on("request", (player) => {
         dispatch(playerlist.addRequestReceived(player));
         dispatch(playerlist.setCurrentRequest(player));
      });
      socket.on("request-decline", (player) => {
         dispatch(playerlist.removeRequestSent(player));
      });
      socket.on("request-revoke", (player) => {
         dispatch(playerlist.removeRequestReceived(player));
         dispatch(playerlist.removeCurrentRequest(player));

         toast.info(`Anfrage zurückgezogen von ${player.username}!`);
      });
      socket.on("match-start", (_match) => {
         dispatch(match.setMatch(_match));

         toast.info(`Matchdaten werden geladen...`);

         setTimeout(() => (window.location.href = "/match"), 2000);
      });
      socket.on("score", (score) => {
         dispatch(match.addScore(score));
      });
      socket.on("score-edit", (score) => {
         dispatch(match.editLastScoreOf(score.player, score));
      });
      socket.on("achievement-edit", (achievement) => {
         dispatch(match.editLastAchievement(achievement));
      });
      socket.on("legshot", ({ currentLeg, player, legPreview }) => {
         dispatch(match.incrementState(player));
         dispatch(match.addLeg(legPreview));
         dispatch(match.setLeg(-1, currentLeg));
      });
      socket.on("error", (error) => {
         switch (error.type) {
            case "no-match-found":
               return (window.location.href = "/home");
         }
      });
      socket.on("passed", (_match) => {
         if (_match) {
            localStorage.setItem("match", JSON.stringify(_match));
            dispatch(match.setMatch(_match));
         }
      });
      socket.on("achievement", (achievement) => {
         dispatch(match.addAchievement(achievement));
      });
      socket.on("achievement-remove", (achievement) => {
         dispatch(match.removeAchievement(achievement));
      });

      return () => {
         socket.off("join");
         socket.off("quit");
         socket.off("request");
         socket.off("request-decline");
         socket.off("request-revoke");
         socket.off("match-start");
         socket.off("score");
         socket.off("error");
         socket.off("passed");
         socket.off("achievement");
         socket.off("score-edit");
         socket.off("achievement-edit");
         socket.off("achievement-remove");
      };
   }, []);
};

export const useSocket = () => {
   return useContext(SocketContext);
};

export const emitData = (event, data) => {
   return useSocket().emit(event, data);
};

export { SocketContext, SocketProvider };
