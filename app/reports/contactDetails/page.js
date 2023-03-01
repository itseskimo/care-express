"use client"
import DashBookingHeader from '../../Components/dashBookingHeader/page'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import Link from 'next/link'

import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';



const page = () => {
    const router = useRouter();


   

  return (
    <>










    
    <div className='bg-specialbg  h-max'>
    <Head title='Order History' />
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    <DashboardNav navTitle='Reports' />
    
    <DashBookingHeader active={1}/>


    <section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6'>

<section className=' flex items-center justify-between  pb-5 mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 '>

<section className='flex gap-28'>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>80 hours</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>3032 zł</h6>
</div>
</section>

  <button className=' shrink-0 border-[1px] border-solid  border-gray-300 flex px-3 xlsm:px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/booking/plan')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<section className='mx-5 xlsm:mx-14 xlg:mx-28 py-10 ' >

<h6 className='text-[16px] tracking-[0.02em] font-semibold'>Saved Addresses</h6>

<main className='mt-2 flex'>

<div className='border-dashed border-[1px] border-gray-400 py-16 rounded-[14px] w-[196px]'>
<section className='flex items-center justify-center flex-col gap-3'>
<img className='' src='../images/dashboard/Plusblack.svg'/>
<h6 className='text-[20px] font-semibold'>Add Address</h6> 
</section>
</div>

<div className='bg-white px-6 py-6 w-[22%] rounded-[14px] border-solid border-[1px] border-gray-300 cursor-pointer'>
  <h6 className=' font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className=' mb-2 text-[20px]  leading-7 '>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-4'><img className='pr-3' src='../images/dashboard/delete.svg' /><img className='pr-3' src='../images/dashboard/edit.svg'/></div>
</div>

</main>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-between'>
  <Link href={{pathname:'/reports/booking'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
  <Link href={{pathname:'/reports/additionalRequirements'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' >Next</button></Link>
</div>



</section>

 




</section>










    </main>
  </div>
  </>
    )
}

export default page