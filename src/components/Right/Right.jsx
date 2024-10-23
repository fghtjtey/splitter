// from components
import { Result } from "../"

function Right() {
  return (
    <div className='w-full max-w-[414px] bg-darkGreen rounded-[14px] p-10 flex flex-col'>
      <div className="mb-9">
        <Result title="Tip Amount" result="0.00"/>
      </div>
      <Result title="Total" result="0.00"/>
      <button className="rounded-[5px] bg-emptyGreen mt-auto text-darkGreen text-xl uppercase p-2.5">RESET</button>
    </div>
  )
}

export default Right
