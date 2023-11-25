import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

const INITIAL_FORM_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_FORM_STATE)

  function handleChange(keyName, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [keyName]: newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
