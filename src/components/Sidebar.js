import React from 'react'
import "./Sidebar.css"
import SidebarButton from './SidebarButton'
import SidebarHeader from './SidebarHeader'
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddIcon from '@mui/icons-material/Add';
const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        {/* sidebar header   */}
        <SidebarHeader />
         {/* side bar button  */}
         <SidebarButton title="Token Management" Icon={HomeIcon}/>
         <SidebarButton title="Apply for Ido" Icon={AccountBalanceIcon}/>
         <SidebarButton title="NFT" Icon={AddIcon}/>
         <SidebarButton title="Documentation" Icon={PageviewIcon}/>
        
         
        

    </div>
  )
}

export default Sidebar