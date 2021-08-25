import api from "./api";
import AsyncStorage from "@react-native-community/async-storage";

export async function signIn(email, pass) {
  let createAuthPromise;
  await api
    .post(
      "/createauth",
      {},
      {
        headers: {
          email: email,
          pass: pass,
        },
      }
    )
    .then(async (Res) => {
      createAuthPromise = new Promise((resolve) => {
        resolve({
          token: Res.data._id,
          auth: Res.data.auth,
          __v: Res.data.__v,
          userConfig: Res.data.userConfig,
          notification: Res.data.notification,
          user: {
            id: Res.data.user._id,
            email: Res.data.user.email,
            username: Res.data.user.username,
            firstname: Res.data.user.firstName,
            lastname: Res.data.user.lastName,
            birthdate: Res.data.user.birthDate,
            profilePictureUrl: Res.data.user.picture_url,
            dataVersion: Res.data.user.dataVersion,
            notification: Res.data.user.notification,
            followerList: Res.data.user.followerList,
            postList: Res.data.user.postList,
            petList: Res.data.user.petList,
            location: Res.data.user.location,
            foneNumber: Res.data.user.foneNumber,
            latitude: Res.data.user.latitude,
            longitude: Res.data.user.longitude,
          },
        });
      });
    });
  return createAuthPromise;
}

export async function loadUser(token) {
  let createUserPromise;
  await api
    .get("/loaduser", {
      headers: {
        token: token,
      },
    })
    .then(async (Res) => {
      createUserPromise = new Promise((resolve) => {
        resolve({
          token: Res.data._id,
          auth: Res.data.auth,
          __v: Res.data.__v,
          userConfig: Res.data.userConfig,
          notification: Res.data.notification,
          user: {
            id: Res.data.user._id,
            email: Res.data.user.email,
            username: Res.data.user.username,
            firstname: Res.data.user.firstName,
            lastname: Res.data.user.lastName,
            birthdate: Res.data.user.birthDate,
            profilePictureUrl: Res.data.user.picture_url,
            dataVersion: Res.data.user.dataVersion,
            notification: Res.data.user.notification,
            followerList: Res.data.user.followerList,
            postList: Res.data.user.postList,
            petList: Res.data.user.petList,
            location: Res.data.user.location,
            foneNumber: Res.data.user.foneNumber,
            latitude: Res.data.user.latitude,
            longitude: Res.data.user.longitude,
          },
        });
      });
    });
  return createUserPromise;
}

export async function signOut() {
  try {
    const token = await AsyncStorage.getItem("@rn:token");
    await api
      .delete("/deleteauth", {
        headers: {
          token,
        },
      })
      .then(() => {})
      .finally(AsyncStorage.clear());
  } catch (error) {
    console.error(error);
  }

  return;
}
