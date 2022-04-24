import React from "react";
import { Logo, HeaderContainer } from "./styles";
const Header = () => {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Book club logo" />
      </a>
    </HeaderContainer>
  );
};
export default Header;
