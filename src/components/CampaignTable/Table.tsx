import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AvatarGroup } from "@mui/material";
import LinkAvatar from "./LinkAvatar";

//Data Mocking  TODO INSERT CONTEXT HERE
function createData(
  campaignName: string,
  sent: string[], //TODO each link should be an object with more info including click history.
  visitors: number, //derived from sent click history
  explored: number, //derived from sent click history
  lastClick: string //derived from sent click history
) {
  return {
    campaignName,
    sent: createAvatars(sent),
    visitors,
    explored,
    lastClick,
    history: [
      {
        date: "2020-01-05",
        ip: "11091700",
        link: "Project 3",
      },
      {
        date: "2020-01-02",
        ip: "11091723",
        link: "GITHUB",
      },
    ],
  };
}

const myLinks = ["github", "myApp1", "project2", "demo", "myApp2"];

const rows = [
  createData("SAP - App Developer #1567", myLinks, 2, 24, "01.01.23"),
  createData("Telekom - Front End Developer II", myLinks, 1, 13, "01.18.24"),
  createData("Check24 - Back End Dev", myLinks, 5, 24, "02.02.24"),
  createData("Amazon.de - Back End Engineer", myLinks, 3, 67, "02.01.24"),
  createData("Haribo - Taste Tester", myLinks, 1, 49, "12.25.23"),
];

//Avatar Group Construction
function createAvatars(clicked: string[]) {
  const avatars = clicked.map((el) => {
    return LinkAvatar({ link: el });
  });

  return <AvatarGroup max={4}>{avatars}</AvatarGroup>;
}

//Row Construction
function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.campaignName}
        </TableCell>
        <TableCell align="right">{row.sent}</TableCell>
        <TableCell align="right">{row.visitors}</TableCell>
        <TableCell align="right">{row.explored}</TableCell>
        <TableCell align="right">{row.lastClick}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="history">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>IP</TableCell>
                    <TableCell align="right">Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.ip}</TableCell>
                      <TableCell align="right">{historyRow.link}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CampaignTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="campaign table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Campaign</TableCell>
            <TableCell align="right">Sent</TableCell>
            <TableCell align="right">Visitors</TableCell>
            <TableCell align="right">Reach</TableCell>
            <TableCell align="right">Last&nbsp;Click</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.campaignName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
