import { getAuth } from "firebase/auth";

const BACKEND_URL = "http://127.0.0.1:5000/";

export async function createUser(): Promise<boolean | Error> {
  try {
    let token = "";
    const auth = getAuth();
    const user = auth.currentUser;
    // console.log("user", user?.uid);
    const info = user?.providerData[0];
    console.log("createUserinfo", info);

    if (user) {
      user
        .getIdToken(/* forceRefresh */ true)
        .then(function (idToken: string) {
          token = idToken;
        })
        .catch(function (error: any) {
          console.error(error);
        });
    }

    const res = await fetch(BACKEND_URL + "/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    console.log("User created successfully!");
    console.log("res", res);

    return res;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
