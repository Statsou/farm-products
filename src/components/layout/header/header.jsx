import React from "react";
import { StyledSection } from "./style";
import Logo from "/src/components/ui/logo/logo";
import Nav from "../nav/nav";

function Header() {
  return (
    <StyledSection as="header">
      <Logo />
      <Nav />
    </StyledSection>
  );
}

export default Header;
