import { getAuth } from "firebase/auth";

const BACKEND_URL = "http://127.0.0.1:5000/";

export async function createUser(): Promise<string | Error> {
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
        .catch(function (error: Error) {
          console.error(error);
        });
    }

    const res = await fetch(BACKEND_URL + "/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
        "User-Id": user?.uid || "",
      },
    });

    return JSON.stringify(res);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function createUserLink(
  nickname: string,
  url: string
): Promise<string | Error | any> {
  if (!nickname || !url) throw new Error("Invalid input");
  try {
    let token = "";
    const auth = getAuth();
    const user = auth.currentUser;
    const user_id = user?.uid;
    if (user) {
      user
        .getIdToken(/* forceRefresh */ true)
        .then(function (idToken: string) {
          token = idToken;
        })
        .catch(function (error: Error) {
          console.error(error);
          throw error;
        });
    }

    let res = await fetch(BACKEND_URL + "/userlink", {
      method: "POST",
      body: JSON.stringify({
        creator: user_id,
        url: url,
        nickname: nickname,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
        "User-Id": user_id || "",
      },
    });
    if (!res.ok) throw new Error("Error creating user link");
    res = await res.json();
    return JSON.stringify(res);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function getUserLinksFromDB(): Promise<string | Error> {
  try {
    let token = "";
    const auth = getAuth();
    const user = auth.currentUser;
    const user_id = user?.uid;
    console.log("user_id", user_id);
    if (user) {
      user
        .getIdToken(/* forceRefresh */ true)
        .then(function (idToken: string) {
          token = idToken;
        })
        .catch(function (error: Error) {
          console.error(error);
          throw error;
        });
    }

    let res = await fetch(BACKEND_URL + "/userlink", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
        "User-Id": user_id || "",
      },
    });
    if (!res.ok) throw new Error("Error Reading user link");
    res = await res.json();
    return JSON.stringify(res);
    // return id; // return the id of the deleted link
  } catch (error) {
    console.error("Error Reading:", error);
    throw error;
  }
}

export async function deleteUserLinkFromDB(
  id: string
): Promise<string | Error> {
  if (!id) throw new Error("Invalid input");
  try {
    let token = "";
    const auth = getAuth();
    const user = auth.currentUser;
    const user_id = user?.uid;
    if (user) {
      user
        .getIdToken(/* forceRefresh */ true)
        .then(function (idToken: string) {
          token = idToken;
        })
        .catch(function (error: Error) {
          console.error(error);
          throw error;
        });
    }

    const res = await fetch(BACKEND_URL + "/userlink", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
        "User-Id": user_id || "",
      },
    });
    console.log("res", res.ok);
    if (!res.ok) throw new Error("Error Deleting user link" + id);
    return id; // return the id of the deleted link
  } catch (error) {
    console.error("Error deleteUserLinkFromDB:", error);
    throw error;
  }
}
