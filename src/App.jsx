import { useEffect, useState } from 'react'
import PasswordDisplay from './components/PasswordDisplay.jsx'
import PasswordOptions from './components/PasswordOptions.jsx'
import { useMemo } from 'react'

function App() {
  const [length, setLength] = useState(10)
  const [isNumberAllowed, setNumberAllowed] = useState(false)
  const [isCharAllowed, setCharAllowed] = useState(false)

  // Alternative: useEffect + state generates a password when options change.
  // It is kept here for comparison; use this OR the useMemo approach below, not both.
  
  // const [password, setPassword] = useState('')
  // useEffect(() => {
  //   let characters = 'qwertyuiopasdfghjklzxcvbnm'
  //   if (isNumberAllowed) characters += '0123456789'
  //   if (isCharAllowed) characters += '!@#$%^&*'

  //   let generatedPassword = ''
  //   for (let i = 0; i < length; i++) {
  //     const charIndex = Math.floor(Math.random() * characters.length)
  //     generatedPassword += characters.charAt(charIndex)
  //   }

  //   setPassword(generatedPassword)
  // }, [length, isCharAllowed, isNumberAllowed])

  // useMemo derives the password from the current options and recalculates it
  // only when one of its dependencies changes, so a separate password state is not needed.
  const password = useMemo(() => {
    let pass=''
    let str = "qwertyuiopasdfghjklzxcvbnm";
    if (isCharAllowed) str += "!@#$%^&*()+";
    if (isNumberAllowed) str += "13456780";
    for (let i = 0; i < length; i++) {
    const passindex = Math.floor(Math.random() * str.length);
     pass += str.charAt(passindex);
    }
    return pass
  }, [isCharAllowed, isNumberAllowed, length])

  return (
    <main className='min-h-screen bg-slate-950 px-4 py-12 sm:py-20'>
      <div className='mx-auto w-full max-w-xl rounded-2xl border border-slate-600/60 bg-slate-800 p-5 text-orange-400 shadow-2xl shadow-black/30 sm:p-7'>
        <p className='mb-1 text-center text-xs font-semibold uppercase tracking-[0.24em] text-orange-300'>
          Secure tool
        </p>
        <h1 className='mb-6 text-center text-2xl font-bold text-white sm:text-3xl'>
          Password Generator
        </h1>
        <PasswordDisplay password={password} />
        <PasswordOptions
          length={length}
          onLengthChange={setLength}
          onNumberAllowedChange={setNumberAllowed}
          isNumberAllowed={isNumberAllowed}
          isCharAllowed={isCharAllowed}
          onCharAllowedChange={setCharAllowed}
        />
      </div>
    </main>
  )
}

export default App
