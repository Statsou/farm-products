import React from "react";
import Advantages from "../../blocks/advantages/advantages";
import Promo from "../../blocks/promo/promo";

function MainPage({ advantages }) {
  return (
    <>
      <Promo />
      <Advantages advantages={advantages} />
    </>
  );
}

export default MainPage;
