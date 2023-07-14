import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import { useProfile } from "../hooks/useProfile";
import { ActionType as MatchType } from "../state/MatchReducer";
import { ActionType } from "../state/PlayerlistReducer";

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
         player.id !== profile.id && dispatch({ type: ActionType.ADD_READY, payload: player });
      });
      socket.on("quit", (player) => {
         if (player.id === profile.id) return;
         dispatch({ type: ActionType.REMOVE_READY, payload: player });
         dispatch({ type: ActionType.REMOVE_SENT, payload: player });
         dispatch({ type: ActionType.REMOVE_RECEIVED, payload: player });
      });
      socket.on("match-continue", (match) => {
         localStorage.setItem("match", JSON.stringify(match));

         window.location.href = "/match";
      });
      socket.on("request", (player) => {
         dispatch({ type: ActionType.ADD_RECEIVED, payload: player });
         dispatch({ type: ActionType.SET_CURRENT, payload: player });
      });
      socket.on("request-decline", (player) => {
         dispatch({ type: ActionType.REMOVE_SENT, payload: player });
      });
      socket.on("request-revoke", (player) => {
         dispatch({ type: ActionType.REMOVE_RECEIVED, payload: player });
         dispatch({ type: ActionType.REMOVE_CURRENT });
      });
      socket.on("match-start", (match) => {
         dispatch({ type: MatchType.SET_MATCH, payload: match });

         setTimeout(() => (window.location.href = "/match"), 2000);
      });
      socket.on("score", (score) => {
         dispatch({ type: MatchType.ADD_SCORE, payload: score });
      });
      socket.on("legshot", ({ player, legPreview }) => {
         dispatch({ type: MatchType.LEG_WON, payload: player });
         dispatch({ type: MatchType.ADD_LEG, payload: legPreview });
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
            dispatch({ type: MatchType.SET_MATCH, payload: match });
         }
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
