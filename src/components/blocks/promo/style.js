import styled from "styled-components";
import { Section } from "/src/components/styled";
import promoImage from "/src/assets/promo-image.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const Description = styled(Paragraph)`
  margin-top: 24px;
  padding: 0;
  max-width: 538px;
`;

export const PromoWrapper = styled.div`
  text-align: left;
`;

export const StyledSection = styled(Section)`
  position: relative;
  width: 637px;
  margin: 0 auto;
  padding: 183px 553px 183px 90px;
  background-color: #d8ecfe;

  &::before {
    position: absolute;
    top: 34px;
    bottom: 0;
    right: 177px;
    left: auto;

    width: 273px;
    height: 608px;

    background-repeat: no-repeat;
    background-image: url(${promoImage});
    content: "";
    z-index: 2;
  }

  &::after {
    position: absolute;
    top: 76px;
    bottom: 0;
    right: 90px;
    left: auto;

    bottom: auto;
    width: 446px;
    height: 447px;
    border-radius: 50%;
    background-color: #c4e2ff;
    content: "";
    z-index: 1;
  }
`;
