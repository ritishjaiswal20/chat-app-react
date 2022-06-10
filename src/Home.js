import { Card } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import './Home.css'
function home() {
  return (
    <div className="home">
      <Banner/>
       <div className="home-section">
        <Card
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Hotel taj"
        description="A 5 star hotel with comfortable rooms "
        price=""
         />
        <Card
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Hotel taj"
        description="A 5 star hotel with comfortable rooms "
        price=""
         />
       </div>
       <div className="home-section">
       <Card
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Hotel taj"
        description="A 5 star hotel with comfortable rooms "
        price=""
         />
          <Card
        src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        title="Hotel taj"
        description="A 5 star hotel with comfortable rooms "
        price=""
         />
       </div>
    </div>
  )
}

export default home