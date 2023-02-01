import React, { useState, useEffect } from "react";
import Header from "../../header/Header";
import "./Registration.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import fetchRegistration from "../../../api/registrationFetch";
import { useNavigate } from "react-router-dom";
import loginAvatar from "./img/logo192.png"

export default function Registration() {
  const navigate = useNavigate();
  const theme = createTheme();
  const registerSchema = object({
    firstName: string().nonempty("Name is required"),
    imperiumName: string(),
    email: string().nonempty("Email is required").email("Email is invalid"),
    password: string()
      .nonempty("Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string().nonempty("Please confirm your password"),
    terms: literal(true, {
      invalid_type_error: "Accept Terms is required",
    }),
  }).refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

  type RegisterInput = TypeOf<typeof registerSchema>;

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
  };

  const [userName, setUsername] = useState("");
  const [imperiumName, setImperiumname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const data = { name: userName, email, password, imperiumName };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async () => {
    setError("");
    try {
      await fetchRegistration(data);
      navigate("/register/map")
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error.message);
      }
    }
  };

  const errorStyle = {
    color: "#c62828",
    marginLeft: "27px",
    fontSize: "13px",
  };

  return (
    <div className="Registration">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              width: 380,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f8f9fa",
              padding: 2,
              borderRadius: 1,
            }}
          >
            <Avatar src={loginAvatar} sx={{ m: 1 }}></Avatar>
            <h1 style={{ color: "black" }}>SIGN UP</h1>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmitHandler)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="firstName"
                    label="Username"
                    error={!!errors["firstName"]}
                    helperText={
                      errors["firstName"] ? errors["firstName"].message : ""
                    }
                    {...register("firstName")}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete=""
                    fullWidth
                    id="imperiumName"
                    label="Imperium name (optional)"
                    {...register("imperiumName")}
                    onChange={(e) => setImperiumname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    error={!!errors["email"]}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    {...register("email")}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={!!errors["password"]}
                    helperText={
                      errors["password"] ? errors["password"].message : ""
                    }
                    {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <p style={errorStyle}>{error}</p>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmit}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
