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
  return createAuthPromise;
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
    console.log(String(error));
  }
  return;
}
