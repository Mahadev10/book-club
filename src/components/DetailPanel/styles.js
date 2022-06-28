import styled from "styled-components";
import { Pill } from "../../styles";
export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid black;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;
  right: ${({ $stage }) => ($stage === "enter" ? 0 : "-660px")};
  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  /* overscroll-behavior: contain; */
  transition: 400ms;
  @media screen and (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({ $stage }) => ($stage === "enter" ? 0 : "-100vh")};
    right: unset;
    z-index: 3;
  }
`;
export const P = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`;

export const Em = styled.em`
  font-style: italic;
`;

export const ClosedWrapper = styled(Pill)`
  display: ${({ $stage }) => ($stage === "enter" ? "flex" : "none")};
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;
  @media screen and (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`;
export const BG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $stage }) => ($stage === "enter" ? "1" : "0")};
  pointer-events: ${({ $stage }) => ($stage === "leave" ? "none" : "auto")};
  transition: 300ms;
`;

export const Btn = styled.button`
width: 90%;
margin: auto;
margin-top: 20px;
padding: 10px 0px;
display: block;
font-family: "Libre Baskerville", serif;
font-size: 20px;
background-color: #a7e1f8;
cursor: pointer;
`;