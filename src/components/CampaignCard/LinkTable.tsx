// import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Note, OpenInNew } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from '@mui/material/Tooltip';

//MOCK DATA TODO add context
const data = [
  {
    linkNickName: "Github",
    linkUrl: "https://linkreach.com/56434534",
    linkNotes: "Some notes",
    linkDestination: "https://example.com",
    clicks: [{ip: "1234", date: "01.01.23"}, {ip: "1234", date: "01.01.23"}]
  },
  {
    linkNickName: "My-Cool-App",
    linkUrl: "https://linkreach.com/456123",
    linkNotes: "Some notes",
    linkDestination: "https://example.com",
    clicks: [{ip: "1234", date: "01.01.23"}, {ip: "1234", date: "01.01.23"}]
  },
  {
    linkNickName: "RickRoll",
    linkUrl: "https://linkreach.com/1337",
    linkNotes: "Some notes",
    linkDestination: "https://example.com",
    clicks: [{ip: "1234", date: "01.01.23"}, {ip: "1234", date: "01.01.23"}]
  },
];

const MyTable = () => {
  const handleOpenModal = (destination: string) => {
    // Implement your open modal logic here  TODO
    console.log("Open modal for:", destination);
  };

  const handleCopyToClipboard = (text: string) => {
    // Implement your copy to clipboard logic here TODO
    console.log("Copy to clipboard:", text);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nickname</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Destination</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.linkNickName}>
              <TableCell>{row.linkNickName}</TableCell>
              <TableCell>
                {row.linkUrl}&nbsp;&nbsp;
              <Tooltip title="Copy To Clipboard">
                <IconButton onClick={() => handleCopyToClipboard(row.linkUrl)}>
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
              </TableCell>
              <TableCell>{row.clicks.length}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenModal(row.linkNotes)}>
                  <Note />
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleOpenModal(row.linkDestination)}
                >
                  <OpenInNew />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
