import React, { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator, View, Text} from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import Post from "./PostItem";
import { useCallback } from "react";
import { rem } from "../components";
import { useAuth } from "../../hooks/Auth";

function MyPost() {
  const [isMounted, setIsMounted] = useState(false);
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const ref_flatlist = useRef();

  const { user } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    loadPage();
    return () => setIsMounted(false);
  }, []);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (lastPage && pageNumber == lastPage) return;
    setLoading(true);
    try {
      const response = await api.get("/getPage", {
        headers: {
          token: await AsyncStorage.getItem("token"),
          page: pageNumber,
        },
      });
      const dataInfo = response.data;
      setLastPage(response.headers.pages);
      setFeed(shouldRefresh ? dataInfo : [...feed, ...dataInfo]);
      setPage(pageNumber + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  function showLoad() {
    return (
      <>
        <ActivityIndicator size={"large"} color={"#999"} />
      </>
    );
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage(0, true);
    setRefreshing(false);
  }

  function PostContainer() {
    user.postList.map((_id) => {
      <Post
        fullName={user.firstname}
        username={user.username}
        postImage={{ uri: user.postList.picture_url }}
        petName={user.postList.firstName}
        description={user.postList.description}
        userImage={{ uri: user.picture_url }}
        date={user.postList.postDate}
        state={user.postList.state}
        starStatus={false}
      />;
    });
  }

  return (
  <View style={{backgroundColor:'red', height:500, width: 400}}>
  {PostContainer()}
  <Text>oi</Text>
  </View>)
}
export default MyPost;
