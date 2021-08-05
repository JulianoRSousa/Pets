import React from "react";
import { View, Text, date } from "react-native";
import { White } from "../../assets/AppColors";
import { useRoute} from '@react-navigation/native';
import PostItem from '../../components/Post/PostItem';
import { useAuth } from "../../hooks/Auth";

function Preview() {
  const {user} = useAuth();
  const route = useRoute();

  var date = new Date( Date.now() - 240*60*1000) //240 = 4 hours * 60 minutes - America/Manaus timezone

  const dateFormat = date.toLocaleDateString()
  let datanova = new Date();
  const ff = datanova
  console.log('ff ',ff)
  
  return (
    <View style={{backgroundColor: White, flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>--</Text>
      <PostItem myPost={true} 
      userImage={{url: user.profilePictureUrl}} 
      fullName={user.firstname + ' '+ user.lastname} 
      username={user.username} 
      postImage={route.params.postInfo.picture}
        petName={route.params.postInfo.petName}
        description={route.params.postInfo.description}
        date={dateFormat}
      />
    </View>
  );
}
export default Preview;
