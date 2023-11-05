import "../App.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../styles/carousel.css'
import CustomArrowLeft from "./CustomArrowLeft";
import CustomArrowRight from "./CustomArrowRight";



export default function CarouselElement() {

    const responsive = {
        big: {
            breakpoint: { max: 8000, min: 1800 },
            items: 3
          },
        desktop: {
          breakpoint: { max: 1800, min: 1200 },
          items: 2
        },
        tablet: {
        breakpoint: {max: 1200, min: 700},
        items: 2
    },
        mobile: {
          breakpoint: { max:700, min: 0 },
          items: 1
        }
      };


      const onBeforeChange = (currentSlide) => {
        console.log(currentSlide)
        document.getElementById(`card-${currentSlide}`).style.opacity = '1'
      };
      const onAfterChange = (currentSlide) => {
        console.log(currentSlide)
        document.getElementById(`card-${currentSlide}`).style.opacity = '0.5'
      };

    return (
       <section id='carousel'>
           <h3>New Releases</h3>
           <p className='regular-body'>New albums every single month, check out the newest & best from Snyder Recording artist, now available on Apple Music & Spotify.</p>
           <div style={{marginTop: '50px'}}>
                <Carousel
                containerClass="carousel"
                arrows
                removeArrowOnDeviceType={["mobile", 'tablet']}
                renderArrowsWhenDisabled={true}
                customRightArrow={<CustomArrowRight/>}
                customLeftArrow={<CustomArrowLeft/>}
                renderButtonGroupOutside
                beforeChange={onBeforeChange} 
                afterChange={onAfterChange}
                responsive={responsive}>
                    <div id='card-0' className='card'>
                    <h4>Trapsoul</h4>
                        <div className='card-img'>
                            <img src='card.jpg' width='100%' />
                        </div>
                        <div style={{paddingTop: '0px', marginTop: '0px'}}>
                            <p style={{color: 'var(--green)', paddingTop: '0px', marginTop: '0px'}} className='all-caps'>Bryson Tyller</p>
                            <p style={{paddingTop: '0px', marginTop: '0px'}} className='small-body'>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
                        </div>
                    </div>
                    <div  id='card-1' className='card'>
                    <h4>Trapsoul</h4>
                        <div className='card-img'>
                            <img src='card.jpg' width='100%' />
                        </div>
                        <div style={{paddingTop: '0px', marginTop: '0px'}}>
                            <p style={{color: 'var(--green)', paddingTop: '0px', marginTop: '0px'}} className='all-caps'>Bryson Tyller</p>
                            <p style={{paddingTop: '0px', marginTop: '0px'}} className='small-body'>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
                        </div>
                    </div>
                    <div id='card-2' className='card'>
                    <h4>Trapsoul</h4>
                        <div className='card-img'>
                            <img src='card.jpg' width='100%' />
                        </div>
                        <div style={{paddingTop: '0px', marginTop: '0px'}}>
                            <p style={{color: 'var(--green)', paddingTop: '0px', marginTop: '0px'}} className='all-caps'>Bryson Tyller</p>
                            <p style={{paddingTop: '0px', marginTop: '0px'}} className='small-body'>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
                        </div>
                    </div>
                    <div id='card-3' className='card'>
                    <h4>Trapsoul</h4>
                        <div className='card-img'>
                            <img src='card.jpg' width='100%' />
                        </div>
                        <div style={{paddingTop: '0px', marginTop: '0px'}}>
                            <p style={{color: 'var(--green)', paddingTop: '0px', marginTop: '0px'}} className='all-caps'>Bryson Tyller</p>
                            <p style={{paddingTop: '0px', marginTop: '0px'}} className='small-body'>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
                        </div>
                    </div>
                    <div id='card-4' className='card'>
                    <h4>Trapsoul</h4>
                        <div className='card-img'>
                            <img src='card.jpg' width='100%' />
                        </div>
                        <div style={{paddingTop: '0px', marginTop: '0px'}}>
                            <p style={{color: 'var(--green)', paddingTop: '0px', marginTop: '0px'}} className='all-caps'>Bryson Tyller</p>
                            <p style={{paddingTop: '0px', marginTop: '0px'}} className='small-body'>Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1. </p>
                        </div>
                    </div>
                </Carousel>
            </div>
       </section>
    )
}