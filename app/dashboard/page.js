"use client"
import React, { useState} from 'react'
import Link from 'next/link'
import { AreaChart, Area, Tooltip, ResponsiveContainer, CartesianGrid, XAxis, YAxis } from "recharts";
import Head from '../head'
import DashboardNav from '../Components/dashboardNav/page'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';



const page = () => {
  const {social} = useSelector((state) => state.social);
console.log(social)
  const dispatch= useDispatch()
  const router = useRouter();

 
    




  const data_1 = [
    {
      view: 1000,
      name: "Jan",
    },
    {
      view: 1200,
      name: "Feb",
    },
    {
      view: 1500,
      name: "March",
    },
    {
      view: 1780,
      name: "April",
    },
    {
      view: 1000,
      name: "May",
    },
    {
      view: 1990,
      name: "June",
    },
    // {
    //   view: 2190,
    //   name: "July",
    // },
    // {
    //   view: 2490,
    //   name: "Aug",
    // },
    // {
    //   view: 2200,
    //   name: "Sept",
    // },
    // {
    //   view: 2300,
    //   name: "Oct",
    // },
    // {
    //   view: 2500,
    //   name: "Nov",
    // },
    // {
    //   view: 2380,
    //   name: "Dec",
    // },
  ];
  
  const data_2 = [
    {
      view: 100,
      name: "Jan",
    },
    {
      view: 200,
      name: "Fab",
    },
    {
      view: 150,
      name: "March",
    },
    {
      view: 1280,
      name: "April",
    },
    {
      view: 900,
      name: "May",
    },
    {
      view: 1190,
      name: "June",
    },
    {
      view: 1190,
      name: "July",
    },
    {
      view: 490,
      name: "Aug",
    },
    {
      view: 200,
      name: "Sept",
    },
    {
      view: 2300,
      name: "Oct",
    },
    {
      view: 2500,
      name: "Nov",
    },
    {
      view: 2380,
      name: "Dec",
    },
  ];
  
   const dataSet = {
    Today: data_1,
    Yesterday: data_2,
    Last_7_days: data_1,
    Last_14_days: data_2,
    Last_30_days: data_1,
    Last_90_days: data_2,
  };


 





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
            <Head title='Dashboard'/>

<main className='pt-8 ml-auto mr-auto w-[92%]'>

        <DashboardNav navTitle='Dashboard'/>
        {/* ----------------------------------------------------------------------------------- */}
        <main className='mt-10 '>
        
        <section className='flex gap-6'>

        <div style={{boxShadow:'0px 12px 40px rgba(0, 0, 0, 0.08)'}} className='bg-white px-6 py-6 w-[49%] rounded-xl cursor-pointer'>
          <h6 className='flex font-semibold text-[20px] mb-2'>Current Usage</h6>
          <section className='flex items-center justify-between'>

          <div role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{"--value":75}}></div>

            <div>
            <h6 className=' mb-1 text-dashdrkgrey font-medium text-[16px]'>Hours Used</h6>
            <h1 className='font-extrabold text-[40px] mb-1'>768</h1>
            <h6 className='text-dashdrkgrey font-medium text-[16px] '>Mar 1-31</h6>
            </div>

            <div className='pr-14'>
            <h6 className=' mb-1 text-dashdrkgrey font-medium text-[16px]'>Hours Left</h6>
            <h1 className='font-extrabold text-[40px] mb-1'>432</h1>
            <h6 className='text-dashdrkgrey font-medium text-[16px] '>30% Remaining</h6>
            </div>
            
          </section>
        </div>

        {/* ----------------------------------------------------------------------------------- */}

        <div style={{boxShadow:'0px 12px 40px rgba(0, 0, 0, 0.08)'}} className='bg-white px-6 py-6 w-[49%] rounded-xl cursor-pointer'>

    <section className='flex justify-between'>
      <h6 className='flex font-semibold text-[20px] mb-2'>Statistics</h6>

      <main className='w-[179px] relative' onClick={selectField}>

      <section  className='w-full py-[6px] box-border border-solid border-gray-400 border-[1px]  bg-white rounded-lg flex items-center justify-between px-4 cursor-pointer'>
      <p className='text-xs md:text-sm  lg:text-[16px] font-medium select-none pointer-events-none' id='selectText'>Today </p>
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
          


          
        <section className='mt-6'>

        <ResponsiveContainer width="100%" height={100} >
        <AreaChart data={data_1} width={500}>

        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            <stop offset="95%" stopColor="#2451B7" stopOpacity={0} />

          </linearGradient>
        </defs>

          <Area type="monotone" dataKey="view" stroke="#2451B7"  strokeWidth={1.3} fill="url(#color)" />
          <XAxis dataKey='name'  axisLine={false} tickLine={false} />
          <Tooltip itemStyle={{ color: "#fff", backgroundColor: "#0A1322" }} contentStyle={{ color: "#fff", backgroundColor: "#0A1322" }}/>

         </AreaChart>
         </ResponsiveContainer>
            
          </section>


        </div>

        </section>


        </main>

        {/* ----------------------------------------------------------------------------------- */}

        <main className='mt-10'>
          <h5 className='flex font-semibold text-[20px] mb-4'>Ongoing Services</h5>
        
        <section className='flex gap-6'>

        <div style={{boxShadow:'0px 12px 40px rgba(0, 0, 0, 0.08)'}} className='bg-white px-6 py-6 w-[23.5%] rounded-[14px] cursor-pointer'>
          <h6 className='flex font-semibold text-[20px] mb-2'><img className='pr-4' src='../images/dashboard/pet.svg'/>Pet Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
        <div style={{boxShadow:'0px 12px 40px rgba(0, 0, 0, 0.08)'}} className='bg-white px-6 py-6 w-[23.5%] rounded-[14px] cursor-pointer'>
          <h6 className='flex font-semibold text-[20px] mb-2'><img className='pr-4' src='../images/dashboard/Vector.svg'/>Nanny Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
        <div style={{boxShadow:'0px 12px 40px rgba(0, 0, 0, 0.08)'}} className='bg-white px-6 py-6 w-[23.5%] rounded-[14px] cursor-pointer'>
          <h6 className='flex font-semibold text-[20px] mb-2'><img className='pr-4' src='../images/dashboard/Frame.svg'/>Senior Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
   
        

        

        </section>


        </main>
        {/* ----------------------------------------------------------------------------------- */}


        </main>




    </div>
  )
}

export default page