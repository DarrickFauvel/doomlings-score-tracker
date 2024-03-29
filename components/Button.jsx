import { ReactNode } from "react"

export function Button({ children, handleClick }) {
  return (
    <button
      className="bg-green-600 hover:bg-green-700 text-slate-50 px-6 py-2 rounded-xl transition duration-300"
      onClick={handleClick}>
      {children}
    </button>
  )
}
