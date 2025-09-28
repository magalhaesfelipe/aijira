import s from "./header.module.css";
import icon from "../../../assets/icons/nearby_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const Header = () => {
  return (
    <div className={s.sc}>
      <div className={s.imgContainer} title="About">
        <img src={icon} alt="Nearby Icon" />
      </div>
      <div className={s.imgContainer}>
        <img src={icon} alt="Nearby Icon" title="Source" />
      </div>
      <div className={s.imgContainer}>
        <img src={icon} alt="Nearby Icon" title="Other" />
      </div>

      <h1>HYPERCUBE</h1>
    </div>
  );
};

export default Header;
