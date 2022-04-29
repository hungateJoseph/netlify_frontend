import React, {useState} from 'react';
import './App.css'
import {  Link } from "react-router-dom";
import Logo from './inkpx-word-art1.png';
import Menu from './menu-icon.png'


export default function Navbar() {

    const [message, setMessage] = useState(false);
    const [fin, setFin] = useState(false);
    const [hamburger, setHamburger] = useState(false);
  
    function handleCopiedMessage(event) {
        event.preventDefault();
        updateClipboard("hungatejoseph@gmail.com");
  
        setTimeout(function () {
          setMessage(false);
        }, 1500);
  
        setMessage(true);
  
      }
  
      function updateClipboard(newClip) {
        navigator.clipboard.writeText(newClip).then(function() {
          /* clipboard successfully set */
        }, function() {
          /* clipboard write failed */
        });
      }
  
    return (
      <>
      <div className={`copied ${message ? 'display' : 'hide'}`}>
        <p> </p>
        <p>Email address copied!</p>
        </div>

      {!hamburger &&
      <div className='menu' onClick={() => {
        setHamburger(true);
      }}>
        <img className='hamburger' src={Menu}></img>
      </div>
      }
  
      {hamburger &&
        <div className='menu-expanded'>
  
        <div className={`copied-phone ${message ? 'display' : 'hide'}`}>
        <p>Email address copied!</p>
        </div>
  
        <Link to="/about" className='menu-link'>
        <a className='phone-menu' onClick={() => {
        setHamburger(false);
        }}> About</a>
        </Link>
        <br />
        {/* <a className='phone-menu' href=''
        onClick={handleCopiedMessage}>
        Contact</a>
        <br /> */}
        <Link to="/military-service">
        <a className='phone-menu' onClick={() => {
        setHamburger(false);
        }}>Military Service</a>
        </Link>
        <br />
        <p className='phone-menu' style={{marginBottom:'5px'}} onClick={() => {
          setFin(!fin)
        }}>Political Tweet Analysis</p>
        <div className={`${fin ? 'phone-active' : 'hidden'}`}>
        <Link exact to="/financial-scraping-overview">
        <a className='phone-menu sub'  onClick={() => {
        setHamburger(false);
        }}>
        —  Project Overview
        </a>
        </Link>
        <br />
        <Link exact to="/TwitterTool">
        <a className='phone-menu sub' onClick={() => {
        setHamburger(false);
        }}>
        —  Analysis Tool
        </a>
        </Link>
        </div>
      </div>
      }
  
  
      <Link to="/">
      <img src={Logo} className='logo' onClick={() => {
        setFin(false);
      }}/>
      </Link>
  
      <div className='header-container'>
  
      <div className='header-link navlink' style={{height:'100px'}}>
      <a href='' onClick={(e) => {
        e.preventDefault();
        setFin(true);
      }} className='header-link-text'>Political Tweet Tool</a>
      <div className={`financial-subhead ${fin ? 'financial-active' : ''}`}>
        <p>|</p>
        <Link exact to="/financial-scraping-overview">
        <p style={{textAlign:'right'}}><a>Project Overview</a></p>
        </Link>
        <Link exact to="/TwitterTool">
        <a>Analysis Tool</a>
        </Link>
      </div>
      </div>
  
      <Link to="/military-service">
        <div className='header-link navlink'>
        <a className='header-link-text'>Military Service</a>
        </div>
        </Link>
  
      <div className='header-link navlink'>
      <a className='header-link-text' href=''
      onClick={handleCopiedMessage}>
      Contact</a>
      </div>
  
      <Link to="/about">
      <div className='header-link navlink'>
      <a className='header-link-text'>About</a>
      </div>
      </Link>
      </div>
      </>
    );
  }

// const navbar= () =>{
//   return (
//   <div>
//     <li>
//       <Link to="/welcome ">About</Link>
//     </li>
//   </div>
//   );
// }
// export default navbar;