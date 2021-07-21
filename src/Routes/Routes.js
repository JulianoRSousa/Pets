import React, { useState } from "react";
import Auth from "./Auth";
import App from "./App";

function Routes() {
  const [logged, setLogged] = useState(true);

  return logged ? <App /> : <Auth />;
}
export default Routes;
