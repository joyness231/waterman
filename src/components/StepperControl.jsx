import React from 'react'

const StepperControl = () => {
  return <div className="container flex justify-around mt-4 mb-8">
    {/* back button */}
    <button className=" text-sky-950 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-sky-950 hover:bg-sky-950 hover:text-white transition duration-200 ease-in-out">Previous Step</button>
    {/* next button */}
    <button className="bg-orange-300 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">Next Step</button>
  </div>;
  
}

export default StepperControl;