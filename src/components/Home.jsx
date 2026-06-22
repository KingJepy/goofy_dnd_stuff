import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Funny Little Project</h1>

      <div className="buttonContainer">
        <Link to="/drag">
          <button>Drag The Thing</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>

        <Link to="/gallery">
          <button>Gallery</button>
        </Link>

        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;