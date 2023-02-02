import {
  Avatar,
  Paper,
  Button,
  Link,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import "./Welcome.scss";
import { useNavigate } from "react-router-dom";
import logo from './logo.png'
import React from "react";

function Welcome() {
  const paperStyle = {
    padding: 50,
    height: "100%",
    width: "40%",
    margin: "0 auto",
    background: "rgba(255, 255, 255, 0.87)",
  };

  const navigate = useNavigate();
  const linkToReg = () => {
    navigate("/register", { replace: true });
  };

  const linkToSign = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="welcome-background">
      <div className="welcomePageContainer">
        <Paper elevation={20} style={paperStyle}>
          <div className="welcomeTitle">
          <Avatar alt="B" src={logo} sx={{ width: 120, height: 120 }} />
            <h3>TRIBES</h3>
            <h5>(beta)</h5>
          </div>
          <Accordion className="accord">
            <AccordionSummary id="1">
              <Typography>About the Game...</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The vision of the Tribes project is to create an online
                browser-based multiplayer game, where every player has their own
                kingdom and they battle with each other in order to gain control
                over the other kingdoms.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accord">
            <AccordionSummary aria-controls="panel1a-content" id="1">
              <Typography>About Us...</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are studets from the GreenFox Academy. This is our final
                project.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Button
            className="btn"
            onClick={linkToReg}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Create Account
          </Button>

          <Button
            className="btn"
            onClick={linkToSign}
            variant="outlined"
            color="primary"
            fullWidth
          >
            Sign in
          </Button>
          <div className="contact">
            <Link href="/contact">
              <p>Contact us!</p>
            </Link>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Welcome;
