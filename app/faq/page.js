"use client"
import Navbar from '../Components/navbar/navbar'
import Footer from '../Components/footer/footer'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Head from '../head'
import { clearErrors } from '@/redux/actions/page'
import { useDispatch} from 'react-redux'
const page = () => {
const dispatch= useDispatch()

  const searchParams = useSearchParams();
  const searchPage = searchParams.get('search');
  
    const [selected,setSelected]= useState('')

    const [dynamicFaq ,setDynamicFaq]= useState({navDetails:{
      clicked:'',
      subcolour:'text-blue',
      border:'rgba(65, 110, 234, 1)',
      background:'bg-blue',

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
    },footerDetails:{
      background:'bg-specialbg',
      border:'1px solid #416EEA',
      buttonColour:'bg-blue',
      subTitle:'text-white',
      underline:'1px solid white',
      InstaIcon:'../images/business/Icons/instagram.svg',
      FbIcon:'../images/business/Icons/facebook.svg',
    }})

    let {navDetails, footerDetails}=dynamicFaq

    

      function faqToggle(id){
          let dropdown= document.getElementById(`dropdown${id}`)
          let list= document.getElementById(`list${id}`)
          let hideTxt= document.getElementById(`hideTxt${id}`)
          dropdown.classList.toggle('rotate-180')
          list.classList.toggle('pb-6')
          hideTxt.classList.toggle('hidden')
      }


      

useEffect(()=>{
  dispatch(clearErrors())

  if(searchPage){
    selectedItem(searchPage)
  }
},[])




      function selectedItem(id){
      sessionStorage.setItem('navClicked',id)
      setSelected(id)
       
        if(id === 'Nanny Express'){
          const navDetails={
            clicked:'Nanny Express',
            color:'bg-orange',
            background:'bg-orange',
            subcolour:'text-orange',
            border:'rgba(255, 94, 0, 1)',
          
            first:{
              id:'#home',
              name:'Why Nanny Express',
            },
            second:{
              id:'#profession',
              name:'Become a Nanny',
            },
            third:{
              id:'#pricing',
              name:'Pricing',
            },
          }
           
          
          const footerDetails={
            background:'bg-nanybg',
            subcolour:'text-orange',
            border:'1px solid #FF5E00',
            buttonColour:'bg-orange',
            subTitle:'text-drkyellow',
            underline:'1px solid #FDCA05',
            InstaIcon:'../images/nannyExpress/Icons/instagram.png',
            FbIcon:'../images/nannyExpress/Icons/facebook.svg',
          }
          setDynamicFaq({navDetails,footerDetails})
        }else if(id === 'Senior Express'){
          const navDetails={
            clicked:'Senior Express',
            color:'bg-purple',
            background:'bg-purple',
            subcolour:'text-purple',
            border:'rgba(204, 60, 157, 1)',
        
            first:{
              id:'#home',
              name:'Why Senior Express',
            },
            second:{
              id:'#profession',
              name:'Become a Care Taker',
            },
            third:{
              id:'#pricing',
              name:'Pricing',
            },
          }
        
          const footerDetails={
            background:'bg-senbg',
            border:'1px solid #CC3C9D',
            buttonColour:'bg-purple',
            subTitle:'text-topaz',
            underline:'1px solid #0DB0B5',
            InstaIcon:'../images/seniorExpress/Icons/instagram.svg',
            FbIcon:'../images/seniorExpress/Icons/facebook.svg',
          }
          setDynamicFaq({navDetails,footerDetails})

        }else if(id === 'Pet Express'){
          const navDetails={
            clicked:'Pet Express',
            color:'bg-red',
            background:'bg-brown',
            subcolour:'text-brown',
            border:'rgba(234, 173, 148, 1)',
        
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
            
            background:'bg-petbg',
            border:'1px solid #AA634D',
            buttonColour:'bg-red',
            subTitle:'text-lipet',
            underline:'1px solid #EAAD94',
            InstaIcon:'../images/Icons/instagram.svg',
            FbIcon:'../images/Icons/facebook.svg',
          }
          setDynamicFaq({navDetails,footerDetails})
        }else if(id === 'Special Express'){
          const navDetails={
            clicked:'Special Express',
            color:'bg-blue',
            background:'bg-blue',
            subcolour:'text-blue',
            border:'rgba(12, 104, 255, 1)',
            first:{
              id:'#home',
              name:'Why Special Express',
            },
            second:{
              id:'#profession',
              name:'Become a Care Taker',
            },
            third:{
              id:'#pricing',
              name:'Pricing',
            },
          }
           
          const footerDetails={
            background:'bg-specialbg',
            border:'1px solid #416EEA',
            buttonColour:'bg-blue',
            subTitle:'text-liblue',
            underline:'1px solid #97C4FD',
            InstaIcon:'../images/specialExpress/Icons/instagram.svg',
            FbIcon:'../images/specialExpress/Icons/facebook.svg',
          }
          setDynamicFaq({navDetails,footerDetails})
        }else{

          const navDetails={
            clicked:'For Business',
            subcolour:'text-blue',
            color:'bg-blue',
            background:'bg-black',
            border:'rgba(65, 110, 234, 1)',
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
          setDynamicFaq({navDetails,footerDetails})

        }
      }
  return (
    <>
            <Head title='FAQs'/>


    <Navbar color={'bg-blue'} {...navDetails}/>


    <main className={` ${footerDetails.background} pt-24 h-max lg:h-max overflow-hidden`}>
    <main className='mx-4 sm:mx-14  '>


<h1 className='font-extrabold text-[46px] text-center mb-4'>FAQs</h1>

<header className='flex items-center justify-center gap-2' >
<button className={`tracking-[0.02em] font-medium text-[11px] xlsm:text-xs rounded-[17px] border-[1px] border-solid border-slate-400 px-2 py-1 ${selected === 'General' ? 'bg-blue , text-white , border-transparent' : ''}`} onClick={(e)=>selectedItem(e.target.innerText)}>General</button>
<button className={`tracking-[0.02em] font-medium text-[11px] xlsm:text-xs rounded-[17px] border-[1px] border-solid border-slate-400 px-2 py-1 ${selected === 'Nanny Express' ? 'bg-orange , text-white , border-transparent' : ''}`} onClick={(e)=>selectedItem(e.target.innerText)}>Nanny Express</button>
<button className={`tracking-[0.02em] font-medium text-[11px] xlsm:text-xs rounded-[17px] border-[1px] border-solid border-slate-400 px-3 xlsm:px-2 py-1 ${selected === 'Senior Express' ? 'bg-purple , text-white , border-transparent' : ''}`} onClick={(e)=>selectedItem(e.target.innerText)}>Senior Express</button>
<button className={`tracking-[0.02em] font-medium text-[11px] xlsm:text-xs rounded-[17px] border-[1px] border-solid border-slate-400 px-4 xlsm:px-2 py-1 ${selected === 'Pet Express' ? 'bg-red , text-white , border-transparent' : ''}`} onClick={(e)=>selectedItem(e.target.innerText)}>Pet Express</button>
<button className={`tracking-[0.02em] font-medium text-[11px] xlsm:text-xs rounded-[17px] border-[1px] border-solid border-slate-400 px-2 py-1 ${selected === 'Special Express' ? 'bg-blue , text-white , border-transparent' : ''}`} onClick={(e)=>selectedItem(e.target.innerText)}>Special Express</button>
</header>




<main className='mt-6 pb-2'>
<section className='flex items-center gap-10'>
  <h6 className='font-semibold text-[18px] tracking-[0.02em] whitespace-nowrap'>Account Related</h6>
  <div className='border-faqborder border-[1px] border-solid w-full'></div>
</section>



<section className='flex gap-6 mt-10 items-start  flex-col'>

<header className='flex gap-4 items-start w-full'>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(1)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list1'>Is Nanny Express available all over Poland?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown1' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt1'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full  lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(2)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list2'>Can I hire a nanny for a few hours?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown2' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt2'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>


<header className='flex items-start gap-4 w-full '>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer '  onClick={()=>faqToggle(3)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6  px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em] ' id='list3' >Can my child learn a foreign language with a nanny?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown3' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt3'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full lg:w-[50%]  bg-white  rounded-[8px] shadow cursor-pointer' onClick={()=>faqToggle(4)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list4'>For how long is the package of hours valid?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 select-none pointer-events-none' id='dropdown4' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt4'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>

</section>



{/* -------------------------------------------------------------------------------------------- */}


<section className='flex items-center gap-10 mt-10'>
  <h6 className='font-semibold text-[18px] tracking-[0.02em] whitespace-nowrap'>For Parents</h6>
  <div className='border-faqborder border-[1px] border-solid w-full'></div>
</section>

<section className='flex gap-6 mt-10 items-start  flex-col'>

<header className='flex gap-4 items-start w-full'>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(5)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list5'>Is Nanny Express available all over Poland?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown5' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt5'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full  lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(6)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list6'>Can I hire a nanny for a few hours?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown6' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt6'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>


<header className='flex items-start gap-4 w-full '>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer '  onClick={()=>faqToggle(7)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6  px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em] ' id='list7' >Can my child learn a foreign language with a nanny?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown7' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt7'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full lg:w-[50%]  bg-white  rounded-[8px] shadow cursor-pointer' onClick={()=>faqToggle(8)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list8'>For how long is the package of hours valid?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 select-none pointer-events-none' id='dropdown8' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt8'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>

</section>


{/* -------------------------------------------------------------------------------------------- */}


<section className='flex items-center gap-10 mt-10'>
  <h6 className='font-semibold text-[18px] tracking-[0.02em] whitespace-nowrap'>For Business</h6>
  <div className='border-faqborder border-[1px] border-solid w-full'></div>
</section>


<section className='flex gap-6 mt-10 items-start  flex-col'>

<header className='flex gap-4 items-start w-full'>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(9)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list9'>Is Nanny Express available all over Poland?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown9' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt9'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full  lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(10)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list10'>Can I hire a nanny for a few hours?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown10' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt10'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>


<header className='flex items-start gap-4 w-full '>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer '  onClick={()=>faqToggle(11)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6  px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em] ' id='list11' >Can my child learn a foreign language with a nanny?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown11' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt11'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full lg:w-[50%]  bg-white  rounded-[8px] shadow cursor-pointer' onClick={()=>faqToggle(12)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list12'>For how long is the package of hours valid?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 select-none pointer-events-none' id='dropdown12' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt12'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>

</section>


</main>




<section className='flex gap-6 mt-10 items-start flex-col pb-1'>

<header className='flex gap-4 items-start w-full'>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(1)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list1'>Is Nanny Express available all over Poland?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown1' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt1'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full  lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer'  onClick={()=>faqToggle(2)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list2'>Can I hire a nanny for a few hours?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown2' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt2'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>


<header className='flex items-start gap-4 w-full '>
<div className='w-full lg:w-[50%] bg-white  rounded-[8px] shadow cursor-pointer '  onClick={()=>faqToggle(3)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6  px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em] ' id='list3' >Can my child learn a foreign language with a nanny?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 ' id='dropdown3' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden ' id='hideTxt3'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>

<div className='w-full lg:w-[50%]  bg-white  rounded-[8px] shadow cursor-pointer' onClick={()=>faqToggle(4)}>
<div className=' flex justify-between'>
<h1 className='pl-6 lg:pl-2 xlg:pl-6 px-3 py-3 text-[16px] lg:text-[14px] xlg:text-[16px] font-semibold tracking-[0.02em]' id='list4'>For how long is the package of hours valid?</h1>
<img src='../images/Login/ArrowDown.svg' className='  mr-4 select-none pointer-events-none' id='dropdown4' />
</div>
<h6 className='px-6 lg:px-2 xlg:px-6 text-[16px] leading-7 pb-6 hidden' id='hideTxt4'>Yes, it’s possible! Just select an additional language learning option that you’ll find in the notes when ordering your hours of package.</h6>
</div>
</header>

</section>











    </main>
    </main>

    <Footer {...footerDetails}/>




    </>
  )
}

export default page