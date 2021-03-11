import "./style.css";
import image from "./imageInSrc.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="main"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1 className="title red">Your name here</h1>
        <img src={image} />
        <img src="/imageInPublic.jpg" />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FkdeeUY6qgw"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
