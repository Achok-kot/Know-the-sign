import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import PageHeader from '../components/PageHeader'
import BottomNav from '../components/BottomNav'

export default function MorePage() {
  const { t } = useApp()
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#fff0f5] pb-20">
      <PageHeader title="More" back="/home" />
      <div className="max-w-lg mx-auto p-4">
        <p className="text-xs font-bold text-[#a0527a] uppercase tracking-widest mb-3">More options</p>
        {[
          {icon:<i className="fa-solid fa-book-open-reader text-3xl text-[#FF69B4]"></i>, title:t.info, sub:'Normal vs danger signs',       path:'/info'},
          {icon:<i className="fa-solid fa-lock text-3xl text-[#FF69B4]"></i>,             title:t.priv, sub:'Your data & privacy',          path:'/privacy'},
          {icon:<i className="fa-solid fa-user-doctor text-3xl text-[#FF69B4]"></i>,      title:t.hw,   sub:'Community health worker area', path:'/login'},
        ].map(c => (
          <button key={c.path} onClick={() => navigate(c.path)}
            className="w-full bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 flex items-center gap-4 shadow mb-3 text-left">
            <span className="w-10 flex items-center justify-center">{c.icon}</span>
            <span>
              <span className="block font-bold text-[#FF69B4]">{c.title}</span>
              <span className="text-xs text-[#a0527a]">{c.sub}</span>
            </span>
          </button>
        ))}
      </div>
      <BottomNav />
    </div>
  )
}
