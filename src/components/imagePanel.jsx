import "./product.css";

export default function ImagePanel(props) {
  const getToolImage = (name) => {
    if (name === "Single Drill") return "./pics/1drill.png";
    if (name === "2x Drill") return "./pics/2drill.png";
    if (name === "Single Drill, plus Saw") return "./pics/2sdrill.png";
    if (name === "2 Drill, plus Polisher") return "./pics/32drill.png";
    if (name === "2 Drill, plus Saw, and Polisher") return "./pics/4tool.png";
  };

  const getBackpackImage = () => {
    if (props.backpack)
      return (
        <img
          className="backpack"
          src="./pics/backpack.png"
          alt="backpack"
        ></img>
      );
    else return <></>;
  };

  const getChargerImage = () => {
    if (props.charger)
      return (
        <img className="charger" src="./pics/charger.png" alt="charger"></img>
      );
    else return <></>;
  };
  return (
    <div className="image-panel">
      <h1>{props.name}</h1>
      <img className="tool" src={getToolImage(props.name)} alt="product"></img>
      {getBackpackImage()}
      {getChargerImage()}
    </div>
  );
}
