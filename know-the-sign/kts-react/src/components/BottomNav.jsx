import { useNavigate, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  
  const tabs = [
    { path:'/home',      label:'Home',    icon:<path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/>, icon2:<path d="M9 21V12h6v9"/> },
    { path:'/checklist', label:'Check',   icon:<><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></> },
    { path:'/history',   label:'History', icon:<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></> },
    { path:'/more',      label:'More',    icon:<><circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/></> },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t-2 border-[#f9c0d8] flex z-50 shadow-lg">
      {tabs.map(tab => {
        const active = pathname === tab.path
        return (
          <button key={tab.path} onClick={() => navigate(tab.path)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-xs font-semibold transition ${active ? 'text-[#FF69B4]' : 'text-[#a0527a]'}`}>
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {tab.icon}{tab.icon2}
            </svg>
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
