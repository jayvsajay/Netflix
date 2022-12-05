import { useContext, useEffect, useState } from "react";
import "./newlist.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";


export default function NewList() {
  const [list, setList] = useState(null);

    const { dispatch } = useContext(ListContext)
  const { movies,dispatch:dispatchmovie } = useContext(MovieContext);


  useEffect(() => {
    getMovies(dispatchmovie);
  }, [dispatchmovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  
  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       createList(list, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="left">
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter title"
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
          <select name="type" id="type" onChange={handleChange}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div></div><div className="right">
        <div className="addProductItem">
          <label>Content</label>
          <select multiple name="content" onChange={handleSelect} style={{ height: "280px" }}>
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
        </div>
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
          </div>
      </form>
    </div>
  );
}