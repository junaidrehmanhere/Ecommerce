import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./pages/Redux/ReduxStore.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./component/scrolltotop/ScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <ScrollToTop />
      <App />
    </Provider>
  </BrowserRouter>
);
