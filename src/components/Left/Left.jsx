//from react
import { useRef } from 'react'

//from components
import { Inputs, SelectTip } from "../"

//from react-icons
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";

function Left() {
  const billInputRef = useRef()
  const peopleInputRef = useRef()
  const selectInputRef = useRef()

  const formSubmit = (e) => {
    e.preventDefault ()
    console.log(billInputRef.current);
    console.log(peopleInputRef.current);
    console.log(selectInputRef.current);
  }

  return (
    <form onSubmit={formSubmit} className='w-full max-w-[380px] flex flex-col gap-10'>
      <Inputs label="Bill" icon={<BsCurrencyDollar/>} billInputRef={billInputRef}/>
      <SelectTip billInputRef={selectInputRef}/>
      <Inputs label="Number of People" icon={<FaUserLarge/>} billInputRef={peopleInputRef}/>
    </form>
  )
}

export default Left
