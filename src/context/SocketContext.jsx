import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { useProfile } from "../hooks/useProfile";
import * as Match from "../state/MatchReducer";
import * as List from "../state/PlayerlistReducer";

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
   const [profile] = useProfile();

   useEffect(() => {
      socket.on("join", (player) => {
         player.id !== profile.id && dispatch(addPlayerReady(player));
      });
      socket.on("quit", (player) => {
         if (player.id === profile.id) return;
         dispatch(List.removePlayerReady(player));
         dispatch(List.removeRequestSent(player));
         dispatch(List.removeRequestReceived(player));
      });
      socket.on("match-continue", (match) => {
         localStorage.setItem("match", JSON.stringify(match));

         window.location.href = "/match";
      });
      socket.on("request", (player) => {
         dispatch(List.addRequestReceived(player));
         dispatch(List.setCurrentRequest(player));
      });
      socket.on("request-decline", (player) => {
         dispatch({ type: ActionType.REMOVE_SENT, payload: player });
      });
      socket.on("request-revoke", (player) => {
         dispatch(List.removeRequestReceived(player));
         dispatch(List.removeCurrentRequest(player));
      });
      socket.on("match-start", (match) => {
         dispatch({ type: MatchType.SET_MATCH, payload: match });

         setTimeout(() => (window.location.href = "/match"), 2000);
      });
      socket.on("score", (score) => {
         dispatch(Match.addScore(score));
      });
      socket.on("legshot", ({ player, legPreview }) => {
         dispatch(Match.incrementState(player));
         dispatch(Match.addLeg(legPreview));
      });
      socket.on("error", (error) => {
         switch (error.type) {
            case "no-match-found":
               return (window.location.href = "/home");
         }
      });
      socket.on("passed", (match) => {
         if (match) {
            localStorage.setItem("match", JSON.stringify(match));
            dispatch(Match.setMatch(match));
         }
      });
      socket.on("achievement", (achievement) => {
         dispatch(Match.addAchievement(achievement));
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
