import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

//redux config
import store from "./store";
import { Provider } from "react-redux";

//locale config
import i18n from "./locale/i18n";
import { I18nextProvider } from "react-i18next";

// alert(process.env.REACT_APP_NAME + process.env.REACT_APP_VERSION);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
