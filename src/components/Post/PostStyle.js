import React from "react";
import { Dimensions, View, Image, TouchableOpacity, Text } from "react-native";
import styled from "styled-components";
import * as AppColors from "../../assets/AppColors";

const rem = Dimensions.get("window").width / 380;

function PostStyle(props) {
  const PostContainer = styled.TouchableOpacity`
    background-color: ${AppColors.White};
    margin: 15px;
    width: ${350 * rem}px;
    height: ${178 * rem}px;
    border-top-left-radius: ${20 * rem}px;
    border-bottom-right-radius: ${20 * rem}px;
    align-self: center;
  `;

  const PostHeaderContainer = styled.View`
    flex-direction: row;
    height: ${50 * rem}px;
    align-self: center;
    justify-content: flex-start;
  `;

  const IconFollow = styled.Image`
    height: ${16 * rem}px;
    width: ${16 * rem}px;
    margin-left: 15px;
    margin-right: 2px;
    align-self: center;
  `;

  const UserImage = styled.Image`
    height: ${37 * rem}px;
    width: ${37 * rem}px;
    border-radius: 20px;
    margin-left: 6px;
    margin-right: 2px;
    align-self: center;
  `;
  const UserName = styled.Text`
    font-family: "Delius";
    font-size: 17px;
  `;

  const UserHash = styled.Text`
    font-family: "Delius";
    font-size: 8px;
  `;

  const PostInternalContainer = styled.View`
    flex-direction: row;
    margin-left: 15px;
    flex: 1;
    justify-content: space-between;
  `;

  const PostImage = styled.Image`
    height: ${116 * rem}px;
    width: ${116 * rem}px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  `;

  const PetName = styled.Text`
    border-top-width: 1px;
    border-color: ${AppColors.GrayLight};
    font-family: "Quicksand-Bold";
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 6px;
    align-self: flex-start;
  `;
  const PostDescription = styled.Text`
    height: ${65 * rem}px;
    width: ${185 * rem}px;
    font-family: "Quicksand";
    font-size: 12px;
    padding-left: 10px;
    margin-bottom: 2px;
  `;
  const IconsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-self: center;
  `;

  return (
    <View>
      <PostContainer>
        <PostHeaderContainer>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <IconFollow
              source={require("../../assets/images/FollowIcon.png")}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <UserImage
                source={props.userImage}
              />
              <View>
                <UserName>{props.firstName}</UserName>
                <UserHash>@{props.username}</UserHash>
              </View>
            </View>
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
                marginHorizontal: 8,
              }}
            >
              <Text style={{ fontFamily: "Quicksand-Bold", fontSize: 18 }}>
                ...{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </PostHeaderContainer>
        <PostInternalContainer>
          <PostImage source={props.source} />
          <View style={{ flex: 1 }}>
            <PetName>{props.petName}</PetName>
            <PostDescription>
              {props.description}
            </PostDescription>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                borderBottomRightRadius: 20,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  textAlign: "center",
                  textAlignVertical: "center",
                  fontFamily: "Quicksand-Bold",
                }}
              >{props.date}
              </Text>
              <View
                style={{
                  heigth: 30,
                  backgroundColor: props.state == 1 ? AppColors.RedBase : AppColors.BlueBase,
                  borderBottomRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 21,
                    textAlign: "center",
                    color: AppColors.White,
                    marginHorizontal: 6,
                  }}
                >
                  {props.state == 1 ? 'perdido' : 'encontrado'}
                </Text>
              </View>
            </View>
          </View>
        </PostInternalContainer>
      </PostContainer>
      <IconsContainer
        style={{
          height: 52,
          borderBottomWidth: 1,
          borderColor: AppColors.TransparentWhite,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ height: 26, width: 26, marginHorizontal: 8 }}
            resizeMethod="scale"
            resizeMode="contain"
            source={require("../../assets/images/StarIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ height: 26, width: 26, marginHorizontal: 8 }}
            resizeMethod="scale"
            resizeMode="contain"
            source={require("../../assets/images/CommentIcon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{ height: 26, width: 26, marginHorizontal: 8 }}
            resizeMethod="scale"
            resizeMode="contain"
            source={require("../../assets/images/ShareIcon.png")}
          />
        </TouchableOpacity>
      </IconsContainer>
    </View>
  );
}
export default PostStyle;
