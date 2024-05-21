import React from "react";
import "../styles/mangaPage.css";
import kagurabachi from "../assets/images/kagurabachi.jpg";
import { Link } from "react-router-dom";
import ReadPage from "./ReadPage";

const Manga = () => {
  const chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="mangatop-container">
        <img src={kagurabachi} className="cover" />
        <div className="manga-information">
          <h1> Kagurabachi </h1>
          <h3> Author: Eichiro Oda </h3>
          <h3> Released: 2023 </h3>
          <p> Description: The One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journeyThe One Piece are the friends we make along the journey </p>
        </div>
      </div>
      <div className="chapters-container">
        {chapters.map((c) => (
          <Link to="/read" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="chap"> Chapter {c}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Manga;
