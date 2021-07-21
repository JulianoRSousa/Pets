import React from "react";
import Auth from "./Auth";
import App from "./App";
import { useAuth } from "../hooks/Auth";

function Routes() {
  const { signed } = useAuth();

  return signed ? <App /> : <Auth />;
}
export default Routes;
