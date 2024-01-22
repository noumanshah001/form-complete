import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import Form from './Components/Form';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/form' element={<Form />} />
                <Route path='/table' element={<Table />} />
            </Routes>
        </Router>
    )
}
export default App