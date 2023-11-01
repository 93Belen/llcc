import ArrowLeft from "../icons/Arrow-left";

export default function CustomArrowLeft({ onClick, ...rest }) {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
      } = rest;
    return (
        <button onClick={() => onClick()} style={{width: '68px', height: '68px', borderRadius: '100%', background: 'pink'}}>
            <ArrowLeft/>
        </button>
    )
}