"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import { useState ,useEffect } from 'react'
import {useRouter} from 'next/navigation';
import { getOrderById } from '@/redux/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const router = useRouter();
    const dispatch= useDispatch()
    const { orderId } = useSelector((state) => state.orders);

    const [pauseToggle,setPauseToggle]=useState(false)

    function pauseToggler(){
    setPauseToggle(!pauseToggle)
    }

    const [cancelToggle,setCancelToggle]=useState(false)

    function cancelToggler(){
    setCancelToggle(!cancelToggle)
    }

    useEffect(()=>{
   

        if(localStorage.getItem('user')){
          let data = localStorage.getItem('user')
          let loginData = JSON.parse(data);

          if(new URLSearchParams(window.location.search).get('id')){
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id')
            dispatch(getOrderById(id,loginData.token))
          }

        }
      },[])

  function clipboardText(){
     let copyText = document.getElementById('copyText')
     navigator.clipboard.writeText(copyText.innerText);

    }

    return (
        <>
{ cancelToggle && <section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center shadow-dashshadow bg-dashoverlay overflow-hidden'>
<main className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-6 shadow-dashshadow '>
<h6 className='text-[20px] font-semibold'>Are you sure you want to cancel the order?</h6>
<h6 className='text-[16px] pr-4'>You will receive a refund for the remaining 2 hours and your care will be stopped immediately. Would you like to continue?</h6>
<section className='flex justify-end gap-[10px] mt-[15px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={cancelToggler}>NO</button>
<button className='p-[16px] rounded-lg font-medium text-white bg-dashlired text-[16px] cursor-pointer' >YES</button>
</section>
</main>
</section>}  

        
{pauseToggle && <section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center shadow-dashshadow  bg-dashoverlay overflow-hidden'>
<main className='flex flex-col  rounded-[16px] h-max w-[564px] bg-soothingyellow p-6 shadow-dashshadow '>
<h6 className='text-[20px] font-semibold '>Please select a restart date for your care</h6>
<h6 className='text-[14px] mt-4 mb-2'>Care Restart Date</h6>
<div className='relative flex w-[56%]'>
    <img className='bg-dashdrkgrey absolute right-0 p-[10px] rounded-r-[10px]' src='../images/dashboard/Calendar.svg' />
    <input className='py-[15px] px-3 text-[14px] outline-none w-full border-solid border-[1px] border-gray-300 rounded-[10px]'/>
</div>
<section className='flex justify-end gap-[10px] pt-[30px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={pauseToggler}>CANCEL</button>
<button className='p-[16px] rounded-lg font-medium text-black bg-dashyellow text-[16px] cursor-pointer' >PAUSE CARE</button>
</section>
</main>
</section>}

        
        
        
        <div className='bg-specialbg h-screen absolute top-0 w-full'>
            <Head title='Orders' />
            <main className='pt-8 ml-auto mr-auto w-[92%]'>
                <DashboardNav navTitle='Orders' />
                <section className='mt-10  flex justify-between'>
                    <div className='flex items-center'>
                        <img className='pr-2 h-8 cursor-pointer' src='../images/dashboard/ArrowLeft.svg' onClick={()=>router.push('/orders')}/>
                        <h6 className='font-extrabold text-[32px] whitespace-nowrap'>Order Details</h6>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <button className='px-[20px] py-[16px] bg-dashyellow text-black font-semibold rounded-[7px] text-[16px] flex items-center ' onClick={pauseToggler}><img className='pr-3' src='../images/dashboard/CloseSquare.svg' />Pause Order</button>
                        <button className='px-[20px] py-[16px] bg-dashred text-white font-semibold rounded-[7px] text-[16px] flex items-center ' onClick={cancelToggler}><img className='pr-3' src='../images/dashboard/CloseSquare1.svg' />Cancel Order</button>
                    </div>

                </section>

                <section className='flex items-center justify-between mt-7'>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Order Number</h6>
                        <div className='flex cursor-pointer'>
                        <h6 className='text-[16px]' id='copyText' onClick={clipboardText} >{orderId?.details?.id}</h6>
                        <img className='pl-3' src='../images/dashboard/copy.svg'/>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Date</h6>
                        <h6 className='text-[16px]'>{orderId?.details?.date}</h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Care Type</h6>
                        <h6 className='text-[16px]'>{orderId?.details?.care_type}</h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>No. of Hours</h6>
                        <h6 className='text-[16px]'>{orderId?.details?.no_of_hours} Hours</h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Total Price</h6>
                        <h6 className='text-[16px]'>{orderId?.details?.total_price} zl  </h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Assigned Nanny</h6>
                        <h6 className='text-[16px]'>Julianna Wojciechowska</h6>
                    </div>
                </section>
{/* -------------------------------------------------------------------------------------------- */}


<section className='mt-10'>

<main className='grid grid-cols-[max-content,auto,max-content]'>
    <div className=''>
    <h6 className='py-5 font-semibold text-[14px]  tracking-[0.15em] pl-10'>VISIT DATE</h6>
    <h6 className='py-5 text-[14px] bg-white pl-10'>24 Feb 2023</h6>
    </div>

    <div className='text-center'>
    <h6 className='py-5 font-semibold text-[14px]  tracking-[0.15em]'>VISIT TIME</h6>
    <h6 className='py-5 text-[14px] bg-white pl-7'>9:15 am - 5:15 pm</h6>   
    </div>

    <div className=''>
    <h6 className='py-5 font-semibold text-[14px]  tracking-[0.15em]  pr-10'>VISIT HOURS</h6>
    <h6 className='py-5 text-[14px] bg-white pr-10'>8 hours</h6>     
    </div>   

  </main>

  

      </section>

{/* -------------------------------------------------------------------------------------------- */}

            </main>
        </div>
        </>
    )
}

export default page