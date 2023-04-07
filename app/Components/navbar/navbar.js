"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { logout} from '@/redux/actions/page'
import { useDispatch,useSelector  } from 'react-redux'
import outsideAlert from '@/constants/page';
 import Cookies from "js-cookie";


const navbar = (props) => {

  const dispatch= useDispatch()
  const { loginInfo} = useSelector((state) => state.user);

  const{first, second, third ,color,subcolour,clicked , border,background, shadow,  bookingId}=props
  const router = useRouter();

const {loginDropdown ,setLoginDropdown , select ,setSelect , dropRef , selRef} = outsideAlert(false, false)

const[navitem,setNavItem]=useState(`${clicked}` )
const[sidebar,setSidebar]=useState(false)

const[userLoggedIn,setuserLoggedIn]=useState('user')

// --------------------------------------------------------------
useEffect(()=>{
 if(localStorage.getItem('user')){
  let data = localStorage.getItem('user')
  let loginData = JSON.parse(data);
  setuserLoggedIn(loginData?.first_name)
}
},[userLoggedIn])








function LogOut(){
  dispatch(logout())
  localStorage.clear()
  setuserLoggedIn('user')
  //  Cookies.remove("loggedin");

  router.push('/')
}

function LogIn(){
  let dropdownLoginArrow= document.getElementById('dropdownLoginArrow')
  dropdownLoginArrow.classList.toggle('rotate-180')
  // setLoginDropdown(!loginDropdown)
}

    function hamburger(){
      setSidebar(!sidebar)
      const line1=document.getElementById('line1')
      const line2=document.getElementById('line2')
      const line3=document.getElementById('line3')

      line1.classList.toggle("rotate-[-45deg]");
      line1.classList.toggle("translate-x-[-1px]");
      line1.classList.toggle("translate-y-[12px]");

      line2.classList.toggle("w-0");
      if(line2.classList.contains("w-0")){
        line2.classList.remove('w-[30px]')
      }else{
        line2.classList.add('w-[30px]')
      }

      line3.classList.toggle("rotate-45");
      line3.classList.toggle("translate-x-[1px]");
      line3.classList.toggle("translate-y-[-12px]");  
    }

    function navClicked(id){
    setNavItem(id)
    }

function selectField(e){
  // setSelect(!select)
   let selectImg= document.getElementById('selectImg')
   let selectText= document.getElementById('selectText')
   let dropdownArrow= document.getElementById('dropdownArrow')

   dropdownArrow.classList.toggle('rotate-180')
    

 
    if(e.target.attributes.src === undefined){
        selectImg.src= `../images/Icons/${e.target.innerText}-flag.svg`
    }else{
        selectImg.src= e.target.attributes.src.textContent
    }

     selectImg.alt= e.target.alt || e.target.innerText  
     selectText.innerHTML= e.target.innerText  ||  e.target.alt || 'EN'
}

 

// --------------------------------------------------------------

useEffect(()=>{
  window.onresize = () => {
    window.innerWidth > 1172 ? setSidebar(false)  : ''  ;
    return () => (window.onresize = null);
  };
})

// --------------------------------------------------------------




  return (
    <>
  {userLoggedIn === 'user' ? 
    <nav className={`flex justify-end h-6 box-border ${background} whitespace-nowrap px-4 sm:px-14`}>
    <section className='flex items-center  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='px-2.5	mt-0.5 cursor-pointer'>FAQs</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer' >About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> 
    :
    <nav className={`flex justify-between h-6 box-border ${background} whitespace-nowrap px-4 sm:px-14`}>
    <section className='flex items-center gap-4  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <span className='cursor-pointer'>{`Welcome  ${userLoggedIn}`}</span>
    <span onClick={LogOut} className='cursor-pointer'>Logout</span>
    </section>

    <section className='flex items-center  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='px-2.5	mt-0.5 cursor-pointer' onClick={(e)=>navClicked(e.target.innerText)}>FAQs</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'  onClick={(e)=>navClicked(e.target.innerText)}>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav>
}
    
{/* --------------------------------------------------------------------------------------------------------------- */}
     


  <header className='sticky top-0 w-full h-[62px] bg-white z-[200] shadow ' id='header' >
  <nav className='box-border  flex items-center justify-between h-full text-[15px]  ssxl:text-base  mx-4 sm:mx-14 ' >

  

  <section className='flex items-center gap-7 text-gray-500 '>

  <div className='block xxlg:hidden cursor-pointer' onClick={hamburger}>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line1'></div>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line2'></div>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line3'></div>
  </div>
  <a href='/'><img src='../images/petExpress/logo.svg' className=' cursor-pointer shrink-0' /></a>
  <a href='/'>  <span className={` font-semibold cursor-pointer ease-in duration-300 ${navitem === 'For Business'? `text-black`: ``}`}  onClick={(e)=>navClicked(e.target.innerText)}>For Business</span></a>
  <a href='/personal'><span className={` font-semibold cursor-pointer ease-in duration-300 hidden md:block  ${navitem === 'Personal'? `text-black`: ``}`}  onClick={(e)=>navClicked(e.target.innerText)} >Personal</span></a>
  </section> 


  <section className='flex items-center gap-5 ssxl:gap-7'>

  <div className='hidden xxlg:flex gap-7 text-gray-500   ' onClick={(e)=>navClicked(e.target.innerText)}>
    <a href='/nannyExpress'>   <span className={`font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Nanny Express' ? `text-black`: ``}`}>Nanny Express</span>  </a>
    <a href='/seniorExpress'>   <span className={`font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Senior Express' ? `text-black`: ``}`}   >Senior Express</span>  </a>
    <a href='/petExpress'>   <span className={`font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Pet Express' ? `text-black`: ``}`}      >Pet Express</span>  </a>
    <a href='/specialExpress'><span className={`font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Special Express' ? `text-black`: ``}`}   >Special Express</span></a>
  </div>

  


  <div className='flex gap-2 cursor-pointer  relative' onClick={LogIn} ref={dropRef}>
  <h6 className='font-semibold  cursor-pointer text-sm whitespace-nowrap text-gray-500'>Log In</h6>
  <img src='../images/Icons/Arrowdown.svg' className='w-[9px] select-none pointer-events-none' id='dropdownLoginArrow'/>

  {loginDropdown &&
<ul className='flex flex-col items-center  bg-white shadow rounded-[8px] z-10 absolute top-12' >
  <li className='w-full py-3 list-none box-border px-6 cursor-pointer flex items-center rounded-[8px]  justify-around hover:bg-slate-50' >
    <p className=''>Customers</p>
  </li>
 
  <li className='w-full py-3 list-none box-border px-6 cursor-pointer flex items-center rounded-[8px]  justify-around hover:bg-slate-50 ' >
    <p className=''>Caretaker</p>
  </li>
</ul>
}
  </div>





<a href={  userLoggedIn !== 'user' ? `reports/booking?type=${bookingId}`: '/login'}><button className={` rounded-3xl text-white px-[17px] py-[9px] md:py-[6px] text-xs md:text-base  shrink-0 ${color}`}>Book Now</button></a>

  <main className='w-16  lg:w-20 shrink-0' onClick={selectField} ref={selRef}>

<section  className='w-full h-9 box-border  bg-slate-100 rounded-[27px] flex items-center justify-evenly cursor-pointer relative' >
<p className='text-xs md:text-sm  lg:text-[15px] font-semibold select-none pointer-events-none' id='selectText'>EN </p>
<img src='../images/Icons/EN-flag.svg' className='w-[20px] '   id='selectImg'/>
<img src='../images/Icons/Arrowdown.svg' className='w-[9px] select-none pointer-events-none' id='dropdownArrow'/>
</section>

{select &&
<ul className='w-20 bg-white shadow rounded-[8px] z-10  absolute' >
  <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around' >
    <p className=''>EN</p>
    <img src='../images/Icons/EN-flag.svg' alt='EN' className='w-[20px] '/>
  </li>
 
  <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around ' >
    <p className='' id='list2'>PO</p>
    <img src='../images/Icons/PO-flag.svg' alt='PO' className='w-[20px] '/>
  </li>
</ul>
}

</main>

  </section>
  </nav>

  {sidebar && <div className='text-gray-500 bg-white flex items-center justify-center gap-6 flex-col   h-[60vh] w-full  shadow' onClick={(e)=>navClicked(e.target.innerText)}>
    <a href='/personal'><span className={`  font-semibold  cursor-pointer mt-5 block md:hidden ease-in duration-300  ${navitem === 'Personal'? `text-black`: ``}`}  >Personal</span></a>
    <a href='/nannyExpress'><span className={`   font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Nanny Express' ? `text-black`: ``}`}  >Nanny Express</span></a>
    <a href='/seniorExpress'><span className={`  font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Senior Express' ? `text-black`:``}`}  >Senior Express</span></a>
    <a href='/petExpress'><span className={`   font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Pet Express' ? `text-black`: ``}`}    >Pet Express</span></a>
    <a href='/specialExpress'> <span className={` font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Special Express' ? `text-black`:``}`}  >Special Express</span></a>
  </div>}


    <nav style={{ backgroundColor: '#F0F0F0' , borderTop: '1px solid transparent',  borderBottom: '1px solid transparent', borderImage: `linear-gradient(to right, transparent  , ${border} , transparent ) 2` }} className={`${shadow}  box-border  bg-stone-300 h-[34px] flex items-center justify-center text-[11px] md:text-sm  lg:text-base absolute top-[62px] w-full`} id='subheader'>
      {first.id === '#home' ?     <span className={`px-5 font-semibold ${subcolour} cursor-pointer`} onClick={()=>window.scrollTo(0 ,0)}>{`${first.name}`}</span> :     <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${first.id}`} >{`${first.name}`}</a></span>}
      <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${second.id}`}>{`${second.name}`}</a></span>
      <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${third.id}`}>{`${third.name}`}</a></span>
      <a href={`/faq?search=${clicked}`}> {second.name === 'Our services' ? <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}>FAQ</span> : ''}</a>  
    {/* <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}> {second.name === 'Our services' ? <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}>FAQ</span> : ''}</Link>   */}
    </nav>

  </header>
  </>
  )
}

export default navbar