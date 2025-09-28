import s from "./homepage.module.css";

const imageModules = import.meta.glob(
  "../../assets/images/*.{jpg,jpeg,png,webp,svg}",
  { eager: true }
);
const images = Object.values(imageModules).map((mod) => mod.default);

function HomePage() {
  return (
    <div className={s.sc}>
      <div className={s.grid}>
        {images.map((src, index) => (
          <div key={index} className={s.block}>
            <img src={src} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
