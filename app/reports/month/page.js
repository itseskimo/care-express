import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'

const page = () => (
  <div className='bg-specialbg  h-max'>
    <Head title='Order History' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
      <DashboardNav navTitle='Reports' />


<section className='flex justify-between mt-[44px]'>
    <h6 className='text-[32px] font-extrabold'>Report - February 2023</h6>
    <button className='px-[20px] py-[16px] bg-hazyblue text-white rounded-[7px] text-[16px] flex items-center '><img className='pr-3' src='../images/dashboard/whitepdf.svg'/>Download Report</button>
</section>


<main className='mt-10'>
          <h5 className='flex font-semibold text-[20px] mb-4'>Services Overview</h5>
        
        <section className='flex gap-[28px]'>

        <div  className='bg-white px-7 py-8 w-[23.5%] rounded-[14px] cursor-pointer shadow-dashlishadow'>
          <h6 className='flex font-semibold text-[20px] mb-[6px]'><img className='pr-4' src='../images/dashboard/pet.svg'/>Pet Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
        <div  className='bg-white px-7 py-8 w-[23.5%] rounded-[14px] cursor-pointer shadow-dashlishadow'>
          <h6 className='flex font-semibold text-[20px] mb-[6px]'><img className='pr-4' src='../images/dashboard/Vector.svg'/>Nanny Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
        <div  className='bg-white px-7 py-8 w-[23.5%] rounded-[14px] cursor-pointer shadow-dashlishadow'>
          <h6 className='flex font-semibold text-[20px] mb-[6px]'><img className='pr-4' src='../images/dashboard/Frame.svg'/>Senior Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
        <div  className='bg-white px-7 py-8 w-[23.5%] rounded-[14px] cursor-pointer shadow-dashlishadow'>
          <h6 className='flex font-semibold text-[20px] mb-[6px]'><img className='pr-4' src='../images/dashboard/special.svg'/>Special Express</h6>
          <h6 className='text-[16px] mb-1 font-medium text-dashdrkgrey'>Hours Used</h6>
          <h1 className='font-extrabold text-[40px]'>256</h1>
        </div>
   
        

        

        </section>


        </main>





        <section className='mt-10 pb-16  overflow-hidden'>
        <table className='w-full '>
        <tbody>
          <tr className='text-left  '>
            <th className='py-5 pl-10 font-semibold text-[14px] tracking-[0.15em]'>ORDER DATE</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>CARE TYPE</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NO OF HOURS</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>RATE PER HOUR</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>TOTAL PRICE</th>
          </tr>


          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 pl-10 text-[14px]'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
          <tr className='bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
          </tr>
         
          </tbody>
        </table>

      </section>


    </main>
  </div>
)

export default page