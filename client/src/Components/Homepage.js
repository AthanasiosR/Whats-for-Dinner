import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Tiltle>Welcome To What's for Dinner</Tiltle>
        <Paragraph>Where we help you choose What and Where to eat!!</Paragraph>

        <SecondParagraph>
          Click <StyledNavLink to="/restaurantlist">here</StyledNavLink> to see
          what you'll be eating tonight
        </SecondParagraph>
        <Guest></Guest>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding-top: 50px;
  text-align: center;
  /* background-color: #ba55d3; */
  height: 800px;
  font-family: Garamond;
  font-size: 20px;
`;

const Tiltle = styled.div`
  font-size: 50px;
`;

const Paragraph = styled.div`
  align-items: center;
  font-size: 40px;
  padding: 10px;
`;

const SecondParagraph = styled.div`
  font-size: 30px;
`;

const Guest = styled.div``;

const StyledNavLink = styled(NavLink)`
  color: black;
`;

export default Homepage;
