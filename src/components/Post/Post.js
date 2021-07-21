import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
  ActivityIndicator,
} from "react-native";
import api from "../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import Styles from "./Styles";
import PostStyle from "./PostStyle";

export default function PostView({ navigation }) {
  //const [postlists, setPostlists] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState([]);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [onTop, setOnTop] = useState(true);

  const ref_flatlist = useRef();
  useEffect(() => {
    getUser().then(loadPage());
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
      response.headers.pages && setLastPage(response.headers.pages);
      const data = response.data;
      setFeed(shouldRefresh ? data : [...feed, ...data]);
      setPage(pageNumber + 1);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  function goTop() {
    getUser().then(
      getData().then(
        ref_flatlist.current.scrollToIndex({
          animated: true,
          viewPosition: 1,
          index: 0,
        })
      )
    );
  }
  function menuOptions() {
    return (
      <View>
        <Modal visible={true} transparent={false} animationType={"none"} />
      </View>
    );
  }
  async function getData() {
    await api
      .get("/getFeed", {
        headers: {
          token: await AsyncStorage.getItem("token"),
        },
      })
      .then((response) => setPostlists(response.data.reverse()));
  }

  function separator() {
    return <View style={{ height: wp("2%"), backgroundColor: "#fff6" }} />;
  }
  function loadPets() {
    if (userInfo.petsCount == 0) {
      return "Nenhum Pet";
    } else if (userInfo.petsCount == 1) {
      return "1 Pet";
    } else {
      return userInfo.petsCount + " Pets";
    }
  }
  function loadPosts() {
    if (userInfo.postsCount == 0) {
      return "Nenhum Post";
    } else if (userInfo.postsCount == 1) {
      return "1 Post";
    } else {
      return userInfo.postsCount + " Posts";
    }
  }

  function follow(user) {
    return;
  }
  //   POST POST POST POST POST POST POST POST POST POST POST POST POST

  function showLoad() {
    return (
      <>
        <ActivityIndicator size={"large"} color={"#999"} />
      </>
    );
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage(0, true).then(getUser());
    setRefreshing(false);
  }

  async function getUser() {
    await api
      .get("/loadUser", {
        headers: {
          token: await AsyncStorage.getItem("token"),
        },
      })
      .then((response) => setUserInfo(response.data));
  }

  function ShowUserProfile() {
    return (
      <View style={{ flexDirection: "row", backgroundColor: "#ff8636" }}>
        <TouchableOpacity onPress={() => menuOptions()}>
          <StatusBar backgroundColor={"#ff8636"} />

          <View style={Styles.topLayout}>
            <View style={Styles.view1} />
            <View style={Styles.userInfo}>
              <Image
                style={Styles.userPicture}
                source={{
                  uri: userInfo.picture_url,
                }}
              />
              <View>
                <Text style={Styles.userNameText}>{userInfo.firstName}</Text>
                <TouchableOpacity>
                  <Text style={Styles.userInfoText}>{loadPosts()}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={Styles.userInfoText}>{loadPets()}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.view1} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      key="list"
      data={feed}
      // ListHeaderComponent={ShowUserProfile()}
      ref={ref_flatlist}
      keyExtractor={(item) => String(item._id)}
      onEndReached={() => loadPage()}
      navigation={navigation}
      onRefresh={refreshList}
      refreshing={refreshing}
      vertical
      ListFooterComponent={loading && showLoad()}
      renderItem={({ item }) => (
        <PostStyle
          firstName={item.user.firstName}
          lastName={item.user.lastName}
          username={item.user.username}
          source={{ uri: item.picture_url }}
          petName={item.pet.firstName}
          description={item.description}
          userImage={{ uri: item.user.picture_url }}
          date={item.postDate}
          state={item.state}
        />

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
      )}
    />
  );
}
