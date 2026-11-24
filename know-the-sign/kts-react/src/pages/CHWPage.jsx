import { useState, useEffect } from 'react'
import { getCurrentUser, signOut } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import PageHeader from '../components/PageHeader'

export default function CHWPage() {
  const { t } = useApp()
  const navigate = useNavigate()
  const [user, setUser]     = useState(null)
  const [tab, setTab]       = useState(0)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    getCurrentUser()
      .then(u => { setUser(u); setChecking(false) })
      .catch(() => { setChecking(false); navigate('/login') })
  }, [])

  const data = (() => {
    try { return JSON.parse(localStorage.getItem('kts_chw') || '[]') } catch(e) { return [] }
  })()

  const counts = { g:0, y:0, r:0 }
  data.forEach(d => { if (counts[d.level] !== undefined) counts[d.level]++ })
  const total = data.length

  async function logout() {
    await signOut()
    navigate('/more')
  }

  if (checking) return <div className="min-h-screen bg-[#fff0f5] flex items-center justify-center"><p className="text-[#a0527a]">Loading…</p></div>

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title={'👩⚕️ ' + t.chw} back="/more" />
      <div className="max-w-lg mx-auto p-4">

        {/* User + logout */}
        <div className="flex items-center justify-between mb-4 bg-white rounded-xl px-4 py-3 shadow">
          <p className="text-sm text-[#3d0020] font-semibold">{user?.signInDetails?.loginId || 'CHW User'}</p>
          <button onClick={logout} className="text-sm text-red-500 font-bold">Sign out</button>
        </div>

        {/* Tabs */}
        <div className="flex rounded-2xl overflow-hidden border-2 border-[#f9c0d8] mb-4">
          {['Summary','Signs','Counties'].map((label, i) => (
            <button key={i} onClick={() => setTab(i)}
              className={`flex-1 py-2 text-sm font-bold transition ${tab === i ? 'bg-[#FF69B4] text-white' : 'bg-white text-[#a0527a]'}`}>
              {label}
            </button>
          ))}
        </div>

        {total === 0
          ? <p className="text-[#a0527a]">{t.nodata}</p>
          : <>
              {tab === 0 && (
                <div className="bg-white rounded-2xl p-4 shadow mb-4">
                  <h3 className="font-bold mb-3">Total checks: {total}</h3>
                  {[{key:'r',label:'Urgent',color:'bg-red-500'},{key:'y',label:'See doctor',color:'bg-yellow-400'},{key:'g',label:'Normal',color:'bg-green-500'}].map(row => (
                    <div key={row.key} className="flex items-center gap-2 mb-2">
                      <span className="w-24 text-sm">{row.label}</span>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${row.color} rounded-full`} style={{width: total ? `${Math.round((counts[row.key]/total)*100)}%` : '0%'}} />
                      </div>
                      <span className="w-6 text-sm text-right">{counts[row.key]}</span>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[{key:'g',label:'Normal',color:'text-green-600'},{key:'y',label:'Doctor',color:'text-yellow-600'},{key:'r',label:'Urgent',color:'text-red-600'}].map(s => (
                      <div key={s.key} className="border-2 border-[#f9c0d8] rounded-xl p-3 text-center">
                        <div className={`text-2xl font-black ${s.color}`}>{counts[s.key]}</div>
                        <div className="text-xs text-[#a0527a] font-semibold">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {tab === 1 && (
                <div className="bg-white rounded-2xl p-4 shadow">
                  <h3 className="font-bold mb-3">Top signs reported</h3>
                  {(() => {
                    const sc = {}
                    data.forEach(d => (d.signs||[]).forEach(sid => { sc[sid] = (sc[sid]||0)+1 }))
                    return Object.keys(sc).sort((a,b)=>sc[b]-sc[a]).slice(0,7).map(sid => (
                      <div key={sid} className="flex items-center gap-2 mb-2">
                        <span className="flex-1 text-xs">{sid}</span>
                        <div className="w-20 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF69B4] rounded-full" style={{width:`${Math.round((sc[sid]/total)*100)}%`}} />
                        </div>
                        <span className="text-xs w-4">{sc[sid]}</span>
                      </div>
                    ))
                  })()}
                </div>
              )}
              {tab === 2 && (
                <div className="bg-white rounded-2xl p-4 shadow">
                  <h3 className="font-bold mb-3">By county</h3>
                  {(() => {
                    const cc = {}
                    data.forEach(d => { cc[d.county] = (cc[d.county]||0)+1 })
                    return Object.keys(cc).map(c => (
                      <div key={c} className="flex items-center gap-2 mb-2">
                        <span className="w-32 text-sm">{c}</span>
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF69B4] rounded-full" style={{width:`${Math.round((cc[c]/total)*100)}%`}} />
                        </div>
                        <span className="text-xs w-4">{cc[c]}</span>
                      </div>
                    ))
                  })()}
                </div>
              )}
            </>
        }
      </div>
    </div>
  )
}
