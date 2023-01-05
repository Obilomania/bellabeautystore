import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <SignIn>
      <div className="login">
        <h3>Sign In</h3>
        <div className="signContent">
          <div className="form">
            <form action="">
              <div className="formContent">
                <label>Email</label>
                <input type="text" required />
              </div>
              <div className="formContent">
                <label>Password</label>
                <input type="Password" required />
              </div>
              <div className="signInCAL">
                <button type="submit" className="btn loginbtn">
                  Log in
                </button>
                <p>
                  <Link to="/reset-password">Forgot Password?</Link>
                </p>
                <div className="orPass">
                  <hr /> or <hr />
                </div>
                <button className="googleSign btn">
                  <AiOutlineGoogle color="white" size={25} />
                  Login With Google
                </button>
                <p>
                  Dont have an account?{" "}
                  <b>
                    <Link to="/register">Register</Link>
                  </b>{" "}
                </p>
              </div>
            </form>
          </div>
          <div className="imageBG">
            <LazyLoadImage
              alt="signIn"
              effect="blur"
              src="https://risingsunopp.org/wp-content/uploads/doors.jpg"
            />
          </div>
        </div>
      </div>
    </SignIn>
  );
};

const SignIn = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  h3 {
    text-align: center;
  }
  .login {
    width: 100%;
    padding: 1rem 10rem;
  }
  .signContent {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 3rem;
  }
  .imageBG {
    height: 60vh;
    overflow: hidden;
    img {
      width: 100%;
      height: 60vh;
      object-fit: cover;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .formContent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      color: var(--primary);
    }
    input {
      width: 25rem;
      padding: 1rem;
      border-radius: 0.3rem;
      border: 1px solid var(--primary);
    }
  }
  .signInCAL .loginbtn {
    font-size: 1rem;
    font-weight: bold;
    width: 25rem;
    margin-bottom: 0.5rem;
  }
  .googleSign {
    background-color: red;
    font-size: 1rem;
    font-weight: bold;
    width: 25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    &:hover {
      color: var(--white);
    }
  }
  .orPass {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  hr {
    background: var(--background);
    width: 100%;
    height: 1px;
  }
  p,
  a {
    color: var(--primary);
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 70vh;
    position: relative;
    .login {
      width: 100%;
      padding: 1rem;
    }
    .signContent {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: auto;
      padding-top: 3rem;
    }
    .imageBG {
      display: none;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .formContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        color: var(--primary);
      }
      input {
        width: 25rem;
        padding: 1rem;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
    .signInCAL .loginbtn {
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      margin-bottom: 0.5rem;
    }
    .googleSign {
      background-color: red;
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
      &:hover {
        color: var(--white);
      }
    }
    .orPass {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    hr {
      background: var(--background);
      width: 100%;
      height: 1px;
    }
    p,
    a {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 70vh;
    position: relative;
    .login {
      width: 100%;
      padding: 1rem;
    }
    .signContent {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: auto;
      padding-top: 3rem;
    }
    .imageBG {
      display: none;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .formContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        color: var(--primary);
      }
      input {
        width: 25rem;
        padding: 1rem;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
    .signInCAL .loginbtn {
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      margin-bottom: 0.5rem;
    }
    .googleSign {
      background-color: red;
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
      &:hover {
        color: var(--white);
      }
    }
    .orPass {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    hr {
      background: var(--background);
      width: 100%;
      height: 1px;
    }
    p,
    a {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70vh;
    position: relative;
    .login {
      width: 100%;
      padding: 1rem;
    }
    .signContent {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: auto;
      padding-top: 3rem;
    }
    .imageBG {
      display: none;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .formContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        color: var(--primary);
      }
      input {
        width: 25rem;
        padding: 1rem;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
    .signInCAL .loginbtn {
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      margin-bottom: 0.5rem;
    }
    .googleSign {
      background-color: red;
      font-size: 1rem;
      font-weight: bold;
      width: 25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
      &:hover {
        color: var(--white);
      }
    }
    .orPass {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    hr {
      background: var(--background);
      width: 100%;
      height: 1px;
    }
    p,
    a {
      color: var(--primary);
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 70vh;
    position: relative;
    .login {
      width: 100%;
      padding: 1rem;
    }
    .signContent {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0;
      padding-top: 3rem;
    }
    .imageBG {
      display: none;
    }
    form {
      width: 358px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    .formContent {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        color: var(--primary);
        font-size: 0.7rem;
      }
      input {
        width: 358px;
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
    .signInCAL .loginbtn {
      font-size: 0.7rem;
      font-weight: bold;
      width: 358px;
      margin-bottom: 0.5rem;
    }
    .googleSign {
      background-color: red;
      font-size: 0.7rem;
      font-weight: bold;
      width: 358px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
      &:hover {
        color: var(--white);
      }
    }
    .orPass {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    hr {
      background: var(--background);
      width: 100%;
      height: 1px;
    }
    p,
    a {
      color: var(--primary);
      font-size: 0.7rem;
    }
  }
`;
export default Login;
