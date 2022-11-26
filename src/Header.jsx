import React from 'react'
import './Header.css'
import Logo from './assets/logo.png'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchIcon from '@mui/icons-material/Search';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <MenuSharpIcon />
            <img src={Logo} alt='' className='header__logo'/>
        </div>
        <div className='header__input'>
            <input type="text" />
            <SearchIcon />
        </div>
        <div className='header__icons'>
            <VideoCallSharpIcon />
            <AppsOutlinedIcon />
            <NotificationsIcon />
            <AccountCircleIcon />
        </div>
       
    </div>
  )
}

export default Header
