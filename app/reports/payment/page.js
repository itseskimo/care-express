"use client"
import DashBookingHeader from '../../Components/dashBookingHeader/page'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import Link from 'next/link'

import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';



const page = () => {
    const router = useRouter();

    const [accountToggle, setAccountToggle]=useState(true)

    const[select,setSelect]=useState(false)
    function selectField(e){
        setSelect(!select)
         let selectText= document.getElementById('selectText')
         let dropdownArrow= document.getElementById('dropdownArrow')
         dropdownArrow.classList.toggle('rotate-180')
         selectText.innerHTML= e.target.innerText 
      }


      function formSubmit(e){
        e.preventDefault()
        let container= document.getElementById('container')
        container.classList.add('h-screen')
        setAccountToggle(false)
      }


      const [hours,setHours]=useState('')
      const [cost,setCost]=useState('')
    
    useEffect(()=>{
      if(localStorage.getItem('user')){
      let hours= localStorage.getItem('hours')
      setHours(hours)
    
      let cost= localStorage.getItem('cost')
      setCost(cost)
      } 
    },[])

  return (
    <>
    
    <div className='bg-specialbg' id='container'>
    <Head title='Order History' />
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    <DashboardNav navTitle='Reports' />
    
    <DashBookingHeader active={5}/>

{accountToggle ? <form className='bg-white h-max rounded-[16px] my-10 flex flex-col items-center justify-center' onSubmit={formSubmit}>

<div className='mt-10'>
    <h6 className='text-[12px] tracking-[0.12em] font-semibold'>TOTAL PRICE</h6>
    <h6 className='text-[24px] font-bold'>{`${parseInt(hours)*parseInt(cost)} zł`}</h6>
</div>



<header className='mt-7'>

<section className='flex gap-4'>
<div style={{ border: '2px solid #E0E0E0'}} className=' cursor-pointer rounded-[6px] shadow-paymentshadow h-[64px] w-[127px] flex flex-col items-start justify-center pl-4'>
<img  src='../images/dashboard/card.svg'/>
<h6 className='text-dashxtrmgrey text-[13px] font-semibold'>Card</h6>
</div>
<div style={{ border: '2px solid #E0E0E0'}} className=' cursor-pointer rounded-[6px] shadow-paymentshadow h-[64px] w-[127px] flex flex-col items-start justify-center pl-4'>
<img src='../images/dashboard/eps.svg'/>
<h6 className='text-dashxtrmgrey text-[13px] font-semibold'>EPS</h6>
</div>
<div style={{ border: '2px solid #E0E0E0'}} className=' cursor-pointer rounded-[6px] shadow-paymentshadow h-[64px] w-[127px] flex flex-col items-start justify-center pl-4'>
<img src='../images/dashboard/giropay.svg'/>
<h6 className='text-dashxtrmgrey text-[13px] font-semibold'>GIROPAY</h6>
</div>
<div style={{ border: '2px solid #E0E0E0'}} className=' cursor-pointer rounded-[6px] shadow-paymentshadow h-[64px] px-[18px] py-4 '></div>
</section>


<div className='flex flex-col justify-start items-start mt-3'>
    <h6 className='text-dashxtrmgrey text-[13px] font-semibold mb-[2px]'>Card Number</h6>
    <input placeholder='1234-1234-1234-1234' style={{ border: '2px solid #E0E0E0'}} className='shadow-paymentshadow outline-none w-full px-3 py-[13px] rounded-[6px] font-semibold text-[13px] flex items-center justify-center '/>  
</div>


<section className='flex gap-4'>
<div className='flex flex-col w-[50%] mt-3'>
    <h6 className='text-dashxtrmgrey text-[13px] font-semibold mb-[2px]'>Expiry</h6>
    <input placeholder='MM/YY' style={{ border: '2px solid #E0E0E0'}} className='shadow-paymentshadow outline-none w-full px-3 py-[13px] rounded-[6px] font-semibold text-[13px] flex items-center justify-center '/>  
</div>

<div className='flex flex-col w-[50%]  mt-3'>
    <h6 className='text-dashxtrmgrey text-[13px] font-semibold mb-[2px]'>CVC</h6>
    <input placeholder='CVC' style={{ border: '2px solid #E0E0E0'}} className='shadow-paymentshadow outline-none w-full px-3 py-[13px] rounded-[6px] font-semibold text-[13px] flex items-center justify-center '/>  
</div>
</section>


<section className='flex gap-4'>

<main  className='flex flex-col w-[50%]  mt-3 relative ' onClick={selectField}>
<h6 className='text-dashxtrmgrey text-[13px] font-semibold mb-[2px]'>Country</h6>

<section style={{ border: '2px solid #E0E0E0'}} className='w-full shadow-paymentshadow py-[13px] box-border border-solid border-gray-400 border-[1px]  bg-white rounded-lg flex items-center justify-between px-4 cursor-pointer'>
<p className='text-xs md:text-sm  lg:text-[13px] font-semibold select-none pointer-events-none' id='selectText'>United States</p>
<img src='../images/Icons/Arrowdown.svg' className='w-[9px] select-none pointer-events-none' id='dropdownArrow'/>
</section>

{select &&
   <ul style={{ border: '2px solid #E0E0E0'}} className='w-full bg-white shadow-paymentshadow  rounded-[8px] overflow-hidden absolute top-[76px] z-10' >
     <li className='w-full py-[13px] list-none box-border cursor-pointer flex items-center justify-around' >
      <p>Poland</p>
     </li>

     <li className='w-full py-[13px] list-none box-border cursor-pointer flex items-center justify-around ' >
       <p>Canada</p>
     </li>
</ul>
}
</main>

<div className='flex flex-col w-[50%]  mt-3'>
    <h6 className='text-dashxtrmgrey text-[13px] font-semibold mb-[2px]'>Postal Code</h6>
    <input placeholder='90210' style={{ border: '2px solid #E0E0E0'}} className='shadow-paymentshadow outline-none w-full px-3 py-[13px] rounded-[6px] font-semibold text-[13px] flex items-center justify-center '/>  
</div>
</section>

<section className='flex items-center justify-center mt-10 mb-10'>
    <input type='submit' className='cursor-pointer rounded-[50px] py-[10px] px-8 text-[18px] font-semibold bg-blue text-white' value='Pay Now'/>
</section>

    </header>

</form>

:

<section className='bg-white h-max rounded-[16px] mt-10'>
<div className='flex items-center justify-center flex-col py-10 ]'>
    <img src='../images/booking/accountsuccess.svg' className='mb-10'/>
    <h6 className='text-[24px] font-bold mb-10'>Payment success! Your payment confirmation number is #56034</h6>
    <Link href={{pathname:'/dashboard'}}> <button className='bg-dashbluebtn px-[120px]  text-white rounded-[50px] text-[18px] font-semibold py-3'>Proceed to Dashboard</button></Link>  
</div>
</section>
}



    </main>
  </div>
  </>
    )
}

export default page