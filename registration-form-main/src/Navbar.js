import React from 'react'
import './Components/Navbar.css'
import './Navbar'
import { Link } from 'react-router-dom'
function Navbar () {
  return (
    <div>
        <nav className='navbar'>
            <ul className='nav-ul'>
              <Link to={'/form'} className='nav-links'>
                <li className='nav-item'>Form Page</li>
              </Link>
              <Link to={'/table'} className='nav-links'>
                <li className='nav-item'>Table Page</li>
              </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar