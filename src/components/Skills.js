import React from "react";
import styled from "styled-components";
import { skills } from "../assets/data/data.json";

const SkillsSection = styled.div`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillsContainer = styled.div`
  /* border: 1px pink solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;
  margin: 20vh 0;
  /* height: 100vh; */
  width: 85%;
  /* padding-left: 1rem; */
  /* .title {
    width: 100%
    font-size: 2rem;
    padding-bottom: .3rem;
    display: flex;
    align-items: center; */
    /* ::after {
      content: "";
      display: block;
      height: 1px;
      width: 400px;
      background-color: ${({ theme }) => theme.textAccent};
      top: -5px;
      margin-left: 20px;
      @media (max-width: 800px) {
        width: 200px;
      }
    } */

    @media (max-width: 800px) {
      padding: 0;
    }
  /* } */

  ul {
    /* border: 1px cyan solid; */
    display: grid;
    list-style: none;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    /* margin: 0 2rem; */
    padding-left: 2rem;
    li {
      ::before {
        content: "⌁ ";
        font-size: 20px;
        /* line-height: 2px; */
        margin-bottom: 2px;
      }
      padding-bottom: 5px;
    }
  }

  @media (max-width: 900px) {
    /* width: 100%; */
    padding-left: 0;
    padding-top: 3rem;
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer data-aos="fade-up">
        <h2>Technical Skills</h2>
        <div className="divider"></div>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
