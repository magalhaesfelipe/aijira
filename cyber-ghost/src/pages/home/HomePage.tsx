import "./styles.css";
import img1 from "./images/img1.jpg";
import image2 from "./images/img2.jpg";
import image3 from "./images/img3.jpg";
import image4 from "./images/img4.jpg";
import image5 from "./images/img5.jpg";
import image6 from "./images/img6.jpg";

function HomePage() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Hyper Cube</h1>
      </div>
      <div className="grid-wrapper">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
