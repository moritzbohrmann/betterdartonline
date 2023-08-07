import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import collectedReducers from "./state/ReducerCollection";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createStore } from "redux";
import { ThemeProvider } from "./context/ThemeContext";

const store = createStore(collectedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
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
