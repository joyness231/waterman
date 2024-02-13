import React, { useState } from 'react'
import Stepper from './components/Stepper';
import Card from './components/Card';

function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const stepArray = [
		"About You",
		"Memberships",
		"After Hours",
    "Business Boosts",
    "Secure Payment",
	];
	const handleClick = (clickType) => {
		let newStep = currentStep;
		(clickType == "next") ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep)
		}
	}

  const plans = [
    {
    name: 'ACCESS',
    price: 30,
    currency: '$',
    frequency: 'month',
    intro: 'Pay as you go access to all Waterman centres, member rates & benefits.',
    features: [
      'Your first hour free, every day',
      'limited centre access (including workstations) from $2.5/hour',
      'Meeting room access from $20/hour',
      'Unlimited high speed internet (100/100mbps)',
      'Day rate capped at $35',
      'Access Hours: 9am-5pm',
    ],
    hours: 'Access Hours: 9am-5pm',
   },
  
   {
    name: 'PART TIME',
    price: 200,
    currency: '$',
    frequency: 'month',
    intro: 'Come in a few days a month or book meeting rooms as you need them.',
    features: [
      
      '$200 included Waterman Credits to use on workspace or room bookings',
      '50% discount on all meeting room bookings',
      'Day rate capped at $25',
     
    ],
    hours: 'Access Hours: 9am-5pm',
   },
  
   {
    name: 'FULL TIME',
    price: 500,
    currency: '$',
    frequency: 'month',
    intro: '24/7/365 Access so you can work where you like, when you like.',
    features: [
      'Unlimited centre access at no additional costs',
      'Reception notification services included',
      '50% discount on all meeting room bookings',
    
    ],
   },
   ];
  
	return (
  
<div className="w-full top-0 bg-white">
  <div className="container mx-auto py-5 flex justify-center"> 
   <img className="w-63 h-16" src="./images/watermanLogo.png"></img>
  </div>

  <div className="grid grid-cols-[65vw_minmax(100vw,_1fr)_45vw]"> 
    <div className="bg-sky-50 h-[100vh]">    
		  <div className="container horizontal mt-5 mb-12 ml-40 px-12">
				 <Stepper
					steps={stepArray}
					currentStepNumber={currentStep}/>
		  	</div>

        <h2 className="pt-4 pl-4 text-2xl font-normal text-cyan-700 ml-40 tracking-wide">
           Select the membership that best suits you
         </h2>
         <div className="px-4 pt-10 grid lg:grid-cols-3 gap-12 lg:gap-4 ml-40">
            {plans.map(plans => (
           <div className="w-full max-w-md mx-auto}">   
             <Card { ...plans} key={plans} />
	      </div>
       ))}
     </div>   
		  	 <div className="container flex justify-around my-8 ">
			  	 <button onClick={() => handleClick()} className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-orange-400 hover:bg-orange-400 text-white font-normal py-2 px-4 mr-1 rounded uppercase"> Previous Step </button>
			  	 <button onClick={() => handleClick("next")} className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-orange-400 hover:bg-orange-400 text-orange-400 hover:text-white font-normal py-2 px-4 rounded uppercase"> Next Step </button>
          </div>
      </div>
      <div className="bg-cyan-700/[.1] h-[100vh]">   
      <h2 className="pt-10 pl-8 text-3xl font-normal text-cyan-800 tracking-wide">WATERMAN MEMBERSHIP</h2>
      <h3 className="pt-6 pl-8 text-xl font-normal text-cyan-800 tracking-wide">TOTAL PRICE PER MONTH (EX GST)</h3>
      </div>
 </div> 


</div> 
 );
} 
export default App;
