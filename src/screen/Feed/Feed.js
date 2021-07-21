import React from "react";
import { View, StatusBar } from "react-native";
import Post from "../../components/Post/Post";
import * as AppColors from "../../assets/AppColors";

function Feed() {
  return (
    <View style={{ backgroundColor: AppColors.OrangeBase, flex:1 }}>
      <StatusBar backgroundColor={AppColors.OrangeBase} />
      <Post />
    </View>
  );
}
export default Feed;
