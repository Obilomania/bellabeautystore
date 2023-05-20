import React, { useEffect } from "react";
import styled from "styled-components";
import AbtImg from "../assets/neemoil.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          At our organic store, we believe in the power of natural, wholesome,
          and sustainably sourced products. We are committed to providing our
          customers with the freshest, healthiest, and most delicious organic
          produce, grocery items, and wellness products. Our store is founded on
          the principles of organic farming, which prioritize the use of
          organic, non-GMO, and chemical-free methods to grow and produce food.
          We work closely with local farmers and artisans who share our values,
          ensuring that our products are grown and made with care and respect
          for the environment.
          <br />
          In addition to our commitment to providing high-quality organic
          products, we also strive to create a warm and welcoming shopping
          experience for our customers. Our knowledgeable and friendly staff are
          always available to assist you with any questions or recommendations,
          and we take pride in building meaningful relationships with our
          customers based on trust, transparency, and shared values. <br />
          Thank you for choosing our organic store as your source for fresh,
          wholesome, and sustainable products. We look forward to serving you
          and being a part of your journey towards a healthier, happier, and
          more sustainable life. Visit us today and experience the joy of
          shopping at a true organic store!
        </div>
      </div>
      <div className="missionVision">
        <div className="mission">
          <div className="subHeading">
            <h4>Mission</h4>
          </div>
          <p>
            Our mission is to provide our customers with the highest quality
            organic products, sourced from local and sustainable farms, and to
            promote healthy, sustainable, and mindful living. We are committed
            to offering a diverse selection of organic products, from fresh
            produce to pantry staples, personal care items, and supplements,
            while creating a welcoming and inclusive shopping experience for our
            customers.
          </p>
        </div>
        <div className="vision">
          <div className="subHeading">
            <h4>Vision</h4>
          </div>
          <p>
            Our vision is to be a leading organic store, inspiring and
            empowering our customers to make conscious and sustainable choices
            about their health and lifestyle. We strive to build a community of
            like-minded individuals who share our values of health,
            sustainability, and environmental stewardship, and to create a
            positive impact on the planet and the communities we serve. We
            envision a future where organic and sustainable living is accessible
            to all, and where everyone can enjoy the benefits of healthy,
            wholesome, and 100% orgaic products.
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
    align-items: start;
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
  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 5rem;
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
