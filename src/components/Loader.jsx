import React from "react";
import styled from "styled-components";
import Spinner from "../assets/Spinner.gif";

const Loader = () => {
  return (
    <Load>
      <div class="loader">
        <img src={Spinner} alt="" />
      </div>
    </Load>
  );
};

const Load = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  .loader {
    background: var(--lightVariant);
    width: 100%;
    height: 100vh;
    img {
      width: 10%;
      z-index: 3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
export default Loader;
