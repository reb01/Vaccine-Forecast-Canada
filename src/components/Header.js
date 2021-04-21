import React from "react";
import styled from "styled-components";
import logo from "./title.png";

const Header = () => {
  return (
    <Wrapper3>
      <Logo to="/">
        <img src={logo} alt="Logo" width="450px" />
      </Logo>
    </Wrapper3>
  );
};

export default Header;

const Logo = styled.div``;
const Wrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  border-bottom: 1px solid #1d194a;
  color: white;
  background-color: #1d194a;
`;
