import ArrowRight from "../icons/Arrow-right";

export default function CustomArrowRight({ onClick }) {
    return (
        <button className='arrow' onClick={onClick} style={{right: '40vw'}}>
            <ArrowRight/>
        </button>
    )
}