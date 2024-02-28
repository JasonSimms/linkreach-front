import React from "react";
import { useAuth } from "../../context/AuthContext";
import { createUser } from "../../services/ApiServices";
import { SnackbarContext } from "../../context/SnackbarContext";

import {
  TextField,
  // TextareaAutosize,
  // FormGroup, FormControlLabel, Paper
  Link,
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

export default function SignUpForm() {
  // Get the navigate function from react-router-dom
  const snackbarContext = React.useContext(SnackbarContext);
  const navigate = useNavigate();
  const { signup, proceedWithGooglePopup } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isFormValid = email.length > 5 && password.length > 5;

  const handleGoogle = async (e: React.MouseEvent) => {
    e.preventDefault();
    await proceedWithGooglePopup();
    navigate("/dashboard");
  };

  const handleSignup = async (email: string, password: string) => {
    try {
      const newAuthUser = await signup(email, password);
      if (!newAuthUser) throw new Error("Error signing up");
      await createUser(); //use info is pulled fresh to provide token;
      navigate("/dashboard");
      // Handle successful login
    } catch (error) {
      // Handle login errors
      snackbarContext?.openSnackbar(error as Error, "error");
      console.error("Error signing up", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignup(email, password); //TODO Alert on error
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
          Sign Up
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
          sign up
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
        <Grid container>
          <Grid item xs>
            <Link
              href="#"
              variant="body2"
              onClick={() => console.log("not implemented")}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/login" variant="body2">
              {"Oh you do have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
