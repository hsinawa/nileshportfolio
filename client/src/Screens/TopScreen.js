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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
          <img
            src={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e43bc564-7f60-40f1-a50b-2e0baa9d4f57/df2iqu8-5e2c8ebc-b0ec-4794-bd27-08e36d8eb229.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U0M2JjNTY0LTdmNjAtNDBmMS1hNTBiLTJlMGJhYTlkNGY1N1wvZGYyaXF1OC01ZTJjOGViYy1iMGVjLTQ3OTQtYmQyNy0wOGUzNmQ4ZWIyMjkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ix-acdXKY3Zp5sz4Om0TIkKkvtNdywwM8OiIZwpEebQ"
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
