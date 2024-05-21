import "../styles/mangaGrid.css"

import berserkCover from "../assets/berserk.jpg";
import onepunchmanCover from "../assets/onePunchMan.jpg";
import monsterCover from "../assets/monster.jpg";
import hunterxhunterCover from "../assets/hunterxHunter.jpg";
import bluelockCover from "../assets/blueLock.jpg";
import chainsawmanCover from "../assets/chainsawMan.jpg";
import dandadan from "../assets/dandadan.jpg";
import onepieceCover from "../assets/onePiece.jpg";

const listData = [
  { title: "Berserk", dateReleased: 1988, chapters: 375, cover: berserkCover },
  {
    title: "One Punch Man",
    dateReleased: 2018,
    chapters: 256,
    cover: onepunchmanCover,
  },
  {
    title: "Monster",
    dateReleased: 2012,
    chapters: 200,
    cover: monsterCover,
  },
  {
    title: "Hunter x Hunter",
    dateReleased: 1988,
    chapters: 1111,
    cover: hunterxhunterCover,
  },
  {
    title: "Blue Lock",
    dateReleased: 1998,
    chapters: 400,
    cover: bluelockCover,
  },
  {
    title: "Chainsaw Man",
    dateReleased: 2018,
    chapters: 160,
    cover: chainsawmanCover,
  },
  { title: "Dandadan", dateReleased: 1994, chapters: 162, cover: dandadan },
  {
    title: "One Piece",
    dateReleased: 2021,
    chapters: 145,
    cover: onepieceCover,
  },
];

const MangaGrid = () => {
  return (
    <>
    <main>
      <header>
        <h1> Your Read List </h1>
      </header>
      <div className="element-grid">
        {listData.map((element, index) => (
          <div key={index} className="element-container">
            <img src={element.cover} alt={element.title} />
            <div className="element-information">
              <p>{element.title}</p>
              <p>{element.dateReleased} C:{element.chapters}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
  );
};

export default MangaGrid;
