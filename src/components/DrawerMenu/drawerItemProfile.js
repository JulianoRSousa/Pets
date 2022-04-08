import React, { useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { rem } from "../components";
import { GrayDark, RedBase, White } from "../../assets/AppColors";
import FastImage from "react-native-fast-image";

const DrawerItemProfile = (props) => {
  const [postcount, setPostCount] = useState(props.user.postList?.length)
  return props.user.pictureUrl ? (
    <View
      style={{
        height: 280 * rem,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: GrayDark,
          padding: 2 * rem,
          borderRadius: 85 * rem,
          marginTop: 9 * rem,
        }}
      >
        {props.user.pictureUrl ? (
          <FastImage
            style={{
              height: 140 * rem,
              width: 140 * rem,
              borderRadius: 85 * rem,
            }}
            source={{ uri: props.user.pictureUrl }}
          />
        ) : (
          <></>
        )}
      </View>

      <Text
        style={{
          fontFamily: "Delius",
          fontSize: 20 * rem,
          height: 40 * rem,
          textAlignVertical: "center",
          color: GrayDark,
        }}
      >
        {props.user.fullname ?? ""}
      </Text>
      <Text
        style={{ color: GrayDark, fontFamily: "Delius", fontSize: 10 * rem }}
      >
        @{props.user.username || ""}
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
              color: GrayDark,
              textAlignVertical: "center",
            }}
          >
            {props.user.postList.length || "0"}
          </Text>
          {props.user.postList.length != 1 ? (
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 10 * rem,
                height: 21 * rem,
                color: GrayDark,
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
                color: GrayDark,
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
              color: GrayDark,
              textAlignVertical: "center",
            }}
          >
            {props.user?.followerCount || "0"}
          </Text>
          {props.user?.followerCount != 1 ? (
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 10 * rem,
                height: 21 * rem,
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
              color: GrayDark,
              textAlignVertical: "center",
            }}
          >
            {props.user.petList.length || "0"}
          </Text>
          {props.user.petList.length != 1 ? (
            <Text
              style={{
                fontFamily: "Delius",
                fontSize: 10 * rem,
                height: 21 * rem,
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
              }}
            >
              Pet
            </Text>
          )}
        </View>
      </View>
    </View>
  ) : (
    <></>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading,
    firstAccess: state.userReducer.firstAccess,
    auth: state.userReducer.auth,
    sessionToken: state.userReducer.sessionToken,
    user: {
      _id: state.userReducer.user._id,
      email: state.userReducer.user.email,
      username: state.userReducer.user.username,
      fullname: state.userReducer.user.fullname,
      birthdate: state.userReducer.user.birthdate,
      picture: state.userReducer.user.picture,
      pictureUrl: state.userReducer.user.pictureUrl,
      postList: state.userReducer.user.postList,
      petList: state.userReducer.user.petList,
      location: {
        latitude: state.userReducer.user.location.latitude,
        longitude: state.userReducer.user.location.longitude,
        cityCode: state.userReducer.user.location.cityCode
      }
    }
  }
}



export default connect(mapStateToProps, null)(DrawerItemProfile)


