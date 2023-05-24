import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1100px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};

  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;
