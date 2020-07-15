import React from "react";
import styled from "styled-components";
import pic from "../assets/images/headshot.jpg";

const AboutSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutContainer = styled.div`
  display: flex;
  max-width: 1600px;
  justify-content: space-between;
  border: 1px pink solid;
  width: 85%;
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
`;

const PersonalInterest = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  /* height: 50%; */
  width: 45%;
  border: red 1px solid;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    object-fit: cover;
    border: 3px ${({ theme }) => theme.textAccent} solid;
    @media (max-width: 800px) {
      /* margin: auto 0; */
      /* align-self: center;
      justify-self: center; */
      width: 70%;
      /* position: */
    }
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
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
        {/* <PersonalInterest>
          <h2 className="title">Personal Interests</h2>
          <p>jkdsfhasjhf</p>
        </PersonalInterest> */}
        <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
