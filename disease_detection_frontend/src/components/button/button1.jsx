import './button.css'
import { buttonContext } from '../../context/buttonAppearContext'
import { useContext } from 'react'

function Button(props) {
  const {ShowButton, setShowButton} = useContext(buttonContext)
  return(
    <>
    {ShowButton ? <button onClick={props.handleClick} className="btn">Submit</button> : null}
    </>
  )
}

export default Button