import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Loader from "../common/Loader";

const BookList = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      const defaultBooks = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const res = await fetch(
            "https://openlibrary.org/subjects/love.json?limit=12"
          );
          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          }
          const data = await res.json();
          setBooks(data.works);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      defaultBooks();
      return;
    }
    setBooks([]);
    setIsLoading(true);
    const fetchBooks = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://openlibrary.org/search.json?title=${encodeURIComponent(
            query
          )}`
        );

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data.docs);
        
        setBooks(data.docs);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [query]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {error && <em>{error}</em>}
      {isLoading && <Loader />}
      {books.map((book) => {
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "No Cover Iamge Available";
        return (
          <BookCard
            key={book.key}
            coverImage={coverUrl}
            title={book.title}
            authors={book.author_name}
            year={book.first_publish_year}
          />
        );
      })}
    </div>
  );
};

export default BookList;
