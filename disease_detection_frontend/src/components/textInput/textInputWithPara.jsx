import { useContext, useState } from "react"
import './textInputWithPara.css'
// import {AppContext} from '../../App.jsx'
import { symptomContext } from "../../context/symptomContext.jsx";
// import Button from "../button/button1.jsx";
import { buttonContext } from "../../context/buttonAppearContext.jsx";


function TextInput() {
  const {ShowButton, setShowButton} = useContext(buttonContext)
  const {finalSymptoms, setfinalSymptoms} = useContext(symptomContext)

  const availableSymptoms = [
    'muscle_pain', 'dark_urine', 'joint_pain', 'chest_pain', 'fatigue', 'itching',
    'yellowing_of_eyes', 'nausea', 'high_fever', 'family_history',
    'loss_of_appetite', 'mild_fever', 'altered_sensorium', 'mucoid_sputum',
    'abdominal_pain', 'vomiting', 'muscle_weakness', 'lack_of_concentration',
    'stomach_pain', 'diarrhoea', 'headache', 'sweating', 'yellowish_skin',
    'weight_loss', 'unsteadiness', 'pain_behind_the_eyes', 'bladder_discomfort',
    'loss_of_balance', 'breathlessness', 'stomach_bleeding', 'phlegm',
    'dischromic_patches', 'sunken_eyes', 'malaise', 'slurred_speech',
    'continuous_feel_of_urine', 'neck_pain', 'back_pain', 'coma',
    'nodal_skin_eruptions', 'rusty_sputum', 'chills', 'burning_micturition',
    'passage_of_gases', 'internal_itching', 'increased_appetite', 'blister',
    'cough', 'movement_stiffness', 'red_sore_around_nose'
];


  const handleChangeText = (e) => {
    const value = e.target.value
    setinput(value)

    if (value.length >0) {
      const filtered = availableSymptoms.filter((symp) => 
        symp.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSymptom(filtered)
      setshowDropdown(true)
      setShowButton(false)
    }
    else{
      setshowDropdown(false)
      setShowButton(true)
    }
  }

  const handleSelect = (e) => {
    setinput("")
    setfinalSymptoms([...finalSymptoms, e])
    setshowDropdown(false)
    setShowButton(true)
  }

  const [FilteredSymptom, setFilteredSymptom] = useState([])
  const [input, setinput] = useState("")
  const [showDropdown, setshowDropdown] = useState(false)
  // const [finalSymptoms, setfinalSymptoms] = useState([])

  return(
    <>
      <p className="para">Enter Your Symptoms</p> 
      <input className="input" placeholder="Enter symptom here..." value={input} onChange={handleChangeText}></input>

      {showDropdown && (
        <ul className="ul1">
          {FilteredSymptom.length > 0 ? (
            FilteredSymptom.map((option, index) => (
              <li
                key={index}
                className="li1"
                onClick={() => handleSelect(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="li2">No results found</li>
          )}
        </ul>
      )}

    </>
  )

}

export default TextInput