import Authenticate from "./elements/Authenticate";
import HomeUI from "./pages/HomeUI";
import MatchUI from "./pages/MatchUI";
import NavBar from "./elements/NavigationBar";
import React from "react";
import SignOut from "./elements/SignOut";
import Tournament from "./pages/Tournament";
import { Navigate, Route, Routes } from "react-router-dom";
import { Flex } from "./components/@ui/Flex";
import { SocketProvider } from "./context/SocketContext";

function App() {
   return (
      <Flex orientation="vertical" align="center" className="min-h-screen">
         <NavBar />
         <Routes>
            <Route path="*" element={<Navigate to={"/home"} />} />
            <Route
               path="/match/*"
               element={
                  <SocketProvider address="127.0.0.1:8457">
                     <MatchUI />
                  </SocketProvider>
               }
            />
            <Route
               path="/home/*"
               element={
                  <SocketProvider address="127.0.0.1:3001">
                     <HomeUI />
                  </SocketProvider>
               }
            />
            <Route path="/tournament/*" element={<Tournament />} />
            <Route path="/signup/*" element={<Authenticate />} />
            <Route path="/signout" element={<SignOut />} />
         </Routes>
      </Flex>
   );
}

export default App;
