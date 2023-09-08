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

//Static files
import textData from "../Static/textFiles.json";
import FindUs from "./FindUs";

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


<a href='/developer' style={{textDecoration:'none', color:'white'}} >
    Developer Details
</a>

      </footer>
    </div>
  );
};

export default LastScreenSection;
