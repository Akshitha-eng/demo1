import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom"; // ✅ BrowserRouter should be here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>  {/* ✅ Ensure Router is ONLY here */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  );
