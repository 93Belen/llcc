import ArrowLeft from "../icons/Arrow-left";

export default function CustomArrowLeft({ onClick }) {
    return (
        <button className='arrow' onClick={onClick} style={{left: '42vw'}}>
            <ArrowLeft/>
        </button>
    )
}