import React from "react";
import { View, Text } from "react-native";
import { rem } from "../components";
import { GrayDark, RedBase, White } from "../../assets/AppColors";
import FastImage from "react-native-fast-image";
import { useAuth } from "../../hooks/useAuth";

function DrawerItemProfile() {
  const { user } = useAuth();
  return user ? (
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
        {user ? (
          <FastImage
            style={{
              height: 140 * rem,
              width: 140 * rem,
              borderRadius: 85 * rem,
            }}
            source={{ uri: user.profilePictureUrl }}
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
        {user.firstname + " " + user.lastname || ""}
      </Text>
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
              color: GrayDark,
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
            {user.followerCount || "0"}
          </Text>
          {user.followerCount != 1 ? (
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
            {user.petCount || "0"}
          </Text>
          {user.petCount != 1 ? (
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

export default DrawerItemProfile;
