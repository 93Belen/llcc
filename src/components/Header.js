import Logo from "./Logo";
import "../App.css"
import { useState, useEffect } from "react";

export default function Header() {
    const [open, setOpen] = useState();

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
            <div style={{width: '25%'}}>
                <Logo/>
            </div>
            <div onClick={toggleMenu} style={{width: '15%'}}>
                <svg width="100%" height="auto" viewBox="0 0 44 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0H44L42 5H4L7 0Z" fill="#001D5D"/>
                <path d="M5 8H42L40 13H2L5 8Z" fill="#001D5D"/>
                <path d="M3 16H40L38 21H0L3 16Z" fill="#001D5D"/>
                </svg>
            </div>
            <div style={{color: 'white'}} className={`${open ? 'flex' : 'hidden'} nav-text`} id='mobile-menu'>
                    <p>Home</p>
                    <p>Records</p>
                    <p>Music</p>
                    <p>Artist</p>
                    <p>Concerts</p>
                    <p>Sign Up</p>
                    <p></p>
            </div>
        </header>
    )
}