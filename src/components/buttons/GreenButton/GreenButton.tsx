import './GreenButton.css'

const GreenButton = ({ text,onClick }: any) => {

    return (
        <>
            <button onClick={onClick} className="GreenButton" type="button">{text}</button>
        </>
    )
}

export default GreenButton
