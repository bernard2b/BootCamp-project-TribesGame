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
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import fetchLogin from "../../api/login";

export function Login() {
  const [value, setValue] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();
  const linkToReg = () => {
    navigate("/register", { replace: true });
  };
  
  const data = { userName, password };
  const onSubmit = async () => {
    try {
      await fetchLogin(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  
  const paperStyle = {
    padding: 50,
    height: "70vh",
    width: 280,
    margin: "40px auto",
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
            />
          </div>
          <div className="logInBtn">
            <Button
              onClick={onSubmit}
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
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
              <Link href="/">Forgot password</Link>
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
