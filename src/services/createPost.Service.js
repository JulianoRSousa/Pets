import React from "react";
import api from "./api";

export const CreatePost = async (petId, file, state, description, token) => {
  console.log('inicio')
  console.log('file: ',file)

  // const img = {
  //   uri: "file://" + file.path,
  //   type: file.type,
  //   name: file.fileName || file.path.substr(file.path.lastIndexOf("/") + 1),
  // };

  const data = new FormData();

  data.append("picture", file);
  data.append("state", state);
  data.append("description", description);
  console.log('Meio')

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
  console.log('Fim')

}
