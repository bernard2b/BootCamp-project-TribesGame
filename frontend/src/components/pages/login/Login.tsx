import "./Login.scss";
import {
  Avatar,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import fetchLogin from "../../../api/login";
import loginPicture from "./login-pictures/logo192.jpg";

export default function Login() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameFieldError, setNameFieldError] = useState(false);
  const [passwordFieldError, setpasswordFieldError] = useState(false);
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const linkToReg = () => {
    navigate("/register", { replace: true });
  };

  const data = { name, password };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setNameFieldError(false);
    setpasswordFieldError(false);
    setUserError("");
    setPasswordError("");

    if (name == "") {
      setNameFieldError(true);
      setUserError("Name is required");
    }
    if (password == "") {
      setpasswordFieldError(true);
      setPasswordError("Add some password as well...");
    }

    try {
      await fetchLogin(data);
      if (data) {
        navigate("/imperia/buildings", { replace: true });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        if (error.message) setPasswordError(error.message);
      }
    }
  };

  const paperStyle = {
    padding: 50,
    height: "100%",
    width: "30%",
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  return (
    <div className="login-background">
      <div className="container">
        <Paper elevation={20} style={paperStyle}>
          <div className="avatar">
            <Avatar alt="B" src={loginPicture} sx={{ width: 70, height: 70 }} />
            <h2>Sign in</h2>
            <p>using your TRIBES account</p>
          </div>
          <div className="input">
            <TextField
              className="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="Username"
              fullWidth
              required
              onChange={(e) => setUsername(e.target.value)}
              error={nameFieldError}
              helperText={userError}
            />

            <TextField
              className="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              error={passwordFieldError}
              helperText={passwordError}
            />
          </div>
          <div className="logInBtn">
            <Button
              onClick={onSubmit}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Let's go!
            </Button>
          </div>
          <div className="under">
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Stay in!"
            />
            <div className="psw">
              <Link href="/">
                <p>Forgot password</p>
              </Link>
            </div>
          </div>
          <div className="linkToReg">
            <Button
              onClick={linkToReg}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Create Account
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
