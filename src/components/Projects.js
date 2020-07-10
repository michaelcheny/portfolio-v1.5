import React from "react";
import styled from "styled-components";
import data from "../assets/data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px red solid; */

  @media (max-width: 900px) {
    /* flex-direction: row-reverse; */
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin: 2.5rem 0;
  /* border: blue 1px solid; */
  width: 70vw;
  max-width: 1024px;
  /* height: 40vh; */

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    /* margin: 2rem 0; */
    padding-top: 5rem;
    margin: 4rem 0;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-width: 50%;
  justify-content: center;
  float: left;
  /* border: 1px green solid; */

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme.textSecondary};
    padding-bottom: 1rem;
    /* display: none; */
    @media (max-width: 900px) {
      padding-top: 1.5rem;
      padding-bottom: 0.5rem;
    }
  }
  .description {
    color: ${(props) => props.theme.textSecondary};
    background-color: ${(props) => props.theme.secondary};
    padding: 1rem;
    margin: 0.8rem 0;
    border-radius: 2px;
  }
  .links {
    margin-left: 5px;
    margin-top: 1.3rem;
    /* align-self: center; */
    .link {
      transform: scale(1.5);
      margin-right: 1.5rem;
      color: ${({ theme }) => theme.textSecondary};
      transition: 150ms linear;
      &:hover {
        color: ${(props) => props.theme.textAccent};
        transform: scale(1.8);
      }
    }
    @media (max-width: 900px) {
      margin-top: 0.9rem;
    }
  }

  @media (max-width: 900px) {
    max-width: 80%;
  }
`;

const StackContainer = styled.div`
  margin-top: 0.8rem;
  span {
    /* background-color: ${(props) => props.theme.ternary}; */
    color: ${(props) => props.theme.textSecondary};
    /* padding: 5px 10px; */
    font-size: 15px;
    border-radius: 3px;
    margin-top: 0.8rem;
    margin-right: 1rem;
  }
    @media (max-width: 900px) {
      margin-top: 0.25rem;
    }
`;

const PhotoContainer = styled.div`
  width: 50%;
  /* border: 1px red solid; */
  float: right;
  display: flex;
  justify-content: center;
  .project-image {
    object-fit: scale-down;
    max-width: 100%;
    /* max-height: auto; */
    @media (max-width: 900px) {
      /* min-width: 300px; */
      transform: scale(1.25);
      /* margin: 1rem; */
    }
    /* &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    } */
  }
  @media (max-width: 900px) {
    max-width: 80%;
    /* width: 500px; */
    /* max-height: auto; */
  }
`;

const Seperator = styled.hr`
  width: 70vw;
  border: 0.5px ${({ theme }) => theme.secondary} solid;

  :last-child {
    display: none;
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <DetailContainer>
        <span className="title">{project.name}</span>
        <div className="description">{project.description}</div>
        <StackContainer>
          {project.techStack.map((stack, index) => (
            <span key={index}>{stack}</span>
          ))}
        </StackContainer>
        <div className="links">
          <a href={project.githubLink} title="GitHub">
            <FontAwesomeIcon icon={faGithub} className="link" />
          </a>
          <a href={project.demoLink} title="Demo">
            <FontAwesomeIcon icon={faYoutube} className="link" />
          </a>
        </div>
      </DetailContainer>
      <PhotoContainer>
        <img src={project.image} alt="temp" className="project-image" />
      </PhotoContainer>
    </ProjectContainer>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className="title">Projects</h2>
      {data.projects.map((project, index) => (
        <>
          <Project project={project} key={index} />
          <Seperator></Seperator>
        </>
      ))}
    </Section>
  );
};

export default Projects;
