"use client"
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import Testimonials from '../Components/testimonial/page'
import Head from '../head'
import Link from 'next/link'
import { clearErrors } from '@/redux/actions/page'
import { useEffect , useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

const petExpress = () => {

const { user} = useSelector((state) => state.user);
const dispatch= useDispatch()

  const navDetails={
    bookingId:'pet',

    clicked:'Pet Express',
    subcolour:'text-brown',
    border:'rgba(234, 173, 148, 1)',
    background:'bg-brown',

    first:{
      id:'#home',
      name:'Why Pet Express',
    },
    second:{
      id:'#profession',
      name:'Become a Petsitter',
    },
    third:{
      id:'#pricing',
      name:'Pricing',
    },
  }
 
  const footerDetails={
    clicked:'Pet Express',

    background:'bg-petbg',
    border:'1px solid #AA634D',
    buttonColour:'bg-red',
    subTitle:'text-lipet',
    underline:'1px solid #EAAD94',
    InstaIcon:'../images/Icons/instagram.svg',
    FbIcon:'../images/Icons/facebook.svg',
  }

  const Testimonial={
    textColor:'text-brown',
    innerText:'text-ligrey',
    subText:'text-grey',
    border:'0.4px solid #AA634D',
    overlay:'linear-gradient(90deg, #FFFEFA 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, #FFFEFA 100%)'
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
        <Head title='Pet Express'/>

    <main className='' >
      


    {/* <nav  className='flex justify-end h-6 box-border bg-brown'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs  lg:text-sm py-2'>
    <Link href={{pathname:'/faq',query:{search:'Pet Express'}}}><span className='px-2.5	mt-0.5 cursor-pointer'>FAQS</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> */}

    <Navbar color={'bg-red'} {...navDetails}/>
    

    

   

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-petbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

<header className='flex justify-between md:items-center flex-col-reverse sxl:flex-row pt-12' >

<main className='mt-5 sxl:mt-0'>

<section className='relative top-[-40px] sxl:top-[81px]  sxl:mb-[120px]'>
<img src='../images/petExpress/pet-express-badge.png' className='absolute bottom-0 ' />
<div className='w-fit rounded-lg bg-librown px-[22px] py-3'>
<h4 className='  text-white pl-[60px]   flex items-center text-xs	font-bold   tracking-[0.1em]' >PET EXPRESS</h4>
</div>
</section>

<header className='font-extrabold text-4xl md:text-6xl'>
<h1  className='pb-2 lg:pb-4'>Professional Care</h1>
<h1  className='pb-2 lg:pb-4'>for your pets</h1>
</header>
<h6 className='mt-6 text-sm md:text-lg font-normal  tracking-[0.01em]'>We believe finding a reliable, professional pet sitter should be easy. We<br className='hidden md:block '></br> really get to know you and your pet and we can guarantee consistent<br className='hidden md:block'></br> and personal care that is equal.</h6>

<section className='mt-10 flex items-center'>
<a href={ token ? 'reports/booking?type=pet': '/login'}><button className='bg-red px-[18px] py-[13px] text-white rounded-[27px] text-base lg:text-xl font-semibold tracking-wide flex items-center justify-evenly shrink-0'>Book a petsitter today<img src='../images/Icons/click-arrow.svg' className='pl-[18px]'/></button></a>
<h6  className='text-brown font-medium	underline underline-offset-[3px] decoration-1 pl-6 sm:pl-10 text-base lg:text-xl whitespace-nowrap cursor-pointer'>Learn more</h6>
</section>

<section className='mt-10 flex items-center  justify-between w-[320px] sm:w-[350px] md:w-[390px]	'>
<div>
  <h6  className='text-brown font-semibold text-xl md:text-2xl tracking-wide'>3K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Petsitters</h6>
</div>
<div>
  <h6 className='text-brown font-semibold text-xl md:text-2xl tracking-wide'>67K +</h6>
  <h6 style={{ color: ' #8F8F8F',lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Bookings</h6>
</div>
<div>
<h6 className='text-brown font-semibold text-xl md:text-2xl tracking-wide'>18K +</h6>
<h6 style={{ color: ' #8F8F8F',lineHeight: '50px'  }} className='font-semibold text-base sm:text-lg tracking-wider'>Pets cared</h6>
</div> 
</section>

</main>

<section  className=' '>  
<img src='../images/petExpress/bannerActress.png' className=' ' />
</section >

</header>







</main>

{/* ----------------------------------------------------------------------------------------------------------------- */}




<header  className='mt-24 pb-10 relative' id='pricing'>
  

<section className=' flex  justify-center'>
     <section style={{ border: '0.4px solid #AA634D' }} className='text-brown  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '><img src='../images/Icons/raising-hands.png' className='pr-2'/> Quick & Convenient</section>
</section>
<h6 className='font-extrabold text-[26px] sm:text-4xl md:text-5xl	text-center mt-8'>Book in 3 easy steps</h6>


<main className='mt-20 flex items-center justify-around flex-wrap ' >

  <section className='w-[340px] md:w-[416px] h-[300px] md:h-[336px] flex-wrap flex items-center justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(234, 173, 148, 0.1) 0%, rgba(234, 173, 148, 0.46) 100%' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/petExpress/pet-express-clock-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/>STEP 1<img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose date & time</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Tell us where and when the pet sitter should <br></br> look after your pet</h6>
  </div>
  </section>
    
  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative'>
  <div style={{ background: 'linear-gradient(180deg, rgba(234, 173, 148, 0.1) 0%, rgba(234, 173, 148, 0.46) 100%' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/petExpress/pet-express-talk-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/>STEP 2<img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Tell us about your needs</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Tell us about your requirements for a pet <br></br> sitter — administering medication, <br></br> exercising pets and any other</h6>
  </div>
  </section>


  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(234, 173, 148, 0.1) 0%, rgba(234, 173, 148, 0.46) 100%' }} className=' w-48	h-36 rounded-2xl absolute top-0'>
    <img src='../images/petExpress/pet-express-heart-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/>STEP 3<img className='mx-5' src='../images/Icons/pet-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose a flexible plan</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Choose the flexible hourly schedule that suits <br></br> you best.</h6>
  </div>
  </section>

</main>


<section className='mt-10 flex items-center justify-center'>
<a href={ token ? 'reports/booking?type=pet': '/login'}><button  className=' px-5 py-[13px] bg-red text-white rounded-[27px] text-sm md:text-xl font-semibold tracking-wide flex items-center justify-evenly cursor-pointer'><img src='../images/Icons/calendar.svg' className='pr-4'/>Book a petsitter today</button></a>
</section>
<img src='../images/petExpress/bookBackground.png' className='absolute top-28 right-0 hidden xxlg:block w-fit'/>

</header>

      


{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='mx-4 smd:mx-14'>


    <header className='pt-40  pb-40' id='home'>
    <section className='flex flex-col lg:flex-row items-center justify-around'>

      <img src='../images/petExpress/pet-express-featured-image-1.png'/>

      <div className=''>
        <h2 className='text-5xl  font-extrabold mb-8 lg:mb-10 text-center lg:text-left'>Our Service</h2>
       


        <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[19px] lg:w-[22px] h-[19px] lg:h-[22px] ' src='../images/Icons/star.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>Truly qualified pet-sitters</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className=' w-[19px] lg:w-[22px] h-[19px] lg:h-[22px]' src='../images/Icons/navigate.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>You can use our services in most of the largest cities in Poland</h2>
       </section>
       
       <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/Icons/smile.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>Join our group of over 10,000 satisfied clients</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center shrink-0'>
       <img className='w-[22px] h-[22px]' src='../images/Icons/package.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-[0.01em] mb-5 mt-4 ml-5'>It’s you who decides which package of hours works best for you</h2>
       </section>


       <a href={ token ? 'reports/booking?type=pet': '/login'}><button className='bg-red mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide hidden lg:flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your petsitter</button></a>       



      </div>
      <a href={ token ? 'reports/booking?type=pet': '/login'}><button className='bg-red mt-10 lg:mt-16 px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your petsitter</button></a>      


     </section>
    </header>





{/* ----------------------------------------------------------------------------------------------------------------- */}


{/* <Testimonials {...Testimonial}/> */}


{/* ----------------------------------------------------------------------------------------------------------------- */}



<header className='mt-28 pb-12' id='profession'> 

    <section className='flex flex-col lg:flex-row items-center justify-around ' >
    <img src='../images/petExpress/pet-express-featured-image-2.png'/>
      
      <div className=''>
        <h2 className='text-[26px] lg:text-5xl font-extrabold mb-5 leading-[58px]'>Join our Pet Express team <br className='hidden sm:block'></br>of professional <br className='hidden sm:block'></br>pet-sitters</h2>

        <h2 className=' text-sm lg:text-lg tracking-[0.01em] mb-5'>Do you like domestic animals? Do you have qualifications to <br className='hidden md:block'></br>provide professional care to our four-legged companions?<br className='hidden md:block'></br> Join our team! <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>Send your CV</span>, and you’ll be invited for an<br className='hidden md:block'></br> interview. You’ll complete the tests to prove you are a perfect<br className='hidden md:block'></br> pet-sitter for our clients’ animals.</h2>  
        
        <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/clock.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Flexible working hours</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/dollar-sign.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Attractive salary</h2>
       </section>

       <section className='flex items-center '>
       <div className='rounded-full bg-librown p-2 lg:p-3 flex items-center justify-center whitespace-nowrap shrink-0'>
       <img className='w-[22px] h-[22px] ' src='../images/Icons/briefcase.svg'/>
       </div>
       <h2 className='text-sm lg:text-lg tracking-wide mb-5 mt-4 ml-5'>Travel opportunities</h2>
       </section>
       <button className='bg-red mt-10 lg:mt-12  px-[20px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img  src='../images/Icons/click-arrow.svg' className='pr-[20px]'/>Apply now</button>

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



export default petExpress;