import "./Header.css";

import { AiFillInstagram } from 'react-icons/ai'
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { GiBookmarklet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";


import { ThemeContext } from "../../contex/Context";
import { useContext } from "react";

import {Link} from 'react-router-dom'

function Header() {
  const setUrl = useContext(ThemeContext).setUrl

  function handleFilter(inputVal) {
    const url = `http://localhost:3000/books?name=${inputVal}`
    if(inputVal.length){
      setUrl(url)
    }else{
      setUrl('http://localhost:3000/books')
    }
     console.log(inputVal)
  }

  return (
    <div className="header-container">
      <div className="header container">
        <h1 className="logo">
           <i>
              <Link to={'/'}> <GiBookmarklet/> </Link>
           </i>
        </h1>

        <div className="search">
          <input type="text" placeholder="Bu yerdan qidiring..." 
             onInput={(e) => {handleFilter(e.target.value)}}
          />
          <i>
            <p className="search-icon">
              <FiSearch/>
            </p>
          </i>
          
        </div>

        <a className="connection" href="tel:+998-91-123-45-16">
          <p>+998911234516</p>
          <button>
            Bog'lanish
            <i> <FiPhoneCall/> </i>
          </button>
        </a>

        <div className="social-netw">
          <a href="">
            <BsTelegram/>
          </a>
          <a href="">
            <AiFillInstagram/>
          </a>
          <a href="">
            <BsFacebook/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
