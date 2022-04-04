import React from "react";
import { View } from "react-native";
import { OrangeBase } from "../../assets/AppColors";
import PostItem from "../../components/Post/PostItem";
import moment from "moment";
import "moment/locale/pt-br";
import { ButtonOrange } from "../../components/components";
import { connect } from "react-redux";
import { useAuth } from '../../hooks/useAuth'

function Preview(props) {
  const date = moment(Date.UTC()).format("DD MMMM YYYY");
  const { createPost } = useAuth();
  const Postar = async () => {
    const resultPost = await createPost(props.createPostInfo.petId,
      props.createPostInfo.pictureUrl,
      props.createPostInfo.petStatus,
      props.createPostInfo.description,
      props.sessionToken)
    console.log('ResultPost: ', resultPost)
  }

  return (
    <View
      style={{
        backgroundColor: OrangeBase,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PostItem
        myPost={true}
        userImage={{ uri: props.user.pictureUrl }}
        postImage={{
          uri: props.createPostInfo.pictureUrl,
        }}
        fullname={props.user.fullname}
        username={props.user.username}
        petName={props.createPostInfo.petFullname}
        description={props.createPostInfo.description}
        state={props.createPostInfo.petState}
        date={date}
      />
      <View style={{ padding: 5 }}>
        <ButtonOrange
          text={"Publicar"}
          onPress={() =>
            Postar(
              props.createPostInfo.petId,
              props.createPostInfo.pictureUrl,
              props.createPostInfo.petStatus,
              props.createPostInfo.description,
              props.sessionToken
            )
          }
        />
      </View>
    </View>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    createPostInfo: state.userReducer.createPostInfo,
    sessionToken: state.userReducer.sessionToken
  }
}
export default connect(mapStateToProps, null)(Preview)
