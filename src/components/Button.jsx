function Button({ text }) {
  return (
    <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded text-center">
     {text}
    </button>
  )
}

export default Button;