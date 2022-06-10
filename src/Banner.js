import { Button } from '@mui/material'
import React, { useState } from 'react'
import './Banner.css'
import Search from './Search';
function Banner() {
    const [showSearch,setShowSearch] =useState(true);
    return (
    <div className="banner">
         <div className="banner-search">
            {showSearch && <Search/>}
            <Button
            onClick={()=>setShowSearch(!showSearch)}
              className="banner-searchButton"
              variant="outlined"
            >Search dates
            </Button>
         </div>
        <div className="banner-info">
            <h1>get and strecth your imagination</h1>
            <h5>plan a diffrent kind of destination</h5>
           <Button variant="outlined">Explore nearby</Button>
        </div>
    </div>
  )
}

export default Banner