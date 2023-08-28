import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import authConfig from "../auth.config";
import collectedReducers from "./state/ReducerCollection";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createStore } from "redux";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const store = createStore(collectedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter basename="betterdartonline">
      <Provider store={store}>
         <ThemeProvider>
            <AuthProvider>
               <GoogleOAuthProvider clientId={authConfig.google.client_id}>
                  <App />
               </GoogleOAuthProvider>
            </AuthProvider>
         </ThemeProvider>
         <ToastContainer
            position="bottom-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss={false}
            rtl={false}
            theme="colored"
         />
      </Provider>
   </BrowserRouter>
);
