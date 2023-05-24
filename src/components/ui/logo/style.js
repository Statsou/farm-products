import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  width: 398px;
  height: 44px;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;
