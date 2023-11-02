import "../App.css"
import "../styles/footer.css"
import ArrowDown from "../icons/Arrow-down"
import Facebook from "../icons/Facebook"
import Instagram from "../icons/Instagram"
import Twitter from "../icons/Twitter"
import Youtube from "../icons/Youtube"
import LogoWhite from "./Logo-white"

export default function Footer() {

    const toggleOpen = (idElement) => {
       const state = document.getElementById(idElement).style.display;
        if(state === 'none'){
            document.getElementById(idElement).style.display = 'block'    
        }
        else {
            document.getElementById(idElement).style.display = 'none'
        }     
    }

    return (
       <footer id="footer">
           <div style={{width: '100%', justifyItems: 'end', justifyContent: 'end', display: 'flex'}}><div style={{width: '25%', maxWidth: '106px'}}><LogoWhite/></div></div>
           <div id="accordion">
                <div className='accordion-item'>
                    <div onClick={() => {toggleOpen('explore-content')}} className='accordion-header'><p className='all-caps'>Explore</p><ArrowDown/></div>
                    <nav id='explore-content' className="accordion-content nav-text">
                        <ul>
                            <li><a href='#'></a>About Us</li>
                            <li><a href='#'></a>Our Story</li>
                            <li><a href='#'></a>Team</li>
                            <li><a href='#'></a>Careers</li>
                            <li><a href='#'></a>Faq</li>
                        </ul>
                    </nav>
                </div>
                <div className='accordion-item'>
                    <div onClick={() => {toggleOpen('music-content')}} className='accordion-header'><p className='all-caps'>Music</p><ArrowDown/></div>
                        <nav id='music-content' className="accordion-content nav-text">
                            <ul>
                                <li><a href='#'></a>Missing Out</li>
                                <li><a href='#'></a>Trapsoul</li>
                                <li><a href='#'></a>Sonder Sons</li>
                                <li><a href='#'></a>Paradise Today</li>
                                <li><a href='#'></a>Needed</li>
                            </ul>
                        </nav>
                </div>
                <div className='accordion-item'>
                    <div onClick={() => {toggleOpen('artist-content')}} className='accordion-header'><p className='all-caps'>Artist</p><ArrowDown/></div>
                    <nav id='artist-content' className="accordion-content nav-text">
                        <ul>
                            <li><a href='#'></a>Brent Faiyaz</li>
                            <li><a href='#'></a>Drake</li>
                            <li><a href='#'></a>Bryson Ford</li>
                            <li><a href='#'></a>Young Ford</li>
                            <li><a href='#'></a>Roy Fresco</li>
                        </ul>
                    </nav>
                </div>
                <div className='accordion-item'>
                    <div onClick={() => {toggleOpen('record-content')}} className='accordion-header'><p className='all-caps'>Record</p><ArrowDown/></div>
                    <nav id='record-content' className="accordion-content nav-text">
                        <ul>
                            <li><a href='#'></a>What a Time</li>
                            <li><a href='#'></a>Coming Home</li>
                            <li><a href='#'></a>Always First</li>
                            <li><a href='#'></a>So Far Gone</li>
                            <li><a href='#'></a>Big Bluez</li>
                        </ul>
                    </nav>
                </div>
           </div>
           <div style={{display: 'flex', padding: '29px 0px', justifyContent: 'space-between'}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: 'auto', marginBottom: 'auto'}}>
                    <a style={{color: 'white', textDecoration: 'none'}} className='small-body' href='#'>Privacy Policy</a>
                    <a style={{color: 'white', textDecoration: 'none'}} className='small-body' href='#'>Terms and Conditions</a>
                    <div style={{display: 'flex', gap: '17px'}}>
                        <Instagram/>
                        <Youtube/>
                        <Twitter/>
                        <Facebook/>
                    </div>
               </div>
               <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <p className='small-body'>8521 W Fairfax Rd<br/>
                    Los Angeles, CA</p>
                    <p className='small-body'>990210<br/>
                    (909) 505 4302          </p>
               </div>
           </div>
       </footer>
    )
}