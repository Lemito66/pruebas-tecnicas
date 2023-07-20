import { useState, useEffect } from "react";
import { books } from "../data/books";
import { BasicExample } from "./CardInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { GENRES } from "../data/genres";

export function ListOfBooks() {
  const [book, setBook] = useState(books.library);
  const [howManyBooks, setHowManyBooks] = useState(book.length);

  const handleDeleteBook = (ISBN) => {
    const newBook = book.filter((book) => book.book.ISBN !== ISBN);
    setBook(newBook);
    setHowManyBooks(newBook.length);
  };

  const filterToGenre = (genre) => {
    if (genre === "1") {
      setBook(books.library);
      setHowManyBooks(books.library.length);
      return;
    }
    const newBook = books.library.filter(
      (book) => book.book.genre === GENRES[genre]
    );
    setBook(newBook);
    setHowManyBooks(newBook.length);
  };
  return (
    <>
      <h1>Lista de libros</h1>
      <h2>Hay {howManyBooks} libros en la lista</h2>
      <div>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => filterToGenre(e.target.value)}
        >
          <option value="1">Todas</option>
          <option value="2">Fantasía</option>
          <option value="3">Ciencia Ficción</option>
          <option value="4">Zombies</option>
          <option value="5">Terror</option>
        </Form.Select>
      </div>
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
