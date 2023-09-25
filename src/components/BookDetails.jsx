import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation().state;


  return (
    <div className="container px-10 my-20 mx-auto flex justify-center flex-col sm:flex-row gap-10 h-normal">
      <div className="logo m-auto sm:m-0">
        <img
          className="sm:w-32"
          src={
            location.volumeInfo.imageLinks &&
            location.volumeInfo.imageLinks.smallThumbnail
          }
          alt=""
        />
      </div>
      <div className="info flex-1">
        <h1 className="sm:text-2xl tracking-wider italic font-bold text-zinc-500 leading-7">
          {location.volumeInfo.title}
        </h1>
        <p className="my-4 text-xs text-orange-600 tracking-wide">
          Authors : (
          <span className=" divide-x-2 divide-amber-600">
            {location.volumeInfo.authors.map((e) => (
              <span className="px-2" key={e}>
                {e}
              </span>
            ))}
          </span>
          )
        </p>
        <div className=" sm:w-3/4 h-32 overflow-y-auto scrollbar-thin scrollbar-track-slate-600 scrollbar-thumb-indigo-500 text-zinc-600 pr-10 sm:text-justify sm:leading-7 sm:tracking-wide">
          <p className="w-full">{location.volumeInfo.description}</p>
        </div>

        <div className="flex gap-10 justify-center sm:w-3/4 my-9">
          <button className="text-xs sm:text-lg bg-blue-600 text-white duration-500 hover:bg-blue-900 italic font-mono sm:tracking-wide px-3 py-1 rounded-md">
            <a href={location.volumeInfo.previewLink} target="_blank">
              preview
            </a>
          </button>
          <button className=" text-xs sm:text-lg bg-orange-600 text-white duration-500 hover:bg-orange-800 italic font-mono tracking-wide px-3 py-1 rounded-md ">
            <a
              href={
                location.volumeInfo && location.volumeInfo.canonicalVolumeLink
              }
              target="_blank"
            >
              $ Buy now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
