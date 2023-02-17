"use client"
import Navbar from './Components/navbar/navbar'
import Footer from './Components/footer/footer'
import Services from './Components/services/services'
import Link from 'next/link'

const page = () => {

  const navDetails={
    clicked:'For Business',
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
    clicked:'For Business',
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-white',
    underline:'1px solid white',
    InstaIcon:'../images/business/Icons/instagram.svg',
    FbIcon:'../images/business/Icons/facebook.svg',
  }
  
  return (
    <>
    <main className='' >
      
    
      
    {/* <nav  className='flex justify-end h-6 box-border bg-black'>
    <section className='flex items-center mx-4 sm:mx-14 font-medium text-white tracking-widest text-xs  lg:text-sm py-2'>
    <Link href={{pathname:'/faq',query:{search:'Business Express'}}}><span className='px-2.5	mt-0.5 cursor-pointer'>FAQS</span></Link>
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

{/* <section className=' h-10 sxl:h-36 relative mb-5'>
<div className='absolute top-[-40px] sxl:top-20 '>
<h4  className='h-[40px] w-[205px] text-fadingcherry pl-[88px] flex items-center text-xs	font-bold rounded-lg bg-black tracking-[0.1em]' >FOR BUSINESS</h4>
<img src='../images/business/business-express-badge.png' className='absolute bottom-0 ' />
</div>
</section> */}

<section className='relative top-[-40px] sxl:top-[81px]  sxl:mb-[128px]'>
<img src='../images/business/business-express-badge.png' className='absolute bottom-0 ' />
<div className='w-fit rounded-lg bg-black px-[16px] py-3'>
<h4 className='  text-fadingcherry pl-[72px]   flex items-center text-xs	font-bold   tracking-[0.1em]' >FOR BUSINESS</h4>
</div>
</section>

<header className='font-extrabold text-3xl sm:text-4xl md:text-[58px]'>
<h1  className='pb-2 md:pb-[34px]'>Care services for</h1>
<h1  className='pb-2 lg:pb-3'>your employees</h1>
</header>
<h6 className='mt-6 text-sm md:text-lg font-normal tracking-[0.01em]'> Care Express is a B2B booking platform offering employee<br className='hidden md:block'></br>  benefits focused on much needed care and household<br className='hidden md:block'></br>  support services. </h6>

<section className='mt-10 flex items-center'>
<button className='bg-blue px-[18px] py-[13px] text-white rounded-[27px] text-base lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'>Book care today<img src='../images/Icons/click-arrow.svg' className='pl-[18px]'/></button>
<h6 className=' font-medium	text-blue underline decoration-1 pl-6 sm:pl-10 text-base lg:text-xl whitespace-nowrap underline-offset-[3px] cursor-pointer'>Learn more</h6>
</section>


<section className='mt-8 sm:mt-10 flex items-center justify-between w-[295px] sm:w-[330px]	pb-7'>
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

<section  className=' mt-5'>  
<img src='../images/business/business-express-hero-image.png' className=' ' />
</section >

</header>






{/* <div className="" data-flickity='{ "wrapAround": true,"pageDots": true , "prevNextButtons": false, "autoPlay": true, "autoPlay": 5000, "draggable": false}'>

-------------FIRST SLIDE--------------------
<div className="w-full h-max  mr-[10px] rounded-[5px]">

</div>


-------------SECOND SLIDE--------------------

<div className="w-full h-max  mr-[10px] rounded-[5px]">

</div>

-------------THIRD SLIDE--------------------

<div className="w-full h-max mr-[10px] rounded-[5px]">

</div>


</div> */}









</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}


<header  className='pt-20  bg-specialbg' id='services'>
<main  className='mx-4 sm:mx-14'>

<Services/>

      


{/* ----------------------------------------------------------------------------------------------------------------- */}



<header className='mt-28 pb-12' id='about'> 

    <section className='flex flex-col lg:flex-row items-center justify-around ' >
    <img src='../images/business/Featured Image.png'/>
      
      <div className='  w-full xlsm:w-[85%] md:w-[75%] lg:w-[45%] xxlg:w-[39.5%]'>
      <h2 className='text-4xl lg:text-5xl font-extrabold mb-5 leading-[58px] text-center lg:text-left'>About us</h2>


        <h2 className='leading-10 text-sm  lg:text-lg tracking-[0.01em] text-center lg:text-left mb-5 w-full '>Lorem Ipsum is simply dummy text of the printing and
         typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown
         printer took a galley of type and scrambled it to make a type
         specimen book. It has survived not only five centuries, but
         also the leap into electronic typesetting, remaining
         essentially unchanged. It was popularised in the 1960s with
         the release of Letraset sheets containing..</h2>  
        
         <button className='bg-blue mt-10 lg:mt-12 px-[18px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide hidden lg:flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your care</button>
      </div>
      <button className='bg-blue mt-10 lg:mt-12 px-[18px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your care</button>

     </section>
    </header>
  


  


    </main>
    </header>
    
{/* ----------------------------------------------------------------------------------------------------------------- */}
<section className='relative'>
<main className='mx-4 sm:mx-14 '>
<header  className='mt-24 pb-10 '>
  
<section className=' flex  justify-center'>
     <section style={{ border: '0.4px solid #1C1B1B' }} className='text-liblack  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '><img src='../images/Icons/raising-hands.png' className='pr-2'/> Quick & Convenient</section>
</section>
<h6 className='font-extrabold text-[26px] sm:text-4xl md:text-5xl	text-center mt-8'>Book in 3 easy steps</h6>


<main className='mt-20 flex items-center justify-around flex-wrap ' >

  <section className='w-[340px] md:w-[416px] h-[300px] md:h-[336px] flex-wrap flex items-center justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/specialExpress/special-express-clock-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>STEP 1<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose date & time</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Select where and when you want a care <br></br> assistant to come</h6>
  </div>
  </section>
    
  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0 '>
    <img src='../images/specialExpress/special-express-talk-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>STEP 2<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Tell us about your needs</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Tell us about your requirements  (e.g. cleaning,<br></br>  cooking.</h6>
  </div>
  </section>


  <section style={{ width: '416px', height: '336px'}} className=' flex items-center  justify-center relative '>
  <div style={{ background: 'linear-gradient(180deg, rgba(151, 196, 253, 0.1) 0%, rgba(151, 196, 253, 0.6) 100%)' }} className=' w-48	h-36 rounded-2xl absolute top-0'>
    <img src='../images/specialExpress/special-express-heart-3D.png' className='pl-11'/>
    <h6 className='mt-8 text-base md:text-2xl font-semibold text-center flex justify-center'><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>STEP 3<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
    <h6 className='mt-4 text-base md:text-2xl font-semibold flex items-center justify-center whitespace-nowrap'>Choose a flexible plan</h6>
    <h6 className='mt-4 whitespace-nowrap flex items-center  justify-center text-xs md:text-base tracking-[0.03em]	text-slate-500 text-center'>Choose a flexible hourly plan that works best <br></br> for you.</h6>
  </div>
  </section>

</main>


<section className='mt-10 flex items-center justify-center'>
{/* <button className='bg-blue mt-10 lg:mt-12 px-[18px] py-[13px] text-white rounded-[27px] text-base  lg:text-xl font-semibold tracking-wide lg:hidden flex items-center justify-evenly  '><img src='../images/Icons/calendar.svg' className='pr-[18px]'/>Book your care</button> */}

<button  className=' px-5 py-[13px] bg-blue text-white rounded-[27px] text-sm md:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img src='../images/Icons/calendar.svg' className='pr-4'/>Book care today</button>
</section>

</header>


</main>
<img src='../images/business/bookBackground.png' className='absolute top-20 right-0 hidden lg:block w-48 xlg:w-fit'/>

</section>
      

{/* ----------------------------------------------------------------------------------------------------------------- */}

<main className='bg-specialbg'>
  <main className='mx-4 sm:mx-14'>

<header className='mt-10 pb-20 '>
  
<section className='pt-10  lg:pt-20 flex items-center  justify-center'>
     <section style={{ border: '0.4px solid #1C1B1B' }} className='text-liblack  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center'><img src='../images/Icons/Handshake.svg' className='pr-2'/>Trusted Provider</section>
</section>

<h6 className='font-extrabold text-[23px] sm:text-[28px]  md:text-[35px] lg:text-[46px]	text-center mt-8'>What do customers say about Care Express</h6>


   <div className=' mt-20 relative' >
<div className="carousel " data-flickity='{ "wrapAround": true,"pageDots": false , "arrowShape": "M27.43,77.43l4.45-4.45L12.06,53.15H100v-6.3H12.06l19.82-19.82l-4.45-4.45L0,50L27.43,77.43z" }'>

  <div className="carousel-cell ">
  <div className='flex items-center flex-col  mx-10 mt-8 '>
  <img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://images.hindustantimes.com/img/2022/12/12/1600x900/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg'/>
  <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
  <h4 className='text-xl text-center font-normal text-blue'>Warsaw</h4>
  <h6 className='text-center mt-5 tracking-[0.03em] font-medium italic text-grey leading-[37px] text-[14px] md:text-[20px]'>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
  </div>
  </div>
  
  <div className="carousel-cell ">
  <div className='flex items-center flex-col  mx-10 mt-8 '>
  <img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://static01.nyt.com/images/2019/05/22/arts/22got-clarke/9f1eb2dc57734232b6f8cd0f13567ce9-superJumbo.jpg'/>
  <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
  <h4 className='text-xl text-center font-normal text-blue'>Warsaw</h4>
  <h6 className='text-center mt-5 tracking-[0.03em] font-medium italic text-grey leading-[37px] text-[14px] md:text-[20px]'>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
  </div>
  </div>

  <div className="carousel-cell ">
  <div className='flex items-center flex-col  mx-10 mt-8 '>
  <img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://images.immediate.co.uk/production/volatile/sites/3/2022/09/Ewan-Mitchell-Aemond-Targaryen-House-of-the-Dragon-adc1735.jpg?quality=90&resize=620,414'/>
  <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
  <h4 className='text-xl text-center font-normal text-blue'>Warsaw</h4>
  <h6 className='text-center mt-5 tracking-[0.03em] font-medium italic text-grey leading-[37px] text-[14px] md:text-[20px]'>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
  </div>
  </div>

  <div className="carousel-cell ">
  <div className='flex items-center flex-col  mx-10 mt-8 '>
  <img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://www.stylist.co.uk/images/app/uploads/2022/08/20160036/matt-smith_0-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'/>
  <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
  <h4 className='text-xl text-center font-normal text-blue'>Warsaw</h4>
  <h6 className='text-center mt-5 tracking-[0.03em] font-medium italic text-grey leading-[37px] text-[14px] md:text-[20px]'>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
  </div>
  </div>

  <div className="carousel-cell ">
  <div className='flex items-center flex-col  mx-10 mt-8 '>
  <img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/House-of-the-Dragon-Ser-Criston-Cole.jpg'/>
  <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
  <h4 className='text-xl text-center font-normal text-blue'>Warsaw</h4>
  <h6 className='text-center mt-5 tracking-[0.03em] font-medium italic text-grey leading-[37px] text-[14px] md:text-[20px]'>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
  </div>
  </div>

</div>
<section className='h-full  w-full absolute top-0 ' style={{ background: 'linear-gradient(90deg, rgba(240, 246, 255, 1) 0%, rgba(0, 0, 0, 0) 24%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 76%, rgba(240, 246, 255, 1) 100%)' }}></section>
</div>

   

  </header>  


{/* ----------------------------------------------------------------------------------------------------------------- */}


<header className='mt-10  '>
  
   
<section className='pt-10  lg:pt-20 flex items-center  justify-center'>
     <section style={{ border: '0.4px solid #1C1B1B' }} className='text-liblack  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center '><img src='../images/Icons/Handshake.svg' className='pr-2'/>Trusted Partner</section>
</section>

   <h6 className='font-extrabold  text-3xl lg:text-5xl	text-center mt-8'>Trusted by Fortune 500 companies</h6>


   <main className='mt-20 flex justify-center md:justify-evenly flex-wrap'>

   <section className='bg-white w-[306px]  h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/deloitte.png' className='w-[212px] h-[112px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/google.png' className='w-[172px] h-[58px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/pge.png' className='w-[138px] h-[72px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/cd projekt.png' className='w-[150px] h-[80px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/polsat box.png' className='w-[212px] h-[112px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/KGHM.png' className='w-[216px] h-[61px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/LPP.png' className='w-[141px] h-[91px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/allegro.png' className='w-[162px] h-[55px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/bank polski.png' className='w-[177px] h-[56px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/santander.png' className='w-[196px] h-[110px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/pgning.png' className='w-[126px] h-[89px]'/>
   </section>

   <section className='bg-white w-[306px] h-[121px] flex items-center justify-center mt-7'>
        <img src='../images/business/Icons/bnp paribas.png' className='w-[229px] h-[65px]'/>
   </section>

   

   </main>


  

  </header>  


</main>
</main>

    
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </main>
    </>
  )
}

export default page
