import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "/src/components/ui/button/button";
import { Li } from "/src/components/styled";
import { StyledSection, StyledList } from "./style";

function Advantages({ advantages }) {
  return (
    <StyledSection>
      {advantages?.length ? (
        <>
          <Title as="h2" size={TitleSize.MEDIUM}>
            Почему фермерские продукты лучше?
          </Title>
          <StyledList>
            {advantages.map((advantage) => (
              <Li key={advantages.id}>
                <AdvantageCard {...advantage} />
              </Li>
            ))}
          </StyledList>
          <Button minWidth={260} link="/order">
            Купить
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default Advantages;
