import React from 'react'

const Spinner = () => {
  return (
<div className="fixed inset-0 grid place-items-center">
      <div className="flex items-center justify-center gap-2">
        <div className="h-8 w-8 border-4 border-black border-t-slate-400 rounded-full animate-spin"></div>
        <h3 className="font-semibold">Loading</h3>
      </div>
    </div>
  )
}

export default Spinner