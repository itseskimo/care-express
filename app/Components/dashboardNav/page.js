"use client"
import Link from 'next/link'
import { useState } from 'react'

const page = ({navTitle}) => {

  const[navitem,setNavItem]=useState(`${navTitle}`)
  
  return (
    <>
<nav className='bg-white shadow-lg  h-16   flex sticky top-0 rounded-xl'>

<header className='flex items-center gap-6 w-[50%]'>
<img src='../images/petExpress/logo.jpg' className='pl-5' />
<Link href={{pathname:'/dashboard'}}><h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Dashboard' ? 'bg-ligrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Dashboard</h1></Link>
<Link href={{pathname:'/orderHistory'}}><h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Order History' ? 'bg-ligrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Order History</h1></Link>
<Link href={{pathname:'/reports'}}><h1 className={` py-[10px] rounded-[8px] px-3 cursor-pointer ${navitem === 'Reports' ? 'bg-ligrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Reports</h1></Link>
</header>

<header className='flex items-center gap-6  justify-end w-[50%]'>
<Link href={{pathname:'/login'}}><button className='bg-blue text-white rounded-[27px] px-3 py-2'>Book Now</button></Link>
<h1 className='rounded-[50%] bg-green px-4 py-[7px] text-lg flex items-center justify-center font-bold mr-5'>P</h1>
</header>

</nav>



    </>
  )
}

export default page