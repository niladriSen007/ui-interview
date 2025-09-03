import { ArrowLeftRight, BellPlus, Menu } from "lucide-react"

const BusPass = () => {
  return (
    <div>
      <div className="bg-violet-900 flex items-center justify-between text-white font-medium px-6 py-4">
        <Menu />
        <div>Digital Bus Pass</div>
        <div><BellPlus /></div>
      </div>
      <div className="text-white my-3 mx-1 font-normal bg-gradient-to-r from-blue-700 to-violet-900 p-4 rounded-md flex flex-col items-center justify-between gap-2">
        <span>Colony More</span>
        <ArrowLeftRight />
        <span>Unitech IT</span>
        <div className="flex items-center justify-between gap-12">
          <span>Office In - 11:30</span>
          <span>Office Out - 19:30</span>
        </div>
      </div>
      <div className="m-2 mt-4 shadow-md relative rounded-md">
        <div className="absolute h-12 w-10 bg-green-500 top-0 left-0 rounded-br-[80px] rounded-tl-md" />
        <div className="flex items-center justify-center text-black border-b-2 border-gray-400 border-dotted m-2 py-4">
          Confirmed Bus Pass
        </div>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between pr-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Name</span>
              <span>Niladri Sen</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Employee ID</span>
              <span>2606380</span>
            </div>
          </div>
          <div className="flex items-center justify-between pr-5">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Bus Stop Name</span>
              <span>Biratimore</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Route Type</span>
              <span>Both</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Start Date</span>
              <span>2nd Jul, 2025</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">End Date</span>
              <span>31st Jul,2025</span>
            </div>
          </div>
          <div className="mt-4">
            <span>Route: Colony More To Gitanjali Park and Return Via-Ecospace</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-20">
        <img className="object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUIhQCTegyuo6ZuTmrG8m2Qt73AXaVN9z2w&s" alt="" />
      </div>
    </div>
  )
}
export default BusPass