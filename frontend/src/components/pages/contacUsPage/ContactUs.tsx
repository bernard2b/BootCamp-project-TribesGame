import { useState, SyntheticEvent } from "react";
import {
  Button,
  Paper,
  TextareaAutosize,
  TextField,
  Link,
  Stack,
  Alert,
} from "@mui/material";
import "./ContactUs.scss";
import { red } from "@mui/material/colors";
import { redirect } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const sendMail = async (e: SyntheticEvent) => {
    alert("sent");
  };

  const paperStyle = {
    padding: 50,
    height: "100%",
    width: '30%',
    margin: "40px auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  return (
    <div className="welcome-background">
      <div className="welcomePageContainer">
        <Paper elevation={20} style={paperStyle}>
          <div className="input">
            <TextField
              className="fullname"
              id="outlined-basic"
              label="Fullname"
              variant="outlined"
              placeholder="Fullname"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              className="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="your email "
              type="password"
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
              // error={passwordFieldError}
              // helperText={passwordError}
            />

            <TextareaAutosize
              className="textArea"
              aria-label="minimum height"
              minRows={5}
              placeholder="text us here..."
              style={{ width: 280 }}
              onChange={(e) => setText(e.target.value)}
            ></TextareaAutosize>

            <Button fullWidth variant="outlined" onClick={sendMail}>
              SEND
            </Button>

            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert onClose={() => {redirect}}>
                This is a success alert — check it out!
              </Alert>
              <Alert
                action={
                  <Button color="inherit" size="small">
                    UNDO
                  </Button>
                }
              >
                This is a success alert — check it out!
              </Alert>
            </Stack>

            <div className="navBack">
              <Link href="/">
                <p>teamSTRIGOPS..</p>
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default ContactUs;
