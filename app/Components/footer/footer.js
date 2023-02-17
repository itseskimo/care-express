import React from 'react'
import Link from 'next/link'

const footer = (props) => {
  const{background,border, buttonColour, subTitle,underline,InstaIcon,FbIcon ,clicked }=props

  return (
    <>
<header className={`pt-80 relative ${background}`}>

<main style={{ border: `${border}` }} className='bg-white rounded-[20px] mx-4 sm:mx-14 mt-32 lg:mt-20 box-border absolute top-10 h-[300px] lg:h-[398px]  sxl:w-11/12' >  
<footer className='flex items-start lg:items-center flex-col lg:flex-row'>
<img src='../images/petExpress/support-agent.png' className='hidden lg:block '/>

<section className='lg:pl-10 xlg:pl-16 sxl:pl-24  flex items-center justify-center flex-col lg:items-start'>
<h1 style={{ lineHeight: '58px' }} className='text-xl md:text-4xl lg:text-5xl font-extrabold  mb-1 md:mb-9 '>Would you like to know more?</h1>
<h5 className='text-sm md:text-base lg:text-lg	leading-8 mx-3 text-center lg:text-justify'>Do you need more knowledge about our services? Check the “<Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='underline font-semibold underline-offset-[3px] cursor-pointer decoration-1'>frequently asked<br className='hidden sxl:block '></br> questions</span></Link>” or contact us on the <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer '> chat</span> or <span className='underline font-semibold decoration-1 underline-offset-[3px] cursor-pointer'> hotline</span> </h5>
<button className={`${buttonColour} mt-6 sm:mt-14 lg:mt-16 sxl:mt-24 px-[18px] py-[13px] text-white rounded-[27px] text-xs lg:text-xl font-semibold flex items-center justify-evenly`}><img className='pr-5' src='../images/Icons/call.svg'/><Link href='tel:+48 885 023 998'>Get in touch </Link></button>
</section>

</footer>
</main>

{/* ------------Main Footer------------------ */}

<div style={{ backgroundColor: '#100F0E' }} className=''>
<div className='mx-4 sm:mx-14 h-max' >


<main className=' pt-56 lg:pt-80 flex  justify-between flex-col sxl:flex-row tracking-wider'>


<section className='my-5  sxl:my-0'>
<h1   className={`${subTitle} text-lg md:text-2xl font-bold pb-4`}>Care Express</h1>
<h1 className='text-white text-sm  md:text-base tracking-[0.01em]'>Care Express is a specialist brand for<br ></br> services relating to senior care, pet<br></br>  care, child care and special care</h1>
</section>



<section className='  my-5  sxl:my-0'>
<h1 className={`${subTitle}  text-sm  md:text-base font-bold pb-4`}>Our services</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Nanny Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3 '>Senior Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Pet Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Special Express</h1>
</section>



<section className='my-5  sxl:my-0'>
<h1  className={`${subTitle}  text-sm  md:text-base font-bold pb-4`}>We are available in</h1>
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
<h1  className={`${subTitle}  text-sm  md:text-base font-bold pb-4`}>Help & Support</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>About us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Contact</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Privacy Policy</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Terms & conditions</h1>
<div className='mt-10'>
<h1 className={`${subTitle}  text-sm  md:text-base font-bold pb-2`}>Payment Gateway</h1>
<img  src='../images/Icons/stripe-logo.svg'/>
</div>
</section>


<section className='my-5  sxl:my-0 mr-12'>
<h1  className={`${subTitle} text-sm  md:text-base font-bold pb-4`}>Company Address</h1>
<h1 className='text-white text-xs md:text-sm mb-2'>Ul. Wiertnicza 10402-952 Warsaw,</h1>
<h1 className='text-white text-xs md:text-sm '>Polska</h1>

<div className='mt-6'>
<h1  className={`${subTitle} text-sm  md:text-base font-bold pb-4`}>Call us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'><Link href="tel:+48 885 023 998">+48 885 023 998</Link></h1>
<h1 className='text-white text-xs md:text-sm '><Link href="tel:+48 22 65 17 051">+48 22 65 17 051</Link></h1>
</div>

<div className='mt-6'>
<h1  className={`${subTitle} text-sm  md:text-base font-bold pb-4`}>Email us</h1>
<h1 className='text-white text-xs md:text-sm underline underline-offset-[3px] decoration-1 cursor-pointer' ><Link href="mailto:info@care-express.pl">info@care-express.pl</Link></h1>
</div>
</section>


</main>


<div style={{ border: `${underline}` }} className='mt-10 flex' ></div>


<footer className='mt-4 flex justify-between pb-10'>
<h5 className='text-white text-xs lg:text-base'>{`© Copyright ${new Date().getFullYear()} Care Express. All rights reserved.`}</h5>
<div className='flex'>
<img src={FbIcon} className='h-5  lg:h-8 cursor-pointer'/>
<img className='ml-5 h-5  lg:h-8 cursor-pointer' src={InstaIcon}/>
</div>
</footer>



 </div>
 </div>
 </header>

    </>
  )
}

export default footer