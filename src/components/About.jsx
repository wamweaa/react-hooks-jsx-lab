import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis maxime autem dolor nihil adipisci, suscipit rerum numquam velit est repellat!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
