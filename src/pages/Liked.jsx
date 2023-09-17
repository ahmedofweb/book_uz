import "./Select.css";

import { useContext } from "react";
import { ThemeContext } from "../contex/Context";
import { BsCart4 } from "react-icons/bs";
import {FaRegHeart} from 'react-icons/fa'

function Liked() {
  const books = useContext(ThemeContext).books;
  return (
    <div className="card-select">
      {books &&
        books.map((book) => {
          return (
            book.favourite && (
              <div className="select-card" key={book.name}>
                <img className="selected-book-img" src={`${book.img}`} alt="" />
                <h1>{book.name}</h1>
                <p>{book.author}</p>
                <div className="btns">
                  <button className="select-btn">
                    Sevimlilar
                    <i>
                      <FaRegHeart />
                    </i>
                  </button>
                  <button className="select-btn">
                    Savatcha
                    <i>
                      <BsCart4 />
                    </i>
                  </button>
                </div>
              </div>
            )
          );
        })}
    </div>
  );
}

export default Liked;
