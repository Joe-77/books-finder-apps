import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBooks from "./components/Search";
import BooksList from "./components/BooksList";
import BookDetails from "./components/BookDetails";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import axios from "axios";
import { HashLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [bookName, setBookName] = useState("smart");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setBookName(e.target.value);
  };

  useEffect(() => {
    axios(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&key=AIzaSyCy0C8SbKB_ulRBfPGSwHIBbGQktgiBCwk`
    )
      .then((result) => {
        setAllBooks(result.data.items);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((res) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      axios(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&key=AIzaSyCy0C8SbKB_ulRBfPGSwHIBbGQktgiBCwk`
      )
        .then((result) => {
          setAllBooks(result.data.items);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }, 1000);
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <SearchBooks handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && (
        <div className="flex justify-center items-center mt-20 h-normal">
          <HashLoader color="orange" />
        </div>
      )}
      {isError && !isLoading && (
        <div className="h-normal flex items-center justify-center">
          <span className="flex justify-center mt-60 text-xl sm:text-2xl text-red-700 italic tracking-wider">
            Sorry, no result fond!
          </span>
        </div>
      )}
      <Routes>
        {!isLoading && (
          <Route path="/" element={<BooksList dataBook={allBooks} />} />
        )}
        {!isLoading && (
          <Route path="/bookDetails/:bookName" element={<BookDetails />} />
        )}
        {!isLoading && !isError && <Route path="*" element={<ErrorPage />} />}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
