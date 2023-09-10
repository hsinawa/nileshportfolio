import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Grid from "@mui/material/Grid";

//Static Files
import career from "../Images/career.avif";
import experince from "../Images/experience.jpeg";
import online from "../Images/online.jpeg";
import result from "../Images/result.avif";
import textData from "../Static/textFiles.json";

const MarketingComponent = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          cursor: "pointer",
          marginTop: "3%",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={10}
            md={5}
            lg={3}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            sx={{
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Card
              variant="outlined"
              size="sm"
              orientation="horizontal"
              sx={{ gap: 2, minWidth: 300 }}
            >
              <AspectRatio
                sx={{
                  flexBasis: "200px",
                  overflow: "auto",
                }}
              >
                <img
                  src={result}
                  srcSet={result}
                  alt="src:google"
                  style={{
                    maxWidth: "100%",
                    height: "80px",
                    cursor: "pointer",
                    overflow: "auto",
                  }}
                />
              </AspectRatio>
              <div>
                <Typography level="title-sm">
                  {textData.Marketing.Slogans[0][0]}
                </Typography>
                <Typography level="body-sm">
                  {textData.Marketing.Slogans[0][1]}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            lg={3}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            sx={{
              "&:hover": {
                transform: "scale(1.05)", // Increase the size on hover
              },
            }}
          >
            <Card
              variant="outlined"
              size="sm"
              orientation="horizontal"
              sx={{ gap: 2, minWidth: 300 }}
            >
              <AspectRatio
                sx={{
                  flexBasis: "200px",
                  overflow: "auto",
                }}
              >
                <img
                  src={online}
                  srcSet={online}
                  alt="src:google"
                  style={{
                    maxWidth: "100%",
                    height: "80px",
                    cursor: "pointer",
                    overflow: "auto",
                  }}
                />
              </AspectRatio>
              <div>
                <Typography level="title-sm">
                  {textData.Marketing.Slogans[2][0]}
                </Typography>
                <Typography level="body-sm">
                  {textData.Marketing.Slogans[2][1]}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            lg={3}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            sx={{
              "&:hover": {
                transform: "scale(1.05)", // Increase the size on hover
              },
            }}
          >
            <Card
              variant="outlined"
              size="sm"
              orientation="horizontal"
              sx={{ gap: 2, minWidth: 300 }}
            >
              <AspectRatio
                sx={{
                  flexBasis: "200px",
                  overflow: "auto",
                  height: "80px",
                }}
              >
                <img
                  src={career}
                  srcSet={career}
                  alt="src:google"
                  style={{
                    maxWidth: "100%",
                    height: "80px",
                    cursor: "pointer",
                    overflow: "auto",
                  }}
                />
              </AspectRatio>
              <div>
                <Typography level="title-sm">
                  {textData.Marketing.Slogans[1][0]}
                </Typography>
                <Typography level="body-sm">
                  {textData.Marketing.Slogans[1][1]}
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            lg={3}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            sx={{
              "&:hover": {
                transform: "scale(1.05)", // Increase the size on hover
              },
            }}
          >
            <Card
              variant="outlined"
              size="sm"
              orientation="horizontal"
              sx={{ gap: 2, minWidth: 300 }}
            >
              <AspectRatio
                sx={{
                  flexBasis: "200px",
                  overflow: "auto",
                  height: "80px",
                }}
              >
                <img
                  src={experince}
                  srcSet={experince}
                  alt="src:google"
                  style={{
                    maxWidth: "100%",
                    height: "80px",
                    cursor: "pointer",
                    overflow: "auto",
                  }}
                />
              </AspectRatio>
              <div>
                <Typography level="title-sm">
                  {textData.Marketing.Slogans[3][0]}
                </Typography>
                <Typography level="body-sm">
                  {textData.Marketing.Slogans[3][1]}
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MarketingComponent;
