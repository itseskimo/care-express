import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'

const page = () => {
  return (
    <div className='bg-specialbg h-screen '>
    <Head title='Reports' />
    <main className='pt-10 ml-auto mr-auto w-[93%]'>
     <DashboardNav navTitle='Reports'/>

<header className='flex relative'>
<nav className='flex mt-10 gap-6 border-b-[1px] border-solid border-gray-300 w-max cursor-pointer '>
<div className='flex relative'>
  <span className='bg-white px-5 py-3 rounded-t-[9px] shadow text-black text-[20px] font-normal mr-2 before:absolute before:h-4 before:w-4'>Account</span>
<span className='h-4 w-4 bg-white absolute right-0 bottom-0 rounded-tr-[30px]'></span>
</div>
<span className='bg-transparent px-5 py-3 rounded-t-[9px]  text-dashgrey text-[20px] font-normal mr-2'>Adresses</span>
<span className='bg-transparent px-5 py-3 rounded-t-[9px] text-dashgrey text-[20px] font-normal'>Settings</span>
</nav>

<button className='px-[20px] py-[16px] bg-hazyblue text-white rounded-[7px] text-[16px] flex mt-8 absolute right-0'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/>Add Address</button>

</header>
<section className='flex gap-6 mt-10 flex-wrap'>

<div className='bg-white px-6 py-6 w-[245px] rounded-[14px] shadow-md cursor-pointer'>
  <h6 className='flex font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className='text-xs mb-2 text-[20px] w-[80%] leading-4 tracking-wider'>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-4'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/></div>
</div>






</section>



    </main>
    </div>
  )
}

export default page