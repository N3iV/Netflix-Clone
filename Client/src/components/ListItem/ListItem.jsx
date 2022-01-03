import { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import "./listItem.scss";
export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="" alt="" />
        {isHovered && (
          <>
            <video src="" autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1231231</span>
                <span className="limit">+4</span>
                <span>2002</span>
              </div>
              <div className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
                dicta corporis culpa fuga officia aut nisi ab, quae eos vero
                veritatis omnis voluptate ex dignissimos aliquam nemo. Maxime,
                officiis labore.
              </div>
              <div className="genre">Horror</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
