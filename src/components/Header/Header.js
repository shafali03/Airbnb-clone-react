import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to='/'>
        <img
          className="header__icon"
          src="https://res.cloudinary.com/shafali/image/upload/v1599397277/airbnblogo-removebg-preview_bph0ms.png" alt="" />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  )
}

export default Header
