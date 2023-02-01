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
import avatar from "../user-settings/pictures/logo192.jpg";

export default function UserSettings() {
  const [currentName, setCurrentName] = useState("");
  const [currenEmail, setCurrentEmail] = useState("");
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [pswConfirmError, setPswConfirmError] = useState("");
  const [fieldError, setFieldError] = useState(false);

  useEffect(() => {
    fetchUserDetails().then((user) => {
      setCurrentName(user.name);
      setCurrentEmail(user.email);
    });
  }, []);

  const navigate = useNavigate();

  const linkToReg = () => {
    navigate("/imperia/buildings", { replace: true });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    setError("");
    setFieldError(false);

    const data: {
      name?: string;
      email?: string;
      newPassword?: string;
      oldPassword: string;
    } = {
      oldPassword,
    };

    if (!oldPassword) {
      setFieldError(true);
      setError("Please add your password");
      return;
    }

    if (name) {
      data.name = name;
    }
    if (email) {
      data.email = email;
    }
    if (password !== confirmPassword) {
      setPswConfirmError("Passwords do not match");
      return;
    } else if (password) {
      data.newPassword = password;
    }

    try {
      await fetchUserSettings(data);
      if (data) {
        alert("Your settings are seccessfully changed!")
        navigate("/imperia/buildings", { replace: true });
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
    width: "85%",
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
  };

  return (
    <div className="background">
      <div className="userContainer">
        <Paper elevation={20} style={paperStyle}>
          <div className="avatar">
            <Avatar alt="B" src={avatar} sx={{ width: 70, height: 70 }} />
            <h2>{currentName}</h2>
            <h3>{currenEmail}</h3>
          </div>
          <div className="input">
            <h5>Here You can change your account</h5>
            <TextField
              className="username"
              id="outlined-basic"
              label="New Username"
              variant="outlined"
              placeholder="Add New Username"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              className="email"
              id="outlined-basic"
              label="New Email"
              variant="outlined"
              placeholder="Add New Email"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              className="newPassword"
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              placeholder="Add New Password"
              type="password"
              fullWidth
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <TextField
              className="confirmNewPassword"
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              placeholder="Confirm New password"
              type="password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              helperText={pswConfirmError}
            />
            <h5>To verify, need your old password</h5>
            <TextField
              className="oldPassword"
              id="outlined-basic"
              label="Old Password"
              variant="outlined"
              placeholder="Old Password"
              type="password"
              required
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
          <div className="under"></div>
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
