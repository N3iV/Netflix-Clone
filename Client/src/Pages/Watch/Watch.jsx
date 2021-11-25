import "./watch.scss";
import Navbar from "../../components/Navbar/Navbar";
import { ArrowBack } from "@material-ui/icons";
export default function Watch() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="watch">
        <div className="back">
          <ArrowBack />
          <span>Home</span>
        </div>
        <embed
          className="video"
          src="https://www.youtube.com/embed/2MxnhBPoIx4"
        ></embed>
      </div>
    </>
  );
}
