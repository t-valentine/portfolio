import Illustrations from "../illustrations/Illustrations";
import Comics from "../comic/Comic";
import About from "../about/About";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-section home">
        <h1>Home page</h1>
        <div>
          <a href="#illustrations">
            <button className="home-navbuttons">Illustrations</button>
          </a>
          <a href="#comics">
            <button className="home-navbuttons">Comics</button>
          </a>
        </div>
      </div>
      <Illustrations />
      <Comics />
      <About />
    </div>
  );
}

export default Home;
