import React from "react";
import styled from "styled-components";
import pic from "../assets/images/me.jpg";

const Section = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms;
`;

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 1px hotpink solid;
  max-width: 1024px;
  height: 50%;
  width: 70%;
`;

const ProfilePic = styled.div`
  /* background: url(${pic}); */
  /* object-fit: scale-down; */
  height: 50%;
  img{
    max-width:100%;
    max-height:100%;
    border-radius: 100%;
    object-fit: cover;
    border: 1px green solid;
  }
`;

const Intro = () => {
  return (
    <Section>
      <IntroContainer>
        <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
