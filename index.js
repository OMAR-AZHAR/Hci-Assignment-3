import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from "./Book";
import Search from "./Search";
//CSS
import "./index.css";

//    OMAR AZHAR MALIK (SP18-BSE-043)- HCI-LAB ASSIGNMENT 3

function Front() {
  return (
    <section className="booklist">
      <Search />
      {books.map((book) => {
        // books is an Array of Books wrt props
        return <Book key={book.id} {...book}></Book>; //{...any} is aka Spread OPerator alt book={book}
      })}
    </section>
  );
}
ReactDom.render(<Front />, document.getElementById("root"));
