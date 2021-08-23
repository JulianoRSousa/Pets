import React, { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import Post from "./PostItem";
import { useCallback } from "react";
import { rem } from "../components";

function PostPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const ref_flatlist = useRef();

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
        <ActivityIndicator size="large" color="#202020" style={{backgroundColor: 'white', alignSelf: 'center', borderRadius: 100, padding:5}} />
      </>
    );
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage(0, true);
    setRefreshing(false);
  }

  return (
    <FlatList
      windowSize={2160*rem}
      data={feed}
      ref={ref_flatlist}
      onEndReached={() => loadPage()}
      onRefresh={refreshList}
      refreshing={refreshing}
      alwaysBounceVertical={true}
      ListFooterComponent={loading && showLoad()}
      keyExtractor={useCallback((item) => String(item._id))}
      renderItem={useCallback(
        ({ item }) => (
          <Post
            fullName={item.user.firstName}
            username={item.user.username}
            postImage={{ uri: item.picture_url }}
            petName={item.pet.firstName}
            description={item.description}
            userImage={{ uri: item.user.picture_url }}
            date={item.postDate}
            state={item.state}
            starStatus={false}
          />
        ),
        []
      )}
    />
  );
}
export default PostPage;
