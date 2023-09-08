import React from "react";

//Static Files
import textData from "../Static/textFiles.json";
const FindUs = () => {
  return (
    <div id="parent">
      <h1 id="offerh1" style={{ color: "#002244" }}>
        {" "}
        {textData.FindUs.name}
      </h1>

      <p style={{ textAlign: "justify", color: "#012169" }}>
        {textData.FindUs.slogan}
        <br/>
        {textData.FindUs.address}
      </p>



      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.826191720446!2d77.347896975461!3d28.57498148669194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f647b15907%3A0xa06ff72e60abd789!2sConcept%20to%20education%20by%20Nilesh%20sir%20for%20Maths%20Coaching%2F%20Tuition.%207th%208th%209th%2010th%2011th%20and%2012th%20class!5e0!3m2!1sen!2sin!4v1694200972945!5m2!1sen!2sin"
        width="100%"
        height="450"
        title="Locate Your Path to Success"
        style={{
          border: 0,
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "12px",
          marginTop: "5%",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default FindUs;
