import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import App from "./App";
import { useAuth } from "../hooks/Auth";

function Routes() {
  const { auth } = useAuth();
  return auth == false ? <Auth /> : <App />;
}

export default Routes;
