import api from "./api";

// interface Response {
//   token: string;
//   auth: boolean;
//   user?: {
//     id?: string;
//     email?: string;
//     username?: string;
//     firstname?: string;
//     lastname?: string;
//     birthdate?: string;
//     profilePictureUrl?: string;
//     followersCount?: number;
//     postsCount?: number;
//     petsCount?: number;
//   };
// }

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
            birthdate: Res.data.user.birthdate,
            profilePictureUrl: Res.data.user.picture_url,
            followersCount: Res.data.user.followerList.length,
            postsCount: Res.data.user.postList.length,
            petsCount: Res.data.user.petList.length,
          },
        });
      });
    });
  return createAuthPromise;
}
