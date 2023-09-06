import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./screen.css";

//Static Files
import textData from "../Static/textFiles.json";
import TypingText from "../Components/TypingTextEffect";
import AboutUs from "./AboutUs";
import MarketingComponent from "../Components/SuggestionComponent";


const SctionalScreen = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
          <p id="bar" style={{ background: "#6f2f2c" }}></p>

          <h1 style={{ color: "#800000" }}>Concept</h1>
          <h1 style={{ color: "#2a7c0e" }}>To</h1>
          <h1 style={{ color: "#181f4c" }}>Education</h1>

          <br />
          <br />
          <p style={{ color: "#2e8286" }}>
            {" "}
            <TypingText text={textData.TopScreen.slogan} />{" "}
          </p>
          <p id="bar" style={{ background: "#008080" }}></p>
        </Grid>
        <Grid item xs={0.01} md={6}>
          <img
            src={
              "https://img.freepik.com/premium-vector/tiny-student-with-scholarship-sitting-books-student-loans-paying-school-college-university-fees-flat-vector-illustration-education-finances-economy-concept-banner-banner_74855-21035.jpg"
            }
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "8%",
            }}
            alt="Pool"
            title="src:google"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const TopScreen = () => {
  return (
    <div>
      <SctionalScreen />
      <MarketingComponent />
      <AboutUs />
    </div>
  );
};

export default TopScreen;
