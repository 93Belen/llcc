import './App.css';
import Footer from './components/Footer';
import FooterDesktop from './components/FooterDesktop';
import Header from './components/Header';
import "./fonts.css"

function App() {
  return (
    <div id='app'>
      <Header/>
      <div style={{height: '800px'}}></div>
      <FooterDesktop/>
      <Footer/>
    </div>
  );
}

export default App;

