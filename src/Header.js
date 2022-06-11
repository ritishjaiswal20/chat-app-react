import React from 'react'
import "./Header.css"

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';
function Header() {
  return (
    <div className="header">
        <img className="header-icon" src="https://cdn.dribbble.com/users/1937292/screenshots/6962478/video-1565151647.gif" alt="logo"/>
        
        <div className="header-center">
          <input type="text"/>
          <SearchIcon/>
        </div>

        <div className="header-right">
            <p>Become a host</p>
            <LanguageIcon/>
            <ExpandMoreIcon/>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header