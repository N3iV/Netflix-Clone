import { useContext, useEffect, useState } from "react";
// import "./newProduct.css";
import storage from "../../firebase";
import { getMovies } from "../../Context/MovieContext/apiCalls";
import { createLists } from "../../Context/ListContext/apiCalls";
import { ListContext } from "../../Context/ListContext/ListContext";
import { MovieContext } from "../../Context/MovieContext/MovieContext";
import { useHistory } from "react-router-dom";
export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory();
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);
  const handleSelect = (e) => {
    let val = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setList({ ...list, [e.target.name]: val });
    console.log(list);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createLists(dispatch, list);
    history.push("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm newListFrom">
        <div className="form-left">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movie"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="Genre"
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" onChange={handleChange}>
              <option>Type</option>
              <option defaultChecked value="movie">
                Movie
              </option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="form-right">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              style={{ height: "300px" }}
            >
              {movies.map((mov) => (
                <option key={mov._id} value={mov._id}>
                  {mov.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
      <button className="addProductButton newList-btn" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
}
