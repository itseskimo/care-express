"use client"
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import Testimonials from '../Components/testimonial/page'
import Head from '../head'
import Link from 'next/link'
import { clearErrors } from '@/redux/actions/page'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const specialExpress = () => {

const { user} = useSelector((state) => state.user);
const dispatch= useDispatch()

  const navDetails={
    bookingId:'special',
    clicked:'Special Express',
    subcolour:'text-blue',
    border:'rgba(12, 104, 255, 1)',
    background:'bg-blue',

    first:{
      id:'#home',
      name:'Why Special Express',
    },
    second:{
      id:'#profession',
      name:'Become a Care Taker',
    },
    third:{
      id:'#pricing',
      name:'Pricing',
    },
  }
   
  const footerDetails={
    clicked:'Special Express',

    background:'bg-specialbg',
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-liblue',
    underline:'1px solid #97C4FD',
    InstaIcon:'../images/specialExpress/Icons/instagram.svg',
    FbIcon:'../images/specialExpress/Icons/facebook.svg',
  }

  const Testimonial={
    textColor:'text-blue',
    innerText:'text-blue',
    subText:'text-grey',
    border:'0.4px solid #0C68FF',
    overlay:'linear-gradient(90deg, rgba(240, 246, 255, 1) 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, rgba(240, 246, 255, 1) 100%)'
  }

  const [token, setToken]= useState('')

  useEffect(()=>{

  dispatch(clearErrors())

  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
     setToken(loginData.token)
  }
  },[])

  return (
    <>
            <Head title='Special Express'/>

    <main className=''  >
      

   

    {/* <nav  className='flex justify-end h-6 box-border bg-blue'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs  lg:text-sm py-2'>
    <Link href={{pathname:'/faq',query:{search:'Special Express'}}}><span className='px-2.5	mt-0.5 cursor-pointer'>FAQS</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> */}
    
    <Navbar color={'bg-blue'} {...navDetails}/>


   
   

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

<header className='flex justify-between md:items-center flex-col-reverse sxl:flex-row pt-12' >

<main className='mt-5 sxl:mt-0 '>

{/* <section className=' h-10 sxl:h-40 w-[218px] relative' >
<div className='absolute top-[-40px] sxl:top-20 '>
<h4  className='h-[40px] w-[227px] text-white pl-[87px] flex items-center text-xs	font-bold rounded-lg bg-pink tracking-[0.1em]' >SPECIAL EXPRESS</h4>
<img src='../images/specialExpress/special-express-badge.png' className='absolute bottom-0 ' />
</div>
</section> */}

<section className='relative top-[-40px] sxl:top-[81px]  sxl:mb-[120px]'>
<img src='../images/specialExpress/special-express-badge.png' className='absolute bottom-0 ' />
<div className='w-fit rounded-lg bg-pink px-[18px] py-3'>
<h4 className='  text-white pl-[68px]   flex items-center text-xs	font-bold   tracking-[0.1em]' >SPECIAL EXPRESS</h4>
</div>
</section>


<header className='font-extrabold text-4xl md:text-6xl'>
<h1  className='pb-2 lg:pb-4'>Professional care</h1>
<h1  className='pb-2 lg:pb-4'>assistant</h1>
</header>

<h6 className='mt-6 text-sm md:text-lg font-normal  tracking-[0.01em]'> We believe finding a reliable, professional care should be easy. We<br className='hidden md:block '></br> really get to know your needs and we can guarantee consistent <br className='hidden md:block'></br>and personal care that is equal. </h6>



<section className='mt-10 flex items-center'>
<a href={ token ? 'reports/booking?type=special': '/login'}><button className='bg-blue px-[18px] py-[13px] text-white rounded-[27px] text-base lg:text-xl shrink-0 font-semibold tracking-wide flex items-center justify-evenly'>Book special care today<img src='../images/Icons/click-arrow.svg' className='pl-[18px]'/></button></a>
  
<a href='/about'><h6  className='text-blue font-medium	underline underline-offset-[3px] decoration-1 pl-6 sm:pl-10 text-base lg:text-xl whitespace-nowrap cursor-pointer'>Learn more</h6></a>
</section>



<section className='mt-10 flex items-center  justify-between w-[310px] md:w-[350px]	'>
<div>
  <h6  className='text-blue font-semibold text-xl md:text-2xl tracking-wide'>3K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-base md:text-lg tracking-wider'>Care givers</h6>
</div>
<div>
  <h6 className='text-blue font-semibold text-xl md:text-2xl tracking-wide'>67K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-base md:text-lg tracking-wider'>Bookings</h6>
</div>
<div>
<h6 className='text-blue font-semibold text-xl md:text-2xl tracking-wide'>18K +</h6>
<h6 style={{ color: ' #8F8F8F',lineHeight: '50px'  }} className='font-semibold text-base md:text-lg tracking-wider'>Cared</h6>
</div> 
</section>

</main>

<section  className=' '>  
<img src='../images/specialExpress/special-express-hero-image.png' className=' ' />
</section >

</header>








</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}




<header  className='mt-24 pb-10 relative' id='pricing'>
  

<section className=' flex  justify-center'>
     <section style={{ border: '0.4px solid #0C68FF' }} className='text-blue  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '><img src='../images/Icons/raising-hands.png' className='pr-2'/> Quick & Convenient</section>
</section>

<h6 className='font-extrabold text-[26px] sm:text-4xl md:text-5xl	text-center mt-8'>Book in 3 easy steps</h6>


<main className='mt-20 flex items-center justify-around flex-wrap ' >

  <section className='w-[340px] md:w-[416px] h-[300px] md:h-[336px] flex-wrap flex items-center justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/specialExpress/special-express-clock-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/>STEP 1<img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose date & time</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-wider	text-slate-500 text-center'>Select where and when you want a care <br></br>assistant to come.</h6>
  </div>
  </section>
    
  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative'>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/specialExpress/special-express-talk-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/>STEP 2<img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Tell us about your needs</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-wider	text-slate-500 text-center'>Tell about your requirements (e.g. sign<br></br> language, cooking)</h6>
  </div>
  </section>


  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0'>
    <img src='../images/specialExpress/special-express-heart-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/>STEP 3<img className='mx-5' src='../images/specialExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose a flexible plan</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-wider	text-slate-500 text-center'>Choose a flexible hourly plan that works best <br></br>for you.</h6>
  </div>
  </section>

</main>


<section className='mt-10 flex items-center justify-center'>
<a href={ token ? 'reports/booking?type=special': '/login'}><button  className=' px-5 py-[13px] bg-blue text-white rounded-[27px] text-sm md:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img src='../images/Icons/calendar.svg' className='pr-4'/>Book special care today</button></a>

</section>
<img src='../images/business/bookBackground.png' className='absolute top-28 right-0 hidden xxlg:block w-fit'/>
</header>

      


{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='mx-4 smd:mx-14'>


    <header className='pt-40  pb-40' id='home'>
    <section className='flex flex-col lg:flex-row items-center justify-around'>

      <img src='../images/specialExpress/special-express-featured-image-1.png'/>

      <div className=''>
        <h2 className='text-5xl  font-extrabold mb-8 lg:mb-10 text-center lg:text-left'>Our Service</h2>
       


        <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/specialExpress/Icons/star.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>We will arrange a professional caregiver</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className=' w-[19px] lg:w-[22px] h-[19px] lg:h-[22px]' src='../images/specialExpress/Icons/navigate.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>You can use our services in most of the largest cities in Poland</h2>
       </section>
       
       <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/specialExpress/Icons/smile.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Join our group of over 10,000 satisfied clients</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/specialExpress/Icons/package.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>It’s you who decides which package of hours works best for you</h2>
       </section>

       <a href={ token ? 'reports/booking?type=special': '/login'}><button className='bg-blue mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide hidden lg:flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your special care</button></a>       


      </div>
      <a href={ token ? 'reports/booking?type=special': '/login'}><button className='bg-blue mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your special care</button></a>     


     </section>
    </header>





{/* ----------------------------------------------------------------------------------------------------------------- */}



 

{/* <Testimonials {...Testimonial}/> */}



{/* ----------------------------------------------------------------------------------------------------------------- */}



<header className='mt-28 pb-12' id='profession'> 

    <section className='flex flex-col lg:flex-row items-center justify-around ' >
    <img src='../images/specialExpress/special-express-featured-image-2.png'/>
      
      <div className=''>
        <h2 className='text-[26px] lg:text-5xl font-extrabold mb-5 leading-[58px]'>Join our Special Needs<br className='hidden lg:block'></br> team</h2>

        <h2 className=' text-sm lg:text-lg tracking-[0.01em] mb-5'>Do you like to help other people? Do you have the skills to <br className='hidden md:block'></br>provide a good care to the disabled people? Join our team! <br className='hidden md:block'></br><span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>Send your CV</span>, and you’ll be invited for our interview. You’ll <br className='hidden md:block'></br> complete the tests to prove you are a perfect care taker for <br className='hidden md:block'></br> our clients’ loved ones.</h2>  
        

        <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/specialExpress/Icons/clock.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Flexible working hours</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/specialExpress/Icons/dollar-sign.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Attractive salary</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-liblue p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/specialExpress/Icons/briefcase.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Travel opportunities</h2>
       </section>
       <button className='bg-blue mt-10 lg:mt-12  px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img  src='../images/Icons/click-arrow.svg' className='pr-[20px]'/>Apply now</button>
      </div>

     </section>
    </header>



    </main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}

    <Footer {...footerDetails}/>

    </main>
    </>
  )
}

export default specialExpress