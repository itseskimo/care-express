"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useState , useEffect} from 'react'
import { register } from '@/redux/actions/page'
import { useDispatch } from 'react-redux'


const page = () => {

  const [accountToggle, setAccountToggle]=useState(true)

  const [user, setUser] = useState({
    createPhoneNumber: "",
    createEmail: "",
    createPassword: "",
    confirmPassword:'',
  });

  const { createEmail, createPhoneNumber, createPassword, confirmPassword } = user;


  const [contact, setContact] = useState({})
  const {firstName,lastName,emailAdress,phoneNumber,streetName,streetNumber,apartmentNumber,postalCode,city,careType,calendarDate}=contact

  useEffect(()=>{
     let calendarDate= localStorage.getItem('calendarDate')
     let careType= localStorage.getItem('careType')

     const contactData =localStorage.getItem('contact')
     let data = JSON.parse(contactData);
     data.careType=careType
     data.calendarDate=calendarDate
     setContact(data)
  },[])


  const dispatch = useDispatch();
  const [message,setMessage]=useState('')

  const registerSubmit = (e) => {
    e.preventDefault();

    if(createPassword === confirmPassword){

    const myForm = new FormData();
    myForm.set("care_type", careType);
    myForm.set("care_start_date", calendarDate);
    myForm.set("email", emailAdress);
    myForm.set("password", createPassword);
    myForm.set("first_name", firstName);
    myForm.set("last_name", lastName);
    myForm.set("phone", phoneNumber);
    myForm.set("street_number", streetNumber);
    myForm.set("street_name", streetName);
    myForm.set("postal_code", postalCode);
    myForm.set("city", city);
    // dispatch(register(myForm));
    setAccountToggle(false)
    }else{
      
    }
   

    // console.log(Object.fromEntries(myForm))
  };


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

  const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  function passwordToggle(id){
    const passwordToggle= document.getElementById(`password${id}`)
    const passwordVisibilityToggle= document.getElementById(`passwordVisibilityToggle${id}`)
  
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

    <Navbar color={'bg-blue'} {...navDetails}/>

   
{/* ----------------------------------------------------------------------------------------------------------------- */}
<main className='bg-specialbg overflow-hidden'>
<main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}

  <BookingHeader active={4}/>

{accountToggle ?<section className='bg-white h-max rounded-[16px] mt-10'>

<section className='flex items-center justify-center  py-7 mx-28 '>
<h6 className='text-[24px] font-bold flex shrink-0 '><img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/>Create Account<img className='mx-4' src='../images/business/Icons/business-express-separator-star.svg'/></h6>
</section>


{/* ------------------------------------------------------------------------------------ */}
<form className='mx-14 xlsm:mx-28 ' encType="multipart/form-data" onSubmit={registerSubmit}>

<section className='flex mb-4 flex-col  lg:flex-row items-center justify-center gap-6'>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%]'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Email address</h1>
  <div className='relative flex '>
  <img src='../images/Icons/Message.svg' className='absolute top-3 left-3'/>
  <input style={{border:'1px solid #ABABAB'}}
   className='outline-none bg-inputbg w-full py-[10px] rounded-[8px] pl-14' 
   name='createEmail'
   type='email'
   required
   value={createEmail}
   onChange={registerDataChange}
   placeholder='Email address'/>
  </div>
</div>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%]'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Phone Number</h1>
  <div className='relative flex '>
  <img src='../images/booking/calling.svg' className='absolute top-3 left-3'/>
  <input style={{border:'1px solid #ABABAB'}}
   name='createPhoneNumber'
   onChange={registerDataChange}
   value={createPhoneNumber}
   type='number'
   required
   className='outline-none bg-inputbg w-full py-[10px] rounded-[8px] pl-14' 
   placeholder='Phone Number'/>
  </div>
</div>

</section>

{/* ------------------------------------------------------------------------------------ */}

<section className='flex mb-4 flex-col  lg:flex-row items-center justify-center gap-6 mt-[23px] lg:mt-0'>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%] lg:mb-2'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Password</h1>
  <div className='relative flex'>
  <img src='../images/Login/Unlock.svg' className='absolute top-3 left-3 '/>
  <input 
  style={{border:'1px solid #ABABAB'}} 
  type='password' 
  name='createPassword'
  id='password1'
  required
  value={createPassword}
  onChange={registerDataChange}
  className='outline-none bg-inputbg  w-full py-[10px]  rounded-[8px] pl-14' 
  placeholder='Password' />
  <img src='../images/Icons/Show.svg' id='passwordVisibilityToggle1' onClick={()=>passwordToggle(1)} className='absolute top-3 w-10 right-[0.9px]  bg-inputbg px-2 cursor-pointer' />
  </div>
</div>

<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%]'>
  <h1 className='font-semibold mb-1 tracking-[0.02em] text-[16px]'>Confirm Password</h1>
  <div className='relative flex'>
  <img src='../images/Login/Unlock.svg' className='absolute top-3 left-3 '/>
  <input 
  style={{border:'1px solid #ABABAB'}} 
  type='password' 
  required
  id='password2'
  value={confirmPassword}
  name='confirmPassword'
  onChange={registerDataChange}
  className='outline-none bg-inputbg  w-full py-[10px] mb-2 rounded-[8px] pl-14' 
  placeholder='Confirm Password' />
  <img src='../images/Icons/Show.svg' id='passwordVisibilityToggle2' onClick={()=>passwordToggle(2)} className='absolute top-3 w-10 right-[1px]  bg-inputbg px-2 cursor-pointer' />
  </div>
</div>

</section>
{/* ------------------------------------------------------------------------------------ */}


<main className='min-w-[200px] w-[35%] ml-auto mr-auto mt-8 '>
  <input type='submit' className='bg-blue  w-full  text-white rounded-[24px] text-[18px] font-semibold cursor-pointer py-3' value='Create Account'/>
</main>

<div className=' flex items-center justify-center mt-5'>
  <div style={{border:'1px solid rgba(0, 0, 0, 0.2)'}} className=' min-w-[30px] w-[6%] '></div>
  <h6 className='font-semibold text-sm mx-3 whitespace-nowrap'>Or Create With</h6>
  <div style={{border:'1px solid rgba(0, 0, 0, 0.2)'}} className=' min-w-[30px] w-[6%]'></div>
</div>



</form>

<section className='flex min-w-[340px] sm:min-w-[355px]  lg:min-w-[390px] w-[28%] ml-auto mr-auto justify-between mt-5 pb-10 mx-28 '>
<button className='bg-ligrey rounded-[24px] px-2 sm:px-3 lg:px-4 py-[6px] font-semibold flex items-center shrink-0 text-[12px] sm:text-[14px]'>  <img src='../images/booking/google.svg' className='pr-[7px] lg:pr-[10px]'/>Google</button>
<button className='bg-ligrey rounded-[24px] px-4 sm:px-5 lg:px-6 py-[6px] font-semibold flex items-center shrink-0 text-[12px] sm:text-[14px]'>  <img src='../images/booking/Meta.svg' className='pr-[11px] lg:pr-[14px]'/>Meta</button>
<button className='bg-ligrey rounded-[24px] px-4 sm:px-5 lg:px-6  py-[6px] font-semibold flex items-center shrink-0 text-[12px] sm:text-[14px]'>  <img src='../images/booking/apple.svg' className='pr-[11px] lg:pr-[16px]'/>Apple</button>
</section>

</section> 

:

<section className='bg-white h-max rounded-[16px] mt-10 '>
<div className='flex items-center justify-center flex-col py-10 ]'>
    <img src='../images/booking/accountsuccess.svg' className='mb-10'/>
    <h6 className='text-[24px] font-bold mb-10'>Account created for <span className='underline decoration-1 underline-offset-4'> nat_ko@gmail.com</span></h6>
    <Link href={{pathname:'/booking/payment'}}>    <button className='bg-blue px-[120px]  text-white rounded-[50px] text-[18px] font-semibold py-3'>Proceed to Payment</button></Link>
</div>
</section>
}

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
