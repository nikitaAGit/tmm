import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../componets/screens/Home/Home'
import Service from '../componets/screens/Service/Service'
import About from '../componets/screens/About/About'
import Bonuses from '../componets/screens/Bonuses/Bonuses'
import Admin from '../componets/screens/Admin/Admin'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path="/service/:id" element={<Service></Service>}></Route>
                    <Route path="/products" element={<Service></Service>}> </Route>
                    <Route path="/about" element={<About></About>}> </Route>
                    <Route path="/bonuses" element={<Bonuses></Bonuses>}> </Route>
                    <Route path='/admin/tmm' element={<Admin></Admin>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router