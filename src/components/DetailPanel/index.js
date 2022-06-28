import React from "react";
import { Panel, P, Em, ClosedWrapper, BG, Btn} from "./styles";
import { Close } from "../../styles";
import Book from "../Book";
const DetailPanel = ({ book, closePanel, stage }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <BG onClick={closePanel} $stage={stage}/>
        <Panel $stage={stage} onClick={(e)=>{e.preventDefault();}}>
          <ClosedWrapper onClick={closePanel} $stage={stage}>
            <Close />
          </ClosedWrapper>
          {book && (
            <>
              <Book book={book} isLarge={true} />
              <P>{book.description}</P>
              <P>
                <Em>Published in {book.published}</Em>
              </P>
              {book.link?<Btn onClick={()=>openInNewTab(book.link)}>You can buy the book here</Btn>:''}
            </>
          )}
        </Panel>
    </>
  );
};
export default DetailPanel;
