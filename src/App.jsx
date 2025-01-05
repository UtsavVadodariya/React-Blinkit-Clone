import React from 'react'
import Nav from './Components/Nav'
import Index from './Components/Index'
import Milk from './Components/All/Milk/Milk'
import Pav from './Components/All/Pav/Pav'
import Flakes from './Components/All/Flakes/Flakes'
import Muesil from './Components/All/Muesil/Muesil'
import Oats from './Components/All/Oats/Oats'
import Paneer from './Components/All/Paneer/Paneer'
import Crud from './Components/All/Crud/Crud'
import Butter from './Components/All/Butter/Butter'
import Cheese from './Components/All/Cheese/Cheese'
import Creame from './Components/All/Creame/Creame'
import Condensed from './Components/All/Condensed/Condensed'
import Vermicell from './Components/All/Vermicell/Vermicell'
import Poha from './Components/All/Poha/Poha'
import Peanut from './Components/All/Peanut/Peanut'
import Energy from './Components/All/Energy/Energy'
import Lassi from './Components/All/Lassi/Lassi'
import Breakfast  from './Components/All/Breakfast/Breakfast'
import Honey  from './Components/All/Honey/Honey'
import Batter  from './Components/All/Batter/Batter'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Milk />}></Route>
          <Route path='/pav' element={<Pav />}></Route>
          <Route path='/flakes' element={<Flakes/>}></Route>
          <Route path='/muesil' element={<Muesil />}></Route>
          <Route path='/oats' element={<Oats />}></Route>
          <Route path='/paneer' element={<Paneer />}></Route>
          <Route path='/crud' element={<Crud />}></Route>
          <Route path='/butter' element={<Butter />}></Route>
          <Route path='/cheese' element={<Cheese />}></Route>
          <Route path='/creame' element={<Creame />}></Route>
          <Route path='/condensed' element={<Condensed />}></Route>
          <Route path='/vermicell' element={<Vermicell />}></Route>
          <Route path='/poha' element={<Poha />}></Route>
          <Route path='/peanut' element={<Peanut />}></Route>
          <Route path='/energy' element={<Energy />}></Route>
          <Route path='/lassi' element={<Lassi />}></Route>
          <Route path='/breakfast' element={<Breakfast />}></Route>
          <Route path='/honey' element={<Honey />}></Route>
          <Route path='/batter' element={<Batter />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
