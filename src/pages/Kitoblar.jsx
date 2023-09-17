import React from 'react' 
import './Katalog.css'

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contex/Context';

function Kitoblar() {
    const books = useContext(ThemeContext).books
    const [loader, setLoader] = useState(true)
    setTimeout(() => {
    setLoader(false)
    console.log('setloader false boldi')
    }, 1000);
  return (
    <div className='cont'>
        {loader && <div className='loader'></div>}
        {!loader &&
            books.map((book) => {
                return(
                    <div className='kitob' key={book.id}>
                        <img src={book.img} alt={book.name} />
                        <h1>{book.name}</h1>
                        <Link to={`kitob/{book.id}`}>batafsil</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Kitoblar