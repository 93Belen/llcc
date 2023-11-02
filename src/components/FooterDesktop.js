import "../App.css"
import "../styles/footerDesktop.css"
import Facebook from "../icons/Facebook"
import Instagram from "../icons/Instagram"
import Twitter from "../icons/Twitter"
import Youtube from "../icons/Youtube"
import LogoWhite from "./Logo-white"

export default function FooterDesktop() {

    return (
       <footer id='footer-desktop' className='regular-body'>
           <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
               <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <div style={{width: '50%'}}><LogoWhite/></div>
                    <div>
                        <p>8521 W Fairfax Rd<br/>
                        Los Angeles, CA</p>
                    </div>
                    <div>
                        <p>990210<br/>
                        (909) 505 4302</p>
                    </div>
               </div>
               <div>
               <p className='all-caps'>Explore</p>
                        <nav className="regular-body">
                            <ul style={{paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <li><a href='#'></a>About Us</li>
                                <li><a href='#'></a>Our Story</li>
                                <li><a href='#'></a>Team</li>
                                <li><a href='#'></a>Careers</li>
                                <li><a href='#'></a>FAQ</li>
                            </ul>
                        </nav>
                </div>
                <div>
               <p className='all-caps'>Music</p>
                        <nav className="regular-body">
                            <ul style={{paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <li><a href='#'></a>Missing Out</li>
                                <li><a href='#'></a>Trapsoul</li>
                                <li><a href='#'></a>Sonder Sons</li>
                                <li><a href='#'></a>Paradise Today</li>
                                <li><a href='#'></a>Needed</li>
                            </ul>
                        </nav>
                </div>
                <div>
               <p className='all-caps'>Artist</p>
                        <nav className="regular-body">
                            <ul style={{paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <li><a href='#'></a>Brent Faiyaz</li>
                                <li><a href='#'></a>Drake</li>
                                <li><a href='#'></a>Bryson Ford</li>
                                <li><a href='#'></a>Young Ford</li>
                                <li><a href='#'></a>Roy Fresco</li>
                            </ul>
                        </nav>
                </div>
                <div>
               <p className='all-caps'>Records</p>
                        <nav className="regular-body">
                            <ul style={{paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                                <li><a href='#'></a>What a Time</li>
                                <li><a href='#'></a>Coming Home</li>
                                <li><a href='#'></a>Always First</li>
                                <li><a href='#'></a>So Far Gone</li>
                                <li><a href='#'></a>Big Bluez</li>
                            </ul>
                        </nav>
                </div>
           </div>
           <div id='links-and-media-footer'>
               <div style={{display: 'flex', gap: '78px'}}>
               <a style={{color: 'white', textDecoration: 'none'}} className='regular-body' href='#'>Privacy Policy</a>
                    <a style={{color: 'white', textDecoration: 'none'}} className='regular-body' href='#'>Terms and Conditions</a>
               </div>
               <div style={{display: 'flex', gap: '20px'}}>
                        <Instagram/>
                        <Youtube/>
                        <Twitter/>
                        <Facebook/>
                    </div>
           </div>
       </footer>
    )
}