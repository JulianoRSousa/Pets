import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { White, RedBase, BlueBase } from "../../assets/AppColors";
import FastImage from "react-native-fast-image";
import MoreOptionsIcons from "../../assets/images/MoreOptionsIcons.svg";
import { rem } from "../components";

function PetItem(props) {
  const petImage = props.petImage;
  const petName = props.petName ? props.petName : "Sem nome";
  const opacityON = props.opacity == false ? 1 : 0.7;

  return (
    <View
      style={{ marginVertical: 10 * rem, width: 340 * rem, height: 140 * rem }}
    >
      <FastImage
        source={petImage}
        style={{
          width: 340 * rem,
          height: 140 * rem,
          opacity: opacityON,
          borderRadius: 23 * rem,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: White,
            fontFamily: "Delius",
            fontSize: 16 * rem,
            alignSelf: "flex-start",
            marginHorizontal: 10 * rem,
            marginVertical: 5 * rem,
          }}
        >
          {petName}
        </Text>
        <TouchableOpacity
          style={{
            marginHorizontal: 5 * rem,
            height: 40 * rem,
            width: 40 * rem,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MoreOptionsIcons height={5} width={16} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          width: 300 * rem,
          height: 75 * rem,
          color: White,
          fontFamily: "Delius",
          fontSize: 13 * rem,
          marginHorizontal: 10 * rem,
        }}
      >
        Gordo, branco e encardido. Adora comer e dormir
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignContent: "flex-end",
          paddingHorizontal: 10 * rem,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: White,
            fontFamily: "Delius",
            fontSize: 14 * rem,
            marginHorizontal: 10 * rem,
          }}
        >
          {props.petAge}
        </Text>
        <Text
          style={{
            color: White,
            fontFamily: "Delius",
            fontSize: 14 * rem,
            marginHorizontal: 10 * rem,
          }}
        >
          {props.petSex}
        </Text>
        <Text
          style={{
            color: White,
            fontFamily: "Delius",
            fontSize: 14 * rem,
            marginHorizontal: 10 * rem,
          }}
        >
          {props.petType}
        </Text>
      </View>
      <View style={{}}></View>
    </View>
  );
}
export default PetItem;
