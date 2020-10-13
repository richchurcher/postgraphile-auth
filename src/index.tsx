import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import client from "./apollo";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // TODO: StrictMode seems in interfere with Apollo at present, waiting on:
  // https://github.com/facebook/react/issues/17193
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
