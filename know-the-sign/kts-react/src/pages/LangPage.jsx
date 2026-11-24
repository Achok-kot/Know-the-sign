import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function LangPage() {
  const { setLang } = useApp()
  const navigate = useNavigate()

  function pick(code) {
    setLang(code)
    const seen = localStorage.getItem('kts_seen_tut')
    navigate(seen ? '/home' : '/tutorial')
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] flex flex-col items-center justify-center p-6 gap-4">
      <h1 className="text-3xl font-bold text-[#FF69B4] mb-2">Know the Sign</h1>
      <p className="text-[#a0527a] mb-6">Choose your language to begin</p>
      {[{code:'en',label:'English'},{code:'ar',label:'عربي — Arabic'},{code:'jub',label:'Juba Arabic'}].map(l => (
        <button key={l.code} onClick={() => pick(l.code)}
          className="w-full max-w-sm py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg shadow hover:bg-[#e0458a] transition">
          {l.label}
        </button>
      ))}
    </div>
  )
}
