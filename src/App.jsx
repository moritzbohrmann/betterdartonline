import "./App.css";
import HomeUI from "./pages/HomeUI";
import MatchUI from "./pages/MatchUI";
import { Navigate, Route, Routes } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext";
import { useTheme } from "./context/ThemeContext";
import { cn } from "./utils/style";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
   return (
      <div>
         <Routes>
            <Route path="*" element={<Navigate to={"/home"} />} />
            <Route
               path="/home/*"
               element={
                  <SocketProvider address="127.0.0.1:3001">
                     <ThemeProvider>
                        <HomeUI />
                     </ThemeProvider>
                  </SocketProvider>
               }
            />

            <Route
               path="/match/*"
               element={
                  <SocketProvider address="127.0.0.1:8457">
                     <ThemeProvider>
                        <MatchUI />
                     </ThemeProvider>
                  </SocketProvider>
               }
            />
         </Routes>
      </div>
   );
}

export default App;
