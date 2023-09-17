import './Reklama.css'

// import { useState, useEffect } from "react";
import { FaHeart} from "react-icons/fa"
import {BsCart4} from 'react-icons/bs';
import {BsCalendar2DateFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {GiReceiveMoney} from 'react-icons/gi';

import { useContext } from 'react';
import { ThemeContext } from '../contex/Context';


function Reklama() {

  const books = useContext(ThemeContext).books
  const setBooks = useContext(ThemeContext).setBooks
  

  return (
    <div className='reklama'>
      {books &&
       books.map((book) => {
      return (
        <div className="card container" key={book.name}>
          <div className="image">
            <img src={`${book.img}`} alt="" />
          </div>
          <div className="info">
            <div className="short-info">
              <h2 className='name'>{book.name}</h2>
              <h3 className='price'> 
              <i> <GiReceiveMoney/> </i>
              {book.price} UZS
              </h3>
              <p className='status'>
                  {book.status ? 'Sotuvda mavjud' : 'Sotuvda mavjud emas !'}
              </p>
              <p className='year'>
                <i> <BsCalendar2DateFill/> </i>
                <span>Yili : </span>
                {book.year}
              </p>
              <p className='author'>
                <i> <CgProfile/> </i>
                <span>Muallif : </span>
                {book.author}
              </p>
              <a className='more' href="">Batafsil</a>
            </div>
          </div>
          <div className="save-books">
              <button className="liked" onClick={() => {
                book.favourite = true
                document.body.querySelector('.iconcha1').classList.add('color-red')
                }}>
                <span>Sevimlilar</span>
                <i className='iconcha1'><FaHeart/></i>
              </button>
              <button className="basket" onClick={() => {
                book.selected = true
                }}>
                <span>Savatcha</span>
                <i className='iconcha2'> <BsCart4/> </i>
              </button>
            </div>
        </div>
      );
    })}
    </div>
  );
}

export default Reklama;
