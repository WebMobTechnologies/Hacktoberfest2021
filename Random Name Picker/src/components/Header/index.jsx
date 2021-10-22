import React from "react";
import { Container } from "./styles";
import { InternalLinkHome, InternalLink } from "../../styles";

const Header = () => (
  <Container>
    <InternalLinkHome to="/">Home</InternalLinkHome>
    {localStorage.length > 0 && (
      <InternalLink to="/list">Back to list</InternalLink>
    )}
  </Container>
);

export default Header;
