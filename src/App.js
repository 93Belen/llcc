import './App.css';
import CarouselElement from './components/Carousel';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
import Form from './components/Form';
import Header from './components/Header';
import Map from './components/Map';
import "./fonts.css"
import Play from './icons/Play.js'

function App() {
  return (
    <div id='app'>
      <Header/>
      <main id='main' style={{height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '0'}}>
        <section id='hero'>
          <h1>A.M. Paradox</h1>
          <div id='subtitle'><p className='regular-body'>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
          an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.</p></div>
          <div id='watch-div'>
            <button id='play-button'><Play/></button>
            <p className='video-button'>Watch Video</p>
          </div>
        </section>
        <section id='brent-div'>
          <div id='brent-img'>
            
          </div>
          <div id='brent-content'>
            <h3>Brent Faiyaz, So Far Gone</h3>
            <p className='regular-body'>Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career.  On January 19, 2015, he released his debut single "Allure". On June 1, 2016, Faiyaz released "Invite Me", the lead single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M. Paradox was released and received with positive reviews from music critics.  On January 26, 2017, Sonder released their debut EP Into.</p>
            <button id='desktop-brent-button' className='button regular-body'>Learn More</button>
          </div>
          <button id='mobile-brent-button' className='button regular-body'>Learn More</button>
        </section>
        <CarouselElement/>
        <Map/>
        <Form/>
      </main>
      <FooterDesktop/>
      <Footer/>
    </div>
  );
}

export default App;

