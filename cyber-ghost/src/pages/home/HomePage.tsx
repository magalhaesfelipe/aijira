import s from "./homepage.module.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";

function HomePage() {
  return (
    <div className={s.sc}>
      <div className={s.grid}>
        <div className={s.block}>
          <img src={img1} />
        </div>
        <div className={s.block}>
          <img src={img2} />
        </div>
        <div className={s.block}>
          <img src={img3} />
        </div>
        <div className={s.block}>
          <img src={img4} />
        </div>
        <div className={s.block}>
          <img src={img5} />
        </div>
        <div className={s.block}>
          <img src={img6} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
