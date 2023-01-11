import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineGoogle,
} from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { auth } from "../../firebase/Config";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  //RevealPassword
  const [revealPassword, setRevealPassword] = useState(false);
  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  // STATE FOR THE LOGIN SECTION
  //for login email
  const [logEmail, setLogEmail] = useState("");
  //for login password
  const [logPassword, setLogPassword] = useState("");

  //Login User Function
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, logEmail, logPassword)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Sign In Successful..");
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  //Login user with google function
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login successful...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <SignIn>
      {isLoading && <Loader />}
      <div className="login">
        <h3>Sign In</h3>
        <div className="signContent">
          <div className="form">
            <form onSubmit={loginUser}>
              <div className="formContent">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={logEmail}
                  onChange={(e) => setLogEmail(e.target.value)}
                />
              </div>
              <div className="formContent">
                <label>Password</label>
                <div className="passwordInput">
                  <input
                    type={revealPassword ? "text" : "password"}
                    required
                    value={logPassword}
                    onChange={(e) => setLogPassword(e.target.value)}
                  />
                  <p onClick={handleRevealPassword}>
                    {revealPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </p>
                </div>
              </div>
              <div className="signInCAL">
                <button type="submit" className="btn loginbtn">
                  Log in
                </button>
                <p className="forget" onClick={() => setModal(true)}>
                  Forgot Password?
                </p>

                <p>
                  Dont have an account?{" "}
                  <b>
                    <Link to="/register">Register</Link>
                  </b>{" "}
                </p>
              </div>
            </form> <br />
            <div className="orPass">
              <hr /> or <hr />
            </div>
            <br />

            <button className="googleSign btn" onClick={googleSignIn}>
              <AiOutlineGoogle color="white" size={25} />
              Login With Google
            </button>
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
      <ResetPassword reveal={modal} hidden={() => setModal(false)} />
    </SignIn>
  );
};

const SignIn = styled.div`
  width: 100%;
  height: 80vh;
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
    align-items: center;
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
      padding: 0.5rem;
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
  .forget {
    cursor: pointer;
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
  .passwordInput {
    position: relative;
    display: flex;
    align-items: center;
    p {
      position: absolute;
      right: 0.8rem;
      top: 0.4rem;
      cursor: pointer;
    }
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
