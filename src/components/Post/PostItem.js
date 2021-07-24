import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { White, GrayLight, RedBase, BlueBase } from "../../assets/AppColors";
import FastImage from "react-native-fast-image";
import StarIcon from "../../assets/images/StarIcon.svg";
import StarIconClicked from "../../assets/images/StarIconClicked.svg";
import CommentIcon from "../../assets/images/CommentIcon.svg";
import ShareIcon from "../../assets/images/ShareIcon.svg";
import FollowIcon from "../../assets/images/FollowIcon.svg";
import { rem } from "../components";

function Post(props) {
  const myPost = props.myPost == false ? true : false;
  const userImage = props.userImage;
  const fullName = props.fullName;
  const postImage = props.postImage
    ? props.postImage
    : require("../../assets/images/googleIcon.png");
  const petName = props.petName ? props.petName : "Sem nome";
  const [starState, setStarState] = useState(props.starStatus || false);

  return (
    <View>
      <View
        style={{
          backgroundColor: White,
          margin: 15 * rem,
          width: 350 * rem,
          height: 178 * rem,
          borderTopLeftRadius: 20 * rem,
          borderBottomRightRadius: 20 * rem,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 50 * rem,
            alignSelf: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            {myPost ? (
              <TouchableOpacity
                style={{
                  marginLeft: 15 * rem,
                  marginRight: 2 * rem,
                  alignSelf: "center",
                }}
              >
                <FollowIcon
                  height={16*rem}
                  width={16*rem}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Image
                style={{
                  height: 37 * rem,
                  width: 37 * rem,
                  borderRadius: 20 * rem,
                  marginLeft: 6 * rem,
                  marginRight: 2 * rem,
                  alignSelf: "center",
                }}
                source={userImage}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                  }}
                >
                  {fullName}
                </Text>
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 8 * rem,
                  }}
                >
                  @{props.username}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "flex-start",
                flex: 1,
                marginHorizontal: 8 * rem,
              }}
            >
              <Text
                style={{ fontFamily: "Quicksand-Bold", fontSize: 18 * rem }}
              >
                ...{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onLongPress={() => console.log("longpress")}
          style={{
            flexDirection: "row",
            marginLeft: 15 * rem,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <FastImage
            style={{
              width: 116 * rem,
              height: 116 * rem,
              borderTopLeftRadius: 20 * rem,
              borderBottomRightRadius: 20 * rem,
              backgroundColor: "red",
            }}
            source={postImage}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                borderTopWidth: 1,
                borderColor: GrayLight,
                fontFamily: "Quicksand-Bold",
                fontSize: 20 * rem,
                paddingLeft: 10 * rem,
                marginBottom: 6 * rem,
                alignSelf: "flex-start",
              }}
            >
              {petName}
            </Text>
            <Text
              style={{
                height: 65 * rem,
                width: 185 * rem,
                fontFamily: "Quicksand",
                fontSize: 12 * rem,
                paddingLeft: 10 * rem,
                marginBottom: 2 * rem,
              }}
            >
              {props.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                borderBottomRightRadius: 20 * rem,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 12 * rem,
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontFamily: "Quicksand-Bold",
                }}
              >
                {props.date}
              </Text>
              <View
                style={{
                  heigth: 30 * rem,
                  backgroundColor: props.state == 1 ? RedBase : BlueBase,
                  borderBottomRightRadius: 20 * rem,
                  borderTopLeftRadius: 20 * rem,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 21 * rem,
                    textAlign: "center",
                    color: White,
                    marginHorizontal: 6 * rem,
                  }}
                >
                  {props.state == 1 ? "perdido" : "encontrado"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 52 * rem,
          width: 136 * rem,
          borderBottomWidth: 1,
          borderColor: White,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => setStarState(!starState)}
        >
          {starState ? (
            <StarIconClicked height={26 * rem} width={26 * rem} />
          ) : (
            <StarIcon height={26 * rem} width={26 * rem} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <CommentIcon height={26 * rem} width={26 * rem} />
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1 }}>
          <ShareIcon height={26 * rem} width={26 * rem} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Post;
