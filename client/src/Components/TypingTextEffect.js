import React, { useState, useEffect } from 'react';
const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setDisplayText('Where');
        setIndex(0);
        
      }
    }, 100); // Adjust the typing speed by changing the interval in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [index, text]);


  return <p style={{ color: "#2e8286" }}>{displayText}</p>;
};



export default TypingText;
