import React from 'react'
import DashboardNav from '../Components/dashboardNav/page'
import Head from '../head'

const page = () => (
  <div className='bg-specialbg  h-max'>
    <Head title='Order History' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
      <DashboardNav navTitle='Reports' />
      <section className='mt-9  overflow-hidden'>
        <table className='w-full '>
        <tbody>
          <tr className='text-left  '>
            <th className='py-5 pl-10 font-semibold text-[14px] tracking-[0.15em]'>REPORT MONTH</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>PET EXPRESS</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NANNY EXPRESS</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>SENIOR EXPRESS</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>SPECIAL EXPRESS</th>
            <th className='py-5 pr-10 font-semibold text-[14px] tracking-[0.15em]'>ACTIONS</th>
          </tr>


          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>FEB 2023</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-3' src='../images/dashboard/eye.svg'/>View Report</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>FEB 2023</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-3' src='../images/dashboard/eye.svg'/>View Report</td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>FEB 2023</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-3' src='../images/dashboard/eye.svg'/>View Report</td>
          </tr>
          <tr className=' bg-white'>
            <td className='py-5 text-[14px] pl-10'>FEB 2023</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-3' src='../images/dashboard/eye.svg'/>View Report</td>
          </tr>
         
         
          </tbody>
        </table>

      </section>

<div className='flex items-center justify-center mt-36 pb-14'>
      <button className='bg-hazyblue px-16 py-[15px] text-white text-[16px] font-semibold rounded-lg'>PAGE 1</button>
</div>

    </main>
  </div>
)

export default page