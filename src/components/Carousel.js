import "../App.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../carousel.css'
import CustomArrowLeft from "./CustomArrowLeft";
import CustomArrowRight from "./CustomArrowRight";


export default function CarouselElement() {

    const responsive = {
        desktop: {
          breakpoint: { max: 8000, min: 1200 },
          items: 3
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
                responsive={responsive}>
                    <div className='card'>Item 1</div>
                    <div className='card'>Item 2</div>
                    <div className='card'>Item 3</div>
                    <div className='card'>Item 4</div>
                    <div className='card'>Item 5</div>
                    <div className='card'>Item 6</div>
                </Carousel>
            </div>
       </section>
    )
}