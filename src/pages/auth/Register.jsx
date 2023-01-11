import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/Config";
import Loader from "../../components/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  // STATE FOR THE REGISTRATION SECTION
  const [isLoading, setIsLoading] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  //For the Email
  const [email, setEmail] = useState("");
  //For the Password
  const [password, setPassword] = useState("");
  //For the Confirm Password
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password does not match");
    } else if (!password || !confirmPassword) {
      toast.error("Please enter Password");
    }
    else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // const user = userCredential.user;
          setIsLoading(false);
          toast.success("Registration Successful..");
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });
    }
  };

  return (
    <SignUp>
      {isLoading && <Loader />}
      <div className="register">
        <h3>Register</h3>
        <div className="regContent">
          <div className="imageBG">
            <LazyLoadImage
              alt="register"
              effect="blur"
              src="https://risingsunopp.org/wp-content/uploads/doors.jpg"
            />
          </div>
          <form action="" onSubmit={registerUser}>
            <div className="formContent">
              <label htmlFor="">Email:</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="formContent">
              <label htmlFor="">Password:</label>
              <div className="passwordInput">
                <input
                  type={revealPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="formContent">
              <label htmlFor="">Confirm Password:</label>
              <div className="passwordInput">
                <input
                  type={revealPassword ? "text" : "password"}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button type="submit" className="btn regBtn">
              Register
            </button>
            <p>
              Have an Account?{" "}
              <b>
                <Link to="/login">Log In</Link>
              </b>
            </p>
          </form>
        </div>
      </div>
    </SignUp>
  );
};

const SignUp = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1rem 10rem;
  h3 {
    text-align: center;
  }
  .regContent {
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: auto;
    padding-top: 3rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }
  p,
  a {
    color: var(--primary);
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
  .regBtn {
    font-size: 1rem;
    font-weight: bold;
    width: 25rem;
    margin: 0.5rem 0;
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
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 60vh;
    padding: 1rem;
    overflow: hidden;
    h3 {
      text-align: center;
    }
    .regContent {
      width: 358px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: auto;
      padding-top: 3rem;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
    p,
    a {
      color: var(--primary);
      font-size: 0.7rem;
    }
    .formContent {
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
    .regBtn {
      font-size: 1rem;
      font-weight: bold;
      width: 358px;
      margin: 0.5rem 0;
    }
    .imageBG {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 80vh;
    padding: 1rem;
    h3 {
      text-align: center;
    }
    .regContent {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: auto;
      padding-top: 3rem;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
    p,
    a {
      color: var(--primary);
    }
    .formContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      label {
        color: var(--primary);
      }
      input {
        width: 358px;
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: 1px solid var(--primary);
      }
    }
    .regBtn {
      font-size: 1rem;
      font-weight: bold;
      width: 100%;
      margin: 0.5rem 0;
    }
    .imageBG {
      display: none;
    }
  }
`;

export default Register;
