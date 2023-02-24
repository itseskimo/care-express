"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
const page = () => {
  

  const navDetails={
    clicked:'Booking',
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
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-white',
    underline:'1px solid white',
    InstaIcon:'../images/business/Icons/instagram.svg',
    FbIcon:'../images/business/Icons/facebook.svg',
  }
 

  return (
    <>

    <Navbar color={'bg-blue'} {...navDetails}/>

   
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

  <BookingHeader active={5}/>

<section className='bg-white h-max rounded-[16px] mt-10'>
<div className='flex items-center flex-col justify-center py-36'>
<div className='load'></div>
<h6 className='font-bold text-[19px] md:text-[22px] lg:text-[24px] mb-4'>Please wait while we redirect to the payment provider</h6>
<h6 className='font-semibold text-[14px] tracking-[0.12em] text-fadegrey'>DO NOT CLOSE THIS WINDOW OR GO BACK</h6>
</div>
</section>

{/* ----------------------------------AFTER AUTHENTIFICATION-------------------------------------------------- */}























</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}



    
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </>
  )
}

export default page
