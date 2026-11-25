import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { FACILITIES, COUNTIES } from '../data'
import PageHeader from '../components/PageHeader'

const CIRCLE = {
  g: { bg: 'bg-green-600',  icon: 'fa-solid fa-circle-check',  cardBg: 'bg-green-400',  iconColor: 'text-white' },
  y: { bg: 'bg-orange-500', icon: 'fa-solid fa-triangle-exclamation', cardBg: 'bg-yellow-400', iconColor: 'text-white' },
  r: { bg: 'bg-red-700',    icon: 'fa-solid fa-circle-xmark',  cardBg: 'bg-red-500',    iconColor: 'text-white' },
}

export default function ResultPage() {
  const { t, lang, result, county, setCounty, setAnswers, setResult } = useApp()
  const navigate = useNavigate()

  if (!result) { navigate('/home'); return null }

  const { level, dangerSigns } = result
  const c = CIRCLE[level]
  const msgs  = { g: t.g,  y: t.y,  r: t.r  }
  const descs = { g: t.gm, y: t.ym, r: t.rm }

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title="Your Result" back="/home" />
      <div className="max-w-lg mx-auto p-4">

        {/* Result card with big circle */}
        <div className={`${c.cardBg} rounded-2xl p-6 mb-4 shadow text-center`}>
          <div className={`${c.bg} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
            <i className={`${c.icon} text-5xl text-white`}></i>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{msgs[level]}</h2>
          <p className="text-gray-800 text-sm leading-relaxed">{descs[level]}</p>
          <p className="text-gray-700 text-xs mt-3 italic">{t.disc}</p>
        </div>

        {/* Listen button */}
        <button onClick={() => window.speechSynthesis?.speak(new SpeechSynthesisUtterance(msgs[level] + '. ' + descs[level]))}
          className="w-full border-2 border-[#FF69B4] text-[#FF69B4] rounded-xl py-3 font-semibold mb-4">
          {t.listen}
        </button>

        {/* Danger signs list */}
        {dangerSigns.length > 0 && (
          <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 mb-4 shadow">
            <h3 className="font-bold text-[#3d0020] mb-2">{t.signs}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {dangerSigns.map(q => (
                <li key={q.id} className="text-sm text-[#3d0020]">{q[lang] || q.en}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Facilities */}
        {level !== 'g' && (
          <div className="mb-4">
            <p className="text-xs font-bold text-[#a0527a] uppercase tracking-widest mb-2">{t.where}</p>
            <select value={county} onChange={e => setCounty(e.target.value)}
              className="w-full border-2 border-[#f9c0d8] rounded-xl p-3 mb-3 bg-white text-[#3d0020]">
              <option value="">— {t.dist} —</option>
              {COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {county && FACILITIES[county]?.map(f => (
              <div key={f.name} className="bg-white border-2 border-[#f9c0d8] rounded-xl p-3 mb-2 shadow">
                <p className="font-bold text-sm">{f.name}</p>
                <p className="text-xs text-[#a0527a] mb-2">{f.contact}</p>
                <a href={`tel:${f.contact}`}
                  className="block text-center bg-[#FF69B4] text-white rounded-lg py-2 text-sm font-bold">
                  {t.call}: {f.contact}
                </a>
              </div>
            ))}
          </div>
        )}

        <button onClick={() => { setAnswers({}); setResult(null); navigate('/checklist') }}
          className="w-full py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg shadow mb-3">
          {t.restart}
        </button>

        {/* FR 5.2 — Talk to a trusted adult */}
        <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 mb-3 shadow text-center">
          <i className="fa-solid fa-hands-holding-heart text-[#FF69B4] text-2xl mb-2 block"></i>
          <p className="text-sm text-[#3d0020] font-semibold">{t.trusted}</p>
        </div>

        <button onClick={() => navigate('/home')}
          className="w-full py-3 rounded-2xl border-2 border-[#FF69B4] text-[#FF69B4] font-bold">
          {t.home}
        </button>
      </div>
    </div>
  )
}
