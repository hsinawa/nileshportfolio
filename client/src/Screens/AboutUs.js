import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";

//Static Files
import logo from "../Images/logo.jpeg";
import textData from '../Static/textFiles.json'
 

const UpperSection = () =>{
    return(
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
            <h1 style={{color:'#830213'}} >{textData.AboutUs.name}</h1>{" "}
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
          <Grid item xs={10} md={5} style={{ marginLeft: "auto", marginRight: "auto" }}>
            {
                textData.AboutUs.paras.map(i=>{
                    return <p style={{textAlign:'justify', color:'#000249'}} > <br/> {i}   <br/> <br/> </p>
                })
            }
          </Grid>
        </Grid>
      </Box>
    )
}

const WhatWeOffer = () => { 
    return(
        <div style={{width:'90%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}} >
            <h1 id='offerh1' >{textData.AboutUs.offer}</h1>
        </div>
    )
}

const OurPromise = () =>{
    return (
        <div style={{width:'90%', marginLeft:'auto', marginRight:'auto', marginTop:'5%'}}>
<h1 id='offerh1'> {textData.AboutUs.promise} </h1>
        </div>
    )
}
const AboutUs = () => {
  return (
    <div>
     <UpperSection />
     <WhatWeOffer />
     <OurPromise />
    </div>
  );
};

export default AboutUs;
