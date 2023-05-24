import styled from "styled-components";
import { Section } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1100px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};

  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
