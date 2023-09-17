import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import {FaRegHeart} from "react-icons/fa";
import {BsCart4} from 'react-icons/bs';
import {HiMiniLanguage} from 'react-icons/hi2';
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai'


function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar container">
        <button className="katalog">
          <p>Katalog</p>
          <img src="" alt="" />
        </button>
        <ul className="pages-list">
          <Link to={'/kitoblar'} className="pages">Kitoblar</Link>
          <Link to={'/toplamlar'} className="pages">To'plamlar</Link>
          <Link to={'/mualliflar'} className="pages">Mualliflar</Link>
          <Link to={'/chegirmalar'} className="pages">Chegirmalar</Link>
        </ul>
        <ul className="addition-list">
          <li>
            <Link className="addition" to={"/"}>
              <i>
                {" "}
                <AiOutlineHome />{" "}
              </i>
              <p>Bosh sahifa</p>
            </Link>
          </li>
          <li>
            <Link className="addition" to={"/liked"}>
              <i>
                {" "}
                <FaRegHeart />{" "}
              </i>
              <p>Sevimlilar</p>
            </Link>
          </li>
          <li >
            <Link className="addition" to={"/basket"}>
              <i>
                {" "}
                <BsCart4 />{" "}
              </i>
              <p>Savatcha</p>
            </Link>
          </li>
          <li className="addition">
            <i>
              {" "}
              <HiMiniLanguage />{" "}
            </i>
            <p>O'zbek</p>
          </li>
          <li className="addition">
            <i>
              {" "}
              <CgProfile />{" "}
            </i>
            <p>Profil</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
