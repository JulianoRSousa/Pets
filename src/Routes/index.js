import React from "react";
import AuthRoutes from "./Auth.routes";
import AppRoutes from "./App.routes";
import IntroSlider from './IntroSlider';
import { useAuth } from "../hooks/useAuth";
import { connect } from "react-redux";

const Routes = (props) => {

  if (!props.auth) {
    return <AuthRoutes />
  } else if (props.auth && props.firstAccess) {
    return <IntroSlider />
  }
  return <AppRoutes />
}
const mapStateToProps = (state) => {
  return {
    auth: state.userReducer.auth,
    firstAccess: state.userReducer.firstAccess
  }
}

export default connect(mapStateToProps, null)(Routes)
