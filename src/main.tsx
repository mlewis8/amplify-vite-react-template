import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import Finance from "./Finance.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <Finance />
    </Authenticator>
  </React.StrictMode>
);
