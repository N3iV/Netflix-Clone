import { Info, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbcEOui1mjhT0mMvebf2BO9nUa2MTOk2Di2sTDjghmMyaIlYz4fHFfllmxVr7k1IRKZUVcjZpfawEaZFaYAZdZBnr9ec.jpg?r=7bf"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWVkropDnNs1gDVAlHGcXzyqxqpYyIrox8_P9YWypD5SBV-_02hfs3jFcwhMag3Oya0rSjBbdm82noS0mm-NL0mrdbqrZd-jsrjR.png?r=723"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore id,
          impedit minima sunt adipisci consequuntur ea perferendis ullam
          repellendus cumque ex quis enim at rem quibusdam vel deserunt unde?
          Neque?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <Info />
            <span>More info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
