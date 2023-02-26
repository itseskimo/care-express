"use client"
import React, { useState} from 'react'
import Link from 'next/link'
import { AreaChart, Area, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";
import { format,parseISO,subDays } from 'date-fns';
import { createUseStyles } from "react-jss";


const page = () => {

  const[navitem,setNavItem]=useState('')

  let chart=[]

  for (let num = 30; num >= 0; num--) {
    chart.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }
  const dropdownCategories = [
    {
      key: 0,
      content: "Today",
      value: "Today",
    },
    {
      key: 1,
      content: "Yesterday",
      value: "Yesterday",
    },
    {
      key: 2,
      content: "Last 7 days",
      value: "Last_7_days",
    },
    {
      key: 3,
      content: "Last 14 days",
      value: "Last_14_days",
    },
    {
      key: 4,
      content: "Last 30 days",
      value: "Last_30_days",
    },
    {
     key: 5,
     content: "Last 90 days",
     value: "Last_90_days",
    }
   ];

   const [activeTimeFrame, setActiveTimeFrame] = useState(0);

   function selectField(e){
    setSelect(!select)
     let selectText= document.getElementById('selectText')
     let dropdownArrow= document.getElementById('dropdownArrow')
  
      dropdownArrow.classList.toggle('rotate-180')
   
     
       selectText.innerHTML= e.target.innerText 
  }

  const[select,setSelect]=useState(false)



  return (
    <div className='bg-specialbg h-screen '>

<main className='pt-10 ml-auto mr-auto w-[93%]'>

        <nav className='bg-white shadow-lg  h-16   flex sticky top-0 rounded-xl'>

        <header className='flex items-center gap-6 w-[50%]'>
        <img src='../images/petExpress/logo.jpg' className='pl-5' />
        <h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Dashboard' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Dashboard</h1>
        <h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Order History' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Order History</h1>
        <h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Reports' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Reports</h1>
        </header>

        <header className='flex items-center gap-6  justify-end w-[50%]'>
        <Link href={{pathname:'/login'}}><button className='bg-blue text-white rounded-[27px] px-3 py-2'>Book Now</button></Link>
        <h1 className='rounded-[50%] bg-green px-4 py-[7px] text-lg flex items-center justify-center font-bold mr-5'>P</h1>
        </header>

        </nav>
        {/* ----------------------------------------------------------------------------------- */}
        <main className='mt-10 '>
          <h5 className='font-semibold mb-4'>Ongoing Services</h5>
        
        <section className='flex gap-6'>

        <div className='bg-white px-6 py-6 w-[49%] rounded-xl shadow-md cursor-pointer'>
          <h6 className='flex font-bold mb-2'>Current Usage</h6>
          <section className='flex items-center justify-between'>

          <div className="radial-progress text-radialProgress" style={{"--value":70, "--thickness": "8px", "--size": "4.4rem",}}>70%</div>

            <div>
            <h6 className='text-[14px] mb-2 text-slate-400'>Hours Used</h6>
            <h1 className='font-extrabold text-4xl mb-2'>768</h1>
            <h6 className='text-[14px] mb-2 text-slate-400'>Mar 1-31</h6>
            </div>

            <div className='pr-12'>
            <h6 className='text-[14px] mb-2 text-slate-400'>Hours Left</h6>
            <h1 className='font-extrabold text-4xl mb-2'>432</h1>
            <h6 className='text-[14px] mb-2 text-slate-400'>30% Remaining</h6>
            </div>
            
          </section>
        </div>

        {/* ----------------------------------------------------------------------------------- */}

        <div className='bg-white px-5 py-6 w-[49%] rounded-xl shadow-md cursor-pointer'>

    <section className='flex justify-between'>
      <h6 className='flex font-bold mb-2'>Statistics</h6>

      <main className='w-44 relative' onClick={selectField}>

      <section  className='w-full py-[6px] box-border border-solid border-gray-400 border-[1px]  bg-white rounded-lg flex items-center justify-between px-4 cursor-pointer'>
      <p className='text-xs md:text-sm  lg:text-[15px] font-semibold select-none pointer-events-none' id='selectText'>Today </p>
      <img src='../images/Icons/Arrowdown.svg' className='w-[9px] select-none pointer-events-none' id='dropdownArrow'/>
      </section>

      {select &&
         <ul className='w-full bg-white shadow-md rounded-[8px] overflow-hidden absolute z-10' >
           <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around' >
            <p className=''>Month</p>
           </li>
 
           <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around ' >
             <p className='' id='list2'>Year</p>
           </li>
      </ul>
      }
      </main>

    </section>
          


          
        <section className=''>

        <ResponsiveContainer width="100%" height={100}  >
        <AreaChart data={chart} width={500}>

        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            <stop offset="95%" stopColor="#2451B7" stopOpacity={0} />

          </linearGradient>
        </defs>

          <Area type="monotone" dataKey="value" stroke="#2451B7"  strokeWidth={1.3} fill="url(#color)" />
          <XAxis dataKey='date'  axisLine={false} tickLine={false} />
          <Tooltip itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }} contentStyle={{ color: "#fff", backgroundColor: "#0A1322" }}/>

         </AreaChart>
         </ResponsiveContainer>
            
          </section>


        </div>

        </section>


        </main>

        {/* ----------------------------------------------------------------------------------- */}

        <main className='mt-10'>
          <h5 className='font-semibold mb-4'>Ongoing Services</h5>
        
        <section className='flex gap-6'>

        <div className='bg-white px-6 py-6 w-[245px] rounded-xl shadow-md cursor-pointer'>
          <h6 className='flex font-bold mb-2'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/>Pet Express</h6>
          <h6 className='text-xs mb-2 text-slate-400'>Hours Used</h6>
          <h1 className='font-extrabold text-4xl'>256</h1>
        </div>

        <div className='bg-white px-6 py-6 w-[245px] rounded-xl shadow-md cursor-pointer'>
          <h6 className='flex font-bold mb-2'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/>Nanny Express</h6>
          <h6 className='text-xs mb-2 text-slate-400'>Hours Used</h6>
          <h1 className='font-extrabold text-4xl'>256</h1>
        </div>

        <div className='bg-white px-6 py-6 w-[245px] rounded-xl shadow-md cursor-pointer'>
          <h6 className='flex font-bold mb-2'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/>Senior Express</h6>
          <h6 className='text-xs mb-2 text-slate-400'>Hours Used</h6>
          <h1 className='font-extrabold text-4xl'>256</h1>
        </div>

        </section>


        </main>
        {/* ----------------------------------------------------------------------------------- */}


        </main>




    </div>
  )
}

export default page