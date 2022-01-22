import React from "react";
import { useEffect, useLayoutEffect } from "react";
import { View, StatusBar } from "react-native";
import * as AppColors from "../../assets/AppColors";
import PostPage from "../../components/Post/Post";
import {useNavigation} from "@react-navigation/native";

function Feed() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.closeDrawer();
    return () => {
    };
  }, []);
  
  useEffect(() => {
    return <PostPage />;
  });

  return (
    <View style={{ backgroundColor: AppColors.OrangeBase, flex: 1 }}>
      <StatusBar backgroundColor={AppColors.OrangeBase} />
      <PostPage/>
    </View>
  );
}
export default Feed;
