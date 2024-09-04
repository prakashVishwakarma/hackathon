import './WhiteButton.css'

const WhiteButton = ({text,onClick}:any) => {
  return (
    <>
      <button onClick={onClick} className="whitebutton" type="button">{text}</button>
    </>
  )
}

export default WhiteButton
