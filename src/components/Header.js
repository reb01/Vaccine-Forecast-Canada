import React from "react";
import styled from "styled-components";
import logo from "./title.png";
import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <Logo to="/">
        <Img
          src={logo}
          alt="Logo"
          onClick={() => {
            history.push("/");
          }}
        />
      </Logo>
    </HeaderWrapper>
  );
};

export default Header;

const Logo = styled.div`
  cursor: pointer;
  @media (max-width: 510px) {
  }
`;
const Img = styled.img`
  width: 450px;
  @media (max-width: 510px) {
    width: 300px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid #1d194a;
  color: white;
  background-color: #1d194a;
  @media (max-width: 560px) {
    min-width: 560px;
  }
`;
