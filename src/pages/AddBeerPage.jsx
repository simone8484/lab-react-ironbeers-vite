import { useState } from "react";
import axios from 'axios';     

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState(true);

  const handleNameInput = e => setName(e.target.value);
 
  const handleTaglineInput = e => setTagline(e.target.value);
 
  const handleDescriptionInput = e => setDescription(e.target.value);
 
  const handleFirstBrewedInput = e => setFirstBrewed(e.target.value);

  const handleBrewersTipsInput = e => setBrewersTips(e.target.value);
 
  const handleAttenuationLevelInput = e => setAttenuationLevel(e.target.value);
 
  const handleirstContributedByInput = e => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { name, tagline, description, 'first_brewed':firstBrewed, 'brewers_tips':brewersTips, 'attenuation_level': attenuationLevel, 'contributed_by':contributedBy };
 
    console.log("Submitted: ", newMovie);

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", newMovie)
    .then((response) => {
      //set default state
    });
  }

  return (
    <div className="AddMovie">
      <h4>Add a Beer</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleNameInput} />
        </div>

        <div>
          <label>Tagline: </label>
          <input type="text" name="tagline" value={tagline} onChange={handleTaglineInput} />
        </div>

        <div>
          <label>Description: </label>
          <input type="text" name="description" value={description} onChange={handleDescriptionInput} />
        </div>

        <div>
          <label>First Brewed: </label>
          <input type="text" name="firstBrewed" checked={firstBrewed} onChange={handleFirstBrewedInput} />
        </div>

        <div>
        <label>Brewer's Tips: </label>
          <input type="text" name="brewersTips" checked={brewersTips} onChange={handleBrewersTipsInput} />
        </div>

        <div>
          <label>Attenuation Level: </label>
          <input
            type="number"
            name="attenuationLevel"
            checked={attenuationLevel}
            onChange={handleAttenuationLevelInput} 
          />
        </div>

        <div>
          <label>Contributed By: </label>
          <input type="text" name="contributedBy" checked={contributedBy} onChange={handleirstContributedByInput} />
        </div>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
