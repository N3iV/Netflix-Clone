import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUser] = useState([]);
  const admin = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("/users", {
          headers: {
            token: "Bearer " + admin.accessToken,
          },
        });
        console.log(res.data);
        setNewUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUser();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUser.slice(0, 5).map((user, idx) => (
          <li key={idx} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">
                {user.isAdmin ? "Admin" : " User"}
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
