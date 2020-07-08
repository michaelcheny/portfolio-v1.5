import React from "react";
import styled from "styled-components";
import pic from "../assets/images/headshot.jpg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  /* content */

  border: 1px hotpink solid;
  max-width: 1024px;
  /* height: 55%; */
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

const IntroDeets = styled.div`
  /* border: red 1px solid; */
  /* height: 50%; */
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 5rem;
  padding-bottom: 3rem;
  /* align-items: center; */
  justify-content: center;

  .words {
    padding: 0.5rem 0;
    color: ${(props) => props.theme.textPrimary};
    float: left;
  }

  p {
    font-size: 20px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    /* font-weight: 500; */
  }
`;

const Intro = () => {
  return (
    <Section>
      <IntroContainer>
        <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic>
        <IntroDeets>
          <p className="words">Hello, my name is</p>
          <h2 className="words">Michael Chen.</h2>
          <h3 className="words">I convert words into magic through my keyboard.</h3>
        </IntroDeets>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
