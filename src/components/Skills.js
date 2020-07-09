import React from "react";
import styled from "styled-components";
import { skills } from "../assets/data/data.json";

const SkillsContainer = styled.div`
  border: 1px pink solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  /* height: 100vh; */
  /* width: 45%; */
  /* padding-left: 1rem; */
  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    ::after {
      content: "";
      display: block;
      height: 1px;
      width: 300px;
      background-color: ${({ theme }) => theme.textAccent2};
      top: -5px;
      margin-left: 20px;
    }
  }
  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0;
    padding-top: 3rem;
  }
`;

const SkillGrid = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  li {
    ::before {
      content: "⌁ ";
      font-size: 20px;
      /* line-height: 2px; */
      margin-bottom: 3px;
    }
    padding-bottom: 0.5rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2 className="title">Skills</h2>
      <SkillGrid>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;
