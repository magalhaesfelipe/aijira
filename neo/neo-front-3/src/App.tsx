import React from "react";
import "./styles.css";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import img3 from "./assets/img3.webp";
import img4 from "./assets/img4.webp";
import img5 from "./assets/img5.webp";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.webp";
import img9 from "./assets/img9.jpg";

function App() {
  return (
    <>
      <header>
        <h3> HIPERCUBE</h3>
      </header>
      <main className="photo-gallery">
        <div className="column">
          <div className="photo">
            <img src={img1} />
          </div>
          <div className="photo">
            <img src={img2} />
          </div>
          <div className="photo">
            <img src={img3} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={img4} />
          </div>
          <div className="photo">
            <img src={img5} />
          </div>
          <div className="photo">
            <img src={img6} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={img7} />
          </div>
          <div className="photo">
            <img src={img8} />
          </div>
          <div className="photo">
            <img src={img9} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
