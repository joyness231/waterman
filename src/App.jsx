import './App.css'

function App() {

  return (
    <>
    <div className='w-full h-34 bg-white'>
      <img src='/images/watermanLogo.png' className="max-w-56 mx-auto"/>
    </div>

       <div className="mx-auto pb-20 mt-4 max-w-5xl">

    <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
     
       <div className="bg-gray-100 ring-4 ring-sky-900 rounded-3xl p-6">
      
        <div className="flex items-center justify-between gap-x-4">
          <h2 className="text-3xl font-extrabold leading-8 text-sky-900">ACCESS</h2>
        </div>
        <p className="flex items-baseline gap-x-1">
          <span className="text-xl font-light tracking-tight text-orange-500">$ </span><span className="text-6xl font-bold tracking-tight text-orange-500">30</span><span className="text-xl font-light tracking-tight text-orange-500">/month</span><span className="text-sm font-semibold leading-6 text-gray-300"></span>
        </p>
        <p className="pl-20 pb-8 text-sm leading-6 text-sky-950">cancel anytime</p>
      

      <div className="bg-white">
         <p className="text-sm font-semibold tracking-tight text-sky-950 pt-4">Pay as you go access to all Waterman centres, member rates & benefits.</p>

        <ul role="list" className="space-y-3 text-sm leading-6 text-sky-950 xl:mt-8">
          <li className="flex gap-x-3"> Your first hour free, every day</li>
          <li className="flex gap-x-3"> Unlimited centre access (including workstations) from $2.5/hour</li>
          <li className="flex gap-x-3"> Meeting room access from $20/hour</li>
          <li className="flex gap-x-3"> Unlimited high speed internet (100/100mbps)</li>
          <li className="flex gap-x-3"> Day rate capped at $35</li>

        </ul>
        </div>
      </div>
     
     
    </div>
  </div>
  
    </>
  )
}

export default App
