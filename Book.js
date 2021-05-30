import React from "react";
const Book = ({ img, Name, author, Price, StockL, StockO }) => {
  //const { img, Name, author, Price } = props; // alt props.book against book={book}

  // const clickHandler = () => {
  //   alert("Hi");
  // };

  return (
    <article className="books">
      <img src={img} alt="" />
      <h3>{Name}</h3>
      <h4>{author}</h4>
      <h4>{Price}</h4>

      <button type="button">Add to Cart</button>
      <h4 className="Limit">{StockL}</h4>
      <h4 className="Out">{StockO}</h4>
    </article>
  );
};

export default Book;
