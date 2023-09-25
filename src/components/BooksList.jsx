import React from "react";
import BookItems from "./BookItems";

const BooksList = ({ dataBook }) => {
  return (
    <div className="container my-10 mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      <BookItems dataBook={dataBook} />
    </div>
  );
};

export default BooksList;
