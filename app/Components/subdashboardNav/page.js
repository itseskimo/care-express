"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const page = () => {

    const router = useRouter();


  return (
    <>

<header className='flex items-center justify-between mt-10 '>
<nav className='flex gap-6 border-b-[1px] border-solid border-gray-300 w-max cursor-pointer '>
<span className='bg-white px-5 py-3 rounded-t-[9px] shadow text-black text-[20px] font-normal mr-2 relative before:absolute before:h-4 before:w-4 before:bg-green before:left-[-15px] before:bottom-0 before:rounded-br-xl' onClick={()=>{router.push('/reports')}}>Account</span>
<span className='bg-transparent px-5 py-3 rounded-t-[9px]  text-dashgrey text-[20px] font-normal mr-2' onClick={()=>{router.push('/reports/addresses')}}>Adresses</span>
<span className='bg-transparent px-5 py-3 rounded-t-[9px] text-dashgrey text-[20px] font-normal'>Settings</span>
</nav>

<section className=''>
<button className='px-[20px] py-[16px] bg-hazyblue text-white rounded-[7px] text-[16px] flex items-center '><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/>Add Address</button>
</section>
</header>

    </>
  )
}

export default page