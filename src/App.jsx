import './App.css'

function App() {

  return (
    <>
    <div className='w-full bg-white flex justify-center items-center px-6 py-12'>
      <img src='/images/watermanLogo.png' className="max-w-56 mx-auto"/>
    </div>

   <div className="h-full flex justify-center items-center px-6 py-12">
      <div className="bg-gray-100 border border-gray-100 border-opacity-10 rounded-xl shadow-xl cursor-pointer">
        <div className="px-6 py-12 border-b-2 border-gray-100">
          <p className="text-4xl font-bold text-left mb-4 leading-8 text-sky-900"> ACCESS</p>
          <div className="flex justify-left items-left">
            <div className="flex items-end">
             <p className="text-3xl font-light tracking-tight text-orange-400">$</p>
             <p className="text-5xl font-semibold tracking-tight text-orange-400">30</p>
            </div>   
            <div className="flex items-start">
             <p className="pl-3 text-3xl font-light tracking-tight text-orange-400">/month</p>
            </div>
             <div className="flex items-end">
             <p className="text-sm leading-6 text-sky-950">cancel anytime</p>
             </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-white">
        <p className="text-base font-semibold tracking-tight text-sky-950 pt-4">Pay as you go access to all Waterman centres, member rates & benefits.</p>
          <ul className="pt-4 space-y-4">
            <li>
              
              <p className="text-base leading-6 text-gray-600">Your first hour free, every day</p>
            </li>
            <li>
              <p className="text-base leading-6 text-gray-600">limited centre access (including workstations) from $2.5/hour</p>
            </li>
            <li>
              <p className="text-base leading-6 text-gray-600">Meeting room access from $20/hour</p>
            </li>
            <li>
              <p className="text-base leading-6 text-gray-600">Unlimited high speed internet (100/100mbps)</p>
            </li>
            <li>
              <p className="text-base leading-6 text-gray-600">Day rate capped at $35</p>
            </li>
        

            <p className="pt-10 text-base leading-6 text-gray-600">Access Hours: 9am-5pm</p>

          </ul>

          <button className="mt-12 w-full py-4 px-8 rounded-xl text-lg whitespace-nowrap bg-orange-400 text-sky-950
   active:bg-sky-950 focus:bg-sky-950 focus:text-white focus:outline-none transition-all">SELECT</button>

        </div>

     

      </div>

   </div>

  
  
    </>
  )
}

export default App
