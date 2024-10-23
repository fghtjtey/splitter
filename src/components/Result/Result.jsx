
function Result({title, result}) {
  return (
    <div className="flex items-center justify-between">
        <div className="flex flex-col">
            <span className="text-white">{title}</span>
            <span className="text-sm text-gray">/ person</span>
        </div>
        <span className="text-primary text-5xl tracking-[-1px]">
            ${result}
        </span>
    </div>
  )
}

export default Result
