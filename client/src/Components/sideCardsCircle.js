import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./commonStyle.css";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ExploreIcon from "@mui/icons-material/Explore";
import Button from "@mui/material/Button";
const SideCardsCircle = ({ ...props }) => {
  const { title, image, text, link, buttonText } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={8}
          md={6}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <img
            src={image}
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",

              borderRadius: "50%",
            }}
            alt="Src:Google"
          />
        </Grid>
        <Grid
          item
          xs={8}
          md={6}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h3 style={{color:'#041d4c'}} >{title}</h3>
          <br />
          <p className="paragraph-circle" style={{color:'#546875'}}> {text} </p>
          <br />
          <a href={`${link}`} style={{ textDecoration: "none" }} >
            <Button variant="contained" id="button" style={{ color: "white" }}>
              {buttonText} &nbsp;{" "}
              {buttonText?.startsWith("B") ? (
                <LocalLibraryIcon style={{ color: "white" }} />
              ) : (
                <ExploreIcon style={{ color: "white" }} />
              )}
            </Button>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SideCardsCircle;
