import React, { useEffect } from "react";
import styled from "styled-components";
import Benefits from "../pageSections/benefits/Benefits";
import FaqSection from "../pageSections/FaqSection";
import FeaturedProducts from "../pageSections/FeaturedProducts";
import HomeLandingSlider from "../pageSections/HomeSlider/HomeLandingSlider";
import Review from "../pageSections/Review";

const Home = () => {
  const url = window.location.href;
  const scrollToProduct = () => {
    if (url.includes("#Faq")) {
      window.scrollTo({
        top: 1900,
        behavior: "smooth",
      });
      return;
    }
  };
  useEffect(() => {
    scrollToProduct();
  }, []);

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
