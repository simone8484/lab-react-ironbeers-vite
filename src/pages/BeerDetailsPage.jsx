import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {

    const [beer, setBeer] = useState([]);

    useEffect(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) => {
        console.log("response.data", response.data);
        setBeer(response.data);
      });
    }, []);

    const {id} = useParams()

    return (
        <>
            <div className="detail">
                <img className="imaageBeerDetail" src={beer.image_url} alt="beer" />
            </div>
            <div>
                <span className="detailNameBeer">{beer.name}  </span>
                <span className="detailAttenuationBeer">{beer.attenuation_level}</span>
            </div>
            <div>
                <span className="detailTaglineBeer">{beer.tagline}  </span>
                <span><b>{beer.first_brewed}</b></span>
            </div>
            <div className="datailDescription">
                <span >{beer.description}</span>
            </div>
            <div>
                <span className="detailTaglineBeer">{beer.contributed_by}</span>
            </div>
        </>
    )
}

export default BeerDetailsPage;