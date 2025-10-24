import s from "./header.module.css";
import icon from "../../../assets/icons/nearby_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

const Header = () => {
  const items = [
    "A CYBERPUNK COLLECTION",
    "A CYBERPUNK COLLECTION",
    "A CYBERPUNK COLLECTION",
  ];

  return (
    <div className={s.sc}>
      <div className={s.title2}>
        <div className={s.track}>
          <div className={s.group}>
            {items.map((t, i) => (
              <h1 key={`a-${i}`}>{t}</h1>
            ))}
          </div>
          <div className={s.group}>
            {items.map((t, i) => (
              <h1 key={`b-${i}`}>{t}</h1>
            ))}
          </div>
          <div className={s.group}>
            {items.map((t, i) => (
              <h1 key={`c-${i}`}>{t}</h1>
            ))}
          </div>
        </div>
      </div>

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
