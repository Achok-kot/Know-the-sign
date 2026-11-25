import { useApp } from '../context/AppContext'
import PageHeader from '../components/PageHeader'


export default function PrivacyPage() {
  const { t } = useApp()
  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title={'🔒 ' + t.priv} back="/more" />
      <div className="max-w-lg mx-auto p-4">
        <div className="bg-white border-2 border-[#f9c0d8] rounded-2xl p-4 shadow">
          <ul className="list-disc pl-5 space-y-2">
            {t.pv.map((s,i) => <li key={i} className="text-sm">{s}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

