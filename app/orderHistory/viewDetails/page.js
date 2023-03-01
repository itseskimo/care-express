import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'

const page = () => {
    return (
        <>
        
{/* <section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center shadow-dashshadow bg-dashoverlay overflow-hidden'>
<main className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-6 shadow-dashshadow '>
<h6 className='text-[20px] font-semibold'>Are you sure you want to cancel the order?</h6>
<h6 className='text-[16px] pr-4'>You will receive a refund for the remaining 2 hours and your care will be stopped immediately. Would you like to continue?</h6>
<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer'>NO</button>
<button className='p-[16px] rounded-lg font-medium text-white bg-dashlired text-[16px] cursor-pointer' >YES</button>
</section>
</main>
</section> */}
        
<section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center shadow-dashshadow  bg-dashoverlay overflow-hidden'>
<main className='flex flex-col  rounded-[16px] h-max w-[564px] bg-soothingyellow p-6 shadow-dashshadow '>
<h6 className='text-[20px] font-semibold '>Please select a restart date for your care</h6>
<h6 className='text-[14px] mt-4 mb-2'>Care Restart Date</h6>
<input className='py-3 px-3 text-[14px] outline-none w-[50%] border-solid border-[1px] border-gray-300 rounded-[10px]'/>
<section className='flex justify-end gap-[10px] mt-[10px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer'>CANCEL</button>
<button className='p-[16px] rounded-lg font-medium text-black bg-dashyellow text-[16px] cursor-pointer' >PAUSE CARE</button>
</section>

</main>
</section>
        
        
        
        <div className='bg-specialbg h-screen absolute top-0 w-full'>
            <Head title='Order History' />
            <main className='pt-8 ml-auto mr-auto w-[92%]'>
                <DashboardNav navTitle='Order History' />
                <section className='mt-10  flex justify-between'>
                    <div className='flex items-center'>
                        <img className='pr-2 h-8' src='../images/dashboard/ArrowLeft.svg' />
                        <h6 className='font-extrabold text-[32px] whitespace-nowrap'>Order Details</h6>
                    </div>

                    <div className='flex gap-5 items-center'>
                        <button className='px-[20px] py-[16px] bg-dashyellow text-black font-semibold rounded-[7px] text-[16px] flex items-center '><img className='pr-3' src='../images/dashboard/CloseSquare.svg' />Pause Order</button>
                        <button className='px-[20px] py-[16px] bg-dashred text-white font-semibold rounded-[7px] text-[16px] flex items-center '><img className='pr-3' src='../images/dashboard/CloseSquare1.svg' />Cancel Order</button>
                    </div>

                </section>

                <section className='flex items-center justify-between mt-7'>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Order Number</h6>
                        <div className='flex'>
                        <h6 className='text-[16px]'>6378f...6922f0</h6>
                        <img className='pl-3' src='../images/dashboard/copy.svg'/>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Date</h6>
                        <h6 className='text-[16px]'>24 Feb 2023</h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Care Type</h6>
                        <h6 className='text-[16px]'>Pet Express</h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>No. of Hours</h6>
                        <h6 className='text-[16px]'>10 </h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Total Price</h6>
                        <h6 className='text-[16px]'>550 zl </h6>
                    </div>
                    <div>
                        <h6 className='text-[16px] font-semibold mb-1'>Assigned Nanny</h6>
                        <h6 className='text-[16px]'>Julianna Wojciechowska</h6>
                    </div>
                </section>
{/* -------------------------------------------------------------------------------------------- */}


<section className='mt-10   '>
  <main className='grid grid-cols-3 bg-slate-600 px-10'>
    <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em]'>VISIT HOURS</h6>
    <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em] bg-rose-50'>VISIT TIME</h6>
    <h6 className='py-5 font-semibold text-[14px] tracking-[0.15em] bg-green'>VISIT HOURS</h6>
  </main>

  <section className='grid grid-cols-3 bg-white border-b-[1px] border-solid border-gray-300 px-10 '>
    <h6 className=' py-5 text-[14px]'>8 hours</h6>
    <h6 className=' py-5 text-[14px] '>9:15 am - 5:15 pm</h6>
    <h6 className=' py-5 text-[14px] '>24 Feb 2023</h6>
  </section>
  
       
      </section>

{/* -------------------------------------------------------------------------------------------- */}

            </main>
        </div>
        </>
    )
}

export default page