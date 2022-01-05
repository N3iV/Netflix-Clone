import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./list.scss";

const List = ({ list }) => {
  const listRef = useRef();
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX( ${distance + 230}px)`;
    }
    if (direction === "right" && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX( ${distance - 230}px)`;
    }
  };
  return (
    <div className="list">
      <span className="list-title">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, idx) => (
            <ListItem item={item} index={idx} key={idx} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
};

export default List;
