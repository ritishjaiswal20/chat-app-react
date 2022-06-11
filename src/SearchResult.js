import React from 'react'
import './SearchResult.css'
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function SearchResult({location,title,description,price,img,totalprice,star}) {
  return (
    <div className="searchResult">
          <img  src={img} alt="image"/>
             <FavoriteBorderIcon className="searchResult-heart"/>
        <div className="searchResult-info">
           
             <div className="searchResult-infotop">
                <p>{location}</p>
                <h1>{title}</h1>
                <p>____</p>
                <p>{description}</p>
             </div>
             <div className="searchResult-infobottom">
                 <div className="searchResult-star">
                 <StarIcon className="searchResult-starIcon" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                 </div>
                 <div className="searchResult-price">
                   <h2>{price}</h2>
                   <p>{totalprice}</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default SearchResult