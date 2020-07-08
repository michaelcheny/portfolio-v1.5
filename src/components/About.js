import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContainer = styled.div`
  display: flex;
  max-width: 1024px;
  justify-content: space-between;
  /* border: 1px pink solid; */
  width: 80%;
  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  /* border: 1px pink solid; */
  display: flex;
  flex-direction: column;
  width: 55%;
  padding-right: 1rem;
  p {
    padding: 5px;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Skills = styled.div`
  /* border: 1px pink solid; */
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 1rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SkillGrid = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  li {
    ::before {
      content: "► ";
      font-size: 13px;
      /* line-height: 2px; */
      margin-bottom: 3px;
    }
    padding-bottom: 0.5rem;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <Description>
          <h2 className="title">About Me</h2>
          <p>My name is Michael Chen and I'm a software engineer based in San Francisco, Ca.</p>
          <p>I am a Flatiron School alumni who loves to build things for the web. I specialize in</p>
          <p>
            When I'm not clacking away on my keyboard, I can be found reading countless tech articles,
            learning new skills, or playing with my dog.
          </p>
          <p>
            Hobbies include: Fishing, powerlifting, video games, cooking, and keyboards(I know.. weird
            right?).
          </p>
        </Description>
        <Skills>
          <h2 className="title">Skills</h2>
          <SkillGrid>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>Ruby</li>
            <li>Ruby on Rails</li>
            <li>Sql</li>
            <li>HTML</li>
            <li>CSS</li>
          </SkillGrid>
        </Skills>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
