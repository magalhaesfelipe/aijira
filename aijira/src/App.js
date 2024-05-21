import Manga from "./Manga";

function App() {
  const mangasArr2 = [
    "./pizzas/focaccia.jpg",
    "./pizzas/funghi.jpg",
    "./pizzas/margherita.jpg",
    "./pizzas/prosciutto.jpg",
    "./pizzas/salamino.jpg",
    "./pizzas/spinaci.jpg",
  ];

  return (
    <>
      <div className="header">
        <h1>NEO Manga and Comics</h1>
      </div>
      <div className="grid">
        {mangasArr2.map((m) => (
          <Manga imgName={m} />
        ))}
      </div>
    </>
  );
}

export default App;
