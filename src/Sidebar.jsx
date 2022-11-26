import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='sidebar'>
      hello this is a Sidebar
      <SidebarRow title='Home'/>
      <SidebarRow title='Trending'/>
      <SidebarRow title='Subscription'/>
      
    </div>
  )
}

export default Sidebar
