import React from "react";
import AuthRoutes from "./Auth.routes";
import AppRoutes from "./App.routes";
import IntroSlider from './IntroSlider';
import { useAuth } from "../hooks/useAuth";

const Routes = () => {
  const { contextSigned, loading, firstAccess } = useAuth()

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#333" />
  //     </View>
  //   )
  // }

  if (!contextSigned) {
    return <AuthRoutes />
  } else if (signed && firstAccess) {
    return <IntroSlider />
  }
  return <AppRoutes />
}
export default Routes;
