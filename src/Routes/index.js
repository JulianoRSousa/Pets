import React from "react";
import AuthRoutes from "./Auth.routes";
import AppRoutes from "./App.routes";
import IntroSlider from './IntroSlider';
import { connect } from "react-redux";

const Routes = (props) => {

  if (!props.auth) {
    return <AuthRoutes />
  } else if (props.auth && props.firstAccess) {
    console.log(props.firstAccess)
    return <IntroSlider />
  }
  return <AppRoutes />
}
const mapStateToProps = (state) => {
  return {
    auth: state.userReducer.auth,
    expired: state.userReducer.expired,
    firstAccess: state.userReducer.firstAccess
  }
}
const mapDispatchToState = (dispatch) => {
  return {
    setFirstAccess: (firstAccess) => dispatch({ type: 'SET_FIRST_ACCESS', payload: { firstAccess } })
  }
}
export default connect(mapStateToProps, mapDispatchToState)(Routes)
