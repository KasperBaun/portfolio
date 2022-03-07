import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bme from "../../Assets/Projects/dashboard.png";
import auctionator from "../../Assets/Projects/auctionator.png";
import stattrack from "../../Assets/Projects/stattrack.png";
import bio from "../../Assets/Projects/bio.jpg";
import memory from "../../Assets/Projects/memory.png";
import shell from "../../Assets/Projects/shell.png";
import yukon from "../../Assets/Projects/yukon.png";
import compiler from "../../Assets/Projects/compiler.png";
import monopoly from "../../Assets/Projects/monopoly.webp";
import helgeask from "../../Assets/Projects/helgeask.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few Projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bio}
              isBlog={false}
              title="EasyTap - In progress"
              description="A restaurant management system for waiters, chefs and administrators. For ordering, processing and serving food in a local restaurant.
              Built with React, Docker, CI/CD,  EntityFramework, MySQL and ASP.NET API. Written in TypeScript and C#"
              link="https://github.com/simonsoeborg/02363-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bme}
              isBlog={false}
              title="Boost My Economy - In progress"
              description="Personal Finance Tool or Workspace to analyze spending in detail.
              Built with Blazor, EntityFramework, MySQL and ASP.NET API. Written in C#"
              link="https://github.com/KasperBaun/BoostMyEconomy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auctionator}
              isBlog={false}
              title="Auctionator - 2022"
              description="An application for creating and bidding on auctions concurrently using TupleSpaces as persistence. The project uses Jetpack Compose Desktop framework and jSpace as a Javalibrary, and has the goal of teaching coordination design for concurrency. Written in Java and Kotlin"
              link="https://github.com/KasperBaun/Auctionator_Client"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stattrack}
              isBlog={false}
              title="StatTrack - 2021"
              description="An android application for tracking data and keeping up with your favorite sports teams. Built with Kotlin and Jetpack Compose using MVVM architecture and repository pattern. It supports mapping and tracking real-time events such as 'red card' or 'goal' by player x.  "
              link="https://github.com/KasperBaun/Stattrack_android_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bio}
              isBlog={false}
              title="Bio-booking - 2021"
              description="A cinema administration application where employees of the cinema can CRUD bookings, movies, cinema halls etc. Built with React, C# Backend (EF and API) Github Actions Runner, CI/CD and Gated Commits "
              link="https://github.com/KasperBaun/bio-booking_react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Management - 2021"
              description="A memory management application for a course on Operating Systems. Has the goal of teaching various memory allocation algorithms and design. Written in C"
              link="https://github.com/KasperBaun/OS_MemoryManagement"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              isBlog={false}
              title="Simple Shell - 2021"
              description="The project covers various system calls on Linux such as fork(), exec(), execvp() pipe() and other priviledged calls to the kernel. Written in C"
              link="https://github.com/KasperBaun/OS_SimpleShell"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yukon}
              isBlog={false}
              title="Yukon Solitaire - 2021"
              description="A card game deliverable for the course 02322 Machine Oriented Programming. It teaches linked lists and is written in C. The game is implemented as a TUI (Text User Interface) displayed in a terminal/CMD "
              link="https://github.com/KasperBaun/YukonSolitaire"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compiler}
              isBlog={false}
              title="Compiler Construction - 2021"
              description="A small programming language implementation 'Impl' using ANTLR and Java. The project is a deliverable for 02332 - Compiler Construction course"
              link="https://github.com/KasperBaun/compilerMandatory"
          />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={helgeask}
              isBlog={false}
              title="Helge Ask"
              description="A log application for sailors of Helge Ask - an old viking ship replica that sails from Roskilde Vikingskibsmuseum every wednesday. Written in Java and with .XML styling"
              link=""
            />
          </Col>

            

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monopoly}
              isBlog={false}
              title="Monopoly"
              description="A small monopoly game implemented with a given GUI and written in Java for first semester CS education @ DTU"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
