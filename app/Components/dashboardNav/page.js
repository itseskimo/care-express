"use client"
import Link from 'next/link'
import { useState } from 'react'

const page = ({navTitle}) => {

  const[navitem,setNavItem]=useState(`${navTitle}`)
  const[select,setSelect]=useState(false)

  return (
    <>
<nav className='bg-white shadow-lg  h-[80px]   flex justify-between sticky top-0 rounded-xl'>

<header className='flex items-center gap-6 '>
<Link href={{pathname:'/'}}><img src='../images/petExpress/logo.jpg' className='pl-5' /></Link>
<Link href={{pathname:'/dashboard'}}><h1 className={` py-[10px] rounded-[8px] px-3  text-[20px] cursor-pointer ${navitem === 'Dashboard' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Dashboard</h1></Link>
<Link href={{pathname:'/orderHistory'}}><h1 className={` py-[10px] rounded-[8px] px-3 text-[20px] cursor-pointer ${navitem === 'Order History' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Order History</h1></Link>
<Link href={{pathname:'/reports'}}><h1 className={` py-[10px] rounded-[8px] px-3 text-[20px] cursor-pointer ${navitem === 'Reports' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Reports</h1></Link>
</header>

<header className='flex items-center gap-6 '>
<Link href={{pathname:'/login'}}><button className='bg-hazyblue text-white text-[16px] rounded-[23.5px] px-5 py-[12px]'>Book Now</button></Link>
<h1 className='rounded-[50%] cursor-pointer bg-dashblue px-[19px] py-[8px] text-center text-[24px] flex items-center justify-center font-extrabold mr-5' onClick={()=>setSelect(!select)}>P</h1>
</header>

</nav>
<main className='relative'> 
{select &&
         <ul className='w-[220px] bg-white shadow-md rounded-[8px] overflow-hidden absolute right-0 top-2 cursor-pointer z-10 px-7' onClick={()=>setSelect(!select)} >
           <li className='w-full py-3 list-none box-border cursor-pointer flex items-center justify-start' >
            <p className=''>Account</p>
           </li>
 
           <li className='w-full py-3 list-none box-border cursor-pointer flex items-center justify-start ' >
             <p className='' id='list2'>Logout</p>
           </li>
      </ul>
      }
</main>
    </>
  )
}

export default page