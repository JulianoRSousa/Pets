import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import App from "./App";
import { useAuth } from "../hooks/Auth";

const Routes = () => {
  const { signed } = useAuth();

  return signed == false ? <Auth /> : <App />;
};

export default Routes;
