import React from "react";
import styled from "styled-components";
import { GiTripleNeedle } from "react-icons/gi";

const Home = () => {
  return (
    <Wrapper>
      <WrapperRow>
        <NeedleIcon>
          <GiTripleNeedle size="30" color="blue" />
        </NeedleIcon>
        <Text>
          Vaccine Forecast Canada shows projected dates of vaccination rates per
          population percentage, by Province in Canada.
        </Text>{" "}
      </WrapperRow>
      <WrapperRow>
        <NeedleIcon>
          <GiTripleNeedle size="30" color="blue" />
        </NeedleIcon>
        <Text>
          The projected dates are calculated using a rolling average of the last
          7 days of vaccine administration (first dose) - by Province.{" "}
        </Text>{" "}
      </WrapperRow>
      <WrapperRow>
        <NeedleIcon>
          <GiTripleNeedle size="30" color="blue" />
        </NeedleIcon>
        <Text>
          Vaccination data is taken from the API documentation for the COVID-19
          Canada Open Data Working Group dataset https://opencovid.ca/api/
        </Text>
      </WrapperRow>
    </Wrapper>
  );
};

const NeedleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10px;
  width: 100px;
  margin-right: 20px;
`;

const WrapperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  padding-right: 160px;
  height: 100px;
  width: 100%;

  @media (max-width: 600px) {
    margin-top: 80px;
    padding-left: 20px;
    padding-right: 0px;
    min-width: 400px;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  height: 10px;

  font-size: 17px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    color: black;

    align-items: center;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  width: 100%;

  font-size: 20px;
  padding-top: 40px;
`;

export default Home;
