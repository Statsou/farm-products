import styled, { css } from "styled-components";

const mainStyle = css`
  display: block;
  padding: 0;
  margin: 0 auto;
`;

export const Main = styled.main`
  ${mainStyle}
  min-height: calc(100vh - 181px);
`;

// buy-pages

export const MainOrder = styled.main`
  ${mainStyle}
  height: 808px;
  width: ${(props) => props.theme.pageWidth};
`;
