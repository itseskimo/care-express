"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'
import { getDashboardAccountDetails , updateDashboardAccountDetails } from '@/redux/actions/page'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'

const page = () => {

  const { orders } = useSelector((state) => state.orders);

  const dispatch= useDispatch()

  useEffect(()=>{
  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
    dispatch(getDashboardAccountDetails(loginData.token))
  }
},[])

  
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

  <button className='px-[20px] py-[13px] bg-hazyblue text-white rounded-[23.5px] text-[16px] mt-8' onClick={()=>dispatch(updateDashboardAccountDetails('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhjMGUwYjMzZWNlYmNiOGZmM2RiOSIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJva2tAZ21haWwuY29tIiwiaWF0IjoxNjc3NzY2MDczLCJleHAiOjE2ODAzNTgwNzN9.UK3MnarwJXKBGtnFywTHW6Oi5qzaq8qO7caR9zNZz08'))}>Save Details</button>


      {/* <button className='bg-dashgreen px-4 py-[22px] text-[16px] rounded-[17px] flex-none shrink-0'>Account saved successfully</button> */}



    </main>
    

    </div>
  )
}

export default page