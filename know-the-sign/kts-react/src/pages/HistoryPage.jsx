import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import PageHeader from '../components/PageHeader'
import BottomNav from '../components/BottomNav'

export default function HistoryPage() {
  const { t } = useApp()
  const navigate = useNavigate()

  let hist = []
  try { hist = JSON.parse(localStorage.getItem('kts_history') || '[]') } catch(e) {}

  const levelLabel = { g:'Normal', y:'See doctor', r:'Urgent' }
  const levelColor  = { g:'bg-green-100 text-green-800', y:'bg-yellow-100 text-yellow-800', r:'bg-red-100 text-red-800' }
  const dotColor    = { g:'bg-green-500', y:'bg-yellow-400', r:'bg-red-500' }

  function clearHist() {
    if (window.confirm('Delete all history?')) {
      localStorage.removeItem('kts_history')
      navigate(0)
    }
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-20">
      <PageHeader title={t.hist} back="/home" />
      <div className="max-w-lg mx-auto p-4">
        {hist.length === 0
          ? <p className="text-[#a0527a] mt-4">{t.nohist}</p>
          : <>
              {hist.map((r, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-2xl p-4 mb-2 shadow">
                  <span className={`w-3 h-3 rounded-full flex-shrink-0 ${dotColor[r.level]}`} />
                  <span className="flex-1 text-sm">{new Date(r.ts).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${levelColor[r.level]}`}>{levelLabel[r.level]}</span>
                </div>
              ))}
              <button onClick={clearHist}
                className="w-full mt-3 py-3 rounded-2xl bg-red-500 text-white font-bold">
                {t.del}
              </button>
            </>
        }
      </div>
      <BottomNav />
    </div>
  )
}
