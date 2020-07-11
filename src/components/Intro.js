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

  /* border: 1px hotpink solid; */
  max-width: 1024px;
  /* height: 55%; */
  width: 70%;
  @media (max-width: 800px) {
    width: auto;
  }
`;

const ProfilePic = styled.div`
  display: flex;
  justify-content: center;
  height: 50%;
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
    /* color: ${(props) => props.theme.textPrimary}; */
    float: left;
  }

  p {
    /* align-self: flex-end; */
    /* margin-left: 1rem; */
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
  }

  h2 {
    font-size: 65px;
    /* font-weight: 450; */
    color: ${({ theme }) => theme.textAccent};
    
  }

  h3 {
    /* margin-left: 1rem; */

  }
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.textAccent};
  background: none;
  border-radius: 2px;
  padding: 8px;
  width: 140px;
  font-size: 20px;
  /* font-weight: 600; */
  transition: 200ms linear;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    /* color: ${({ theme }) => theme.textAccent}; */
    transform: scale(1.05)
  }
`;

const Intro = () => {
  return (
    <Section id="intro">
      <IntroContainer>
        <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic>
        <IntroDeets>
          {/* <p className="words">Hello, my name is</p> */}
          <h2 className="words">Michael Chen</h2>
          <p className="words">Software Engineer | San Francisco, CA</p>
          <h3 className="words">I convert words into magic through my keyboard.</h3>
          <Button>
            <a href="mailto:michaelchengaming@gmail.com">Let's Talk</a>
          </Button>
        </IntroDeets>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
