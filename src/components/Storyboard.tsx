import * as React from "react";
import "../App.css";
import {
  CampaignTable,
  CreateCampaignForm,
  LinkInputForm,
  CampaignCard,
  BasicModal,
  LinkCard,
  LinkInputDialog,
} from ".";
import SimpleSnackbar from "./SnackBar";

import { mockLinks } from "../context/MockData";
import { useUIContext } from "../context/UIContext";
import { getAuth } from "firebase/auth";
//SETUP UI SETTINGS CONTEXT AND CONSUME  TODO move this to user settings
const ToggleDarkMode = () => {
  const { dark, toggleDark } = useUIContext();
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark ? toggleDark() : null;
  };
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};

//TEST Backend functions and pass authtoken.
const BackendFoo = (route: string, method: string) => {
  const [message, setMessage] = React.useState("");

  let token = "";
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("user", user?.uid);
  const info = user?.providerData[0];
  console.log("info", info);

  if (user) {
    user
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken: string) {
        token = idToken;
      })
      .catch(function (error: any) {
        console.error(error);
        setMessage("Error getting token");
      });
  }

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // const target = "http://127.0.0.1:5001/link-reach/us-central1/test2";
    const target = "http://127.0.0.1:5000/" + route;
    fetch(target, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
      body:
        method === "get"
          ? undefined
          : JSON.stringify({ token: "test", name: "testName", url: "testUrl" }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error;
        console.log("what res?", res);
        setMessage(JSON.stringify(res));
      })
      .catch((err) => {
        console.error("yikes");
        console.error(err);
        console.log("?");
        // setMessage(err.json().message);
      });
    // .then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={handleOnClick}>Backend Foo</button>
      <p>Message from backend?: {message}</p>
    </div>
  );
};

const StoryBoard: React.FC = () => {
  return (
    <>
      <h1>Link Reach</h1>
      <h2>My Bitly Backend Foo</h2>
      {BackendFoo("/userlink", "post")}
      {BackendFoo("/userlink", "get")}

      <h2>UI CONTEXT SETUP</h2>
      <ToggleDarkMode />
      <h2>Link Input Modal</h2>
      <LinkInputDialog addUserLink={() => console.log("?")} />
      <h2> Link Card</h2>
      <LinkCard
        userLink={mockLinks[0]}
        deleteUserLink={() => console.log("?")}
      />
      <h2>SnackBar</h2>
      <SimpleSnackbar />
      <h2>ALL PURPOSE MODAL</h2>
      <BasicModal />
      <h2>Campaign Card</h2>
      <CampaignCard />
      <h2>Create Campaign</h2>
      <CreateCampaignForm />
      <h2>LINK INPUT</h2>
      <LinkInputForm />
      <h2>Campaign Table</h2>
      <CampaignTable />
    </>
  );
};

export default StoryBoard;
