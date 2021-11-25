import { AcUnit } from "@material-ui/icons";
import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
    </div>
  );
};

export default Home;
