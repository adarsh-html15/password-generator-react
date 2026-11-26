function PasswordOptions({
  length,
  onLengthChange,
  isNumberAllowed,
  onNumberAllowedChange,
  isCharAllowed,
  onCharAllowedChange,
}) {
  return (
    <div className='mt-6 grid gap-5 text-sm text-slate-200'>
      <div>
        <div className='mb-2 flex items-center justify-between'>
          <label htmlFor='lengthInput' className='font-medium'>
            Password length
          </label>
          <span className='rounded-md bg-slate-700 px-2 py-1 font-mono text-orange-300'>
            {length}
          </span>
        </div>
        <input
          type='range'
          id='lengthInput'
          min={10}
          max={80}
          value={length}
          className='w-full cursor-pointer accent-orange-500'
          onChange={(event) => onLengthChange(Number(event.target.value))}
        />
      </div>
      <div className='flex flex-wrap gap-3'>
        <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2 transition hover:border-orange-400'>
          <input
            type='checkbox'
            id='numInput'
            checked={isNumberAllowed}
            onChange={(event) => onNumberAllowedChange(event.target.checked)}
            className='h-4 w-4 accent-orange-500'
          />
          Numbers
        </label>

        <label className='flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600 bg-slate-700/60 px-3 py-2 transition hover:border-orange-400'>
          <input
            type='checkbox'
            id='charInput'
            checked={isCharAllowed}
            onChange={(event) => onCharAllowedChange(event.target.checked)}
            className='h-4 w-4 accent-orange-500'
          />
          Characters
        </label>
      </div>
    </div>
  )
}

export default PasswordOptions
