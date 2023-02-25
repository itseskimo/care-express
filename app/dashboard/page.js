"use client"
import React, { useState} from 'react'
import Link from 'next/link'


const page = () => {

  const[navitem,setNavItem]=useState('')


  return (
    <div className='bg-specialbg h-screen '>

<main className='pt-10 ml-auto mr-auto w-[90%]'>

        <nav className='bg-white shadow-lg  h-16   flex sticky top-0 '>

        <header className='flex items-center gap-6 w-[50%]'>
        <img src='../images/petExpress/logo.jpg' className='pl-5' />
        <h1 className={` py-[10px] rounded-[8px] px-3 ${navitem === 'Dashboard' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Dashboard</h1>
        <h1 className={` py-[10px] rounded-[8px] px-3 ${navitem === 'Order History' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Order History</h1>
        <h1 className={` py-[10px] rounded-[8px] px-3 ${navitem === 'Reports' ? 'bg-gray-400' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Reports</h1>
        </header>

        <header className='flex items-center gap-6  justify-end w-[50%]'>
        <Link href={{pathname:'/login'}}><button className='bg-blue text-white rounded-[27px] px-3 py-2'>Book Now</button></Link>
        <h1 className='rounded-[50%] bg-green px-4 py-[7px] text-lg flex items-center justify-center font-bold mr-5'>P</h1>
        </header>

        </nav>

        </main>




    </div>
  )
}

export default page