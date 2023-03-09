"use client"
import Navbar from '../Components/navbar/navbar'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
import { login } from '@/redux/actions/page'
import { getSocialLogin } from '@/redux/actions/page'
import Head from '../head'



const page = () => {

  const { isAuthenticated, user ,error} = useSelector((state) => state.user);
  console.log(error)
  const {social} = useSelector((state) => state.social);

  const router = useRouter();
  
   const googleLoginUrl = social?.google;
   const facebookLoginUrl = social?.meta;
  
   useEffect(()=>{

  if(Object.keys(user || {}).length > 0){
    let userData = JSON.stringify(user);
    localStorage.setItem("user", userData);
  }

  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);

  if(loginData.token){
    router.push('/dashboard')
    }
  }
  dispatch(getSocialLogin())

  },[user,isAuthenticated])


const [loginEmail,setLoginEmail]=useState('')
const [loginPassword,setLoginPassword]=useState('')

    const navDetails={
        clicked:'Login',
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

      const dispatch= useDispatch()

      const loginSubmit = (e) => {
        e.preventDefault();
        
        dispatch(login(loginEmail, loginPassword));  
      };
      

function passwordToggle(){
  const passwordToggle= document.getElementById('passwordToggle')
  const passwordVisibilityToggle= document.getElementById('passwordVisibilityToggle')

if(passwordToggle.type==='password'){
  passwordToggle.type='text'
  passwordVisibilityToggle.src='../images/Icons/HideShow.png'
}else{
  passwordToggle.type='password'
  passwordVisibilityToggle.src='../images/Icons/Show.svg'
}
}


  return (
    <>
        <Head title='Login'/>

    <Navbar color={'bg-blue'} {...navDetails}/>


    <main className=' bg-specialbg pt-16 pb-7'>
    <main className='mx-4 sm:mx-14  '>

<header className='flex flex-col lg:flex-row '>


<section style={{backgroundImage: 'url(../images/login/Login-Hero.png)'}}  className='relative flex items-center justify-end flex-col h-[600px] w-full lg:w-[50%] lg:mr-3 rounded-[24px] bg-no-repeat bg-cover '>
<section className='mb-20 z-10 w-[85%]'>
<h1 className='font-bold text-[40px] mb-1 text-white'>New Users</h1>
<h1 className='text-txtlogin tracking-[0.01em] text-[18px] mb-9'>Let us know your requirements and our team will setup an <br className='hidden ssxl:block'></br> account for you will best in class analytics and dashboard</h1>
<Link href={{pathname:'/booking/plan'}}><button className='bg-black text-white rounded-[24px] py-2 w-full border-solid border-[1.6px] text-[18px] font-semibold border-white'>Book Now</button></Link>
</section>
<section style={{background:'linear-gradient(180deg, rgba(28, 27, 27, 0) 0%, #1C1B1B 100%)' }}  className='absolute w-full h-full rounded-[24px] '> </section>
</section>




<section style={{ border: '1px solid #287EFE' }} className=' bg-white relative flex items-center justify-center flex-col h-[600px] w-full lg:w-[50%] lg:ml-3 rounded-[24px] mt-8 lg:mt-0 '>

<section style={{background:'linear-gradient(180deg, rgba(40, 126, 254, 0.24) 0%, rgba(40, 126, 254, 0) 100%)', filter:'blur(49.5px)'}} className='w-[250px] h-[250px] absolute top-0 left-0' ></section>
<img src='./images/Login/Background components.png' className='absolute right-0 bottom-0 '/>


<form className='z-10 w-[90%] sm:w-[82%] xlsm:w-[67%] smd:w-[60%] md:w-[50%] lg:w-[70%] xlg:w-[64%] xxlg:w-[57%] sxl:w-[50%]' onSubmit={loginSubmit}>
<div className='mb-7'>
<h1 className='text-[40px] font-bold mb-1'>Login</h1>
</div>

<div className='mb-4'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Email address</h1>
  <div className='relative flex'>
  <img src='../images/Icons/Message.svg' className='absolute top-3 left-3'/>
  <input style={{border:'1px solid #ABABAB'}}
   value={loginEmail} 
   onChange={(e)=>setLoginEmail(e.target.value)}
   className='outline-none bg-inputbg w-full py-[10px] rounded-[8px] pl-14' 
   placeholder='Email address'
   required
   />
  </div>
</div>

<div className='mb-9'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Password</h1>
  <div className='relative flex'>
  <img src='../images/Login/Unlock.svg' className='absolute top-3 left-3 '/>
  <input 
  style={{border:'1px solid #ABABAB'}} 
  value={loginPassword} 
  onChange={(e)=>setLoginPassword(e.target.value)}
  required
  type='password' 
  className='outline-none bg-inputbg  w-full py-[10px] mb-2 rounded-[8px] pl-14' 
  placeholder='Password' 
  id='passwordToggle'/>
  <img src='../images/Icons/Show.svg' className='absolute top-3 w-10 right-[1px]  bg-inputbg px-2 cursor-pointer' id='passwordVisibilityToggle' onClick={passwordToggle}/>
  </div>
  <h6 className='text-[13px] text-red-600 text-center'>{error ? error : ''}</h6>
  <h6 className='flex justify-end text-blue underline underline-offset-[3px] tracking-[0.01em] decoration-1 text-sm cursor-pointer'>Forgot Password</h6>
</div>

<input type='submit' value='Login to Dashboard' className='bg-blue text-white rounded-[24px] text-[18px] font-semibold py-3 w-full cursor-pointer'/> 
  

<div className='flex items-center justify-center mt-4'>
  <div className='border-gray-400 border-[1px] border-solid w-[32%] '></div>
  <h6 className='font-semibold text-sm mx-3 whitespace-nowrap'>Or Login With</h6>
  <div className='border-gray-400 border-[1px] border-solid w-[32%]'></div>
</div>

</form>
<section className='flex gap-3 mt-3 z-10'>
  <a href={googleLoginUrl}><button className='bg-ligrey rounded-[24px] px-4 cursor-pointer lg:px-3 xlg:px-[14px] py-[5px] font-semibold flex items-center text-[14px]' >  <img src='../images/booking/google.svg' className='pr-[10px]'/>Google</button></a>
  <a href={facebookLoginUrl}><button className='bg-ligrey rounded-[24px] px-4 cursor-pointer lg:px-3 xlg:px-[14px] py-[5px] font-semibold flex items-center text-[14px]' >  <img src='../images/booking/Meta.svg' className='pr-[10px]'/>Meta</button></a>

<button className='bg-ligrey rounded-[24px] px-4 cursor-pointer lg:px-3 xlg:px-[14px] py-[5px] font-semibold flex items-center text-[14px]' >  <img src='../images/booking/apple.svg' className='pr-[10px]'/>Apple</button>
</section>


</section>

</header>

</main>
</main>


{/* ----------------------------------------------------------------------------- */}
<header className='pt-60 relative  bg-specialbg '>

<main style={{ border: '1px solid #416EEA' }} className='bg-white mx-4 sm:mx-14 rounded-[20px] mt-10 lg:mt-0 box-border absolute top-10 h-[300px] lg:h-[398px] sxl:w-[92.35%]' >  
<footer className='flex items-start lg:items-center flex-col lg:flex-row'>
<img src='../images/petExpress/support-agent.png' className='hidden lg:block '/>

<section className='lg:pl-10 xlg:pl-16 sxl:pl-24  flex items-center justify-center flex-col lg:items-start'>
<h1 style={{ lineHeight: '58px' }} className='text-xl md:text-4xl lg:text-5xl font-extrabold  mb-1 md:mb-9 '>Would you like to know more?</h1>
<h5 className='text-sm md:text-base lg:text-lg	leading-8 mx-3 text-center lg:text-justify tracking-[0.01em]'>Do you need more knowledge about our services? Check the “<Link href={{pathname:'/faq',query:{search:'Login'}}}><span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'>frequently asked<br className='hidden sxl:block '></br> questions</span></Link>” or contact us on the <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> chat</span> or <span className='underline font-semibold underline-offset-[3px] decoration-1 cursor-pointer'> hotline</span> </h5>
<button className='bg-blue mt-8 sm:mt-14 lg:mt-16 sxl:mt-24 w-36 lg:w-48 h-[54px] lg:h-14 text-white rounded-[27px] text-xs lg:text-xl font-semibold tracking-wide flex items-center justify-evenly'><img className='' src='../images/Icons/call.svg'/><Link href="tel:+48 885 023 998">Get in touch</Link> </button>
</section>

</footer>
</main>  



{/* ------------Main Footer------------------ */}

<div style={{ backgroundColor: '#100F0E' }} className=''>
<div className='mx-4 sm:mx-14 h-max' >


<main className=' pt-52 lg:pt-80 flex  justify-between flex-col sxl:flex-row tracking-wider'>


<section className='my-5  sxl:my-0'>
<h1   className='text-white text-lg md:text-2xl font-bold pb-4'>Care Express</h1>
<h1 className='text-white text-sm  md:text-base tracking-[0.01em]'>Care Express is a specialist brand for<br ></br> services relating to senior care, pet<br></br>  care, child care and special care</h1>
</section>



<section className='  my-5  sxl:my-0'>
<h1 className='text-white  text-sm  md:text-base font-bold pb-4'>Our services</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Nanny Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3 '>Senior Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Pet Express</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Special Express</h1>
</section>



<section className='my-5  sxl:my-0'>
<h1  className='text-white  text-sm  md:text-base font-bold pb-4'>We are available in</h1>
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
<h1  className='text-white  text-sm  md:text-base font-bold pb-4'>Help & Support</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>About us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Contact</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Privacy Policy</h1>
<h1 className='text-white text-xs md:text-sm mb-3'>Terms & conditions</h1>
<div className='mt-10'>
<h1 className='text-white   text-sm  md:text-base font-bold pb-2'>Payment Gateway</h1>
<img  src='../images/Icons/stripe-logo.svg'/>
</div>
</section>


<section className='my-5  sxl:my-0 mr-12'>
<h1  className='text-white  text-sm  md:text-base font-bold pb-4'>Company Address</h1>
<h1 className='text-white text-xs md:text-sm mb-2'>Ul. Wiertnicza 10402-952 Warsaw,</h1>
<h1 className='text-white text-xs md:text-sm '>Polska</h1>

<div className='mt-6'>
<h1  className='text-white   text-sm  md:text-base font-bold pb-4'>Call us</h1>
<h1 className='text-white text-xs md:text-sm mb-3'><Link href="tel:+48 885 023 998">+48 885 023 998</Link></h1>
<h1 className='text-white text-xs md:text-sm '><Link href="tel:+48 22 65 17 051">+48 22 65 17 051</Link></h1>
</div>

<div className='mt-6'>
<h1  className='text-white   text-sm  md:text-base font-bold pb-4'>Email us</h1>
<h1 className='text-white text-xs md:text-sm underline underline-offset-[3px] decoration-1 cursor-pointer' ><Link href="mailto:info@care-express.pl">info@care-express.pl</Link></h1>

</div>
</section>


</main>


<div style={{ border: '1px solid white' }} className='mt-10 flex' ></div>


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
    </>
  )
}

export default page