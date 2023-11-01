import './App.css';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
import Header from './components/Header';
import "./fonts.css"
import Play from './icons/Play.js'

function App() {
  return (
    <div id='app'>
      <Header/>
      <main style={{height: '800px'}}>
        <section id='hero'>
          <h1>A.M. Paradox</h1>
          <div id='subtitle'><p className='regular-body'>Christopher Brent Wood, better known by his stage name Brent Faiyaz, is
          an American singer and record producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.</p></div>
          <div id='watch-div'>
            <button id='play-button'><Play/></button>
            <p className='video-button'>Watch Video</p>
          </div>
        </section>
      </main>
      <FooterDesktop/>
      <Footer/>
    </div>
  );
}

export default App;

