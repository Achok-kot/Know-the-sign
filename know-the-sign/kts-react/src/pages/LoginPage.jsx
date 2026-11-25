import { useState } from 'react'
import { signIn, signOut, getCurrentUser } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

export default function LoginPage() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn({ username: email, password })
      navigate('/chw')
    } catch(err) {
      setError(err.message || 'Login failed. Check your email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] pb-6">
      <PageHeader title="Health Worker Login" back="/more" />
      <div className="max-w-sm mx-auto p-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-[#a0527a] text-sm mb-5">Sign in using your CHW account to access the dashboard.</p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required
              className="border-2 border-[#f9c0d8] rounded-xl px-4 py-3 text-base outline-none focus:border-[#FF69B4]" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required
              className="border-2 border-[#f9c0d8] rounded-xl px-4 py-3 text-base outline-none focus:border-[#FF69B4]" />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading}
              className="py-4 rounded-2xl bg-[#FF69B4] text-white font-bold text-lg disabled:opacity-60">
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
