import React from 'react'
import './Header.css'
import Logo from './assets/logo.png'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <MenuSharpIcon />
            <img src={Logo} alt='' className='header__logo'/>
        </div>
        <div className='header__input'>
            <input placeholder='Search' type="text" />
            <SearchIcon className='header__inputButton' />
        </div>
            <KeyboardVoiceIcon />
        <div className='header__icons'>
            <VideoCallSharpIcon className='header__icon' />
            <AppsOutlinedIcon className='header__icon' />
            <NotificationsIcon className='header__icon' />
            <Avatar className='header__avatar'
                alt='caleb jephuneh'
                src='https://avatars.githubusercontent.com/u/92708967?v=4'
            />
        </div>
       
    </div>
  )
}

export default Header
