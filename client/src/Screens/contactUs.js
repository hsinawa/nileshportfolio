import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";

//Static files
import textData from "../Static/textFiles.json";
import { messageContactAction } from "../Actions/messageAction";

const ContactUs = () => {
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();

  const SubmitContact = (e) => {
    e.preventDefault();

    const data = {
      number: number,
      name: name,
      message: message,
    };
    dispatch(messageContactAction(data));
  };

  return (
    <div id="parent">
      <h1 id="offerh1" style={{ color: "#082567" }}>
        {textData.ContactUs.name}
      </h1>
      <p style={{ textAlign: "justify", color: "#011F5B" }}>
        {textData.ContactUs.slogan}
      </p>

      <section
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          borderRadius: "12px",
          paddingTop: "1%",
          paddingBottom: "3%",
          marginTop: "5%",
        }}
      >
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
          <form onSubmit={SubmitContact}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  value={name}
                  style={{
                    width: "90%",
                  }}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Number"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  style={{
                    width: "90%",
                  }}
                  value={number}
                  inputProps={{
                    maxLength: 12,
                    minLength: 10,
                    pattern: "^[0-9\\s\\-]+$",
                  }}
                  onChange={(e) => {
                    setnumber(e.target.value);
                  }}
                />
              </Grid>

              <Grid
                item
                xs={11.3}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id="outlined-basic"
                  label="Enter Message"
                  variant="outlined"
                  autoComplete="off"
                  type="text"
                  required
                  value={message}
                  style={{
                    width: "96%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  className="messageBox"
                  multiline
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  rows={4}
                />
              </Grid>
              <Grid
                item
                xs={11}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <Button
                  variant="contained"
                  value="submit"
                  type="submit"
                  style={{
                    float: "left",
                    backgroundColor: "#0C2340",
                    width: "97%",
                    marginLeft: "2%",
                    fontSize: "20px",
                    marginRight: "auto",
                  }}
                >
                  Send <SendIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </section>
    </div>
  );
};

export default ContactUs;
