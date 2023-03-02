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

<header className='flex items-center  mt-10 '>
<nav className='flex gap-6 border-b-[1px] border-solid border-gray-300 w-max  text-dashgrey'>
<span className={` px-5 py-3 rounded-t-[9px]  cursor-pointer  text-[20px] font-normal mr-2 ${navitem==='Ongoing' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText,'/orderHistory/ongoing') }>Ongoing</span>
<span className={` px-5 py-3 rounded-t-[9px] cursor-pointer text-[20px] font-normal mr-2 ${navitem==='Completed' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText,'/orderHistory/completed') }>Completed</span>
</nav>
</header>

    </>
  )
}

export default page