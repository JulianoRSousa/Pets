import React from "react";
import Auth from "./Auth";
import App from "./App";
import { useAuth } from "../hooks/Auth";

const Routes = () => {
  const { contextSigned } = useAuth();

  return contextSigned == false ? <Auth /> : <App />;
};

export default Routes;
