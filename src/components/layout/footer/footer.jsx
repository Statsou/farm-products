import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection } from "./style";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <span>Создано 2021</span>
    </StyledSection>
  );
}

export default Footer;
