import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"}>Editor</NavLink>
        <NavLink to={"/preview"}>Preview</NavLink>
    </div>
  )
}

export default Navbar