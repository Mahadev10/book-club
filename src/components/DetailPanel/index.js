import React from "react";
import { Panel, P, Em, Close, ClosedWrapper, BG } from "./styles";
import Book from "../Book";
const DetailPanel = ({ book, closePanel, state }) => {
  console.log(state);
  return (
    <>
      <BG onClick={closePanel}>
        <Panel $state={state}>
          <ClosedWrapper onClick={closePanel} $state={state}>
            <Close />
          </ClosedWrapper>
          {book && (
            <>
              <Book book={book} isLarge={true} />
              <P>{book.description}</P>
              <P>
                <Em>Published in {book.published}</Em>
              </P>
            </>
          )}
        </Panel>
      </BG>
    </>
  );
};
export default DetailPanel;
