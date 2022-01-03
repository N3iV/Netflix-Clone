import "./watch.scss";
import Navbar from "../../components/Navbar/Navbar";
import { ArrowBack, Movie } from "@material-ui/icons";
import { Link, useLocation, useParams } from "react-router-dom";
export default function Watch() {
  const location = useLocation();
  console.log(location);
  const movie = location.state.movie;
  console.log(movie);
  return (
    <>
      {/* <Navbar /> */}
      <div className="watch">
        <div className="back">
          <ArrowBack />
          <Link className="link" to="/">
            <span>Home</span>
          </Link>
        </div>
        <video className="video" autoPlay controls src={movie.video} />
      </div>
    </>
  );
}
