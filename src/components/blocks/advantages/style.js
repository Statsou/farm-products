import styled from "styled-components";
import { Section, Ul } from "/src/components/styled";

export const StyledSection = styled(Section)`
  display: block;
  width: 1100px;
  margin: 0 auto;
`;

export const StyledList = styled(Ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.indent};
  width: 1100px;
  margin-top: 64px;
  margin-bottom: 64px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
`;
