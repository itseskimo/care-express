"use client"
import Navbar from '../Components/navbar/navbar'
import Services from '../Components/services/services'
import Link from 'next/link'
import Testimonials from '../Components/testimonial/page'
import Head from '../head'
import { clearErrors } from '@/redux/actions/page'
import { useEffect , useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'



const personal = () => {
  
const { user} = useSelector((state) => state.user);
const dispatch= useDispatch()

const [token, setToken]= useState('')

useEffect(()=>{

  dispatch(clearErrors())

  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
     setToken(loginData.token)
  }
  },[])



  const navDetails={
    clicked:'Personal',
    bookingId:'none',

    subcolour:'text-black',
    shadow:'shadow',
    background:'bg-black',

    first:{
      id:'#home',
      name:'Home',
    },
    second:{
      id:'#services',
      name:'Our services',
    },
    third:{
      id:'#about',
      name:'About us',
    },
  }

  const Testimonial={
    textColor:'text-liblack',
    border:'0.4px solid #1C1B1B',
    innerText:'text-black',
    subText:'text-grey',

    overlay:'linear-gradient(90deg, #FFFDF4 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, #FFFDF4 100%)'
  }


  const services ={
    nanny:'nanny-service',
    senior:'senior-service',
    pet:'pet-service',
    special:'special-service',
  }
  return (
    <>
        <Head title='Personal'/>

    <main className=' '  >
      

    

    {/* <nav  className='flex justify-end h-6 box-border bg-black w-full'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs lg:py-2  lg:text-sm'>
    <Link href={{pathname:'/faq',query:{search:'Personal'}}}><span className='px-2.5	mt-0.5 cursor-pointer'>FAQS</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'>About us</span></Link>
    <span className='px-2.5	mt-0.5  cursor-pointer'>Contact</span>
    </section>
    </nav> */}

    <Navbar color={'bg-blue'} {...navDetails}/>
   

{/* ----------------------------------------------------------------------------------------------------------------- */}

<main style={{ background: 'linear-gradient(105.24deg, #FDCA05 3.55%, #EAAD94 100%)' }} className='overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

<header className='flex justify-between md:items-center flex-col-reverse sxl:flex-row pt-12 ' id='home'>

<main className='mt-5 sxl:mt-0'>

{/* <section className=' h-10 sxl:h-36 relative mb-[13px]'>
<div className='absolute top-[-40px] sxl:top-20 '>
<h4  className='h-[40px] w-[178px] text-fadingcherry pl-[84px] flex items-center text-xs	font-bold rounded-lg bg-blue tracking-[0.1em]'>PERSONAL</h4>
<img src='../images/personal/personal-express-badge.png' className='absolute bottom-0 ' />
</div>
</section> */}


<section className='relative top-[-40px] sxl:top-[81px]  sxl:mb-[120px]'>
<img src='../images/personal/personal-express-badge.png' className='absolute bottom-0 ' />
<div className='w-fit rounded-lg bg-blue px-[22px] py-3'>
<h4 className='  text-white pl-[60px]   flex items-center text-xs	font-bold   tracking-[0.1em]' >PERSONAL</h4>
</div>
</section>

<header className='font-extrabold text-3xl sm:text-4xl md:text-6xl'>
<h1  className='pb-2 lg:pb-4'>Professional care for</h1>
<h1  className='pb-2 lg:pb-4'>your loved ones</h1>
</header>


<h6 className='mt-6 text-sm md:text-lg font-normal tracking-[0.01em]'> Do you have a senior under your care, but your work doesn’t<br className='hidden md:block'></br>
allow you to provide him/her with proper care? Maybe an<br className='hidden md:block '></br>
unexpected business trip or long working hours mean that<br className='hidden md:block'></br>
your beloved pet has no one to take care of him? </h6>

<section className='mt-10 flex items-center'>
<a href={ token ? 'reports/booking?type=none': '/login'}><button className='bg-blue px-[18px] py-[13px] text-white rounded-[27px] text-base lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'>Book care today<img src='../images/Icons/click-arrow.svg' className='pl-[18px]'/></button></a>
<a href='/about'><h6 className=' font-medium	underline decoration-1 pl-6 sm:pl-10 text-base lg:text-xl whitespace-nowrap underline-offset-[3px] cursor-pointer'>Learn more</h6></a>
</section>

<section className='mt-8 sm:mt-10 flex items-center justify-between w-[295px] sm:w-80	pb-7'>
<div>
  <h6  className='text-black font-semibold text-[22px] sm:text-2xl tracking-wide'>3K +</h6>
  <h6 style={{ lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Care givers</h6>
</div>
<div>
  <h6 className='text-black font-semibold  text-[22px] sm:text-2xl tracking-wide'>67K +</h6>
  <h6 style={{ lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Bookings</h6>
</div>
<div>
<h6 className='text-black font-semibold  text-[22px] sm:text-2xl tracking-wide'>18K +</h6>
<h6 style={{ lineHeight: '50px'  }} className='font-semibold text-base sm:text-lg tracking-wider'>Cared</h6>
</div> 
</section>

</main>

<section  className='mt-[34px] '>  
<img src='../images/personal/personal-express-hero-image.png' className=' ' />
</section >

</header>

{/* <div className=' flex items-center justify-center'>
<Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWkz0_Esx1OcoMYVqcBwSfxvk364iJLU20yixSsUErPXPjWgdS8YK2fF5eW4C1pFFF-A&usqp=CAU" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5FT50-GEAMH5MW_o9gV3iWWYkXLn_wKxZyPxZIW_pbWEp1eO4h0lO57IXvt5rNuUhOI&usqp=CAU" alt="Image 2"/>
  </SplideSlide>
</Splide>
</div> */}



</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}



<header  className='pt-20  bg-liyellow' id='services'>
<main  className='mx-4 sm:mx-14'>
  
<Services {...services}/>


      


{/* ----------------------------------------------------------------------------------------------------------------- */}


<header className='mt-28 pb-12' id='about'> 

    <section className='flex flex-col lg:flex-row items-center justify-around ' >
    <img src='../images/personal/Featured Image.png'/>
      
      <div className='w-full xlsm:w-[85%] md:w-[75%] lg:w-[45%] xxlg:w-[39.5%]'>

<h2 className='text-4xl lg:text-5xl font-extrabold mb-5 leading-[58px] text-center lg:text-left'>About us</h2>


<h2 className='leading-10 text-sm  lg:text-lg tracking-[0.01em] text-center lg:text-left mb-5 w-full '>Lorem Ipsum is simply dummy text of the printing and
 typesetting industry. Lorem Ipsum has been the industry's
 standard dummy text ever since the 1500s, when an unknown
 printer took a galley of type and scrambled it to make a type
 specimen book. It has survived not only five centuries, but
 also the leap into electronic typesetting, remaining
 essentially unchanged. It was popularised in the 1960s with
 the release of Letraset sheets containing..</h2> 
        
 <a href='/about'> <button className='bg-blue mt-10 lg:mt-12 px-[24px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide hidden lg:flex items-center justify-evenly  '>Learn more</button></a>

      </div>
      <a href='/about'>  <button className='bg-blue mt-10 lg:mt-12 px-[24px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '>Learn more</button></a>


     </section>
    </header>
  


    </main>
    </header>
    
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='mx-4 sm:mx-14'>
<header  className='mt-24 pb-10 '>
  

<section className=' flex items-center  justify-center'>
     <section style={{ border: '0.4px solid #1C1B1B' }} className='text-liblack  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '><img src='../images/Icons/raising-hands.png' className='pr-2'/> Quick & Convenient</section>
</section>
<h6 className='font-extrabold text-[26px] sm:text-4xl md:text-5xl	text-center mt-8'>Book in 3 easy steps</h6>


<main className='mt-20 flex items-center justify-around flex-wrap ' >

  <section className='w-[340px] md:w-[416px] h-[300px] md:h-[336px] flex-wrap flex items-center justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(205, 184, 141, 0.1) 0%, rgba(205, 184, 141, 0.4) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/personal/personal-express-clock-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/>STEP 1<img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose date & time</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Select where and when you want a care <br></br> assistant to come</h6>
  </div>
  </section>
    
  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(205, 184, 141, 0.1) 0%, rgba(205, 184, 141, 0.4) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/personal/personal-express-talk-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/>STEP 2<img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Tell us about your needs</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Tell us about your requirements  (e.g. cleaning,<br></br>  cooking.</h6>
  </div>
  </section>

  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(205, 184, 141, 0.1) 0%, rgba(205, 184, 141, 0.4) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0'>
    <img src='../images/personal/personal-express-heart-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/>STEP 3<img className='mx-4' src='../images/personal/Icons/personal-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose a flexible plan</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Choose a flexible hourly plan that works best <br></br> for you.</h6>
  </div>
  </section>

</main>

<section className='mt-3 sm:mt-10 flex items-center justify-center'>
<a href={ token ? 'reports/booking?type=none': '/login'}><button className=' px-5 py-[13px] bg-blue text-white rounded-[27px] text-sm md:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img src='../images/Icons/calendar.svg' className='pr-4'/>Book care today</button></a>
</section>

</header>

      

</main>


      

{/* ----------------------------------------------------------------------------------------------------------------- */}

<main className='bg-liyellow'>
  <main className='mx-4 sm:mx-14'>

  {/* <Testimonials {...Testimonial}/> */}


</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}


<header className=' h-[240px] smd:h-[276px] relative' style={{ background: 'linear-gradient(105.24deg, #FDCA05 3.55%, #EAAD94 100%)' }}>

  <main className='mx-4 smd:mx-14 flex items-center justify-around smd:justify-between pt-24 md:pt-20 '>

<section className='flex justify-center flex-col items-center'>
<h1 className='font-bold text-[22px] sm:text-[25px] smd:text-[28px] md:text-[45px]  lg:text-[64px]'>45K</h1>
<h6 className='font-medium text-[6px] sm:text-[8px]  smd:text-[10px] md:text-[15px] lg:text-[20px] tracking-[0.24em] leading-[25px]'>CHILD CARED</h6>
</section>

<img src='../images/personal/Icons/Star.png' className='h-[10px]  md:h-[14px]'/>

<section className='flex justify-center flex-col items-center'>
<h1 className='font-bold text-[22px] sm:text-[25px] smd:text-[28px] md:text-[45px]  lg:text-[64px]'>100K</h1>
<h6 className='font-medium text-[6px] sm:text-[8px]  smd:text-[10px] md:text-[15px] lg:text-[20px] tracking-[0.24em] leading-[25px]'>PET CARED</h6>
</section>

<img src='../images/personal/Icons/Star.png' className='h-[10px]  md:h-[14px]'/>

<section className='flex justify-center flex-col items-center'>
<h1 className='font-bold text-[22px] sm:text-[25px] smd:text-[28px] md:text-[45px]  lg:text-[64px]'>37K</h1>
<h6 className='font-medium text-[6px]  sm:text-[8px] smd:text-[10px] md:text-[15px] lg:text-[20px] tracking-[0.24em] leading-[25px]'>SENIORS CARED</h6>
</section>

<img src='../images/personal/Icons/Star.png' className='h-[10px]  md:h-[14px]'/>

<section className='flex justify-center flex-col items-center'>
<h1 className='font-bold text-[22px] sm:text-[25px] smd:text-[28px] md:text-[45px]  lg:text-[64px]'>19K</h1>
<h6 className='font-medium  text-[6px] sm:text-[8px] smd:text-[10px] md:text-[15px] lg:text-[20px] tracking-[0.24em] leading-[25px]'>SPECIAL CARED</h6>
</section>

  
</main>
  <img src='../images/personal/Icons/Mask group.png' className='absolute top-0'/>

  </header>  



    
{/* ----------------------------------------------------------------------------------------------------------------- */}



<header className='pt-60 relative  bg-liyellow '>
  

  <main style={{ border: '1px solid #1B1E23' }} className='bg-white mx-4 sm:mx-14 rounded-[20px] mt-10 lg:mt-0 box-border absolute top-10 h-[300px] lg:h-[398px] sxl:w-11/12' >  
<footer className='flex items-start lg:items-center flex-col lg:flex-row'>
<img src='../images/petExpress/support-agent.png' className='hidden lg:block '/>

<section className='lg:pl-10 xlg:pl-16 sxl:pl-24  flex items-center justify-center flex-col lg:items-start'>
<h1 style={{ lineHeight: '58px' }} className='text-xl md:text-4xl lg:text-5xl font-extrabold  mb-1 md:mb-9 '>Would you like to know more?</h1>
<h5 className='text-sm md:text-base lg:text-lg	leading-8 mx-3 text-center lg:text-justify tracking-[0.01em]'>Do you need more knowledge about our services? Check the “<Link href={{pathname:'/faq',query:{search:'Personal'}}}><span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>frequently asked<br className='hidden sxl:block '></br> questions</span></Link>” or contact us on the <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> chat</span> or <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> hotline</span> </h5>
<a href='/contact'><button className='bg-blue mt-8 sm:mt-14 lg:mt-16 sxl:mt-24 w-36 lg:w-48 h-[54px] lg:h-14 text-white rounded-[27px] text-xs lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img className='' src='../images/Icons/call.svg'/>Get in touch </button></a>
</section>

</footer>
</main>  



{/* ------------Main Footer------------------ */}

<div style={{ backgroundColor: '#100F0E' }} className=''>
<div className='mx-4 sm:mx-14 h-max' >


<main className=' pt-52 lg:pt-80 flex  justify-between flex-col sxl:flex-row tracking-wider'>


<section className='my-5  sxl:my-0'>
<h1   className='text-drkyellow text-lg md:text-2xl font-bold pb-4'>Care Express</h1>
<h1 className='text-white text-sm  md:text-base tracking-[0.01em]'>Care Express is a specialist brand for<br ></br> services relating to senior care, pet<br></br>  care, child care and special care</h1>
</section>



<section className='  my-5  sxl:my-0'>
<h1 className='text-drkyellow  text-sm  md:text-base font-bold pb-4'>Our services</h1>
<a href='/nannyExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Nanny Express</h1></a>
<a href='/seniorExpress'><h1 className='text-white text-xs md:text-sm mb-3 '>Senior Express</h1></a>
<a href='/petExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Pet Express</h1></a>
<a href='/specialExpress'><h1 className='text-white text-xs md:text-sm mb-3'>Special Express</h1></a>
</section>



<section className='my-5  sxl:my-0'>
<h1  className='text-drkyellow  text-sm  md:text-base font-bold pb-4'>We are available in</h1>
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
<h1  className='text-drkyellow  text-sm  md:text-base font-bold pb-4'>Help & Support</h1>
<a href='/about'><h1 className='text-white text-xs md:text-sm mb-3'>About us</h1></a>
<a href='/contact'><h1 className='text-white text-xs md:text-sm mb-3'>Contact</h1></a>
<h1 className='text-white text-xs md:text-sm mb-3'>Privacy Policy</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Terms & conditions</h1>
<div className='mt-10'>
<h1 className='text-drkyellow   text-sm  md:text-base font-bold pb-2'>Payment Gateway</h1>
<img  src='../images/Icons/stripe-logo.svg'/>
</div>
</section>


<section className='my-5  sxl:my-0 mr-12'>
<h1  className='text-drkyellow  text-sm  md:text-base font-bold pb-4'>Company Address</h1>
<h1 className='text-white text-xs md:text-sm mb-2'>Ul. Wiertnicza 10402-952 Warsaw,</h1>
<h1 className='text-white text-xs md:text-sm '>Polska</h1>

<div className='mt-6'>
<h1  className='text-drkyellow   text-sm  md:text-base font-bold pb-4'>Call us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'><Link href="tel:+48 885 023 998">+48 885 023 998</Link></h1>
<h1 className='text-white text-xs md:text-sm '><Link href="tel:+48 22 65 17 051">+48 22 65 17 051</Link></h1>
</div>

<div className='mt-6'>
<h1  className='text-drkyellow   text-sm  md:text-base font-bold pb-4'>Email us</h1>
<h1 className='text-white text-xs md:text-sm underline underline-offset-[3px] decoration-1 cursor-pointer' ><Link href="mailto:info@care-express.pl">info@care-express.pl</Link></h1>

</div>
</section>


</main>


<div style={{ border: '1px solid #FDCA05' }} className='mt-10 flex' ></div>


<footer className='mt-4 flex justify-between pb-10'>
<h5 className='text-white text-xs lg:text-base'>{`© Copyright ${new Date().getFullYear()} Care Express. All rights reserved.`}</h5>
<div className='flex'>
<img src='../images/business/Icons/facebook.svg' className='h-5  lg:h-8 cursor-pointer'/>
<img className='ml-5 h-5  lg:h-8 cursor-pointer' src='../images/business/Icons/instagram.svg'/>
</div>
</footer>



 </div>
 </div>
 </header>

    </main>
    </>
  )
}

export default personal