import React from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <Faq id="Faq">
      <h2 className="text-center">Frequently Asked Questions</h2> <br />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>How long does shipment take ?</b>
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>24 - 72 hours within Nigeria</li>
              <li>7 - 10 working days outside Nigeria</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>How soon can i get a quote ?</b>
          </Accordion.Header>
          <Accordion.Body>Between 15 mins - 90 Mins</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <b>Why are there no prices on the website ?</b>
          </Accordion.Header>
          <Accordion.Body>
            Prices vary and it changes with the Naira to Dollar exchange rate
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <b>Is it payment on Delivery ?</b>
          </Accordion.Header>
          <Accordion.Body>
            <b>NO</b>, Payment Validates Order which means; Orders will be
            shipped after paymet has been made
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <b>Do you give discount ?</b>
          </Accordion.Header>
          <Accordion.Body>
            Yes we do give discounts on bulk orders and in Promo seasons
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Faq>
  );
};

const Faq = styled.div`
  width: 100%;
  height: fit-content;
  padding: 5rem 10rem;
  b {
    color: var(--primary);
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    padding: 2rem 1rem;
  }
`;
export default FaqSection;
