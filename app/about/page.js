"use client"
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import Services from '../Components/services/services'
import Testimonials from '../Components/testimonial/page'
import Head from '../head'
import Link from 'next/link'
import { clearErrors } from '@/redux/actions/page'
import { useEffect , useState } from 'react'
import { useDispatch} from 'react-redux'

const page = () => {

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
    clicked:'Faqs',
    bookingId:'none',
    subcolour:'text-blue',
    border:'rgba(65, 110, 234, 1)',
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


  const footerDetails={
    background:'bg-specialbg',
    clicked:'Faqs',
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-white',
    underline:'1px solid white',
    InstaIcon:'../images/business/Icons/instagram.svg',
    FbIcon:'../images/business/Icons/facebook.svg',
  }
  

  const Testimonial={
    textColor:'text-liblack',
    border:'0.4px solid #1C1B1B',
    innerText:'text-blue',
    subText:'text-grey',
    overlay:'linear-gradient(90deg, rgba(240, 246, 255, 1) 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, rgba(240, 246, 255, 1) 100%)'
  }

  const services ={
    nanny:'blueNanny-service',
    senior:'blueSenior-service',
    pet:'bluePet-service',
    special:'blueSpecial-service',
  }

  return (
    <>
            <Head title='About Us'/>

    <main className='' >
    
    {/* <nav  className='flex justify-end h-6 box-border bg-black'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs  lg:text-sm py-2'>
    <span className='px-2.5	mt-0.5 cursor-pointer'>FAQs</span>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> */}

    <Navbar color={'bg-blue'} {...navDetails}/>

{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-midblue overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
{/* ------------RESPONSIBLE FOR MARGIN---------------- */}

<header className='flex justify-between md:items-center  flex-col-reverse sxl:flex-row pt-12 ' id='home'>

<main className='mt-5 sxl:mt-0 flex items-start flex-col'>


<h1 className='pb-2 md:pb-[34px] font-extrabold text-3xl sm:text-4xl md:text-[58px]'>About CareExpress</h1>


<h6 className='mt-3 text-sm md:text-lg font-normal tracking-[0.01em]'> Since 2004, the company has been winning the people’s<br className='hidden md:block'></br> trust in Poland and abroad. Its success is founded on a <br className='hidden md:block'></br>personal approach towards the needs of every single<br className='hidden md:block'></br> customer but also a long-term cooperation with the<br className='hidden md:block'></br> customer. Consequently, Care Express is a leader in the care<br className='hidden md:block'></br> industry on a Polish market.</h6>

<section className='mt-10 flex items-center'>
<a href={ token ? 'reports/booking?type=none': '/login'}><button className='bg-blue px-5 h-[54px] text-white rounded-[27px] text-base lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'>Book care today<img className='pl-3' src='../images/Icons/click-arrow.svg'/></button></a>

</section>


<section className='mt-8 sm:mt-[62px] flex items-center justify-between w-[295px] sm:w-[330px]	'>
<div>
  <h6  className='text-black font-semibold text-[22px] sm:text-2xl tracking-wide'>3K +</h6>
  <h6 style={{color: ' #8F8F8F', lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Care givers</h6>
</div>
<div>
  <h6 className='text-black font-semibold  text-[22px] sm:text-2xl tracking-wide'>67K +</h6>
  <h6 style={{color: ' #8F8F8F', lineHeight: '50px' }} className='font-semibold text-base sm:text-lg tracking-wider'>Bookings</h6>
</div>
<div>
<h6 className='text-black font-semibold  text-[22px] sm:text-2xl tracking-wide'>18K +</h6>
<h6 style={{color: ' #8F8F8F', lineHeight: '50px'  }} className='font-semibold text-base sm:text-lg tracking-wider'>Cared</h6>
</div> 
</section>


</main>

<section  className='  mr-14'>  
<img src='../images/about/nanny-holding-child.png' className=' ' />
{/* <img src='../images/business/business-express-hero-image.png' className=' ' /> */}
</section >

</header>


</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}


<header  className='pt-20  bg-specialbg' id='services'>
<main className='mx-4 sm:mx-14'>
<Services {...services}/>

    
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='mt-24  '>
<main className='flex  flex-wrap justify-center gap-12 lg:gap-[120px] xxlg:gap-0 xxlg:justify-between  '>

<section className='mt-6 xxlg:mt-0 '>
<img src='../images/about/qualified.png'/>
<h6 className='mt-8 text-base md:text-2xl font-extrabold text-center flex justify-center mb-4'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>Qualified team<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
<h6 className='text-center tracking-[0.01em] text-[14px]'>Our nannies are recruited carefully. Each of them is <br></br> checked for criminal records and work competences.<br></br> Our nannies need to pass the test to prove all the skills <br></br> declared in the application form. As a result, you can <br></br> be sure that the person is trustworthy</h6>
</section>

<section className='mt-6 xxlg:mt-0 '>
<img src='../images/about/experience.png'/>
<h6 className='mt-8 text-base md:text-2xl font-extrabold text-center flex justify-center mb-4'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>15 years of experience<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
<h6 className='text-center tracking-[0.01em] text-[14px]'>We provide the highest quality of care services due to <br></br> many years of experience. It is Care Express that sets<br></br> the quality standards and market trends, providing the <br></br>utmost care to your loved ones.</h6>
</section>

<section className='mt-6 xxlg:mt-0 '>
<img src='../images/about/individual.png'/>
<h6 className='mt-8 text-base md:text-2xl font-extrabold text-center flex justify-center mb-4'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>Individual approach<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
<h6 className='text-center tracking-[0.01em] text-[14px]'>Each of our clients is considered individually. All our <br></br> team is at your disposal and gives 100% to provide the <br></br> best services you can count on. Our nannies meet the <br></br> variety of needs of every client. Our offer includes <br></br> the possibility to order individual hourly packages.</h6>
</section>





</main>
<section className='flex items-center justify-center'>
<a href={ token ? 'reports/booking?type=none': '/login'}><button className='bg-blue mt-10 lg:mt-12 px-[18px] py-[14px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your care</button></a>
</section>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}

{/* <Testimonials {...Testimonial}/> */}





</main>
</header>
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </main>
    </>
  )
}

export default page
