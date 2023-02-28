import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'

const page = () => {
  return (
    <div className='bg-specialbg  '>
    <Head title='Reports' />
    <main className=' pt-8 ml-auto mr-auto h-screen  w-[92%]  '>
     <DashboardNav />

<SubDashboardNav navTitle='Account'/>


<section className='flex gap-5 mt-8'>
  
  <div>
    <h6 className='mb-2 text-sm'>First Name</h6>
    <input type='text' className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Last Name</h6>
    <input type='text' className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Password</h6>
    <input type='password' className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  
</section>

  <button className='px-[20px] py-[13px] bg-hazyblue text-white rounded-[23.5px] text-[16px] mt-8'>Save Details</button>


      {/* <button className='bg-dashgreen px-4 py-[22px] text-[16px] rounded-[17px] flex-none shrink-0'>Account saved successfully</button> */}



    </main>
    

    </div>
  )
}

export default page