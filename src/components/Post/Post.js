import React, { useState, useEffect, useRef } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import PostStyle from "./PostStyle";
import { useCallback } from "react";

export default function PostView() {
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const ref_flatlist = useRef();
  useEffect(() => {
    loadPage();
  });
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
      response.headers.pages && setLastPage(response.headers.pages);
      const data = response.data;
      setFeed(data);
      setPage(pageNumber + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
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

  const renderItem = useCallback(
    ({ item }) => (
      <PostStyle
        fullName={item.user.firstName + " " + item.user.lastName}
        username={item.user.username}
        postImage={{ uri: item.picture_url }}
        petName={item.pet.firstName}
        description={item.description}
        userImage={{ uri: item.user.picture_url }}
        date={item.postDate}
        state={item.state}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => String(item._id));

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 250,
      offset: 290 * index,
      index,
    }),
    []
  );
  return (
    <FlatList
      data={feed}
      ref={ref_flatlist}
      removeClippedSubviews={true}
      onEndReached={() => loadPage()}
      onRefresh={refreshList}
      refreshing={refreshing}
      getItemLayout={getItemLayout}
      vertical
      initialNumToRender={15}
      ListFooterComponent={loading && showLoad()}
      renderItem={renderItem}
      keyExtractor={keyExtractor}

      // ({ item }) => (
      // <PostStyle
      //   firstName={item.user.firstName}
      //   lastName={item.user.lastName}
      //   username={item.user.username}
      //   source={{ uri: item.picture_url }}
      //   petName={item.pet.firstName}
      //   description={item.description}
      //   userImage={{ uri: item.user.picture_url }}
      //   date={item.postDate}
      //   state={item.state}
      // />

      // <View style={Styles.containerCard}>

      // <Text>Nome:{item.description}</Text>
      //   <Image
      //     source={{uri: item.picture_url}}
      //     style={Styles.cardItemImagePlaceCard}
      //   />
      //   <View style={Styles.InternalOptionMenu}>

      //   </View>
      //   <TouchableOpacity
      //     style={{
      //       fontSize:  5,
      //       textAlign: 'left',
      //       textAlignVertical: 'center',
      //       color: 'white',
      //       fontFamily: 'Chewy-Regular',
      //       backgroundColor: '#FF8637dd',
      //       alignContent: 'flex-start',
      //       paddingLeft: 2,
      //       paddingRight:2,
      //       borderTopLeftRadius: 0,
      //       borderBottomRightRadius: 0,
      //     }}>
      //     <Text
      //       style={{
      //         color: 'white',
      //         marginHorizontal: 10,
      //         marginVertical: 5,
      //       }}>
      //       {item.pet.firstName}
      //     </Text>
      //   </TouchableOpacity>
      //   <View style={Styles.ViewContentDescription}>
      //     <Text style={Styles.subtitleStyleCard}> {item.description}</Text>
      //   </View>

      //   <View style={Styles.cardBodyCard}>
      //     <View style={{alignSelf: 'center', flexDirection: 'row'}}>
      //       <View style={Styles.InternBodyCard}>
      //         <TouchableOpacity style={Styles.actionButton1Card}>
      //         </TouchableOpacity>
      //         <TouchableOpacity style={Styles.actionButton1Card}>
      //         </TouchableOpacity>
      //       </View>
      //       <View style={Styles.InternTextCard}>
      //         <Text>{item.state}</Text>
      //       </View>
      //       <View style={Styles.InternTextCard}>
      //       </View>
      //     </View>
      //   </View>
      // </View>
    />
  );
}
