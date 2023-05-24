import styled from "styled-components";

const Section = styled.section`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  text-align: center;
  align-items: center;
`;

export default Section;
