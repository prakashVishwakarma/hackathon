import './RedButton.css'

const RedButton = ({text,onClick}:any) => {
  return (
    <button onClick={onClick} className='RedButton'>{text}</button>
  )
}

export default RedButton
