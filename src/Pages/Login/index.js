import React from 'react';
import Button from '../../Components/Button';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }

`
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  flex: 1;
  margin-left: 10px;
  color: #f03d4e;
  /* margin-bottom: 0.9rem; */
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

const Wrap = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  span{
    width: 100px;
  }
`

const Title = styled.h1`
    font-size : 2.5em;
    text-align : center;
    color : grey;
`
const Login = () => {
  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <Form>
        <Title>Login</Title>
        <Wrap>
          <span>Email</span> 
        <Input
            type="email"
            name="email"
          />
        </Wrap>
        <Wrap>
          <span>Password</span>
          <Input
            type="password"
            name="password"
          />
        </Wrap>
          
        <Button>Sign In</Button>
        <br/>
        <Button>Sign Up</Button>
        </Form>
      </Wrapper>
        </>
  )
}

export default Login