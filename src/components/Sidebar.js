import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Wrapper>
      <Nav>
        <>
          {" "}
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Alberta"
              activeStyle={{ color: "black" }}
            >
              Alberta
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1 to="/vaccinepage/BC" activeStyle={{ color: "black" }}>
              British Columbia
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Manitoba"
              activeStyle={{ color: "black" }}
            >
              Manitoba
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/NewBrunswick"
              activeStyle={{ color: "black" }}
            >
              New Brunswick
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1 to="/vaccinepage/NL" activeStyle={{ color: "black" }}>
              Newfoundland and Labrador
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/NovaScotia"
              activeStyle={{ color: "black" }}
            >
              Nova Scotia
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Nunavut"
              activeStyle={{ color: "black" }}
            >
              Nunavut
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Ontario"
              activeStyle={{ color: "black" }}
            >
              Ontario
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1 to="/vaccinepage/PEI" activeStyle={{ color: "black" }}>
              Prince Edward Island
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Quebec"
              activeStyle={{ color: "black" }}
            >
              Quebec
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Saskatchewan"
              activeStyle={{ color: "black" }}
            >
              Saskatchewan
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1
              to="/vaccinepage/Yukon"
              activeStyle={{ color: "black" }}
            >
              Yukon
            </StyledLink1>
          </Wrapper1>
          <Wrapper1>
            <StyledLink1 to="/vaccinepage/NWT" activeStyle={{ color: "black" }}>
              Northwest Territories
            </StyledLink1>
          </Wrapper1>
        </>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  color: white;
  width: 15%;
  background-color: #d7e4f7;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    color: white;
    width: 22%;
    background-color: #d7e4f7;
  }
`;
const Wrapper1 = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: flex-start;
  border: 1px solid lightgrey;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink1 = styled(NavLink)`
  border: 1px solid transparent;
  border-radius: 4px;
  color: #424040;

  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  height: 42px;
  margin: 0 0 0 8px;
  padding: 0 14px;
  width: 100%;
  text-decoration: none;

  transition: all ease 400ms;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover {
    color: #c91830;
  }
  @media (max-width: 1200px) {
    font-weight: bold;
    font-size: 15px;
    margin: 0 0 0 2px;
    padding: 0 2px;
  }
`;

export default Sidebar;
