import Card from './components/Card';

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
 function App()
 {

  return (
    <div className="w-full top-0 bg-white">
      <div className="container mx-auto py-5 flex justify-center"> 
        <img className="w-63 h-16" src="./images/watermanLogo.png"></img>
      </div>

     
     <div class="grid grid-cols-[65vw_minmax(100vw,_1fr)_45vw]"> 
       <div class="bg-indigo-50  
                    h-[100vh]"> 
         <h2 className="pt-10 pl-4 text-lg font-normal text-gray-600">
          Select the membership that best suits you
         </h2>
         <div className="px-4 pt-10 grid lg:grid-cols-3 gap-12 lg:gap-4">
            {plans.map(plans => (
           <div className="w-full max-w-md mx-auto}">   
             <Card { ...plans} key={plans} />
           </div> 
           
             ))}      
               
          </div>
              
        </div>
            <div className="bg-indigo-100 h-[100vh]">
             <h2 className="pt-10 pl-4 text-2xl font-normal text-gray-600">WATERMAN MEMBERSHIP</h2>
            </div>
      </div>
   </div>
   );
 }   

export default App;
