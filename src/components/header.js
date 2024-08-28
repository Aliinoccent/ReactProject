import React from 'react'
import StyleSheet from 'react'
const Header=()=>{
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className='row ' >
            <li className='col' style={{listStyle:'none'}}>home</li>
            <li className='col' style={{listStyle:'none'}}>content</li>
            <li className='col' style={{listStyle:'none'}}>services</li>
            <li className='col' style={{listStyle:'none'}}>prizes</li>
        </ul>
       </nav>
    )
}

export default Header;