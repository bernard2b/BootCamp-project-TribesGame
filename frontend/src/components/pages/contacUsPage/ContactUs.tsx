import { useState} from "react";
import {
  Button,
  Paper,
  TextareaAutosize,
  TextField,
  Link
} from "@mui/material";
import "./ContactUs.scss";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  const navigate = useNavigate();
  const linkBack = () => {
    alert("Your message is successfully sent!");
    navigate("/", { replace: true });
  };

  const paperStyle = {
    padding: 50,
    height: "100%",
    width: "30%",
    margin: "0 auto",
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
            />

            <TextareaAutosize
              className="textArea"
              aria-label="minimum height"
              minRows={5}
              placeholder="text us here..."
              style={{ width: 280 }}
              onChange={(e) => setText(e.target.value)}
            ></TextareaAutosize>

            <Button fullWidth variant="outlined" onClick={linkBack}>
              SEND
            </Button>
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
