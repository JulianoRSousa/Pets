import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import * as AppColors from "../../assets/AppColors";

function PostStyle(props) {
  const userImage = props.userImage;
  const fullName = props.fullName;
  const postImage = props.postImage
    ? props.postImage
    : require("../../assets/images/googleIcon.png");
  const petName = props.petName ? props.petName : "Sem nome";

  return (
    <View>
      <View
        style={{
          backgroundColor: AppColors.White,
          margin: 15,
          width: 350,
          height: 178,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 50,
            alignSelf: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity
              style={{ marginLeft: 15, marginRight: 2, alignSelf: "center" }}
            >
              <Image
                style={{
                  height: 16,
                  width: 16,
                }}
                source={require("../../assets/images/FollowIcon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Image
                style={{
                  height: 37,
                  width: 37,
                  borderRadius: 20,
                  marginLeft: 6,
                  marginRight: 2,
                  alignSelf: "center",
                }}
                source={userImage}
              />
              <View>
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 17,
                  }}
                >
                  {fullName}
                </Text>
                <Text
                  style={{
                    fontFamily: "Delius",
                    fontSize: 8,
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
                marginHorizontal: 8,
              }}
            >
              <Text style={{ fontFamily: "Quicksand-Bold", fontSize: 18 }}>
                ...{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
        onLongPress={()=>console.log('longpress')}
          style={{
            flexDirection: "row",
            marginLeft: 15,
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{
              height: 116,
              width: 116,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            source={postImage}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                borderTopWidth: 1,
                borderColor: AppColors.GrayLight,
                fontFamily: "Quicksand-Bold",
                fontSize: 20,
                paddingLeft: 10,
                marginBottom: 6,
                alignSelf: "flex-start",
              }}
            >
              {petName}
            </Text>
            <Text
              style={{
                height: 65,
                width: 185,
                fontFamily: "Quicksand",
                fontSize: 12,
                paddingLeft: 10,
                marginBottom: 2,
              }}
            >
              {props.description}
            </Text>
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
              >
                {props.date}
              </Text>
              <View
                style={{
                  heigth: 30,
                  backgroundColor:
                    props.state == 1 ? AppColors.RedBase : AppColors.BlueBase,
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
          height: 52,
          borderBottomWidth: 1,
          borderColor: AppColors.White,
          alignSelf: "center",
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
      </View>
    </View>
  );
}
export default PostStyle;
