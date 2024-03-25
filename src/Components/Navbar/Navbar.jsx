import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo_transparent.png';
import cart from "../Assets/shopping-bag-icon.png"
import './Navbar.css';


const Navbar = () => {
    const [menu, setMenu]= useState("Sarees")
    return (
      <div className='navbar'>
        <div className="navlogo">
          <img src={logo} alt=''/>
        </div>        

        <div className='navli'>
        <ul className="navmenu">
          <li onClick={()=>{setMenu("Sarees")}}>Sarees {menu==="Sarees"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Lehangas")}}>Lehangas {menu==="Lehangas"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Suits")}}>Suits {menu==="Suits"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("PartWear")}}>PartyWear {menu==="PartWear"?<hr/>:<></>}</li>
        </ul>
        </div>

        <div class="search-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        </div>


        <div className="navright">
        <FontAwesomeIcon icon={faUser} className="user-icon" />
        <img src={cart} alt="" className='cart-icon'/>
        <div className='nav-cart-count'>0</div>
        </div>
      </div>
    );
  }
  
  export default Navbar;
  