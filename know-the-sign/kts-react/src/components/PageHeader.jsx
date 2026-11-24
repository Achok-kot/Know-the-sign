import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function PageHeader({ title, back }) {
  const navigate = useNavigate()
  const { t } = useApp()
  return (
    <div className="sticky top-0 z-40 bg-[#FF69B4] text-white h-14 flex items-center px-4 gap-3 shadow">
      <button onClick={() => navigate(back)} className="text-2xl font-bold min-w-10">&#8592;</button>
      <h2 className="flex-1 font-bold text-lg">{title}</h2>
      <button onClick={() => navigate('/')} className="text-xs font-semibold bg-white/20 rounded-full px-3 py-1">{t.langBtn}</button>
    </div>
  )
}
