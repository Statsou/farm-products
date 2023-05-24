import React from "react";
import { StyledMark } from "./style";

export const typeShop = {
  RETAIL: "retail",
  FERMER: "fermer"
};

function Mark({ shop }) {
  let options;

  switch (shop) {
    case typeShop.RETAIL:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531"
      };
      break;
    case typeShop.FERMER:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return (
    <StyledMark style={{ backgroundColor: options.bgColor }}>
      {options.text}
    </StyledMark>
  );
}

export default Mark;
