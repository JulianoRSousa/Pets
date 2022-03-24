import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { OrangeBase } from "../../assets/AppColors";
import { useRoute } from "@react-navigation/native";
import PostItem from "../../components/Post/PostItem";
import { useAuth } from "../../hooks/useAuth";
import moment from "moment";
import "moment/locale/pt-br";
import { ButtonOrange } from "../../components/components";
// import createPostService from "../../services/createPost.Service";
// import { CreatePost } from '../../services/createPost.Service;'
import { CreatePost } from "../../services/createPost.Service";

function Preview() {
  const { user, token } = useAuth();
  var postPic = null;

  useEffect(() => {
    postPic = route.params.postInfo.picture.assets[0].uri;
  });
  const route = useRoute();
  const date = moment().format("DD MMMM YYYY");
  const Postar = CreatePost;

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
        postImage={{
          uri: postPic,
        }}
        fullName={user.firstname + " " + user.lastname}
        username={user.username}
        petName={route.params.postInfo.petName}
        description={route.params.postInfo.description}
        state={route.params.postInfo.petState}
        date={date}
      />
      <View style={{ padding: 5 }}>
        <ButtonOrange
          text={"Publicar"}
          onPress={() =>
            Postar(
              route.params.postInfo.petId,
              postPic,
              route.params.postInfo.petState,
              route.params.postInfo.description,
              token
            )
          }
        />
      </View>
    </View>
  );
}
export default Preview;
