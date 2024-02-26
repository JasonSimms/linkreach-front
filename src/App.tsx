import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import DashboardTable from "./components/CampaignTable/DashBoardTable";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <h1>Link Reach</h1>
        <DashboardTable />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
