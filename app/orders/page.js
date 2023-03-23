"use client"
import React from 'react'
import DashboardNav from '../Components/dashboardNav/page'
import Head from '../head'
import { useEffect , useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getOngoingOrders , getCompletedOrders} from '@/redux/actions/page'
import Link from 'next/link'

const page = () => {

  const { orders}  = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const[navitem,setNavItem]=useState('Ongoing')

  function redirect(id) {
    setNavItem(id)
  }

useEffect(()=>{
  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
    navitem === 'Ongoing' ?   dispatch(getOngoingOrders(loginData.token)) : dispatch(getCompletedOrders(loginData.token))
  }
},[navitem])

  return (
    <div className='bg-specialbg h-screen'>
    <Head title='Orders' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
      <DashboardNav navTitle='Orders' />

      <header className='flex items-center  mt-10 '>
      <nav className='flex gap-6 border-b-[1px] border-solid border-gray-300 w-max  text-dashgrey'>
      <span className={` px-5 py-3 rounded-t-[9px]  cursor-pointer  text-[20px] font-normal mr-2 ${navitem==='Ongoing' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText) }>Ongoing</span>
      <span className={` px-5 py-3 rounded-t-[9px] cursor-pointer text-[20px] font-normal mr-2 ${navitem==='Completed' ? 'bg-white text-black shadow' : ''} `} onClick={(e)=>redirect(e.target.innerText) }>Completed</span>
      </nav>
      </header>

{
  navitem === 'Ongoing' ? <section className='mt-10  overflow-hidden'>
        <main className='grid grid-cols-[1fr,1fr,1fr,1fr,0.7fr,1.4fr] px-10'>
            <h6 className='py-5  font-semibold text-[14px] tracking-[0.15em]'>ORDER DATE</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>CARE TYPE</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NO OF HOURS</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>RATE PER HOUR</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>TOTAL PRICE</h6>
            <h6 className='py-5  font-semibold text-[14px] tracking-[0.15em]'>ACTIONS</h6>
        </main>
        
        <main className='bg-white grid grid-cols-[1fr,1fr,1fr,1fr,0.7fr,1.4fr] px-10 border-b-[1px] border-solid border-gray-300'>
            <h6 className='py-5 text-[14px]'>24 FEB 2023</h6>
            <h6 className='py-5 text-[14px]'>Pet Express</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <h6 className='py-5 text-[14px]'>55 zl/h</h6>
            <h6 className='py-5 text-[14px]'>550 zl</h6>
            <h6 className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <Link href={{pathname:'/orders/viewDetails'}}><span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg' />View Details</span></Link> </h6>
        </main>
      </section>

      :

      <section className='mt-10  overflow-hidden'>
      <main className='grid grid-cols-[1.4fr,1.4fr,1.4fr,1.4fr,1.4fr,1fr] px-10'>
            <h6 className='py-5  font-semibold text-[14px] tracking-[0.15em]'>ORDER DATE</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>CARE TYPE</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NO OF HOURS</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>RATE PER HOUR</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>TOTAL PRICE</h6>
            <h6 className='py-5  font-semibold text-[14px] tracking-[0.15em]'>ACTIONS</h6>
        </main>
        
        <main className='bg-white grid grid-cols-[1.4fr,1.4fr,1.4fr,1.4fr,1.4fr,1fr] px-10 border-b-[1px] border-solid border-gray-300'>
            <h6 className='py-5 text-[14px]'>24 FEB 2023</h6>
            <h6 className='py-5 text-[14px]'>Pet Express</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <h6 className='py-5 text-[14px]'>55 zl/h</h6>
            <h6 className='py-5 text-[14px]'>550 zl</h6>
            <h6 className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice </h6>
        </main>
      </section>
}
      

      

<div className='flex items-center justify-center mt-24 pb-16'>
      <button className='bg-hazyblue px-16 py-[15px] text-white text-[16px] font-semibold rounded-lg'>PAGE 1</button>
</div>

    </main>
  </div>  )
}

export default page