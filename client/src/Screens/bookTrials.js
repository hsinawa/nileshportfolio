import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import your custom styles



const BookTrialClasses = () => {
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [standard, setstandard] = useState("");
  const [subject, setsubject] = useState("");

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const minDate = new Date(); // Minimum date is today
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 14);


  const dispatch = useDispatch();
  const SubmitTrailClass = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      contact: number,
      standard: standard,
      subject: subject,
      date:selectedDate.substr(0,10)
    };
  };

  return (
    <div id="parent">
      <h2 id="offerh1">Ready to Learn? Reserve Your Trial Class Here</h2>
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
          <form onSubmit={SubmitTrailClass}>
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
                  style={{
                    width: "90%",
                  }}
                  value={name}
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
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Select Class
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={standard}
                  required={true}
                  label="Class"
                  style={{
                    width: "90%",
                  }}
                  onChange={(e) => {
                    setstandard(e.target.value);
                  }}
                >
                  <MenuItem value={"Class 7th"}>Class 7th</MenuItem>
                  <MenuItem value={"Class 8th"}>Class 8th</MenuItem>
                  <MenuItem value={"Class 9th"}>Class 9th</MenuItem>
                  <MenuItem value={"Class 10th"}>Class 10th</MenuItem>
                  <MenuItem value={"Class 11th"}>Class 11th</MenuItem>
                  <MenuItem value={"Class 12th"}>Class 12th</MenuItem>
                </Select>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Select Subject
                </InputLabel>

                {standard === "Class 11th" || standard === "Class 12th" ? (
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    required={true}
                    value={subject}
                    label="subject"
                    style={{
                      width: "90%",
                    }}
                    onChange={(e) => {
                      setsubject(e.target.value);
                    }}
                  >
                    <MenuItem value={"Maths"}>Maths</MenuItem>
                    <MenuItem value={"Science"} disabled>
                      Science
                    </MenuItem>
                  </Select>
                ) : (
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    required={true}
                    value={subject}
                    label="subject"
                    style={{
                      width: "90%",
                    }}
                    onChange={(e) => {
                      setsubject(e.target.value);
                    }}
                  >
                    <MenuItem value={"Maths"}>Maths</MenuItem>
                    <MenuItem value={"Science"}>Science</MenuItem>
                  </Select>
                )}
              </Grid>

              <Grid
                item
                xs={11.3}
                md={12}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >

<div className='calendar-container'>
      
      <div>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={minDate}
          maxDate={maxDate}
          className='react-calendar'
        />
      </div>
      <p>Selected date: {selectedDate.toDateString()}</p>
    </div>
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
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </section>
    </div>
  );
};

export default BookTrialClasses;
