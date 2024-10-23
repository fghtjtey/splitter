import { useState } from "react"

function SelectTip({inputRef}) {
    const [buttons, setButtons] = useState([
    {
        title: "5%",
        number: 5,
        isActive: false,
    },
    {
        title: "10%",
        number: 10,
        isActive: false,
    },
    {
        title: "15%",
        number: 15,
        isActive: false,
    },
    {
        title: "25%",
        number: 25,
        isActive: false,
    },
    {
        title: "50%",
        number: 50,
        isActive: false,
    },
    
])

  return (
    <div>
        <span className="block mb-4">
        Select Tip %
        </span>
      <ul className='flex flex-wrap gap-3.5'>
            {buttons.map(select => {
                return <li key={select.number}>
                            <button className="w-[117px] rounded-[5px] bg-darkGreen p-1.5 text-white text-2xl">
                                {select.title}
                            </button>
                        </li>
            })}
            <div className="input p-1.5 w-[117px]">
                <input ref={inputRef} className="w-full" type="number" placeholder="Custom"/>
            </div>
      </ul>
    </div>
  )
}

export default SelectTip
