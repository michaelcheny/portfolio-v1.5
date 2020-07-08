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
  border: 1px pink solid;
  width: 70%;
`;
const Description = styled.div`
  border: 1px pink solid;
  display: flex;
  flex-direction: column;
  width: 55%;
  p {
    padding: 0.5rem;
  }
`;
const Skills = styled.div`
  border: 1px pink solid;
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <Description>
          <h2>About Me</h2>
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
          <h2>Skills</h2>
        </Skills>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
