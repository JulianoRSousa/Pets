import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { rem } from "../components";
import { GrayDark, RedBase, White } from "../../assets/AppColors";
import FastImage from "react-native-fast-image";

const DrawerItemProfile = (props) => {
  return props.userPictureUrl ? (
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
        {props.userPictureUrl ? (
          <FastImage
            style={{
              height: 140 * rem,
              width: 140 * rem,
              borderRadius: 85 * rem,
            }}
            source={{ uri: props.userPictureUrl }}
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
        {props.userFullname ?? ""}
      </Text>
      <Text
        style={{ color: GrayDark, fontFamily: "Delius", fontSize: 10 * rem }}
      >
        @{props.userUsername || ""}
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
            {props.user?.postCount || "0"}
          </Text>
          {props.user?.postCount != 1 ? (
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
            {props.user?.petCount || "0"}
          </Text>
          {props.user?.petCount != 1 ? (
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
    user: '',
    sessionToken: state.userReducer.sessionToken,
    userId: state.userReducer.userId,
    userEmail: state.userReducer.userEmail,
    userUsername: state.userReducer.userUsername,
    userFullname: state.userReducer.userFullname,
    userBirthdate: state.userReducer.userBirthdate,
    userProfilePicture: state.userReducer.userProfilePicture,
    userPictureUrl: state.userReducer.userPictureUrl,
    userLocation: {
      latitude: state.userReducer.userLocation.latitude,
      longitude: state.userReducer.userLocation.longitude
    }
  }

}



export default connect(mapStateToProps, null)(DrawerItemProfile)


