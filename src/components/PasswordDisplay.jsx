import { useRef } from 'react'

function PasswordDisplay({ password }) {
  const passwordInputRef = useRef(null)

  const copyPassword = () => {
    passwordInputRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='flex overflow-hidden rounded-xl border border-slate-600 bg-white shadow-inner'>
      <input
        ref={passwordInputRef}
        type='text'
        value={password}
        className='w-full min-w-0 bg-white px-4 py-3 font-mono text-sm text-slate-800 outline-none'
        placeholder='Your password'
        readOnly
      />
      <button
        className='shrink-0 bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-inset'
        onClick={copyPassword}
      >
        Copy
      </button>
    </div>
  )
}

export default PasswordDisplay
