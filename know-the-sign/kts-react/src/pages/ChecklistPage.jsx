import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { QUESTIONS, triage } from '../data'
import PageHeader from '../components/PageHeader'

export default function ChecklistPage() {
  const { t, lang, answers, setAnswers, setResult } = useApp()
  const [qIndex, setQIndex] = useState(0)
  const navigate = useNavigate()
  const q = QUESTIONS[qIndex]
  const total = QUESTIONS.length

  function pick(val) {
    setAnswers(prev => ({ ...prev, [q.id]: val }))
  }

  function next() {
    if (qIndex < total - 1) {
      setQIndex(i => i + 1)
    } else {
      const res = triage({ ...answers, [q.id]: answers[q.id] })
      setResult(res)
      // save to localStorage history
      const record = { ts: Date.now(), level: res.level, signs: res.dangerSigns.map(x => x.id) }
      try {
        const hist = JSON.parse(localStorage.getItem('kts_history') || '[]')
        hist.unshift(record)
        localStorage.setItem('kts_history', JSON.stringify(hist))
      } catch(e) {}
      navigate('/result')
    }
  }

  const pct = Math.round((qIndex / total) * 100)
  const answered = answers[q.id]

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title={`${t.qn} ${qIndex + 1} ${t.of} ${total}`} back="/home" />
      <div className="max-w-lg mx-auto p-4">
        {/* Progress */}
        <div className="mb-4">
          <div className="text-xs text-[#a0527a] mb-1">{pct}%</div>
          <div className="h-2 bg-[#f9c0d8] rounded-full">
            <div className="h-full bg-[#FF69B4] rounded-full transition-all" style={{width:`${pct}%`}} />
          </div>
        </div>

        {/* Question card */}
        <div className={`bg-white rounded-2xl p-5 mb-4 shadow border-l-4 ${q.weight === 'red' ? 'border-red-500' : 'border-yellow-400'}`}>
          <span className="flex items-center gap-2">
            <span className={`w-4 h-4 rounded-full inline-block ${q.weight === 'red' ? 'bg-red-500' : 'bg-yellow-400'}`}></span>
            <span className={`text-xs font-bold ${q.weight === 'red' ? 'text-red-500' : 'text-yellow-500'}`}>
              {q.weight === 'red' ? 'Urgent sign' : 'Caution sign'}
            </span>
          </span>
          <p className="text-lg font-bold text-[#3d0020] mt-3 mb-4 leading-snug">{q[lang] || q.en}</p>
          <button onClick={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(q[lang] || q.en))}
            className="w-full border-2 border-[#FF69B4] text-[#FF69B4] rounded-xl py-2 text-sm font-semibold">
            {t.listen}
          </button>
        </div>

        {/* Answer cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button onClick={() => pick('yes')}
            className={`flex flex-col items-center justify-center gap-2 min-h-24 rounded-2xl border-3 font-bold text-base shadow transition
              ${answered === 'yes' ? 'border-red-500 bg-red-50' : 'border-[#f9c0d8] bg-white'}`}>
            <span className="w-9 h-9 rounded-full border-3 border-red-500 flex items-center justify-center text-red-500 font-black text-lg">✕</span>
            {t.yes}
          </button>
          <button onClick={() => pick('no')}
            className={`flex flex-col items-center justify-center gap-2 min-h-24 rounded-2xl border-3 font-bold text-base shadow transition
              ${answered === 'no' ? 'border-green-500 bg-green-50' : 'border-[#f9c0d8] bg-white'}`}>
            <span className="w-9 h-9 rounded-full border-3 border-green-500 flex items-center justify-center text-green-500 font-black text-lg">✓</span>
            {t.no}
          </button>
        </div>

        {answered && (
          <button onClick={next}
            className="w-full py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg shadow">
            {qIndex === total - 1 ? t.seeResult : t.next}
          </button>
        )}
        {qIndex > 0 && (
          <button onClick={() => setQIndex(i => i - 1)}
            className="w-full mt-2 py-3 rounded-2xl border-2 border-[#FF69B4] text-[#FF69B4] font-bold">
            {t.bk}
          </button>
        )}
      </div>
    </div>
  )
}
