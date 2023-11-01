import ArrowRight from "../icons/Arrow-right";

export default function CustomArrowRight({ onClick, ...rest }) {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
    return (
        <button onClick={() => onClick()} style={{width: '68px', height: '68px', borderRadius: '100%', background: 'pink'}}>
            <ArrowRight/>
        </button>
    )
}