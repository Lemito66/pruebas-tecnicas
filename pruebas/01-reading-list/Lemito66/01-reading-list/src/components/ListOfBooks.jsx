import { useState, useEffect } from "react";
import { books } from "../data/books";
import { BasicExample } from "./CardInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ListOfBooks() {
  
  const [book, setBook] = useState(books.library);
  const [howManyBooks, setHowManyBooks] = useState(book.length);

  const handleDeleteBook = (ISBN) => {
    const newBook = book.filter((book) => book.book.ISBN !== ISBN);
    setBook(newBook);
    setHowManyBooks(newBook.length);
  };
  return (
    <>
      <h1>Lista de libros</h1>
      <h2>Hay {howManyBooks} libros en la lista</h2>
      <button onClick={() => console.log(book)}>Da clic aqui</button>
      <Row className="g-4">
        {book.map(({ book }) => {
          const { cover, ISBN, title } = book;
          return (
            <Col key={ISBN} xs={12} md={4}>
              <div onClick={() => handleDeleteBook(ISBN)}>
                <BasicExample cover={cover} />
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
