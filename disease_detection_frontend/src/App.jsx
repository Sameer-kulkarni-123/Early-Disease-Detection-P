import { useState } from 'react'
import './App.css'
import CenterCard from './components/centerCard/centerCard'
import { createContext } from 'react'
import DisplaySelectedSymptoms from './components/displaySelectedSymptoms/displaySelectedSymptoms'
import SymptomContextProvider from './context/symptomContext'

function App() {

  return (
    <SymptomContextProvider>
    <div className='main-div'>
      <CenterCard />
      <DisplaySelectedSymptoms />
    </div>
    </SymptomContextProvider>
  )

  // return (
  //   <>
  //   <div className='main-div'>
  //     <CenterCard />
  //   </div>
  //   </>
  // )
}

export default App
