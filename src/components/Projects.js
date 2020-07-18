import React from "react";
import styled from "styled-components";
import data from "../assets/data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .main-title {
    margin-bottom: 5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20vh 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* margin: 2.5rem 0; */
  /* border: blue 1px solid; */
  width: 70vw;
  max-width: 1200px;
  /* height: 40vh; */

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    /* margin: 2rem 0; */
    /* padding-top: 5rem; */
    /* margin: 2.5rem 0; */
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
    /* margin-bottom: 1rem */
    font-size: 1.5rem;
    @media (max-width: 800px) {
      padding-top: 1.25rem;
    }
  }
  .description {
    /* color: ${(props) => props.theme.textSecondary}; */
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
        color: ${(props) => props.theme.textSecondary};
        transform: scale(1.8);
      }
    }
    @media (max-width: 800px) {
      margin-top: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    max-width: 80%;
  }
`;

const StackContainer = styled.div`
  margin-top: 0.8rem;
  span {
    /* background-color: ${(props) => props.theme.ternary}; */
    /* color: ${(props) => props.theme.secondary}; */
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
  /* float: right; */
  align-self: center;
  display: flex;
  justify-content: center;
  .project-image {
    object-fit: cover;
    /* max-width: 100%; */
    max-width: 400px;
    /* max-height: auto; */
    @media (max-width: 800px) {
      /* object-fit: contain; */

      /* min-width: 300px; */
      /* transform: scale(1.25); */
      /* margin: 1rem; */
    }
    /* &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    } */
  }
  @media (max-width: 900px) {
    max-width: 70%;
    /* width: 500px; */
    /* max-height: auto; */
  }
`;

const Seperator = styled.hr`
  width: 70vw;
  border: 0.3px ${({ theme }) => theme.secondary} solid;
  margin: 2.5rem 0;
  :last-child {
    display: none;
  }
`;

const Project = ({ project }) => {
  return (
    <ProjectContainer>
      <DetailContainer>
        {/* <span className="title">{project.name}</span> */}
        <h2 className="title">{project.name}</h2>
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
      <Wrapper data-aos="fade-up">
        {/* <Title className="header">Projects</Title> */}
        <h2>Projects</h2>
        <div className="divider main-title"></div>
        {data.projects.map((project, index) => (
          <>
            <Project project={project} key={index} />
            <Seperator></Seperator>
          </>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Projects;
