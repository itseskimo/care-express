import React from 'react'
import DashboardNav from '../Components/dashboardNav/page'
import Head from '../head'

const page = () => {
  return (
    <div className='bg-specialbg h-screen '>
    <Head title='Reports' />
    <main className='pt-10 ml-auto mr-auto w-[93%]'>
     <DashboardNav navTitle='Reports'/>


<nav className='flex mt-10 gap-6 border-b-[1px] border-solid border-gray-300 w-max cursor-pointer'>
<div className='flex relative'>
  <span className='bg-white px-5 py-3 rounded-t-[9px] shadow text-black text-[20px] font-normal mr-2 before:absolute before:h-4 before:w-4'>Account</span>
<span className='h-4 w-4 bg-white absolute right-0 bottom-0 rounded-tr-[30px]'></span>
</div>
<span className='bg-transparent px-5 py-3 rounded-t-[9px]  text-dashgrey text-[20px] font-normal mr-2'>Addresses</span>
<span className='bg-transparent px-5 py-3 rounded-t-[9px] text-dashgrey text-[20px] font-normal'>Settings</span>
</nav>

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

    </main>
    </div>
  )
}

export default page