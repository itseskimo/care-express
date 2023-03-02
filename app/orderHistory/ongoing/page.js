"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import SubOrderHistoryNav from '../../Components/subOrderHistoryNav/page'
import Head from '../../head'
import { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { getAllOrders} from '@/redux/actions/page'

const page = () => {
//   const dispatch = useDispatch();

// useEffect(()=>{
// dispatch(getAllOrders('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhjMGUwYjMzZWNlYmNiOGZmM2RiOSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJva2tAZ21haWwuY29tIiwiaWF0IjoxNjc3NjgzNjg5LCJleHAiOjE2ODAyNzU2ODl9.PZ3jC4VyAlqzuOMxiXb3VoLAjd-OWMYYtRm9pTSyytE'))
// },[])

  return (
    <div className='bg-specialbg  '>
    <Head title='Order History' />
    <main className='pt-8 ml-auto mr-auto w-[92%]'>
      <DashboardNav navTitle='Order History' />
      <SubOrderHistoryNav navTitle='Ongoing'/>
      <section className='mt-10  overflow-hidden'>
        <table className=' w-full'>
        <tbody>
          <tr className='text-left  '>
            <th className='py-5 pl-10 font-semibold text-[14px] tracking-[0.15em]'>ORDER DATE</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>CARE TYPE</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>NO OF HOURS</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>RATE PER HOUR</th>
            <th className='py-5 font-semibold text-[14px] tracking-[0.15em]'>TOTAL PRICE</th>
            <th className='py-5  font-semibold text-[14px] tracking-[0.15em]'>ACTIONS</th>
          </tr>


          <tr className='border-b-[1px] border-solid border-gray-300 bg-white '>
            <td className='py-5 pl-10 text-[14px]'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='border-b-[1px] border-solid border-gray-300 bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
          <tr className='bg-white'>
            <td className='py-5 text-[14px] pl-10'>24 FEB 2023</td>
            <td className='py-5 text-[14px]'>Pet Express</td>
            <td className='py-5 text-[14px]'>10 Hours</td>
            <td className='py-5 text-[14px]'>55 zl/h</td>
            <td className='py-5 text-[14px]'>550 zl</td>
            <td className='py-5 text-[14px] underline underline-offset-2 decoration-[1px] text-blue cursor-pointer flex'><img className='pr-2' src='../images/dashboard/pdf.svg'/>Download Invoice <span className='flex pl-5'><img className='pr-2' src='../images/dashboard/eye.svg'/>View Details</span></td>
          </tr>
         
          </tbody>
        </table>

      </section>

<div className='flex items-center justify-center mt-24 pb-16'>
      <button className='bg-hazyblue px-16 py-[15px] text-white text-[16px] font-semibold rounded-lg'>PAGE 1</button>
</div>

    </main>
  </div>  )
}

export default page