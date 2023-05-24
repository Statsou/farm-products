import React from "react";
import Mark from "/src/components/ui/card-mark/card-mark";
import { TitleSize } from "../../ui/title/title";
import { StyledArticle, Icon, Description, StyledTitle } from "./style";

const typeCard = {
  FERMER: "fermer",
  RETAIL: "retail"
};

function AdvantageCard({ src, alt, shop, title, description, type }) {
  let options;

  switch (type) {
    case typeCard.RETAIL:
      options = {
        bgColor: "#F8DDD7"
      };
      break;
    case typeCard.FERMER:
      options = {
        bgColor: "#E1EDCE"
      };
      break;
    default:
      options = {
        bgColor: "#000"
      };
      break;
  }

  return (
    <StyledArticle style={{ backgroundColor: options.bgColor }}>
      <Icon src={src} width={56} height={56} alt={alt} />
      <Mark shop={shop} />
      <StyledTitle as="h3" size={TitleSize.EXTRA_SMALL}>
        {title}
      </StyledTitle>
      <Description>{description}</Description>
    </StyledArticle>
  );
}

export default AdvantageCard;
