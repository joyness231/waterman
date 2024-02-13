const Card = ({name = '', price = 0, currency ='$', frequency = 'month', intro = '', hours = '', features = []}) => (
  <div className="bg-gray-100 border border-gray-100 border-opacity-10 rounded-2xl shadow-xl cursor-pointer">
   <div className="px-6 py-12 border-b-2 border-gray-100 peer-focus:border-sky-500 border-4">
     <p className="text-4xl font-bold text-left mb-4 leading-8 text-sky-900">{name}</p>
      <div className="flex justify-left items-left">
       <div className="flex items-end">
        <p className="text-3xl font-light tracking-tight text-orange-400">{currency}</p>
        <p className="text-5xl font-semibold tracking-tight text-orange-400">{price}</p>
      </div>   
      <div className="flex items-start">
       <p className="pl-3 text-3xl font-light tracking-tight text-orange-400">/{frequency}</p>
      </div>
       <div className="flex items-end">
       <p className="text-sm leading-6 text-sky-950">cancel anytime</p>
       </div>
    </div>
  </div>
  <div className="px-6 py-4 bg-white">
    <div>
     <p className="text-base font-semibold tracking-tight text-sky-950 pt-4">{intro}</p>
   </div>

    <ul className="pt-4 space-y-4">
     {features.map((features, index) => (
      <li key={index} className="flex items-center space-x-4">
        <svg className="w-6 h-6 text-orange-400 flex-shrink-0" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
</svg>
        <p className="text-lg text-gray-600">{features}</p>
     </li>   
     ))}
    </ul>

    <div>
     <p className="pt=10 pl=8 text-base font=extrabold tracking-tight text-red-950 pt-4">{hours}</p>
   </div>
    <button className="peer mt-12 w-full py-4 px-8 rounded-xl text-lg whitespace-nowrap bg-orange-400 text-sky-950
active:bg-sky-950 focus:bg-sky-950 focus:text-white focus:outline-none transition-all">SELECT</button>

  </div>
</div>

)

export default Card;