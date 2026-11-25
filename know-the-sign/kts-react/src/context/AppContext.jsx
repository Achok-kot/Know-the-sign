import { createContext, useContext, useState } from 'react'
import { TX } from '../data'

const AppContext = createContext()


export function AppProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [county, setCounty] = useState('')

  const t = TX[lang]

  return (
    <AppContext.Provider value={{ lang, setLang, t, answers, setAnswers, result, setResult, county, setCounty }}>
      {children}
    </AppContext.Provider>
  )
}


export function useApp() {
  return useContext(AppContext)
}
