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
        console.log("Res: ", Res.data);
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
  const userSTORAGED = JSON.parse(await AsyncStorage.getItem("@rn:user"));
  console.log("Storaged User: ", userSTORAGED);
  console.log("responsePromise: ", createAuthPromise._W);
  return createAuthPromise;
}
export async function loadUser(token) {
  const ApiUser = await api.post(
    "/loadUser",
    {},
    {
      headers: {
        token,
      },
    }
  );
  console.log("ApiUser: ", ApiUser);
  return ApiUser;
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
      .then(() => {
        AsyncStorage.clear();
      });
  } catch (error) {
    console.error(error);
  }
  return;
}
