"use client"

import DashboardNav from '../Components/dashboardNav/page'
import Head from '../head'
import Link from 'next/link'
import {useRouter} from 'next/navigation';


const page = () => {
  const router = useRouter();


  return (
    <div className='bg-specialbg  h-screen'>
    <Head title='Order History' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
      <DashboardNav navTitle='Reports' />
      <section className='mt-9  overflow-hidden'>
       

      <main className='grid grid-cols-6 px-10'>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>REPORT MONTH</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>PET EXPRESS</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NANNY EXPRESS</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>SENIOR EXPRESS</h6>
            <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>SPECIAL EXPRESS</h6>
            <h6 className='py-5 pr-10 font-semibold text-[14px] tracking-[0.15em]'>ACTIONS</h6>
        </main>
        
        <main className='bg-white grid grid-cols-6 px-10 border-b-[1px] border-solid border-gray-300'>
            <h6 className='py-5 text-[14px]'>FEB 2023</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <h6 className='py-5 text-[14px]'>10 Hours</h6>
            <Link href={{pathname:'/reports/month'}}><h6 className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-3' src='../images/dashboard/eye.svg'/>View Report</h6></Link>
        </main>
         

      </section>

<div className='flex items-center justify-center mt-36 pb-14'>
      <button className='bg-hazyblue px-16 py-[15px] text-white text-[16px] font-semibold rounded-lg'>PAGE 1</button>
</div>

    </main>
  </div>
  )
}

export default page