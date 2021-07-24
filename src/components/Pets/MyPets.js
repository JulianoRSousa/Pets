import React, { useState, useEffect, useRef } from "react";
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import api from "../../services/api";
import Post from "./PostItem";
import { useAuth } from "../../hooks/Auth";
import { OrangeBase } from "../../assets/AppColors";

function MyPets() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postList, setPostList] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    loadPosts();
    return () => setIsMounted(false);
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const response = await api.get("/getpostbytoken", {
        headers: {
          token,
        },
      });
      const postInfo = response.data;
      setPostList(postInfo);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const PostContainer = petList.map((item) => (
    <Pets
      key={item.id}
      fullName={item.user.firstName}
      username={item.user.username}
      userImage={{ uri: item.user.picture_url }}
      postImage={{ uri: item.picture_url }}
      petName={item.pet.firstName + " " + item.pet.lastName}
      description={item.description}
      date={item.postDate}
      state={item.state}
      starStatus={false}
    />
  ));

  return <View style={{ backgroundColor: OrangeBase }}>{PostContainer}</View>;
}
export default MyPets;
