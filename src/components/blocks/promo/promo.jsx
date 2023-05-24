import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { Description, StyledSection, PromoWrapper } from "./style";

function Promo() {
  return (
    <StyledSection>
      <PromoWrapper>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <Description>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </Description>
      </PromoWrapper>
    </StyledSection>
  );
}

export default Promo;
