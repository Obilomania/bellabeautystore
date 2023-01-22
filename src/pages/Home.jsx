import React from "react";
import styled from "styled-components";
import Benefits from "../pageSections/benefits/Benefits";
import FaqSection from "../pageSections/FaqSection";
import FeaturedProducts from "../pageSections/FeaturedProducts";
import HomeLandingSlider from "../pageSections/HomeSlider/HomeLandingSlider";
import Review from "../pageSections/Review";

const Home = () => {
  return (
    <Land>
      <HomeLandingSlider />
      <FeaturedProducts />
      <Benefits />
      <FaqSection />
      <Review />
    </Land>
  );
};

const Land = styled.div`
  width: 100%;
  height: fit-content;
`;

export default Home;
