import * as React from "react";
import "../App.css";
import {
  CampaignTable,
  CreateCampaignForm,
  LinkInputForm,
  CampaignCard,
  BasicModal,
} from ".";
import SimpleSnackbar from "./SnackBar";

const StoryBoard: React.FC = () => {
  return (
    <>
      <h1>Link Reach</h1>
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

export default StoryBoard
