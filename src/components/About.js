import React from "react";
import styled from "styled-components";
import pic from "../assets/images/headshot.jpg";
import { hobbies } from "../assets/data/data.json";

const AboutSection = styled.section`
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContainer = styled.div`
  display: flex;
  max-width: 1300px;
  justify-content: space-evenly;
  /* border: 1px pink solid; */
  margin: 20vh 0;
  width: 85%;
  .title {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 2rem;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  .small-title {
    font-size: 22px;
    padding: 2rem 0 1rem 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.textSecondary};
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  /* border: 1px pink solid; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  padding-right: 1rem;
  p {
    padding: 5px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }

  ul {
    /* border: 1px cyan solid; */
    display: grid;
    list-style: none;
    grid-template-columns: repeat(2, minmax(140px, 250px));
    margin-top: 0.6rem;
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
`;

const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
  width: 45%;
  /* border: red 1px solid; */
  @media (max-width: 800px) {
    width: 60%;
    align-self: center;
    padding-top: 3rem;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    /* object-fit: cover; */
    border: 2px ${({ theme }) => theme.accent} solid;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer data-aos="fade-up">
        <Description>
          <h2 className="title tailing-divider">About Me</h2>
          <p>Hi my name is Michael Chen. </p>
          <p>I'm a software engineer based in San Francisco, Ca.</p>
          <p>I am a Flatiron School alumni who loves to build things for the web. </p>
          <h3 className="small-title tailing-divider">Personal Interests</h3>
          <p>When I'm not clacking away on my keyboard, I enjoy doing any of the following:</p>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </Description>

        <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
