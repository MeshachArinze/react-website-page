import React from 'react';
import GlobalStyle from './globalstyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Card } from './components';
import Home from './pages/HomePage/Home';
import Data from './cardpages/CardPages/Data';



export default function App() {
    return (
        <Router>
            <GlobalStyle />
            <Navbar/>
            <Routes>
                <Route path='/*' element={<Home />}/>
                <Route path='/*' element={<Data />}/>
            </Routes>
            <Card />
            <Footer />
        </Router>
    )
}