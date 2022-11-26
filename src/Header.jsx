import React from 'react'
import './Header.css'
import Logo from './assets/logo.png'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';

function Header() {
  return (
    <div className='header'>
      <h1>this is a header</h1>
      <MenuSharpIcon />
      <VideoCallSharpIcon />
      <img src={Logo} alt='' className='header__logo'/>
    </div>
  )
}

export default Header
