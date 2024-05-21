import "./styles/general.css"
import "./styles/mangaGrid.css";

import KagurabachiCover from "../assets/images/kagurabachi.jpg"
import SakamotoDaysCover from "../assets/images/Sakamoto-Days.jpg"
import OnePunchManCover from "../assets/images/Onepunch-Man.jpg"
import AnotherCover from "../assets/images/Another.jpg"
import BerserkCover from "../assets/images/Berserk.jpg"
import TokyoGhoulCover from "../assets/images/Toukyou-Kushu.jpg"
import AkiraCover from "../assets/images/Akira.jpg"
import HomunculusCover from "../assets/images/Homunculus.jpg"
import BlueLockCover from "../assets/images/Blue-Lock.jpg"
import SoloLevelingCover from "../assets/images/Solo-Leveling.jpg"
import TokyoRevengersCover from "../assets/images/Tokyo-Revengers.jpg"
import SunkenRockCover from "../assets/images/Sunken-Rock.jpg"



const mangaData = [
  {title: "Kagurabachi", cover: KagurabachiCover}, 
  {title: "Sakamoto Days", cover: SakamotoDaysCover},
  {title: "One-Punch Man", cover:  OnePunchManCover},
  {title: "Another", cover: AnotherCover},
  {title: "Berserk", cover:BerserkCover},
  {title: "Tokyo Ghoul", cover:TokyoGhoulCover},
  {title: "Akira", cover:AkiraCover},
  {title: "Homunculus", cover:HomunculusCover},
  {title: "Blue Lock", cover:BlueLockCover},
  {title: "Solo Leveling", cover:SoloLevelingCover},
  {title: "Tokyo Revengers", cover:TokyoRevengersCover},
  {title: "Sunken Rock", cover:SunkenRockCover}
];


const MangaGrid = () => {
  return (
      <main>
        <section>
          <div className="mangas-grid">
            {mangaData.map((manga, index) => (
              <div className="manga-area">
                <div className="cover-container">
                  <img className="manga-cover" src={manga.cover} alt={`Manga ${index} + 1`} />
                </div>
                <div className="manga-title-container">
                  <p>{manga.title}</p>
                </div>
              </div>
            ))}
          </div> 
        </section>
      </main>
  );
};

export default MangaGrid;
