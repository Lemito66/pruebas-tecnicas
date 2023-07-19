import { useState, useEffect } from "react";
import { books } from "../data/books";

export function ListOfBooks() {
  return (
    <>
      <h1>Lista de libros</h1>
      <ul>
        {books.library.map(({ book }) => {
          const { title, pages, ISBN } = book;
          return (
            <li key={ISBN}>
              <h2>{title}</h2>
              <p>{pages}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
