import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const NavBar = () => {
  return (
    <Wrapper>
      <Title>What's for Dinner?!</Title>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  background-color: #484848;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  color: white;
  font-size: 50px;
  font-family: "Trebuchet MS, sans-serif";
  text-align: left;
  padding-top: 15px;
  padding-left: 10px;
`;

const StyledNavLink = styled.button`
  color: white;
  font-size: 30px;
  font-family: "Brush Script MT", cursive;
  text-align: right;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 40px;
  border: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
