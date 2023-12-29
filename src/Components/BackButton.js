import React from 'react'
import { ASSETS_URL } from '../Constant';
// import homeLogo from '../assets/`${ASSETS_URL}homeLogo.png`'
// import backArrow from '../assets/`${ASSETS_URL}leftArrow.png`'
import { useNavigate } from 'react-router-dom';
import './Constant.css'



function BackButton() {
    const nav= useNavigate();
    const handleNavigate=()=>{
        nav('/')
    }
    
  return (
    <div className='nav-home' >
          <img src={`${ASSETS_URL}leftArrow.png`} alt='' onClick={handleNavigate}/>&nbsp;&nbsp;
          <img src={`${ASSETS_URL}homeLogo.png`} alt='' onClick={handleNavigate}/>
        </div>
  )
}

export default BackButton