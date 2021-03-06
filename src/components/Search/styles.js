import styled from "styled-components";
import { Pill } from "../../styles";
import { ReactComponent as MagnifyingIcon } from "../../img/search.svg";
export const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "20px")};
  transition: 300ms;
  input,
  button {
      display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};
      @media (max-width:800px){
        display: block;
    }
  }
  @media (max-width:800px){
      width: 85%;
  }
`;
export const Input = styled.input`
  font-family: "work Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
  outline: none;
`;

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
@media (max-width:800px) {
    background-color: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100vw;
    left: 0;
    bottom: 0;
    position:fixed;
    z-index: 1;
}
`;