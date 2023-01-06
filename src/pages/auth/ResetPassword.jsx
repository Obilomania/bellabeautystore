import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import styled from "styled-components";

const ResetPassword = ({ reveal, hidden }) => {
  const [email, setEmail] = useState("");
  if (!reveal) {
    return null;
  }

  const resetPassword = (e) => {
    e.preventDefault();
  };
  return (
    <Reset>
      <div className="resetContainer">
        <div className="resetOverlay" onClick={hidden}></div>
        <div className="reset">
          <GrPowerReset size={80} color="#2c0355" />
          <form action="" onSubmit={resetPassword}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Reset Password</button>
          </form>
          <h2 onClick={hidden}>X</h2>
        </div>
      </div>
    </Reset>
  );
};
const Reset = styled.div`
  width: 100%;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  .resetContainer {
    opacity: 1;
    display: block;
    transition: 500ms all ease-in-out;
  }
  .hideResetContainer {
    opacity: 0;
    display: none;
    transition: 500ms all ease-in-out;
  }
  .reset {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 25rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 2;
    transition: 400ms all ease-in-out;
  }
  h2 {
    cursor: pointer;
    color: #2c0355;
    border: 1px solid #2c0355;
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    transition: 400ms all ease-in-out;
  }
  h2:hover {
    cursor: pointer;
    color: white;
    background: var(--primary);
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
  }
  .resetOverlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 2;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  form input {
    width: 20rem;
    padding: 0.6rem;
    border-radius: 0.5rem;
    border: 1px solid #2c0355;
  }
  form input::placeholder {
    color: #2c0355;
  }
  form button {
    background: var(--primary);
    color: white;
    width: 20rem;
    padding: 0.6rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;
export default ResetPassword;
