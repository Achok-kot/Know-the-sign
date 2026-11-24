import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import BottomNav from '../components/BottomNav'

export default function HomePage() {
  const { t, setAnswers, setResult } = useApp()
  const navigate = useNavigate()

  function startCheck() {
    setAnswers({})
    setResult(null)
    navigate('/checklist')
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-20">
      <div className="max-w-lg mx-auto p-4">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#FF69B4] to-[#e0458a] rounded-2xl p-6 mb-5 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-1">{t.title}</h1>
          <p className="text-white/90 text-sm mb-4">{t.tag}</p>
          <button onClick={startCheck}
            className="bg-white text-[#e0458a] font-bold px-6 py-3 rounded-xl shadow text-base">
            {t.start}
          </button>
        </div>

        {/* Language switcher */}
        <div className="text-right mb-4">
          <button onClick={() => navigate('/')} className="text-[#FF69B4] font-bold underline text-sm">{t.langBtn}</button>
        </div>

        {/* Menu cards */}
        <p className="text-xs font-bold text-[#a0527a] uppercase tracking-widest mb-3">Quick access</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            {icon:<i className="fa-solid fa-lock text-2xl text-[#FF69B4]"></i>,            title:t.priv, sub:'What we collect',  path:'/privacy'},
            {icon:<i className="fa-solid fa-user-doctor text-2xl text-[#FF69B4]"></i>,      title:t.hw,   sub:'Community data',   path:'/chw'},
            {icon:<i className="fa-solid fa-book-open-reader text-2xl text-[#FF69B4]"></i>, title:t.info, sub:'Normal vs danger', path:'/info'},
            {icon:<i className="fa-solid fa-book text-2xl text-[#FF69B4]"></i>,             title:t.hist, sub:'Your past checks', path:'/history'},
          ].map(c => (
            <button key={c.path} onClick={() => navigate(c.path)}
              className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 text-left shadow flex flex-col gap-1">
              <span>{c.icon}</span>
              <span className="font-bold text-[#FF69B4] text-sm">{c.title}</span>
              <span className="text-xs text-[#a0527a]">{c.sub}</span>
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
