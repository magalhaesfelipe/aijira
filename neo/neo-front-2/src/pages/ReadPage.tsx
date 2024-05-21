import React, { useState } from "react";
import "../styles/readPage.css";
import pageImg1 from "../assets/images/test1.png";
import pageImg2 from "../assets/images/test2.png";
import pageImg3 from "../assets/images/test3.png";
import pageImg4 from "../assets/images/test4.png";

const ReadPage = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const myArr = [pageImg1, pageImg2, pageImg3, pageImg4];

  function handleNextPage(): void {
    setCurrentPageIndex((prevIndex) =>
    prevIndex < myArr.length - 1 ? prevIndex + 1 : prevIndex
    );
  }
  
  function handlePreviousPage(): void {
    setCurrentPageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }

  return (
    <div className="container">
      <img
        src={myArr[currentPageIndex]}
        className="page"
        alt={`Page ${currentPageIndex + 1}`}
      />
      <nav>
        <button onClick={handlePreviousPage}>Prev Page</button>
        <button onClick={handleNextPage}>Next Page</button>
      </nav>
    </div>
  );
};

export default ReadPage;
