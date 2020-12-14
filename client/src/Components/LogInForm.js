import React from "react";
import styled from "styled-components";

const LogIn = () => {
  return (
    <Wrapper>
      <LogInForm>
        <Title>Log In Form</Title>
        <TextAreaE placeholder="Email"></TextAreaE>
        <TextAreaP placeholder="PassWord"></TextAreaP>
        <LogInButton>Log In</LogInButton>
      </LogInForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  border: solid;
  border-radius: 5px;
  width: 500px;
  height: 180px;
  margin-left: 32%;
  padding: 10px;
`;

const LogInForm = styled.div`
  align-items: center;
`;

const Title = styled.div`
  padding-bottom: 10px;
`;

const TextAreaE = styled.input`
  height: 20px;
  border-color: black;
  border-radius: 5px;
  width: 80%;
  margin-bottom: 10px;
`;

const TextAreaP = styled.input`
  height: 20px;
  border-color: black;
  border-radius: 5px;
  width: 80%;
  margin-bottom: 10px;
`;

const LogInButton = styled.button`
  width: 200px;
  margin-bottom: 10px;
`;

export default LogIn;
