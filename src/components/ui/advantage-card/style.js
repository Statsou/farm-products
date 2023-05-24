import styled from "styled-components";
import Title from "../../ui/title/title";

export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: 56px 233px 1fr;
  grid-template-rows: 25px 27px 1fr;
  grid-template-areas:
    "icon mark ."
    "icon title ."
    "description description description";
  column-gap: ${(props) => props.theme.indent};
  row-gap: 4px;
  width: 500px;
  min-height: 157px;
  padding: 20px;
`;

export const Icon = styled.img`
  grid-area: icon;
`;

export const Description = styled.p`
  text-align: left;
  margin: 16px 0 0;
  grid-area: description;
`;

export const StyledTitle = styled(Title)`
  grid-area: title;
  justify-self: left;
`;
