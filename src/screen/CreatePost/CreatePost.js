import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { OrangeBase } from '../../assets/AppColors';

function CreatePost(){
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: OrangeBase, flex:1}}>
    <Button title={'go to Preview'} onPress={()=>navigation.navigate('Preview')}/>
    </View>
  )
}
export default CreatePost;