import { useApp } from '../context/AppContext'
import PageHeader from '../components/PageHeader'

export default function InfoPage() {
  const { t } = useApp()
  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title={t.info} back="/more" />
      <div className="max-w-lg mx-auto p-4">

        {/* FR 1.1 — a General menstrual health info */}
        <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 mb-4 shadow">
          <h3 className="font-bold text-[#FF69B4] mb-2 flex items-center gap-2">
            <i className="fa-solid fa-heart-pulse text-[#FF69B4]"></i>
            {t.mh_t}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {t.mh.map((s,i) => <li key={i} className="text-sm">{s}</li>)}
          </ul>
        </div>

        <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 mb-4 shadow">
          <h3 className="font-bold text-green-600 mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>{t.ok_t}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {t.ok.map((s,i) => <li key={i} className="text-sm">{s}</li>)}
          </ul>
        </div>
        <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 shadow">
          <h3 className="font-bold text-red-500 mb-2 flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span>{t.bad_t}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {t.bad.map((s,i) => (
              <li key={i} className="text-sm">
                {s}
                <span className={`ml-2 inline-block w-3 h-3 rounded-full ${i < 3 ? 'bg-red-500' : 'bg-yellow-400'}`}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
