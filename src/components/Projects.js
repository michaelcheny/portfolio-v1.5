import React from "react";
import styled from "styled-components";
import data from "../assets/data/data.json";

const Section = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 100ms;
  border: 1px red solid;
`;

const ProjectContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
  border: blue 1px solid;
`;

const Project = ({ project }) => {
  return <ProjectContainer>{project.name}</ProjectContainer>;
};

const Projects = () => {
  return (
    <Section>
      {data.projects.map((project) => (
        <Project project={project} />
      ))}
    </Section>
  );
};

export default Projects;
