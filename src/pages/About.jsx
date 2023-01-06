import React from "react";
import styled from "styled-components";
import AbtImg from "../assets/neemoil.jpg";

const About = () => {
  return (
    <AboutPage>
      <div className="abtContainer">
        <div className="image">
          <img src={AbtImg} alt="" />
        </div>
        <div className="header">
          <h3>About Us</h3>
        </div>
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quidem
          voluptatibus omnis pariatur? Harum nulla est recusandae asperiores
          placeat natus cum. Ipsam amet accusantium natus temporibus velit
          ducimus deserunt vitae commodi. Tenetur, quibusdam. Perferendis modi
          expedita molestiae, id sint explicabo et corporis eveniet soluta,
          perspiciatis, suscipit dolore! Provident, quos. Reiciendis debitis
          quaerat explicabo modi consectetur asperiores neque animi similique
          est illo libero, eaque exercitationem voluptatum vel ea placeat rerum
          deleniti, voluptates enim dolorem consequuntur soluta repudiandae.
          Neque eos vitae impedit quae sint, error consequuntur eius natus!
          Quaerat pariatur corporis libero, nemo architecto iusto unde nam modi
          voluptatum omnis nobis qui!
        </div>
      </div>
      <div className="missionVision">
        <div className="mission">
          <div className="subHeading">
            <h4>Mission</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatum assumenda necessitatibus ipsam, omnis modi sit provident
            sint doloremque incidunt, consectetur neque eaque fugiat nobis
            beatae esse iure sequi, numquam sed minus corporis praesentium
            ducimus? Quas commodi, velit temporibus debitis dolores a, tempora
            nam inventore nostrum, accusantium soluta suscipit optio!
          </p>
        </div>
        <div className="vision">
          <div className="subHeading">
            <h4>Vision</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatum assumenda necessitatibus ipsam, omnis modi sit provident
            sint doloremque incidunt, consectetur neque eaque fugiat nobis
            beatae esse iure sequi, numquam sed minus corporis praesentium
            ducimus? Quas commodi, velit temporibus debitis dolores a, tempora
            nam inventore nostrum, accusantium soluta suscipit optio!
          </p>
        </div>
      </div>
    </AboutPage>
  );
};

const AboutPage = styled.div`
  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .image {
    width: 100%;
    height: 50vh;
    overflow: hidden;
  }
  .header {
    width: 100%;
    height: fit-content;
    background: var(--background);
    h3 {
      text-align: center;
      color: white;
      padding: 1.5rem 0rem;
    }
  }
  .missionVision {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  .mission,
  .vision {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .subHeading {
    width: 100%;
    height: fit-content;
    background: var(--background);
    h4 {
      text-align: center;
      color: white;
      padding: 1rem 0rem;
    }
  }
  @media screen and (max-width: 940px) {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .content {
      font-size: 0.7rem;
    }
    .image {
      margin-top: 4rem;
      width: 100%;
      height: fit-content;
      overflow: hidden;
    }
    .header {
      width: 100%;
      height: fit-content;
      background: var(--background);
      h3 {
        text-align: center;
        color: white;
        padding: 0.3rem 0rem;
      }
    }
    .missionVision {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 1rem;
      p {
        font-size: 0.7rem;
      }
    }
    .mission,
    .vision {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
    }
    .subHeading {
      width: 100%;
      height: fit-content;
      background: var(--background);
      h4 {
        text-align: center;
        color: white;
        padding: 0.2rem 0rem;
      }
    }
  }
`;
export default About;
