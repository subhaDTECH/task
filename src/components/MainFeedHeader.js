import React from 'react'
import "./MainFeedHeader.css"
import Avatar from '@mui/material/Avatar';
const MainFeedHeader = () => {
  return (
    <div className='main__feed__headeer'>
         <h1>suvadtech</h1>
         <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
     
         {/* <img className='avatar__img' src= alt="" /> */}
    </div>
  )
}

export default MainFeedHeader