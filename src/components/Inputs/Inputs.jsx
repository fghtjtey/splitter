
function Inputs({label, icon, inputRef}) {
  console.log(inputRef);

  return (
      <label className="flex flex-col gap-1.5">
        {label}
        <div className="input">
          {icon}
          <input ref={inputRef} type="number" placeholder='0'/>
        </div>
      </label>
  )
}

export default Inputs
