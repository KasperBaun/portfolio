import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is Kasper and I am a <span className="green">former chef</span> turned <span className="green">developer </span>
            from <span className="green"> Copenhagen, Denmark.</span><br />
            I am currently studying <span className="green"> Softwaretechnology</span> at the Technical University of Denmark (DTU).<br />
            Besides cooking various dishes for 10 years and becoming a father of three 
            I have spent most of my time in 

            <ul className="green">
              <li>Java</li>
              <li>C#</li>
              <li>Kotlin</li>
              <li>JavaScript/Typescript</li>
            </ul>
            and i have coded a project or two in
            <ul className="green">
              <li>C</li>
              <li>Assembly</li>
            </ul>
            I love to build modern native android mobile applications using Kotlin and Jetpack Compose and Web Development with React using JavaScript or TypeScript.<br/>
            Recently i've built a project with Blazor, MudBlazor, EntityFramework and WebAPI that is authenticating and authorizing calls with JWT's, all done in C#.<br/>
            You can check it out @ <a href="https://www.github.com/KasperBaun/BoostMyEconomy" target="_blank">github</a> 
      
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
