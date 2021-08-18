import AsyncStorage from "@react-native-community/async-storage";
import api from "./api";

export async function loadApiData(token) {
  let createDataPromise;
  await api
    .get(
      "/getData",
      {},
      {
        headers: {
          token,
        },
      }
    )
    .then(async (Res) => {
      console.log("Async Res: ", Res);
      createDataPromise = new Promise((resolve) => {
        resolve({
          token: token,
          auth: Res.data.auth,
          dataVersion: Res.data.dataVersion,
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
            followerList: Res.data.user.followerList,
            postList: Res.data.user.postList,
            petList: Res.data.user.petList,
          },
        });
      });
    });
  const asyncResponse = JSON.parse(await Asyncstorage.getItem("@rn:data"));
  console.log("responsePromise: ", createAuthPromise);
  console.log("AsyncResponse: ", asyncResponse);
  return createAuthPromise;
}

export async function updateDataVersion() {
  console.log("UPDATE DATA VERSION *-* *-* *-*");
}

export async function saveGeneralData() {
  const data = JSON.stringify({ auth: true, token: false });
  await AsyncStorage.setItem("@rn:data", data);
  return;
}
