import s from "./neoPage.module.css";

const NeoPage = () => {
  return (
    <div className={s.sc}>
      <div className={s.header}>
        <button>Go back</button>
      </div>
      <div className={s.body}>test container</div>
    </div>
  );
};

export default NeoPage;
