import "./App.css";
import HomeUI from "./pages/HomeUI";
import MatchUI from "./pages/MatchUI";
import { Navigate, Route, Routes } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext";
import { useTheme } from "./context/ThemeContext";
import { cn } from "./utils/style";

function App() {
   const [theme] = useTheme();

   return (
      <div className={cn("h-screen w-screen", theme.background)}>
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
      </div>
   );
}

export default App;
