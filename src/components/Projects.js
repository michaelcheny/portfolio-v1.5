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
  width: 70vw;
  max-width: 1200px;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
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
    margin-top: 1rem;
    /* align-self: center; */
    .link {
      transform: scale(1.5);
      margin-right: 1.5rem;
      color: ${({ theme }) => theme.textSecondary};
      transition: 150ms linear;
      &:hover {
        color: ${(props) => props.theme.accent};
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
  /* margin-top: 0.8rem; */
  span {
    /* background-color: ${(props) => props.theme.ternary}; */
    /* color: ${(props) => props.theme.secondary}; */
    /* padding: 5px 10px; */
    font-size: 15px;
    border-radius: 3px;
    margin-top: 0.8rem;
    margin-right: 1rem;
  }
    @media (max-width: 800px) {
      margin-top: 0.25rem;
    }
`;

const PhotoContainer = styled.div`
  width: 50%;
  align-self: center;
  display: flex;
  justify-content: center;
  /* opacity: 0.2; */
  /* z-index: 2; */
  position: relative;
  .project-image {
    object-fit: contain;
    max-width: 350px;
    @media (max-width: 800px) {
      /* object-fit: contain; */

      max-width: 300px;
      /* transform: scale(1.25); */
      /* margin: 1rem; */
    }
  }

  @media (max-width: 800px) {
    max-width: 80%;
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
