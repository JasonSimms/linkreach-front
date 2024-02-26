import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { CampaignTable } from "./components/CampaignTable";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <h1>Link Reach</h1>
        <h2>Campaign Table</h2>
        <CampaignTable />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
