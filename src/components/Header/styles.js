import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../../img/logo.svg";

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;
  @media screen and (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;

export const HeaderContainer = styled.header`
  background-color:#ffbccc ;
  border-bottom: 2px solid black;
  padding:20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 3;
  @media screen and (max-width: 880px){
      padding: 20px;
  }
`;
