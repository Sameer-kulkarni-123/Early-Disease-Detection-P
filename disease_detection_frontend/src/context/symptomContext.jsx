import { createContext, useState } from "react";

export const symptomContext = createContext();

function SymptomContextProvider({children}){
  const [finalSymptoms, setfinalSymptoms] = useState([])

  return(<symptomContext.Provider value={{finalSymptoms, setfinalSymptoms}} >
    {children}
  </symptomContext.Provider>)

}

export default SymptomContextProvider