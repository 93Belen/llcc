import Logo from "./Logo";
import "../App.css"
import "../styles/header.css"
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
        const line2 = document.getElementById('path-2')
        const line1 = document.getElementById('path-1')
        const line3 = document.getElementById('path-3')


        if (open) {
          document.body.classList.add('disable-scroll');
          document.getElementById('app').classList.add('disable-scroll');
          document.getElementById('main').classList.add('disable-scroll');
          


          // Animation for burguer menu

        line2.style.fill = 'white'
        line2.style.transitionDuration = '0.5s'
        line1.style.transitionDuration = '1s'
        line3.style.transitionDuration = '1s'
        line1.style.transform = 'translateY(50%)'
        line3.style.transform = 'translateY(-50%)'

        } else {
          document.body.classList.remove('disable-scroll');
          document.getElementById('app').classList.remove('disable-scroll');
          document.getElementById('main').classList.remove('disable-scroll');

          // Animation burguer menu


          line2.style.fill = '#001D5D'
          line1.style.transform = 'translateY(0%)'
          line3.style.transform = 'translateY(0%)'

        }
    
        return () => {
          // Clean up by removing the class when the component unmounts
          document.body.classList.remove('disable-scroll');
          document.getElementById('app').classList.remove('disable-scroll');
          document.getElementById('main').classList.remove('disable-scroll');
          line2.style.fill = '#001D5D'
        };
      }, [open]);

    return (
        <header>
            <div className='sticky'>
            <div style={{width: '25%', maxWidth: '106px', paddingTop: '12px'}}>
                <Logo/>
            </div>
            {/* Mobile menu */}
            <div id='mobile-menu-icon' onClick={toggleMenu} role="button" tabIndex="0" style={{ width: '15%', maxWidth: '80px' }}>
                <svg id='svg' width="100%" viewBox="0 0 44 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id='path-1' d="M7 0H44L42 5H4L7 0Z" fill="#001D5D" />
                    <path id='path-2' d="M5 8H42L40 13H2L5 8Z" fill="#001D5D" />
                    <path id='path-3' d="M3 16H40L38 21H0L3 16Z" fill="#001D5D" />
                </svg>
            </div>
            {/* Desktop menu */}
            <nav id='desktop-menu' className='nav-text'>
                <ul style={{listStyle: 'none'}} id='desktop-menu-list'>
                    <li><Home /><a href="#home"> Home</a></li>
                    <li><Record /><a href="#records"> Records</a></li>
                    <li><Music /><a href="#music"> Music</a></li>
                    <li><Artist /> <a href="#artist">Artist</a></li>
                    <li><Calendar /><a href="#concerts"> Concerts</a></li>
                </ul>
                <button style={{alignSelf: 'center', textAlign: 'center'}} className='button button-text'>Sign Up</button>
            </nav>
            </div>
            <nav style={{ color: 'white' }} className={`${open ? 'appear' : 'desappear'} nav-text`} id='mobile-menu'>
                <ul style={{listStyle: 'none'}} id='mobile-menu-list'>
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