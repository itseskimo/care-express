import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'
import DashForm from '../../Components/dashform/page'
const page = () => {
  return (
    <>
    <DashForm/>

    <div className='bg-specialbg h-screen absolute top-0 w-full '>
    <Head title='Reports' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
     <DashboardNav navTitle='Reports'/>

<SubDashboardNav/>
<section className='flex gap-6 mt-10 flex-wrap'>

<div className='bg-white px-6 py-6 w-[245px] rounded-[14px] shadow-md cursor-pointer'>
  <h6 className='flex font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className='text-xs mb-2 text-[20px] w-[80%] leading-4 tracking-wider'>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-4'><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/><img className='pr-3' src='../images/business/Icons/business-express-separator-star.svg'/></div>
</div>






</section>



    </main>
    </div>
    </>
  )
}

export default page