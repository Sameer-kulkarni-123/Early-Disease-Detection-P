import './centerCard.css'
import TextInput from '../textInput/textInputWithPara'
import Button from '../button/button1.jsx'
import ButtonAppearContextProvider from '../../context/buttonAppearContext'
// import { buttonContext } from '../../context/buttonAppearContext'
import { symptomContext } from '../../context/symptomContext'
import { useContext, useState } from 'react'


function CenterCard() {
  const {finalSymptoms} = useContext(symptomContext)
  const [Result, setResult] = useState("")

  const handleClick = async () => {
   console.log(finalSymptoms)
   
    try {
    const response = await fetch('http://localhost:5000/receive-array', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: finalSymptoms }) // Send array as JSON
    });

        const result = await response.json();
        console.log('Response from Python:', result);
        console.log('the result is:', result.received[0]);
        setResult(result.received[0])
    } 
    catch (error) {
        console.error('Error sending data:', error);
    } 
  }

  return(
    <ButtonAppearContextProvider>
      <div className="main-card-div">
        {Result ? <p className='result-p'>{Result}</p> : null}
        <TextInput />      
        <Button handleClick={handleClick}/>
          
      </div>
    </ButtonAppearContextProvider>

  )

}

export default CenterCard