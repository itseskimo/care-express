"use client"
import Link from 'next/link'
import { useState, useEffect , useRef } from 'react'
import { useRouter } from 'next/navigation';
import { logout} from '@/redux/actions/page'
import { useDispatch } from 'react-redux'

const page = ({navTitle}) => {
  const dispatch= useDispatch()

  const[navitem,setNavItem]=useState(`${navTitle}`)
  const[select,setSelect]=useState(false)
  const router = useRouter();
  const closeRef = useRef(null);

function logOut(){
  dispatch(logout())
  localStorage.clear()
  router.push('/')
}

const handleClose = (e) => {
  if (!closeRef.current.contains(e.target)) {
    setSelect(false);
  }
}


const [firstLetter, setFirstLetter]=useState('')

useEffect(()=>{
  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
    setFirstLetter(loginData?.first_name[0].toUpperCase())
  }
  document.addEventListener("click", handleClose, true);
  return () => document.removeEventListener("click", handleClose , true) 
},[])

  return (
    <>
<nav className='bg-white shadow-lg  h-[80px]   flex justify-between sticky top-0 rounded-xl z-10'>

<header className='flex items-center gap-6 '>
  <a href='/'><img src='../images/petExpress/logo.jpg' className='pl-5 shrink-0' /></a>
  <a href='/dashboard'><h1 className={` py-[10px] rounded-[8px] px-3  text-[20px] cursor-pointer ${navitem === 'Dashboard' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Dashboard</h1></a>
  <a href='/orders/ongoing'><h1 className={` py-[10px] rounded-[8px] px-3 text-[20px] cursor-pointer ${navitem === 'Orders' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Orders</h1></a>
  <a href='/reports'><h1 className={` py-[10px] rounded-[8px] px-3 text-[20px] cursor-pointer ${navitem === 'Reports' ? 'bg-dashgrey' : '' }`} onClick={(e)=>setNavItem(e.target.innerText)}>Reports</h1></a>
</header>

<header className='flex items-center gap-6 '>
  <a href='/reports/booking'><button className='bg-hazyblue text-white text-[16px] rounded-[23.5px] px-5 py-[12px]'>Book Now</button></a>
<h1 className='rounded-[50%] cursor-pointer bg-dashblue px-[19px] py-[8px] text-center text-[24px] flex items-center justify-center font-extrabold mr-5' onClick={()=>setSelect(!select)}>{firstLetter}</h1>
</header>

</nav>
<main className='relative' ref={closeRef}> 
{select &&
         <ul className='w-[220px] bg-white shadow-md rounded-[8px] overflow-hidden absolute right-0 top-2 cursor-pointer z-10 ' onClick={()=>setSelect(!select)} >
        <Link href={{pathname:'/dashboard/account'}}><li className='w-full py-3 list-none box-border cursor-pointer flex items-center justify-start px-7 text-[14px] hover:bg-slate-100' >Account</li></Link>
        <li className='w-full py-3 list-none box-border cursor-pointer flex items-center justify-start px-7 text-[14px] hover:bg-slate-100 ' onClick={logOut} >Logout</li>
      </ul>
      }
</main>
    </>
  )
}

export default page