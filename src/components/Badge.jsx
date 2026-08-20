function Badge({ text }) {
  return (
    <span className="bg-red-500 text-white font-bold py-1 px-3 rounded-full text-xs uppercase inline-block">
      {text}
    </span>
  )
}

export default Badge;