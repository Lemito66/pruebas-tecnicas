import { useState, useEffect } from "react";
import { books } from "../data/books";
import { BasicExample } from "./CardInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ListOfBooks() {
  return (
    <>
      <h1>Lista de libros</h1>
      <Row className="g-4">
        {books.library.map(({ book }) => {
          const { cover, ISBN, title } = book;
          return (
            <Col key={ISBN} xs={12} md={4}>
              <BasicExample cover={cover} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
