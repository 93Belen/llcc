import Logo from "./Logo";
import "../App.css"
import "../header.css"
import { useState, useEffect } from "react";
import Home from "../icons/Home";
import Record from "../icons/Record";
import Music from "../icons/Music";
import Artist from "../icons/Artist";
import Calendar from "../icons/Calendar";

export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((state) => !state)
    }

    useEffect(() => {
        if (open) {
          document.body.classList.add('disable-scroll');
        } else {
          document.body.classList.remove('disable-scroll');
        }
    
        return () => {
          // Clean up by removing the class when the component unmounts
          document.body.classList.remove('disable-scroll');
        };
      }, [open]);

    return (
        <header>
            <div className='sticky'>
            <div style={{width: '25%', maxWidth: '106px'}}>
                <Logo/>
            </div>
            {/* Mobile menu */}
            <div id='mobile-menu-icon' onClick={toggleMenu} role="button" tabIndex="0" style={{ width: '15%', maxWidth: '80px' }}>
                <svg width="100%" height="auto" viewBox="0 0 44 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0H44L42 5H4L7 0Z" fill="#001D5D" />
                    <path d="M5 8H42L40 13H2L5 8Z" fill="#001D5D" />
                    <path d="M3 16H40L38 21H0L3 16Z" fill="#001D5D" />
                </svg>
            </div>
            {/* Desktop menu */}
            <nav id='desktop-menu' className='nav-text'>
                <ul id='desktop-menu-list'>
                    <li><Home /><a href="#home"> Home</a></li>
                    <li><Record /><a href="#records"> Records</a></li>
                    <li><Music /><a href="#music"> Music</a></li>
                    <li><Artist /> <a href="#artist">Artist</a></li>
                    <li><Calendar /><a href="#concerts"> Concerts</a></li>
                </ul>
                <button style={{alignSelf: 'center', textAlign: 'center'}} className='button button-text'>Sign Up</button>
            </nav>
            </div>
            <nav style={{ color: 'white' }} className={`${open ? '' : 'hidden'} nav-text`} id='mobile-menu'>
                <ul id='mobile-menu-list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Records</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Artist</a></li>
                    <li><a href="#">Concerts</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <div></div>
                </ul>
            </nav>
        </header>
    )
}