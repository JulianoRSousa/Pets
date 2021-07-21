import React from 'react';
import { FlatList, View, StatusBar, Text } from 'react-native';
import Post from '../../components/Post/Post';
import * as AppColors from '../../assets/AppColors';

function Feed(){

  
  return (
    <View style={{backgroundColor: AppColors.OrangeBase}}>
    <StatusBar backgroundColor={AppColors.OrangeBase} />
        <Post/>
    </View>
  )
}
export default Feed;