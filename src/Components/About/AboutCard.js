import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="green">Kasper Baun </span>
            from <span className="purple"> Copenhagen, Denmark.</span><br />
            I am a B.Eng student in Softwaretechnology at the Technical University of Denmark (DTU).<br />
            I have spent most of my coding time in 

            <ul className="green">
              <li>Java</li>
              <li>Kotlin</li>
              <li>C</li>
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            and i have coded a project or two in
            <ul className="green">
              <li>C#</li>
              <li>JavaScript</li>
              <li>Assembly</li>
              <li>Machinecode (16-bit theoretical CPU)</li>
              <li>LaTeX</li>
            </ul>
            My fields of interest are building modern responsive &nbsp; native android mobile applications using Kotlin and Jetpack Compose and Web Development with React using JavaScript or TypeScript<br/>  
      
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
