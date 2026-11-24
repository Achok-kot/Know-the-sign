import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function TutorialPage() {
  const { t } = useApp()
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  function finish() {
    localStorage.setItem('kts_seen_tut', '1')
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow p-8 max-w-sm w-full text-center mb-6">
        <p className="text-xs font-bold text-[#FF69B4] tracking-widest mb-3">STEP {step + 1} OF 3</p>
        <p className="text-lg text-[#3d0020] leading-relaxed">{t.tut[step]}</p>
      </div>
      <div className="flex gap-2 mb-6">
        {[0,1,2].map(i => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === step ? 'bg-[#FF69B4]' : 'bg-[#f9c0d8]'}`} />
        ))}
      </div>
      {step < 2
        ? <button onClick={() => setStep(s => s+1)} className="w-full max-w-sm py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg">Next</button>
        : <button onClick={finish} className="w-full max-w-sm py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg">{t.go}</button>
      }
      {step > 0 && (
        <button onClick={() => setStep(s => s-1)} className="mt-3 w-full max-w-sm py-3 rounded-2xl border-2 border-[#FF69B4] text-[#FF69B4] font-bold">Back</button>
      )}
    </div>
  )
}
