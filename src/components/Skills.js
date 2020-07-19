import React from "react";
import styled from "styled-components";
import { BulletList } from "../globalstyles";
import { skills } from "../assets/data/data.json";

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  margin: 20vh 0;

  @media (max-width: 800px) {
    padding: 0;
  }

  @media (max-width: 900px) {
    padding-left: 0;
    padding-top: 3rem;
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer data-aos="fade-up">
        <h2 className="header">Technical Skills</h2>
        <div className="divider"></div>
        <BulletList>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </BulletList>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
