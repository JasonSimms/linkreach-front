import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const pages = [
  { title: "Home", destination: "/" },
  { title: "Links", destination: "/links", protected: true },
  { title: "StoryBoard", destination: "/storyboard" },
];

const navBarStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  // backgroundColor: 'primary.success',

  color: "white",
  boxShadow: "none",
  // width: "100vw",
  margin: "10px 0px",
  "@media (min-width:767px)": { borderRadius: "99px 99px" },
  "@media (min-width:955px)": { padding: "12px" },
};

function NavBar() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const settings = currentUser
    ? [
        {
          title: "Profile",
          action: () => {
            console.log("Profile");
            // logout();
          },
        },
        { title: "Account", action: () => console.log("account") },
        { title: "Dashboard", action: () => console.log("dashboard") },
        {
          title: "Logout",
          action: () => {
            logout();
            navigate("/home");
          },
        },
      ]
    : [
        {
          title: "Login",
          action: () => {
            console.log("Login");
            navigate("/login");
          },
        },
      ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageNavigation = (destination: string) => () => {
    handleCloseNavMenu();
    navigate(destination);
  };

  return (
    <AppBar position="static" sx={navBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TroubleshootIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              userSelect: "none",
            }}
          >
            LinkReach
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handlePageNavigation(page.destination)}
                  disabled={page.protected && !currentUser}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TroubleshootIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              userSelect: "none",
            }}
          >
            LinkReach
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handlePageNavigation(page.destination)}
                sx={{ my: 2, color: "white", display: "block" }}
                disabled={page.protected && !currentUser}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={currentUser?.email}
                  src={
                    !currentUser
                      ? ""
                      : currentUser?.photoUrl ||
                        "https://img.kbhgames.com/2020/02/Dogecoin-Miner.jpg"
                  }
                />{" "}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={setting.action}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
