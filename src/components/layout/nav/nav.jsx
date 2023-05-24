import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { useLocation } from "react-router-dom";
import { StyledButton } from "./style";

const buttons = [
  {
    to: AppRoute.MAIN,
    item: (
      <StyledButton key={AppRoute.MAIN} link={AppRoute.MAIN} minWidth={260}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    item: (
      <Button key={AppRoute.ORDER} link={AppRoute.ORDER} minWidth={260}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <nav>
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.item)}
      </nav>
    </nav>
  );
}

export default Nav;
