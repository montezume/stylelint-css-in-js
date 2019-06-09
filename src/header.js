import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  width: 100%;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: centrre;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
`;

const Header = props => (
  <StyledHeader>
    <StyledH1>{props.children}</StyledH1>
  </StyledHeader>
);

export default Header;
