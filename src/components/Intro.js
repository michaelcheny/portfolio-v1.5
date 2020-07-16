import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px hotpink solid; */
  max-width: 1024px;

  @media (max-width: 800px) {
    width: auto;
  }
`;

const IntroDeets = styled.div`
  /* border: red 1px solid; */
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  justify-content: center;

  p {
    margin-top: 1rem;
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
    align-self: center;
  }

  .divider {
    content: "";
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.textAccent2};
    margin: 0.5rem 1rem;
  }

  h2 {
    font-size: 80px;
    font-weight: 900;
    color: ${({ theme }) => theme.textAccent};
  }

  h3 {
    /* margin-left: 1rem; */
    font-weight: 600;
    align-self: center;
    margin: 1rem;
  }
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.textAccent};
  background: none;
  border-radius: 2px;
  padding: 10px;
  width: 140px;
  font-size: 20px;
  /* font-weight: 600; */
  align-self: center;
  transition: 200ms linear;
  margin-top: 1.6rem;
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
        {/* <ProfilePic>
          <img src={pic} alt="profile pic" />
        </ProfilePic> */}
        <IntroDeets>
          {/* <p className="words">Hello, my name is</p> */}
          <h2>Michael Chen</h2>
          <div className="divider"></div>
          <p>Software Engineer | San Francisco, CA</p>
          {/* <h3>I convert words into magic through my keyboard.</h3> */}
          <Button>
            <a href="mailto:michaelchengaming@gmail.com">Let's Talk</a>
          </Button>
        </IntroDeets>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
