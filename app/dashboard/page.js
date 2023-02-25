"use client"
import React, { useState} from 'react'
import Link from 'next/link'


const page = () => {

  const[navitem,setNavItem]=useState('')


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
        <main className='mt-10'>
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