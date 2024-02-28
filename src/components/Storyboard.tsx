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

const StoryBoard: React.FC = () => {
  return (
    <>
      <h1>Link Reach</h1>
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
