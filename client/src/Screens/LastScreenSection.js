import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./screen.css";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportIcon from "@mui/icons-material/Support";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//Static files
import textData from "../Static/textFiles.json";
import FindUs from "./FindUs";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const LastScreenSection = () => {
  return (
    <div>
      <div id="parent">
        <h2 id="offerh1" style={{ color: "#00416A" }}>
          {textData.Questions.name}
        </h2>
        <br />
        <p
          style={{
            textAlign: "justify",
            color: "#72A0C1",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {" "}
          {textData.Questions.subpara} Contact Us{" "}
          <a href="/contact" style={{ textDecoration: "none" }}>
            {" "}
            Here{" "}
          </a>
        </p>

        <br />
        <br />
        <br />
        <section className="accordians">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <AutoStoriesIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[0][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[0][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <GroupsIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[1][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[1][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <SupportIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[2][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{textData.Questions.quests[2][1]}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                {" "}
                <AddIcCallIcon
                  style={{ verticalAlign: "-4px", color: "#707070" }}
                />{" "}
                {textData.Questions.quests[3][0]}{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can call us on <a href="tel:+919810566326">9810566326</a>
                <br />
                Or you can directly visit Us
                <br />
                <FindUs />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </div>
      <footer className="footer">
        <h4 style={{ color: "white", fontSize: "25px" }}> Connect On </h4>

        <Grid
          container
          spacing={2}
          sx={{ width: "80%", mx: "auto", marginTop: "10px" }}
        >
          <Grid item xs={2} md={2}>
            <p></p>
          </Grid>

          <Grid item xs={2} md={2}>
            <p title="Phone">
              <a href="tel:+919810566326" style={{ color: "white", cursor: "pointer" }}>
                {" "}
                <AddIcCallIcon
                  style={{ verticalAlign: "-6px", fontSize: "35px" }}
                />{" "}
              </a>
            </p>
          </Grid>

          <Grid item xs={2} md={2}>
            <p title="Facebook">
              <a
                href={`https://www.facebook.com/ConceptToEducation?mibextid=nW3QTL`}
                target="_blank"
                style={{ color: "black", cursor: "pointer" }}
              >
                <FacebookIcon
                  style={{
                    verticalAlign: "-6px",
                    fontSize: "35px",
                    color: "white",
                  }}
                />
              </a>
            </p>
          </Grid>

          <Grid item xs={2} md={2}>
            <p title="Instagram">
              <a
                href={`https://instagram.com/concept.to.education?igshid=OGQ5ZDc2ODk2ZA==`}
                target="_blank"
                style={{ color: "black", cursor: "pointer" }}
              >
                <InstagramIcon
                  style={{
                    verticalAlign: "-6px",
                    fontSize: "35px",
                    color: "white",
                  }}
                />
              </a>
            </p>
          </Grid>

          <Grid item xs={2} md={2}>
            <p title="Youtube">
              <a
                href={`https://youtube.com/@concepttoeducation?si=_xR6zdyrk8fZVJEC`}
                target="_blank"
                style={{ color: "black", cursor: "pointer" }}
              >
                <YouTubeIcon
                  style={{
                    verticalAlign: "-6px",
                    fontSize: "35px",
                    color: "white",
                  }}
                />
              </a>
            </p>
          </Grid>

          <Grid item xs={2} md={2}>
            <p></p>
          </Grid>
        </Grid>
        <br/><br/>

        <a href="/developer" style={{ textDecoration: "none", color: "white" }}>
          Developer Details
        </a>
      </footer>
    </div>
  );
};

export default LastScreenSection;
