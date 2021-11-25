import { PlayArrowRounded } from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";
export default function ListItem() {
  const [isHover, setIsHover] = useState(false);
  console.log(isHover);
  return (
    <>
      <div
        className="listItem"
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className={isHover ? `listItem-desc active` : "listItem-desc"}>
          <PlayArrowRounded class="play" />
          <span className="listItem-title">Chàng vợ của em</span>
        </div>
        <img
          src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABalT23sYUu4RoXoz_3Dl-zRAOJHWekebi4NbUWk57WRJp90TLvPx67pITYV1DEmkzcrqX6hn2HeX_rzkPLanWmdRTUk.jpg?r=46c"
          alt=""
        />
      </div>
    </>
  );
}
