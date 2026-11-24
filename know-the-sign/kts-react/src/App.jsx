import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Amplify } from 'aws-amplify'
import awsConfig from './amplifyconfiguration'
import { AppProvider } from './context/AppContext'
import LangPage      from './pages/LangPage'
import TutorialPage  from './pages/TutorialPage'
import HomePage      from './pages/HomePage'
import ChecklistPage from './pages/ChecklistPage'
import ResultPage    from './pages/ResultPage'
import HistoryPage   from './pages/HistoryPage'
import MorePage      from './pages/MorePage'
import InfoPage      from './pages/InfoPage'
import PrivacyPage   from './pages/PrivacyPage'
import LoginPage     from './pages/LoginPage'
import CHWPage       from './pages/CHWPage'

Amplify.configure(awsConfig)

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="max-w-lg mx-auto min-h-screen">
          <Routes>
            <Route path="/"          element={<LangPage />} />
            <Route path="/tutorial"  element={<TutorialPage />} />
            <Route path="/home"      element={<HomePage />} />
            <Route path="/checklist" element={<ChecklistPage />} />
            <Route path="/result"    element={<ResultPage />} />
            <Route path="/history"   element={<HistoryPage />} />
            <Route path="/more"      element={<MorePage />} />
            <Route path="/info"      element={<InfoPage />} />
            <Route path="/privacy"   element={<PrivacyPage />} />
            <Route path="/login"     element={<LoginPage />} />
            <Route path="/chw"       element={<CHWPage />} />
            <Route path="*"          element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}
