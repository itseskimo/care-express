import Link from 'next/link'
import React from 'react'

const services = (props) => {
  const{nanny,senior,pet,special}=props
  return (
    <>
    
<main className=' flex items-center justify-center gap-1 lg:gap-20 xl:gap-0 xl:justify-between flex-wrap ' >
<Link href={{pathname:'/nannyExpress'}}>
  <section className='w-[306px] h-[325px] flex items-center  justify-center mt-5 mx-3 cursor-pointer' >
    <div className=' rounded-2xl flex items-center justify-center flex-col'>
    <div className={`${nanny}`}>
          <img src='../images/business/nanny.png' className='rounded-[16px]'/>
    </div>      
      <h6 className='mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Nanny Express</h6>
      <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Professional nannies for your tiny <br></br>toddlers .</h6>
    </div>
  </section>
  </Link>

  <Link href={{pathname:'/seniorExpress'}}>
  <section className='w-[306px] h-[325px] flex items-center justify-center mt-5 mx-3 cursor-pointer'>
    <div className='rounded-2xl flex items-center justify-center flex-col'>
      <div  className={`${senior}`}>
          <img src='../images/business/senior.png' className='rounded-[16px]'/>
      </div>
      <h6 className='mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Senior Express</h6>
      <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Reliable & Caring nannies for elderly &  <br></br>seniors.</h6>
    </div>
  </section>
  </Link>

  <Link href={{pathname:'/petExpress'}}>
  <section className='w-[306px] h-[325px] flex items-center justify-center mt-5 mx-3 cursor-pointer' >
    <div className='  rounded-2xl flex items-center justify-center flex-col'>
    <div className={`${pet}`}>
          <img src='../images/business/pet.png' className='rounded-[16px]'/>
    </div>         
      <h6 className='mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Pet Express</h6>
      <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Experienced pet sitters to look after your<br></br>pets .</h6>
    </div>
  </section>
  </Link>

  <Link href={{pathname:'/specialExpress'}}>
  <section className='w-[306px] h-[325px] flex items-center justify-center mt-5 mx-3 cursor-pointer' >
    <div className='rounded-2xl flex items-center justify-center flex-col'>
    <div className={`${special}`}>
          <img src='../images/business/special.png' className='rounded-[16px]'/>
    </div>   
      <h6 className='mt-6 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Special Express</h6>
      <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Professional caretaker for special  <br></br>needs .</h6>
    </div>
  </section>
  </Link>
  </main>
    
    </>
  )
}

export default services