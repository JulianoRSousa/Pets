import React from "react";
import { useAuth } from "../hooks/Auth";
import api from "./api";

const createPostService = async (petId, file, state, description) => {
  const { token } = useAuth();

  const img = {
    uri: "file://" + file.path,
    type: file.type,
    name: file.fileName || file.path.substr(file.path.lastIndexOf("/") + 1),
  };
  const data = new FormData();

  data.append("picture", img);
  data.append("state", state);
  data.append("description", description);

  await api
    .post("/createPost", data, {
      headers: {
        pet_id: petId,
        token: token,
      },
    })
    .then(async (Res) => {
      console.log("Async Res: ", Res);
      // createPostPromise = new Promise((resolve) => {
      //   resolve({
      //     token: token,
      //     auth: Res.data.auth,
      //     dataVersion: Res.data.dataVersion,
      //     userConfig: Res.data.userConfig,
      //     notification: Res.data.notification,
      //     user: {
      //       id: Res.data.user._id,
      //       email: Res.data.user.email,
      //       username: Res.data.user.username,
      //       firstname: Res.data.user.firstName,
      //       lastname: Res.data.user.lastName,
      //       birthdate: Res.data.user.birthDate,
      //       profilePictureUrl: Res.data.user.picture_url,
      //       followerList: Res.data.user.followerList,
      //       postList: Res.data.user.postList,
      //       petList: Res.data.user.petList,
      //     },
      //   });
      // });
      return Res;
    });
};

export default createPostService();
