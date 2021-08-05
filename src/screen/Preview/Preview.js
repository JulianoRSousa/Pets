import React from "react";
import { View, Text, date } from "react-native";
import { OrangeBase, White } from "../../assets/AppColors";
import { useRoute } from "@react-navigation/native";
import PostItem from "../../components/Post/PostItem";
import { useAuth } from "../../hooks/Auth";
import moment from "moment";
import "moment/locale/pt-br";
import { ButtonOrange } from "../../components/components";

function Preview() {
  const { user } = useAuth();
  const route = useRoute();
  const date = moment().format("DD MMMM YYYY");
  console.log("date: ", user.profilePictureUrl);
  console.log("date: ", route.params);

  return (
    <View
      style={{
        backgroundColor: OrangeBase,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostItem
        myPost={true}
        userImage={{ uri: user.profilePictureUrl }}
        postImage={{ uri: route.params.postInfo.pictureUrl }}
        fullName={user.firstname + " " + user.lastname}
        username={user.username}
        petName={route.params.postInfo.petName}
        description={route.params.postInfo.description}
        state={route.params.postInfo.petState}
        date={date}
      />
      <View style={{padding:5}}>
        <ButtonOrange text={"Publicar"} />
      </View>
    </View>
  );
}
export default Preview;
