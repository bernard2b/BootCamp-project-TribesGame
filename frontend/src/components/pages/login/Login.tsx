import "./Login.scss";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import fetchLogin from "../../../api/login";

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
  

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setNameFieldError(false);
    setpasswordFieldError(false);
    setUserError("");
    setPasswordError("");

    if (name == "") {
      setNameFieldError(true);
      setUserError("Name is required")
    }
    if (password == "") {
      setpasswordFieldError(true);
      setPasswordError("Add some password as well...")
    }

    try {
      await fetchLogin(data);
      if(data) {
        navigate("/", { replace: true })
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        if (
          error.message === "Password is required" ||
          error.message === "Wrong username or password"
        )
          setPasswordError(error.message);
        if (error.message === "No such username...")
          setUserError(error.message);
      }
    }
  };

  const paperStyle = {
    padding: 50,
    height: "70vh",
    width: 280,
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  return (
    <div className="background">
      <div className="container">
        <Paper elevation={20} style={paperStyle}>
          <div className="avatar">
            <Avatar>B</Avatar>
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
