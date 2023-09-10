import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { LogOutAdmin } from "../Actions/adminAction";

const AdminPage = () => {
    const dispatch = useDispatch()
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
          marginTop: "10%",
          marginBottom:'20%'
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
            <Button variant="outlined" href="/todo">
              To Do List
            </Button>
          </Grid>

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
            <Button variant="outlined" href="/trialclass">
              Trial Class
            </Button>
          </Grid>

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
           <Button variant="outlined" href="/getmessages">
            Messages
          </Button>
          </Grid>


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
            <Button variant="outlined" color="error" onClick={ (e)=>{
                dispatch(LogOutAdmin())
            } } >
            Logout
          </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AdminPage;
