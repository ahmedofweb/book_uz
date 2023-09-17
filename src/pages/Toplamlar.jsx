import React from 'react'
import { useState } from 'react';
import './Katalog.css'

function Toplamlar() {
  const [loader, setLoader] = useState(true)
  setTimeout(() => {
    setLoader(false)
    console.log('setloader false boldi')
  }, 3000);
  return (
    <div className='cont'>
      {loader && <div className='loader'></div>}
      {!loader && <h2 className='topilmadi'>To'plam topilmadi !</h2>}
    </div>
  )
}

export default Toplamlar