import React from "react";
import { View, Text } from "react-native";
import { OrangeBase, White } from "../../assets/AppColors";
import { PickerState } from '../../components/styled/picker';

function Preview() {
  return (
    <View style={{backgroundColor: White, flex:1, justifyContent:'center', alignItems:'center'}}>
      <PickerState state={3} />
    </View>
  );
}
export default Preview;
