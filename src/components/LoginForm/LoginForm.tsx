import React from "react";
import { useAuth } from "../../context/AuthContext";

import {
  TextField,
  // TextareaAutosize,
  // FormGroup, FormControlLabel, Paper
} from "@mui/material";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { Google } from "@mui/icons-material";

import { keyframes } from "@mui/system";

const blobAnimation = keyframes`
  0% {
    border-radius: 57% 43% 70% 30% / 44% 73% 27% 56%;
 }
  25% {
    border-radius: 68% 32% 63% 37% / 26% 51% 49% 74%;
 }
  50% {
    border-radius: 50% 50% 33% 67% / 43% 54% 46% 57%;
 }
  75% {
    border-radius: 68% 32% 63% 37% / 26% 51% 49% 74%;
 }
  100% {
    border-radius: 57% 43% 70% 30% / 44% 73% 27% 56%;
 }
`;

export default function LoginInForm() {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();
  const { login, proceedWithGooglePopup } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isFormValid = email.length > 5 && password.length > 5;
  console.log("isformvalid", isFormValid);

  const handleGoogle = async (e: React.MouseEvent) => {
    e.preventDefault();
    await proceedWithGooglePopup();
    navigate("/home");
  };

  const handleLogin = async (email: string, password: string) => {
    console.log("lets handle login", email, password);
    try {
      await login(email, password);
      navigate("/home");
      // Handle successful login
    } catch (error) {
      // Handle login errors
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(email, password); //TODO Alert on error
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        width: "75vw",
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "rgb(255, 192, 195)",
        borderRadius: "57% 80% 70% 30% / 44% 73% 60% 56%",
        animation: `${blobAnimation} 7s ease-in-out infinite`,
        marginTop: "3vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          mt: 8,
          width: "50vw",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 0, mb: 1, borderRadius: 64 }}
          name="login"
          disabled={!isFormValid}
        >
          login
        </Button>
        <Typography variant="h5" gutterBottom>
          OR
        </Typography>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 2, borderRadius: 64 }}
          onClick={handleGoogle}
          startIcon={<Google />}
          color={"secondary"}
        >
          Proceed with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 2, borderRadius: 64 }}
          onClick={() => handleLogin("max@gmail.com", "maxPass")}
          color={"success"}
        >
          Sign in as Max Mustermann (DEMO)
        </Button>
        <Grid container>
          {/* <Grid item xs>
                <Link href="#" variant="body2" onClick={handlePasswordReset}>
                  Forgot password?
                </Link>
              </Grid> */}
          {/* <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}
