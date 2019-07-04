import React from 'react'
import {Link} from 'gatsby'
import './Navbar.module.scss'

export default () => (
   <nav>
      <Link to='/'>
         <div>
            <img
               src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Real_Valladolid_Logo.svg/220px-Real_Valladolid_Logo.svg.png"
               alt="Real Valladolid Logo"/>
            <h1>Real Valladolid - Polska</h1>
         </div>
      </Link>
   </nav>
)