import Featured from "../../components/Featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import List from "../../components/List/List";
import "./Home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmRiMzM1N2FiZTc2YjhlNGFmYjYyYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTE3NjEwMCwiZXhwIjoxNjQxNjA4MTAwfQ.RWt0XGICEDQrFvTZ3M7WImwn23uBUFqOqMmK-KCFxzA",
            },
          }
        );
        setLists(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, idx) => (
        <List key={idx} list={list} />
      ))}
    </div>
  );
};

export default Home;
