import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow  icon={HomeIcon} title='Home'/>
      <SidebarRow  icon={WhatshotIcon} title='Trending'/>
      <SidebarRow ico={SubscriptionsIcon} title='Subscription'/>
      
    </div>
  )
}

export default Sidebar
