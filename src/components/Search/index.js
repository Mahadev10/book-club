import React from "react";
import { SearchContainer, Input, Icon, Wrapper } from "./styles";
import { Close } from "../../styles";
import { debounce } from "lodash-es";
import { useRef, useState } from "react";
const Search = ({ filterBooks }) => {
  const input = useRef();
  const [showOnDesktop, setShowOnDesktop] = useState(false);
  const handleChange = debounce((e) => {
    filterBooks(e.target.value);
  }, 500);
  const clearInput = (e) => {
    filterBooks("");
    input.current.value = "";
    setShowOnDesktop(false);
  };
  const showSearch = () => {
    setShowOnDesktop(true);
  };
  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input
          ref={input}
          type="text"
          name="search"
          autoComplete="off"
          onChange={handleChange}
        />
        <Close onClick={clearInput} />
      </SearchContainer>
    </Wrapper>
  );
};

export default Search;
