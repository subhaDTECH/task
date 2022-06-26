import React,{useState} from 'react'
import "./SidebarButton.css"
import HomeIcon from '@mui/icons-material/Home';
import { Link ,NavLink} from "react-router-dom";


const SidebarButton = ({Icon,title}) => {
   
  return (
    <NavLink to={title=="Home" ? "/" :title}  className='sidebarButton__container'>
         <div className='img__title__container'>
           {/* <img className='icon__img' src={icon} alt="" /> */}
       
           <Icon/>
            <p className='title'>{title}</p>
             
         </div>

    </NavLink>
  )
}

export default SidebarButton