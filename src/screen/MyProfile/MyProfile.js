import React from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FastImage from "react-native-fast-image";
import { rem } from "../../components/components";
import { GrayDark, OrangeBase, White } from "../../assets/AppColors";
import { useAuth } from "../../hooks/Auth";
import EditIcon from "../../assets/images/EditIcon.svg";
import { useNavigation } from "@react-navigation/core";
import MyPost from "../../components/Post/MyPost";
import Post from "../../components/Post/PostItem";

function MyProfile() {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "red" }}>
      <View
        style={{
          backgroundColor: "green",
          height: 280 * rem,
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginTop: 9 * rem,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <FastImage
            style={{
              height: 140 * rem,
              width: 140 * rem,
              borderRadius: 85 * rem,
              borderWidth: 2 * rem,
              borderColor: White,
            }}
            source={require("../../assets/images/Juliano.jpeg")}
          />
          <TouchableOpacity
            style={{
              width: 40 * rem,
              height: 40 * rem,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: 10 * rem,
              right: 5 * rem,
            }}
          >
            <EditIcon height={20} width={20} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "Delius",
              fontSize: 20 * rem,
              height: 40 * rem,
              textAlignVertical: "center",
              color: White,
              marginLeft: 40 * rem,
            }}
          >
            {user.firstname + " " + user.lastname || ""}
          </Text>
          <TouchableOpacity
            style={{
              width: 40 * rem,
              height: 40 * rem,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditIcon height={20} width={20} />
          </TouchableOpacity>
        </View>
        <Text
          style={{ color: GrayDark, fontFamily: "Delius", fontSize: 10 * rem }}
        >
          @{user.username || ""}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              height: 62 * rem,
              width: 75 * rem,
              marginVertical: 10 * rem,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 16 * rem,
                flex: 1,
                color: White,
                textAlignVertical: "center",
              }}
            >
              {user.postCount || "0"}
            </Text>
            {user.postCount != 1 ? (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Publicações
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Publicação
              </Text>
            )}
          </View>
          <View
            style={{
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: White,
              height: 62 * rem,
              width: 75 * rem,
              marginVertical: 10 * rem,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 16 * rem,
                flex: 1,
                color: White,
                textAlignVertical: "center",
              }}
            >
              {user.followerCount || "0"}
            </Text>
            {user.followerCount != 1 ? (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Seguidores
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Seguidor
              </Text>
            )}
          </View>
          <View
            style={{
              height: 62 * rem,
              width: 75 * rem,
              marginVertical: 10 * rem,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 16 * rem,
                flex: 1,
                color: White,
                textAlignVertical: "center",
              }}
            >
              {user.petCount || "0"}
            </Text>
            {user.petCount != 1 ? (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Pets
              </Text>
            ) : (
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 10 * rem,
                  height: 21 * rem,
                  color: White,
                }}
              >
                Pet
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "blue", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Delius",
            fontSize: 16 * rem,
            color: White,
            borderTopWidth: 1,
            borderColor: White,
            paddingTop: 5 * rem,
            paddingHorizontal: 10 * rem,
            marginBottom: 15 * rem,
          }}
        >
          Pets
        </Text>
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: White,
              borderRadius: 20 * rem,
              height: 40 * rem,
              width: 128 * rem,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => console.log(user)}
          >
            <Text
              style={{ fontFamily: "Delius", fontSize: 15 * rem, color: White }}
            >
              + Adicionar Pet
            </Text>
          </TouchableOpacity>
        </View>
        {user.postCount == 0 ? (
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 16 * rem,
                color: White,
                borderTopWidth: 1,
                borderColor: White,
                paddingTop: 5 * rem,
                paddingHorizontal: 10 * rem,
                marginVertical: 15 * rem,
              }}
            >
              Nenhum Post
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: White,
                borderRadius: 20 * rem,
                height: 40 * rem,
                width: 110 * rem,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Novo")}
            >
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 15 * rem,
                  color: White,
                }}
              >
                + Novo Post
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 16 * rem,
                color: White,
                borderTopWidth: 1,
                borderColor: White,
                paddingTop: 5 * rem,
                paddingHorizontal: 10 * rem,
                marginVertical: 15 * rem,
              }}
            >
              Meus Posts
            </Text>
            {user.postList.map((item) => {
              return (
                <Post
                  myPost={true}
                  fullName={user.firstname}
                  username={user.username}
                  userImage={{ uri: user.profilePictureUrl }}
                  postImage={{ uri: item.picture_url }}
                  petName={item.firstName + " "+ item.lastName}
                  description={item.description}
                  date={item.postDate}
                  state={item.state}
                  starStatus={false}
                />
              );
            })}

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: White,
                borderRadius: 20 * rem,
                height: 40 * rem,
                width: 110 * rem,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Delius",
                  fontSize: 15 * rem,
                  color: White,
                }}
              >
                + Novo Post
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
export default MyProfile;
