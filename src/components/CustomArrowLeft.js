import ArrowLeft from "../icons/Arrow-left";

export default function CustomArrowLeft({ onClick }) {
    return (
        <button className='arrow' onClick={onClick} style={{left: '40vw'}}>
            <ArrowLeft/>
        </button>
    )
}