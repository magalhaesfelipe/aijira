import React from "react";
import "../styles/styles.css"

import KagurabachiCover from "../assets/images/kagurabachi.jpg";
import SakamotoDaysCover from "../assets/images/Sakamoto-Days.jpg";
import OnePunchManCover from "../assets/images/Onepunch-Man.jpg";
import AnotherCover from "../assets/images/Another.jpg";
import BerserkCover from "../assets/images/Berserk.jpg";
import TokyoGhoulCover from "../assets/images/Toukyou-Kushu.jpg";
import AkiraCover from "../assets/images/Akira.jpg";
import HomunculusCover from "../assets/images/Homunculus.jpg";
import BlueLockCover from "../assets/images/Blue-Lock.jpg";
import SoloLevelingCover from "../assets/images/Solo-Leveling.jpg";
import TokyoRevengersCover from "../assets/images/Tokyo-Revengers.jpg";
import SunkenRockCover from "../assets/images/Sunken-Rock.jpg";

const listData1 = [
  { title: "Berserk", dateReleased: 1988, chapters: 375 },
  { title: "Blue Lock", dateReleased: 2018, chapters: 256 },
  { title: "One Punch Man", dateReleased: 2012, chapters: 200 },
  { title: "One Piece", dateReleased: 1988, chapters: 1111 },
  { title: "Hunter x Hunter", dateReleased: 1998, chapters: 400 },
  { title: "Chainsaw Man", dateReleased: 2018, chapters: 160 },
  { title: "Monster", dateReleased: 1994, chapters: 162 },
  { title: "Dandadan", dateReleased: 2021, chapters: 145 },
];

const listData2 = [
  { title: "Kagurabachi", cover: KagurabachiCover },
  { title: "Sakamoto Days", cover: SakamotoDaysCover },
  { title: "One-Punch Man", cover: OnePunchManCover },
  { title: "Another", cover: AnotherCover },
  { title: "Berserk", cover: BerserkCover },
  { title: "Tokyo Ghoul", cover: TokyoGhoulCover },
  { title: "Akira", cover: AkiraCover },
  { title: "Homunculus", cover: HomunculusCover },
  { title: "Blue Lock", cover: BlueLockCover },
  { title: "Solo Leveling", cover: SoloLevelingCover },
  { title: "Tokyo Revengers", cover: TokyoRevengersCover },
  { title: "Sunken Rock", cover: SunkenRockCover },
];

const ContentGrid = () => {
  return (
    <main className="content-grid">
      {listData2.map((element, index) => (
        <div className="content-tab">
          <div className="cover-container">
            <img src={element.cover} alt={element.title} />
          </div>
          <div className="element-information">
            <p> 7.3</p>
            <p> Rate </p>
            <p>{index + 1} {element.title}</p> 
            <p>1992</p>
            <p className="chapters-quantity">C:143</p>
            <button>Details</button>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ContentGrid;
