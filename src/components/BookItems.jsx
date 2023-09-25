import React from "react";
import {Link}  from "react-router-dom";

const BookItems = ({ dataBook }) => {
  console.log(dataBook)
  return (
    <>
      {dataBook.map((data) => (
          <div
            key={data.id}
            className="card rounded-md  bg-white shadow-lg shadow-zinc-500 m-4 cursor-pointer"
          >
          <Link to={`/bookDetails/${data.volumeInfo.title}`} state={data}>
            <img
              className="rounded-md sm:h-40 w-full duration-500 hover:scale-110"
              src={
                data.volumeInfo.imageLinks &&
                data.volumeInfo.imageLinks.smallThumbnail
              }
              alt={data.volumeInfo.title}
            />
            </Link>
          </div>
      ))}
    </>
  );
};

export default BookItems;

/* 

data.volumeInfo.imageLinks &&
            data.volumeInfo.imageLinks.smallThumbnail

*/
