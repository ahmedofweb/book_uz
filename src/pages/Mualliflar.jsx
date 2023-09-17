import React from 'react'
import './Katalog.css'
import {CgProfile} from 'react-icons/cg'
import { useState } from 'react'

function Mualliflar() {
  const mualliflar = [
    {
      'ism': "Asqad Muhtor",
      'dobd' : '1965.09.12',
      'ks': 12
    },
    {
      'ism': "Murod Muhammad Do'st",
      'dobd' : '1954.01.01',
      'ks': 32
    },
    {
      'ism': "Said Ahmad",
      'dobd' : '1920.10.12',
      'ks': 50
    },
    {
      'ism': "Tohir Malik",
      'dobd' : '1946.12.29',
      'ks': 38
    },
    {
      'ism': "Usmonxojaev Abdukarim",
      'dobd' : '1930.07.10',
      'ks': 12
    },
  ]
  const [loader, setLoader] = useState(true)
    setTimeout(() => {
    setLoader(false)
    console.log('setloader false boldi')
    }, 1000);
  return (
    <div className='cont'>
      {loader && <div className='loader'></div>}
      {!loader &&
        mualliflar.map((muallif) => {
          return(
              <div className='muallif'>
               <span className='muallif-img'><CgProfile/></span>
               <div>
                  <h1>{muallif.ism}</h1>
                  <p>{muallif.dobd}</p>
                  <br />
                  <h2 className='ksoni'>Kitoblar soni: <span>{muallif.ks}</span></h2>
               </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Mualliflar