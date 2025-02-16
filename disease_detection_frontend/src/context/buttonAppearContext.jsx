import { createContext, useState } from "react";

export const buttonContext = createContext();

function ButtonAppearContextProvider({children}){

  const [ShowButton, setShowButton] = useState(true)
  
  return(
  <buttonContext.Provider value={{ShowButton, setShowButton}}>
    {children}
  </buttonContext.Provider>
  )

}

export default ButtonAppearContextProvider;