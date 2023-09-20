import { Link } from "react-router-dom";  
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function HomePage() {
  const { theme } = useContext(ThemeContext)
  
    return (
      <nav className={"navMenu " + theme}>
        <ul>
          <div>
            <Link to="/allBeer">
                <img className="imaageMenu" src="src/assets/beers.png"></img>
            </Link>
            <h1 className="titleCard">All Beers</h1>
            <p className="contentCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
          <div>
            <Link to={`/detail/random`}>
                <img className="imaageMenu" src="src/assets/random-beer.png"></img>
            </Link>
            <h1 className="titleCard">Random Beers</h1>
            <p className="contentCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <Link to="/addBeer">
                <img className="imaageMenu" src="src/assets/new-beer.png"></img>
            </Link>
            <h1 className="titleCard">New Beers</h1>
            <p className="contentCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </ul>
      </nav>
    );
  }
   

export default HomePage;
