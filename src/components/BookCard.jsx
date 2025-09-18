import React from "react";

const BookCard = ({
  coverImage,
  title,
  authors,
  year,
  bookId
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 flex flex-col h-auto">
      <img src={coverImage} alt="No image avilable" className="h-40 w-60" />
      <h2 className="text-xl font-bold mb-2 flex flex-wrap w-60">{title}</h2>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Author:</span>{" "}
        {authors && authors.length > 0 ? authors.join(", ") : "Unknown"}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Published:</span> {year || "Unknown"}
      </p>
    </div>
  );
};

export default BookCard;
