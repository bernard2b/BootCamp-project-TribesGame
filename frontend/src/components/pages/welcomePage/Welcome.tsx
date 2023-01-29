import {
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
import React from "react";

function Welcome() {
  const paperStyle = {
    padding: 50,
    height: "100%",
    width: 280,
    margin: "40px auto",
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
          <h3>Welcome to the STRIGOPS</h3>
          <h5>(beta)</h5>
        </div>
        <Accordion className="accord">
          <AccordionSummary
            id="1"
          >
            <Typography>About the Game...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accord">
          <AccordionSummary
            aria-controls="panel1a-content"
            id="1"
          >
            <Typography>About Us...</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
          <Link href="/" ><p>
            Contact us!</p>
          </Link>
        </div>
      </Paper>
    </div>
    </div>
  );
}

export default Welcome;
