"use client"
import Link from 'next/link'
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import Testimonials from '../Components/testimonial/page'
import Head from '../head'
import { clearErrors } from '@/redux/actions/page'
import { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const seniorExpress = () => {

const { user} = useSelector((state) => state.user);
const dispatch= useDispatch()

  const navDetails={
    bookingId:'senior',

    clicked:'Senior Express',
    subcolour:'text-purple',
    border:'rgba(204, 60, 157, 1)',
    background:'bg-purple',

    first:{
      id:'#home',
      name:'Why Senior Express',
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
    clicked:'Senior Express',

    background:'bg-senbg',
    border:'1px solid #CC3C9D',
    buttonColour:'bg-purple',
    subTitle:'text-topaz',
    underline:'1px solid #0DB0B5',
    InstaIcon:'../images/seniorExpress/Icons/instagram.svg',
    FbIcon:'../images/seniorExpress/Icons/facebook.svg',
  }

  const Testimonial={
    textColor:'text-skin',
    innerText:'text-purple',
    subText:'text-librown',

    border:'0.4px solid #FFA3A1',
    overlay:'linear-gradient(90deg, #FFF4F0 0%, rgba(255, 253, 244, 0) 25.46%, rgba(255, 253, 244, 0) 49.48%, rgba(255, 253, 244, 0) 74.54%, #FFF4F0 100%)'
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
    <Head title='Senior Express'/>

    <main className='' >

    

    <Navbar color={'bg-purple'} {...navDetails}/>
   

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-senbg overflow-hidden'>
<main className='mx-4 smd:mx-14'  >
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

<header className='flex justify-between items-center lg:items-start flex-col-reverse sxlg:flex-row pt-12' >

<main className=' ' >

{/* <section className='h-8 sxlg:h-[130px] sxl:h-[150px] w-[218px] relative mb-0 sm:mb-5 sxl:mb-0' >
<div className='absolute top-[-20px] sxlg:top-20 '>
<h4  className='h-[40px] w-[218px] text-white pl-[86px] flex items-center text-xs	font-bold rounded-lg bg-topaz tracking-[0.1em]' >SENIOR EXPRESS</h4>
<img src='../images/seniorExpress/senior-express-badge.png' className='absolute bottom-0 ' />
</div>
</section> */}

<section className='relative top-[-40px] sxlg:top-[81px]  sxlg:mb-[110px]'>
<img src='../images/seniorExpress/senior-express-badge.png' className='absolute bottom-0 ' />
<div className='w-fit rounded-lg bg-topaz px-[14px] py-3'>
<h4 className='  text-white pl-[72px]   flex items-center text-xs	font-bold   tracking-[0.1em]' >SENIOR EXPRESS</h4>
</div>
</section>

<header className='font-extrabold text-[27px] sm:text-4xl xlsm:text-[46px] smd:text-5xl md:text-[54px] sxlg:text-[43px] xxlg:text-5xl ssxl:text-6xl '>
<h1  className='pb-0 sm:pb-4 leading-[65px] sxl:leading-[75px]'>Professional senior <br className='hidden ssxl:block'></br> care</h1>
</header>
<h6 className='mt-0 sm:mt-4 sm:text-base md:text-lg sxlg:text-[14.6px] ssxl:text-[17px] sxl:text-lg font-normal  tracking-[0.01em]  '> We believe finding a reliable, professional care should be easy. We<br className='hidden md:block '></br> really get to know you and your parents and we can guarantee consistent<br className='hidden md:block'></br> and personal care that is equal. </h6>

<section className='mt-7 sm:mt-11 sxl:mt-10 flex items-center'>
<a href={ token ? 'reports/booking?type=senior': '/login'}><button className='bg-purple px-[18px] py-[13px] text-white rounded-[27px] shrink-0 text-base lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'>Book senior care today<img src='../images/Icons/click-arrow.svg' className='pl-[18px]'/></button></a>
<a href='/about'><h6  className='text-purple font-medium	underline underline-offset-[3px] decoration-1 pl-4 sm:pl-10 text-base lg:text-xl whitespace-nowrap cursor-pointer'>Learn more</h6></a>
</section>

<section className='mt-11 sxl:mt-10 flex items-center  justify-between w-[320px] null:w-[340px] md:w-[390px]	'>
<div>
  <h6  className='text-purple font-semibold text-xl md:text-2xl tracking-wide'>3K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-[15px] null:text-base md:text-lg tracking-wider'>Care givers</h6>
</div>
<div>
  <h6 className='text-purple font-semibold text-xl md:text-2xl tracking-wide'>67K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-[15px] null:text-base md:text-lg tracking-wider'>Bookings</h6>
</div>
<div>
<h6 className='text-purple font-semibold text-xl md:text-2xl tracking-wide'>18K +</h6>
<h6 style={{ color: ' #8F8F8F',lineHeight: '50px'  }} className='font-semibold text-[15px] null:text-base md:text-lg tracking-wider'>Seniors cared</h6>
</div> 
</section>

</main>

<section  className=''>  
<img src='../images/seniorExpress/senior-express-hero-image.png' className=' sxlg:w-[555px] ssxl:w-[610px] sxl:w-fit' />
</section >

</header>




</main>

{/* ----------------------------------------------------------------------------------------------------------------- */}


<header  className='mt-24 pb-10 relative scroll-mt-[97px]' id='pricing'>

<section className='flex justify-center' >
     <section style={{ border: '0.4px solid #FFA3A1 ' }} className='text-skin py-[6.8px] px-[18px] box-border  text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '>
      <img src='../images/Icons/raising-hands.png' className='pr-2'/> Quick & Convenient
      </section>
</section>
<h6 className='font-extrabold text-[26px] sm:text-4xl md:text-5xl	text-center mt-8' >Book in 3 easy steps</h6>


<main className='mt-20 flex items-center justify-around flex-wrap ' >

  <section className='w-[340px] md:w-[416px] h-[300px] md:h-[336px] flex-wrap flex items-center justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(13, 176, 181, 0.1) 0%, rgba(13, 176, 181, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/seniorExpress/senior-express-clock-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/>STEP 1<img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose date & time</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Select where and when you want a senior<br></br> care to take care of your seniors.</h6>
  </div>
  </section>
    
  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative'>
  <div style={{ background: 'linear-gradient(180deg, rgba(13, 176, 181, 0.1) 0%, rgba(13, 176, 181, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/seniorExpress/senior-express-talk-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/>STEP 2<img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Tell us about your needs</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Tell us about your requirements for a senior<br></br> care: English language, driving licence, other</h6>
  </div>
  </section>


  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(13, 176, 181, 0.1) 0%, rgba(13, 176, 181, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0'>
    <img src='../images/seniorExpress/senior-express-heart-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/>STEP 3<img className='mx-5' src='../images/seniorExpress/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose a flexible plan</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Choose a flexible hourly plan that works best <br></br>for you.</h6>
  </div>
  </section>

</main>


<section className='mt-10 flex items-center justify-center'>
<a href={ token ? 'reports/booking?type=senior': '/login'}><button  className=' px-5 py-[13px] bg-purple text-white cursor-pointer rounded-[27px] text-sm md:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img src='../images/Icons/calendar.svg' className='pr-4'/>Book senior care today</button></a>
</section>
<img src='../images/seniorExpress/bookBackground.png' className='absolute top-28 right-0 hidden xxlg:block w-fit'/>

</header>




{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='mx-4 smd:mx-14'>


    <header className='pt-40  pb-40' id='home'>
    <section className='flex flex-col xlg:flex-row items-center justify-around'>

      <img src='../images/seniorExpress/senior-express-featured-image-1.png'/>

      <div className=''>
        <h2 className='text-5xl  font-extrabold mb-8 lg:mb-10 text-center xlg:text-left'>Our Service</h2>
        
        <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[19px] lg:w-[22px] h-[19px] lg:h-[22px]' src='../images/Icons/star.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg  mb-5 mt-4 ml-5 tracking-[0.01em] '>Your senior will be looked after by a professional caregiver</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className=' w-[19px] lg:w-[22px] h-[19px] lg:h-[22px]' src='../images/Icons/navigate.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg  mb-5 mt-4 ml-5 tracking-[0.01em] '>You can use our services in most of the largest cities in Poland</h2>
       </section>
       
       <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/Icons/smile.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg  mb-5 mt-4 ml-5 tracking-[0.01em] '>Join our group of over 10,000 satisfied clients</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/Icons/package.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg  mb-5 mt-4 ml-5 tracking-[0.01em] '>It’s you who decides which package of hours works best for you</h2>
       </section>

       <a href={ token ? 'reports/booking?type=senior': '/login'}><button className='bg-purple mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide hidden lg:flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your senior care</button></a>

      </div>
      <a href={ token ? 'reports/booking?type=senior': '/login'}><button className='bg-purple mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your senior care</button></a>

     </section>
    </header>





{/* ----------------------------------------------------------------------------------------------------------------- */}

  


{/* <Testimonials {...Testimonial}/> */}


{/* ----------------------------------------------------------------------------------------------------------------- */}



<header className='mt-28 pb-12 scroll-mt-[100px]' id='profession'> 

    <section className='flex flex-col xlg:flex-row items-center justify-around ' >
    <img src='../images/seniorExpress/senior-express-featured-image-2.png'/>
      
      <div className='' >
        <h2 className='text-[24px] sm:text-[30px] xlsm:text-[34px] md:text-[46px] font-extrabold mb-5 sm:mb-10 xlg:mb-5 leading-[58px] text-center xlg:text-left'>Join our Senior Express<br className='hidden xlg:block'></br> team</h2>

        <h2 className=' text-sm  xlsm:text-base md:text-lg tracking-[0.01em] mb-5'>Do you like to help other seniors? Do you have the skills to <br className='hidden xlsm:block'></br>provide a good care to the senior people? Join our team! <br className='hidden xlsm:block'></br><span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>Send your CV</span>, and you’ll be invited for our interview. You’ll <br className='hidden xlsm:block'></br> complete the tests to prove you are a perfect care taker for <br className='hidden xlsm:block'></br> our clients’ loved ones.</h2>  
        
        

        <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/clock.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>Flexible working hours</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/dollar-sign.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>Attractive salary</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-skin p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/briefcase.svg'/>
       </div>
       <h2 className='text-sm  xlsm:text-base md:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>Travel opportunities</h2>
       </section>

       <button className='bg-purple mt-10 lg:mt-12  px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img  src='../images/Icons/click-arrow.svg' className='pr-[20px]'/>Apply now</button>

      </div>

     </section>
    </header>



    </main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}

<header className='pt-80  relative bg-senbg'>


<main style={{ border: '1px solid #CC3C9D' }} className='bg-white rounded-[20px] mx-4 smd:mx-14 mt-32 lg:mt-20 box-border absolute top-10 h-[300px] lg:h-[398px]  sxl:w-11/12' >  
<footer className='flex items-start lg:items-center flex-col lg:flex-row'>
<img src='../images/petExpress/support-agent.png' className='hidden lg:block '/>

<section className='lg:pl-10 xlg:pl-16 sxl:pl-24  flex items-center justify-center flex-col lg:items-start'>
<h1 style={{ lineHeight: '58px' }} className='text-xl md:text-4xl lg:text-5xl font-extrabold  mb-1 md:mb-9 '>Would you like to know more?</h1>
<h5 className='text-sm md:text-base lg:text-lg	leading-8 mx-3 text-center lg:text-justify tracking-[0.01em]'>Do you need more knowledge about our services? Check the “<Link href={{pathname:'/faq',query:{search:'Senior Express'}}}><span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>frequently asked<br className='hidden sxl:block '></br> questions</span></Link>” or contact us on the <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> chat</span> or <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> hotline</span> </h5>
<a href='/contact'><button className='bg-purple mt-6 sm:mt-14 lg:mt-16 sxl:mt-24 px-[18px] py-[13px] text-white rounded-[27px] text-xs lg:text-xl font-semibold  flex items-center justify-evenly'><img className='pr-4' src='../images/Icons/call.svg'/>Get in touch</button></a>
</section>

</footer>
</main>  

{/* ------------Main Footer------------------ */}

<div style={{ backgroundColor: '#100F0E' }} className=''>
<div className='mx-4 smd:mx-14 h-max' >





<main className=' pt-56 lg:pt-80 flex  justify-between flex-col sxl:flex-row tracking-wider'>


<section className='my-5  sxl:my-0'>
<h1   className='text-topaz text-lg md:text-2xl font-bold pb-4'>Care Express</h1>
<h1 className='text-white text-sm  md:text-base'>Care Express is a specialist brand for<br ></br> services relating to senior care, pet<br></br>  care, child care and special care</h1>
</section>


<section className='  my-5  sxl:my-0'>
<h1 className='text-topaz  text-sm  md:text-base font-bold pb-4'>Our services</h1>
<a href='/nannyExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Nanny Express</h1></a>
<a href='/seniorExpress'><h1 className='text-white text-xs md:text-sm mb-3 '>Senior Express</h1></a>
<a href='/petExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Pet Express</h1></a>
<a href='/specialExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Special Express</h1></a>
</section>



<section className='my-5  sxl:my-0'>
<h1  className='text-topaz  text-sm  md:text-base font-bold pb-4'>We are available in</h1>
<div className='flex   justify-start sxl:justify-around'>

<div className='text-white pr-3'>
<h1 className='text-xs md:text-sm  mb-3'>Warsaw</h1>
<h1 className='text-xs md:text-sm  mb-3'>Poznari</h1>
<h1 className='text-xs md:text-sm  mb-3'>Wroclaw</h1>
<h1 className='text-xs md:text-sm  mb-3'>Katowice</h1>
<h1 className='text-xs md:text-sm  mb-3'>Kraków</h1>
</div>

<div className='text-white px-3 ml-8'>
<h1 className='text-xs md:text-sm  mb-3'>Gdańsk</h1>
<h1 className='text-xs md:text-sm  mb-3'>Łódź</h1>
<h1 className='text-xs md:text-sm  mb-3'>Szczecin</h1>
<h1 className='text-xs md:text-sm  mb-3'>Lublin</h1>
<h1 className='text-xs md:text-sm  mb-3'>more...</h1>
</div>

</div>
</section>


<section className='my-5  sxl:my-0'>
<h1  className='text-topaz  text-sm  md:text-base font-bold pb-4'>Help & Support</h1>
<a href='/about'><h1 className='text-white text-xs md:text-sm mb-3'>About us</h1></a>
<a href='/contact'><h1 className='text-white text-xs md:text-sm mb-3'>Contact</h1></a>
<h1 className='text-white text-xs md:text-sm mb-3'>Privacy Policy</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Terms & conditions</h1>
<div className='mt-6'>
<h1 className='text-topaz   text-sm  md:text-base font-bold pb-2'>Payment Gateway</h1>
<img  src='../images/Icons/stripe-logo.svg'/>
</div>
</section>


<section className='my-5  sxl:my-0 mr-12'>
<h1  className='text-topaz  text-sm  md:text-base font-bold pb-4'>Company Address</h1>
<h1 className='text-white text-xs md:text-sm mb-2'>Ul. Wiertnicza 10402-952 Warsaw,</h1>
<h1 className='text-white text-xs md:text-sm '>Polska</h1>

<div className='mt-6'>
<h1  className='text-topaz   text-sm  md:text-base font-bold pb-4'>Call us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'><Link href='tel:+48 885 023 998'>+48 885 023 998</Link></h1>
<h1 className='text-white text-xs md:text-sm '><Link href='tel:+48 22 65 17 051'>+48 22 65 17 051</Link></h1>
</div>

<div className='mt-6'>
<h1  className='text-topaz   text-sm  md:text-base font-bold pb-4'>Email us</h1>
<h1 className='text-white text-xs md:text-sm underline underline-offset-4 cursor-pointer' ><Link href='mailto:info@care-express.pl'>info@care-express.pl</Link>  </h1>
</div>
</section>


</main>





<div style={{ border: '1px solid #0DB0B5' }} className='mt-10 flex' ></div>


<footer className='mt-4 flex justify-between pb-10'>
<h5 className='text-white text-xs lg:text-base'>{`© Copyright ${new Date().getFullYear()} Care Express. All rights reserved.`}</h5>
<div className='flex'>
<img src='../images/seniorExpress/Icons/facebook.svg' className='h-5  lg:h-8 cursor-pointer'/>
<img className='ml-5 h-5  lg:h-8 cursor-pointer' src='../images/seniorExpress/Icons/instagram.svg'/>
</div>
</footer>



 </div>
 </div>
 </header>


 {/* <Footer {...footerDetails}/> */}

    </main>
    </>
  )
}

export default seniorExpress