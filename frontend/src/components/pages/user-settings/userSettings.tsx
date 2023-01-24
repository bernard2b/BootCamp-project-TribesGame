import React from 'react'
import "./userSettings.scss";
import {
  Avatar,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@mui/material";




export default function UserSettings() {

  const paperStyle = {
    padding: 50,
    height: "100%",
    width: 280,
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  return (
    <div className="background">
      <div className="container">
        <Paper elevation={20} style={paperStyle}>
          <div className="avatar">
            <Avatar alt="B"  sx={{ width: 70, height: 70 }} />
            <h2>Name</h2>
            <p>your@email</p>
          </div>
          <div className="input">
            <TextField
              className="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="new username"
              fullWidth
              // onChange={(e) => setUsername(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
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
              // onChange={(e) => setPassword(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />

<TextField
              className="newPassword"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Confirm new password"
              type="password"
              fullWidth
              // onChange={(e) => setPassword(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />

<TextField
              className="newPassword"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              placeholder="Old Password"
              type="password"
              fullWidth
              // onChange={(e) => setPassword(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />

          </div>
          <div className="logInBtn">
            <Button
              // onClick={onSubmit}
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
              // onClick={linkToReg}
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
  )
}
