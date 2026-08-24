function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-500 hover:bg-red-700 text-white font-bold text-sm py-1 px-14 rounded text-center"
    >
      {text}
    </button>
  )
}

export default Button;