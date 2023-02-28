"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const page = ({navTitle}) => {

    const router = useRouter();
    const[navitem,setNavItem]=useState(`${navTitle}`)

    function redirect(id,url) {
      setNavItem(id)
      router.push(`${url}`)
    }

  return (
    <>

<header className='flex items-center justify-between mt-10 '>
<nav className='flex gap-6 border-b-[1px] border-solid border-gray-300 w-max  text-dashgrey'>
{/* <span className='bg-white px-5 py-3 rounded-t-[9px] shadow text-black text-[20px] font-normal mr-2 relative before:absolute before:h-4 before:w-4 before:bg-green before:left-[-15px] before:bottom-0 before:rounded-br-xl' onClick={()=>{router.push('/reports')}}>Account</span> */}
<span className={` px-5 py-3 rounded-t-[9px]  cursor-pointer  text-[20px] font-normal mr-2 ${navitem==='Account' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText,'/dashboard/account') }>Account</span>
<span className={` px-5 py-3 rounded-t-[9px] cursor-pointer text-[20px] font-normal mr-2 ${navitem==='Addresses' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText,'/dashboard/addresses') }>Addresses</span>
<span className={` px-5 py-3 rounded-t-[9px] cursor-pointer text-[20px] font-normal mr-2 ${navitem==='Settings' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText,'/dashboard/addresses') }>Settings</span>
</nav>

<section className=''>
<button className='px-[20px] py-[16px] bg-hazyblue text-white rounded-[7px] text-[16px] flex items-center '><img className='pr-3' src='../images/dashboard/plus.svg'/>Add Address</button>
</section>
</header>

    </>
  )
}

export default page