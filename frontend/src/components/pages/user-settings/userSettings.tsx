import React, { useState, useEffect, SyntheticEvent } from "react";
import "./userSettings.scss";
import {
  Avatar,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import fetchUserDetails from "../../../api/userDetails";
import fetchUserSettings from "../../../api/userUpdate";
import { useNavigate } from "react-router-dom";
import avatar from "../user-settings/pictures/logo192.jpg"


export default function UserSettings() {
  const [currentName, setCurrentName] = useState("");
  const [currenEmail, setCurrentEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [fieldError, setFieldError] = useState(true)
  
  const [open, setOpen] = useState(false)


  useEffect(() => {
    fetchUserDetails().then((user) => {
      setCurrentName(user.name);
      setCurrentEmail(user.email);
    });
  }, []);

  const navigate = useNavigate();

  const linkToReg = () => {
    navigate("/*", { replace: true });
  };

  let data = {};

  const onSubmit = async (e: SyntheticEvent) => {

    setError("")
    setFieldError(false)

    if(name == "" && email == "") {
      data = {password: password, oldPassword: oldPassword}
    } else if (email == "" && password == "") {
      data = { name: name, oldPassword: oldPassword}
    } else if (name == "" && password == "") {
      data = { email: email, oldPassword: oldPassword}
    } else if ( name == "" && email == "" && password == "") {
      data = {oldPassword: oldPassword}
      setError('No fields are implemented')
    }

    try {
      await fetchUserSettings(data);
      if (data) {
        console.log(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        if (error.message) setError(error.message);
      }
    }
  };

  const paperStyle = {
    padding: 50,
    height: "100%",
    width: 280,
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  const style = {
    height: "100%",
    width: "25px",
    background: "black",
    color: "white",
    padding: 20,
    margin: "40px auto",

  }

  return (
    <div className="background">
      <div className="container">
        <Paper elevation={20} style={paperStyle}>
          <div className="avatar">
            <Avatar alt="B" src={avatar} sx={{ width: 70, height: 70 }} />
            <h2>{currentName}</h2>
            <p>{currenEmail}</p>
          </div>
          <div className="input">
            <p>Here You can change your account</p>
            <TextField
              className="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="new username"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              // error={nameFieldError}
              // helperText={userError}
            />

            <TextField
              className="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="new email"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />

            <TextField
              className="newPassword"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="New Password"
              type="password"
              fullWidth
              // error={passwordFieldError}
              // helperText={passwordError}
            />

            <TextField
              className="confirmNewPassword"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Confirm new password"
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />
            <TextField
              className="oldPassword"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Old Password"
              type="password"
              fullWidth
              onChange={(e) => setOldPassword(e.target.value)}
              error={fieldError}
              helperText={error}
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
              SUBMIT CHANGES
            </Button>
          </div>
          <div className="under">
          </div>
          <div className="linkToReg">
            <Button
              onClick={linkToReg}
              variant="outlined"
              color="primary"
              fullWidth
            >
              Back to GAME
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}
