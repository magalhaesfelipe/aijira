export default function Manga({ imgName }) {
  return (
    <div className="manga">
      <img src={imgName}></img>
      <h4>Ghost in the Shell</h4>
    </div>
  );
}
