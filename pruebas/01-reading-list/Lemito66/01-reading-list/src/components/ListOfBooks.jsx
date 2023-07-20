import { useState, useEffect } from "react";
import { books } from "../data/books";
import { CardPicture } from "./CardPicture";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GENRES } from "../data/genres";
import { Filter } from "./Filter";
import { OPTIONS } from "../data/options";
import Container from "react-bootstrap/Container";

export function ListOfBooks() {
  const [book, setBook] = useState(books.library);
  const [howManyBooks, setHowManyBooks] = useState(book.length);
  const [listOfReading, setListOfReading] = useState([]);

  const handleDeleteBook = (ISBN) => {
    const newBook = book.filter((book) => book.book.ISBN !== ISBN);
    setBook(newBook);
    setHowManyBooks(newBook.length);
  };

  const handleAddBook = (ISBN) => {
    const index = book.findIndex((book) => book.book.ISBN === ISBN);
    const newBook = book[index];
    const spliceElement = book.splice(index, 1);
    setListOfReading([...listOfReading, newBook]);
    setBook(book);
    setHowManyBooks(book.length);

    console.log(index);
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
        <Filter filterToGenre={filterToGenre} options={OPTIONS} />
      </div>
      <button onClick={() => console.log(book, listOfReading)}>Da clic aqui</button>
      <Container>
      <Row>
        <Col md={10}>
          <div>
            <Row className="g-4">
              {book.map(({ book }) => {
                const { cover, ISBN, title } = book;
                return (
                  <Col key={ISBN} xs={12} md={3}>
                    <div onClick={() => handleAddBook(ISBN)}>
                      <CardPicture cover={cover} />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
        <Col md={2} style={{ border: '1px solid black' }}>
        {listOfReading.map(({ book }) => {
                const { cover, ISBN, title } = book;
                return (
                  <Col key={ISBN} xs={12} md={3}>
                    <div onClick={() => handleAddBook(ISBN)}>
                      <CardPicture cover={cover} />
                    </div>
                  </Col>
                );
              })}
        </Col>
      </Row>
    </Container>
    </>
  );
}
