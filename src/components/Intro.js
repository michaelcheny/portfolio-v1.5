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
  max-width: 1024px;
  padding-bottom: 5rem;
  @media (max-width: 800px) {
    width: auto;
  }
`;

const IntroDeets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 1rem;
    font-size: 22px;
    font-weight: 500;
    color: ${({ theme }) => theme.textSecondary};
    align-self: center;
  }

  .intro-divider {
    content: "";
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.accent};
    margin: 0.5rem 1rem;
  }

  h3 {
    font-weight: 600;
    align-self: center;
    margin: 1rem;
  }
`;

const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.accent};
  /* border: none; */
  border-radius: 2px;
  padding: 0.8rem 1.6rem;
  /* background-color: ${({ theme }) => theme.accent}; */
  background-color: transparent;
  font-size: 20px;
  align-self: center;
  transition: 200ms linear;
  margin-top: 1.6rem;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.accent};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.accent};
    /* opacity: 0.85; */
    cursor: pointer;
    transform: scale(1.03);
    a {
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

const Intro = () => {
  return (
    <Section id="intro">
      <IntroContainer data-aos="fade-up">
        <IntroDeets>
          <h1 className="header ">Michael Chen</h1>
          <div className="intro-divider"></div>
          <p>Software Engineer | San Francisco, CA</p>
          {/* <h3>I convert words into magic through my keyboard.</h3> */}
          <Button>
            <a href="mailto:michaelchengaming@gmail.com">Get In Touch</a>
          </Button>
        </IntroDeets>
      </IntroContainer>
    </Section>
  );
};

export default Intro;
