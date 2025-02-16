import { useContext } from "react"
// import { AppContext } from "../../App"
import { symptomContext } from "../../context/symptomContext";

function DisplaySelectedSymptoms(){
  const {finalSymptoms, setFinalSymptoms} = useContext(symptomContext)
  return(
    <p style={{color: "white"}}>{finalSymptoms.join(", ")}</p>
  )
}

export default DisplaySelectedSymptoms;