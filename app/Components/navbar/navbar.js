"use client"
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const navbar = (props) => {
const{first, second, third ,color,subcolour,clicked , border,background, shadow}=props
const router = useRouter();

const[navitem,setNavItem]=useState(`${clicked}` )
const[sidebar,setSidebar]=useState(false)
const[select,setSelect]=useState(false)
const[userlogin,setUserLogin]=useState('')


const[userLoggedIn,setuserLoggedIn]=useState('user')

// --------------------------------------------------------------
useEffect(()=>{

 const navClicked = sessionStorage.getItem('navClicked')
 const navbarArray=['Nanny Express','Pet Express','Senior Express','Special Express', 'Personal','For Business' ]
 if(navbarArray.includes(navClicked) ){
  setNavItem(navClicked)
 }

 if(localStorage.getItem('user')){
  let data = localStorage.getItem('user')
  let loginData = JSON.parse(data);
  setuserLoggedIn(loginData?.first_name)
}
},[navClicked,userLoggedIn])

function Logout(){
  localStorage.clear()
  setuserLoggedIn('user')
  router.push('/')
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
    sessionStorage.setItem('navClicked',id)
    }

function selectField(e){
  setSelect(!select)
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
     selectText.innerHTML= e.target.innerText  ||  e.target.alt 
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
    <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='px-2.5	mt-0.5 cursor-pointer' onClick={(e)=>navClicked(e.target.innerText)}>FAQs</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'  onClick={(e)=>navClicked(e.target.innerText)}>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav> 
    :
    <nav className={`flex justify-between h-6 box-border ${background} whitespace-nowrap px-4 sm:px-14`}>
    <section className='flex items-center gap-4  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <span className='cursor-pointer'>{`Welcome  ${userLoggedIn}`}</span>
    <span onClick={Logout} className='cursor-pointer'>Logout</span>
    </section>

    <section className='flex items-center  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='px-2.5	mt-0.5 cursor-pointer' onClick={(e)=>navClicked(e.target.innerText)}>FAQs</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'  onClick={(e)=>navClicked(e.target.innerText)}>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav>
}
    

     {/* <nav  className={`flex justify-end h-6 box-border ${background} whitespace-nowrap px-4 sm:px-14`}>
    <section className='flex items-center  font-medium text-white tracking-widest text-xs  lg:text-sm '>
    <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}><span className='px-2.5	mt-0.5 cursor-pointer' onClick={(e)=>navClicked(e.target.innerText)}>FAQs</span></Link>
    <Link href={{pathname:'/about'}}>    <span className='px-2.5 mt-0.5	cursor-pointer'  onClick={(e)=>navClicked(e.target.innerText)}>About us</span></Link>
    <span className='px-2.5	mt-0.5 cursor-pointer '>Contact</span>
    </section>
    </nav>  */}


  <header className='sticky top-0 w-full h-[62px] bg-white z-[200] shadow ' id='header'>
  <nav className='box-border  flex items-center h-[62px]  relative '>

  <section className='flex items-center text-gray-500 text-xs md:text-sm  lg:text-base mx-4 sm:mx-14'>

  <div className='block xxlg:hidden pr-5 cursor-pointer' onClick={hamburger}>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line1'></div>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line2'></div>
    <div className='w-[30px] h-[4px] bg-black ease-in duration-200 mt-2' id='line3'></div>
  </div>

  <img src='../images/petExpress/logo.jpg' className='pr-3.5' />
  <Link href={{pathname:'/'}}>  <span className={` sm:px-3.5  font-semibold cursor-pointer ease-in duration-300 ${navitem === 'For Business'? `text-black`: ``}`}  onClick={(e)=>navClicked(e.target.innerText)}>For Business</span></Link>
  <Link href={{pathname:'/personal'}}>  <span className={`px-0 md:px-2 hidden lg:block lg:px-3.5 font-semibold cursor-pointer ease-in duration-300  ${navitem === 'Personal'? `text-black`: ``}`}  onClick={(e)=>navClicked(e.target.innerText)} >Personal</span></Link>
  </section> 


  <section className='static xlg:absolute right-0 whitespace-nowrap flex items-center '>
            
  <div className='text-gray-500 bg-white hidden xxlg:flex flex-col xlg:flex-row absolute left-0 top-14 xlg:static  h-screen xlg:h-fit   w-full xlg:w-fit ' onClick={(e)=>navClicked(e.target.innerText)}>
  <Link href={{pathname:'/'}}>  <span className={` text-center font-semibold mt-5  cursor-pointer block lg:hidden odd:ease-in duration-300  ${navitem === 'For Business' ? `text-black`: ``}`}>For Business</span></Link>
  <Link href={{pathname:'/nannyExpress'}}>  <span className={` text-center  xlg:px-3.5 font-semibold   xlg:mt-0 cursor-pointer odd:ease-in duration-300 ${navitem === 'Nanny Express' ? `text-black`: ``}`}    >Nanny Express</span></Link>
  <Link href={{pathname:'/seniorExpress'}}>  <span className={` text-center  xlg:px-3.5 font-semibold   xlg:mt-0 cursor-pointer odd:ease-in duration-300 ${navitem === 'Senior Express' ? `text-black`: ``}`}   >Senior Express</span></Link>
  <Link href={{pathname:'/petExpress'}}>  <span className={` text-center  xlg:px-3.5 font-semibold   xlg:mt-0 cursor-pointer odd:ease-in duration-300 ${navitem === 'Pet Express' ? `text-black`: ``}`}      >Pet Express</span></Link>
  <Link href={{pathname:'/specialExpress'}}>  <span className={` text-center  xlg:px-3.5 font-semibold   xlg:mt-0 cursor-pointer odd:ease-in duration-300 ${navitem === 'Special Express' ? `text-black`: ``}`}   >Special Express</span></Link>
  </div>

  {sidebar && <div className='text-gray-500 bg-white flex items-center gap-6 flex-col xlg:flex-row absolute left-0 top-14 xlg:static  h-[60vh] xlg:h-fit w-full xlg:w-fit shadow' onClick={(e)=>navClicked(e.target.innerText)}>
  <Link href={{pathname:'/personal'}}>  <span className={`       font-semibold  cursor-pointer mt-5 block lg:hidden ease-in duration-300  ${navitem === 'Personal'? `text-black`: ``}`}  >Personal</span></Link>
  <Link href={{pathname:'/nannyExpress'}}>  <span className={`   font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Nanny Express' ? `text-black`: ``}`}  >Nanny Express</span></Link>
  <Link href={{pathname:'/seniorExpress'}}>  <span className={`  font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Senior Express' ? `text-black`:``}`}  >Senior Express</span></Link>
  <Link href={{pathname:'/petExpress'}}>  <span className={`     font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Pet Express' ? `text-black`: ``}`}    >Pet Express</span></Link>
  <Link href={{pathname:'/specialExpress'}}>  <span className={` font-semibold  cursor-pointer odd:ease-in duration-300 ${navitem === 'Special Express' ? `text-black`:``}`}  >Special Express</span></Link>
  </div>}
  
  <section className='absolute right-0  xlg:static text-xs md:text-sm  lg:text-base mx-4 sm:mx-14 bg-slate-400'>

  <div className=' relative  w-[172px] md:w-[200px] lg:w-[230px] '>
  <div className='flex  absolute top-[-18px] '>
    
<Link href={{pathname:'/login'}}>  <button className={`w-20  md:w-24  lg:w-28 h-9 rounded-3xl mx-2.5 text-white  ${color}`} onClick={(e)=>navClicked(e.target.innerText)}>{userlogin? `${userlogin}`: 'Book Now' }</button></Link>
   
<main className='w-14 md:w-16  lg:w-20 ml-4' onClick={selectField}>

<section  className='w-full h-9 box-border  bg-slate-100 rounded-[27px] flex items-center justify-evenly cursor-pointer'>
<p className='text-xs md:text-sm  lg:text-[15px] font-semibold select-none pointer-events-none' id='selectText'>EN </p>
<img src='../images/Icons/EN-flag.svg' className='w-[20px] '   id='selectImg'/>
<img src='../images/Icons/Arrowdown.svg' className='w-[9px] select-none pointer-events-none' id='dropdownArrow'/>
</section>

{select &&
<ul className='w-full bg-white shadow rounded-[8px] overflow-hidden' >
  <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around' >
    <p className=''>EN</p>
    <img src='../images/Icons/EN-flag.svg' alt='EN' className='w-[20px] '/>
  </li>
 
  <li className='w-full h-9 list-none box-border cursor-pointer flex items-center justify-around ' >
    <p className='' id='list2'>ES</p>
    <img src='../images/Icons/ES-flag.svg' alt='ES' className='w-[20px] '/>
  </li>
</ul>
}

</main>

</div>
</div>

</section>

  </section>
  </nav>


  <nav style={{ backgroundColor: '#F0F0F0' , borderTop: '1px solid transparent',  borderBottom: '1px solid transparent', borderImage: `linear-gradient(to right, transparent  , ${border} , transparent ) 2` }} className={`${shadow}  box-border  bg-stone-300 h-[34px] flex items-center justify-center text-[11px] md:text-sm  lg:text-base`} id='subheader'>
    <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${first.id}`}>{`${first.name}`}</a></span>
    <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${second.id}`}>{`${second.name}`}</a></span>
    <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}><a href={`${third.id}`}>{`${third.name}`}</a></span>
   <Link href={{pathname:'/faq',query:{search:`${clicked}`}}}> {second.name === 'Our services' ? <span className={`px-5 font-semibold ${subcolour} cursor-pointer`}>FAQ</span> : ''}</Link>
    
  </nav>

  </header>
  </>
  )
}

export default navbar