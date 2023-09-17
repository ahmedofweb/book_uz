
import './App.css'

import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'

//components
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

//pages
import Reklama from './pages/Reklama'
import Liked from './pages/Liked'
import Basket from './pages/Basket'

//katalog
import Kitoblar from './pages/Kitoblar'
import Chegirmalar from './pages/Chegirmalar'
import Mualliflar from './pages/Mualliflar'
import Toplamlar from './pages/Toplamlar'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Reklama/>}/>
          <Route path='/liked' element={<Liked/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path='/kitoblar' element={<Kitoblar/>}/>
          <Route path='/mualliflar' element={<Mualliflar/>}/>
          <Route path='/chegirmalar' element={<Chegirmalar/>}/>
          <Route path='/toplamlar' element={<Toplamlar/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
