import React from 'react'
import { useState } from 'react';
import './Katalog.css'

function Chegirmalar() {
  const [loader, setLoader] = useState(true)
  setTimeout(() => {
    setLoader(false)
    console.log('setloader false boldi')
  }, 3000);
  return (
    <div className='cont'>
      {loader && <div className='loader'></div>}
      {!loader && <h2 className='topilmadi'>Xozircha chegirma narxda kitoblar topilmadi !</h2>}
    </div>
  )
}

export default Chegirmalar