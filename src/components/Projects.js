import React from "react";
import styled from "styled-components";
import data from "../assets/data/data.json";

const Section = styled.section`
  /* height: 100vh; */
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
  display: flex;
  margin: 2rem 0;
  border: blue 1px solid;
  width: 70vw;
  max-width: 1024px;
  height: 40vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 50%;
  justify-content: center;

  .title {
    font-size: 2rem;
    color: ${(props) => props.theme.textAccent};
  }
  .description {
    color: ${(props) => props.theme.textSecondary};
    background-color: ${(props) => props.theme.secondary};
    padding: 1.25rem;
    margin: 1rem 0;
    border-radius: 2px;
  }
`;

const StackContainer = styled.div`
  margin-top: 1rem;
  span {
    /* background-color: ${(props) => props.theme.ternary}; */
    color: ${(props) => props.theme.textAccent};
    /* padding: 5px 10px; */
    font-size: 15px;
    border-radius: 3px;
    margin: 1rem 0;
    margin-right: 1rem;
  }
`;

const PhotoContainer = styled.div`
  width: 50%;
  border: 1px red solid;
  display: flex;
  justify-content: center;
  .project-image {
    object-fit: scale-down;
    max-width: 100%;
    max-height: auto;
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <DetailContainer>
        <span className="title">{project.name}</span>
        <div className="description">{project.description}</div>
        <StackContainer>
          {project.techStack.map((stack) => (
            <span>{stack}</span>
          ))}
        </StackContainer>
      </DetailContainer>
      <PhotoContainer>
        <img src={project.image} alt="temp" className="project-image" />
      </PhotoContainer>
    </ProjectContainer>
  );
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
