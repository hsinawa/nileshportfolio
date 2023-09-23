import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./screen.css";

//Static Files
import logo from "../Images/logo.jpeg";
import textData from "../Static/textFiles.json";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import GridCard from "../Components/Cards";
import holistic from "../Images/holistic.jpeg";
import faculty from "../Images/faculty.avif";
import interactive from "../Images/interactive.avif";
import coaching from "../Images/coaching.avif";
import SideCardsCircle from "../Components/sideCardsCircle";
import maths from "../Images/maths.avif";
import sci from "../Images/science.jpeg";
import elearn from "../Images/elearn.jpeg";
import SomeStatistics from "../Components/StatisticsSection";
import SATImg from '../Images/SAT.png'
const UpperSection = () => {
  return (
    <Box
      sx={{
        flexGrow: 0,
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
        marginTop: "3%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={10} md={5}></Grid>
        <Grid
          item
          xs={10}
          md={5}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {" "}
          <h1 style={{ color: "#830213" }}>{textData.AboutUs.name}</h1>{" "}
        </Grid>
        <Grid item xs={10} md={5}></Grid>
        <Grid item xs={10} md={5}></Grid>
        <Grid
          item
          xs={10}
          md={5}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <img
            src={logo}
            style={{
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "0%",
              padding: "15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            alt="Logo of C2E"
            title="Logo of C2E"
          />{" "}
        </Grid>
        <Grid
          item
          xs={10}
          md={5}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {textData.AboutUs.paras.map((i) => {
            return (
              <p style={{ textAlign: "justify", color: "#000249" }}>
                {" "}
                <br /> {i} <br /> <br />{" "}
              </p>
            );
          })}
          <a href="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{ float: "left", backgroundColor: "#2e8286" }}
            >
              Contact Us &nbsp; <ConnectWithoutContactIcon />
            </Button>
          </a>
        </Grid>
      </Grid>

    

      

      <iframe
        src="https://drive.google.com/file/d/1-N0jgGSfJefA2Qdam_-oG1MQV-OXbMpc/preview"
        className='frame'
        allow="autoplay"

      ></iframe>
    </Box>
  );
};

const WhyUs = () => {
  return (
    <div id="parent">
      <h1 id="offerh1" style={{ color: "#03045e" }}>
        {" "}
        {textData.AboutUs.WhyUS}{" "}
      </h1>
      <br />
      <p
        style={{
          textAlign: "justify",
          color: "#000249",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {" "}
        {textData.AboutUs.WhyUsPara}{" "}
      </p>
      <section id="gridscreen">
        <GridCard
          image={faculty}
          heading={textData.AboutUs.facilities[0][0]}
          text={textData.AboutUs.facilities[0][1]}
        />
        <GridCard
          image={interactive}
          heading={textData.AboutUs.facilities[1][0]}
          text={textData.AboutUs.facilities[1][1]}
        />
        <GridCard
          image={holistic}
          heading={textData.AboutUs.facilities[2][0]}
          text={textData.AboutUs.facilities[2][1]}
        />
      </section>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <div id="parent">
      <h2 id="offerh1" style={{ color: "#002fa7" }}>
        {" "}
        {textData.AboutUs.Offers.name}{" "}
      </h2>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={coaching}
              style={{
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "8%",
              }}
              alt="Pool"
              title="src:google"
            />
            <p
              style={{
                textAlign: "justify",
                color: "#000249",
                width: "85%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {" "}
              {textData.AboutUs.Offers.para}{" "}
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <SideCardsCircle
              title={textData.AboutUs.Offers.courses[0][0]}
              image={maths}
              text={textData.AboutUs.Offers.courses[0][1]}
              buttonText="Book Trial "
              link="/book"
            />
            <br />
            <br />
            <SideCardsCircle
              title={textData.AboutUs.Offers.courses[1][0]}
              image={sci}
              text={textData.AboutUs.Offers.courses[1][1]}
              buttonText="Book Trial "
              link="/book"
            />
            <br />
            <br />
            <SideCardsCircle
              title={textData.AboutUs.Offers.courses[2][0]}
              image={elearn}
              text={textData.AboutUs.Offers.courses[2][1]}
              buttonText="Explore More"
              link="https://web.classplusapp.com/login"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const SAT = () =>{
  return (
    <Box sx={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    

      <Grid item xs={12} sm={6}>
        <div>
          <h2 style={{color:'#041E42'}} > {textData.SAT.name} </h2>
          <br/><br/>
          <p style={{
          textAlign: "justify",
          color: "#101010",
          width: "85%",
          marginLeft: "auto",
          marginRight: "auto",
        }} > {textData.SAT.paragraph} </p>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
    <img src={SATImg} id="image-about" alt='Src:Google' title='Src:Google' />
    </Grid>
     
    </Grid>
  </Box>
  )
}

const AboutUs = () => {
  return (
    <div>
      <UpperSection />
      <br /> <br />
      <WhyUs />
      <br />
      <br />
      <WhatWeOffer />
      <br />
      <br />
      <SAT/>
      <br />
      <br />
      <SomeStatistics />
    </div>
  );
};

export default AboutUs;
