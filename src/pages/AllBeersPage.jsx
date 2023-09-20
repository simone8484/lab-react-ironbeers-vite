import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log("response.data", response.data);
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <table>
            <tr>
              <td rowSpan="3">
                <div className="wrapImage"><img className="imaageBeer" src={beer.image_url} alt="beer" /></div>
              </td>
              <th>
                 <div className="beerName"><h2><Link to={`/detail/${beer._id}`}>{beer.name}</Link></h2></div>
              </th>
            </tr>
            <tr>
              <td>
                <div className="beerDescription">{beer.tagline}</div>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <b className="beerDescription">Created by: {beer.contributed_by.split('<')[0]}</b>
              </td>
            </tr>
          </table>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
