import "./App.css";
import HomeUI from "./pages/HomeUI";
import MatchUI from "./pages/MatchUI";
import { Navigate, Route, Routes } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext";

// This app now uses github

function App() {
   return (
      <>
         <Routes>
            <Route path="*" element={<Navigate to={"/home"} />} />
            <Route
               path="/home/*"
               element={
                  <SocketProvider address="127.0.0.1:3001">
                     <HomeUI />
                  </SocketProvider>
               }
            />

            <Route
               path="/match/*"
               element={
                  <SocketProvider address="127.0.0.1:8457">
                     <MatchUI />
                  </SocketProvider>
               }
            />
         </Routes>
      </>
   );
}

export default App;
