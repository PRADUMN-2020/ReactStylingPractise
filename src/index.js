//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date(23, 3, 16, 19);
const hour = date.getHours();
var message = "";

const customStyles = {
  color: ""
};

if (hour >= 12 && hour < 18) {
  message = "Good Afternoon";
  customStyles.color = "green";
} else if (hour >= 0 && hour < 12) {
  message = "Good Morning";
  customStyles.color = "red";
} else {
  message = "Good Night";
  customStyles.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyles}>
    {message}
  </h1>,
  document.getElementById("root")
);
