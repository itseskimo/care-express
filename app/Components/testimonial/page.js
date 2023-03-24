"use client"
import "flickity/css/flickity.css";
import dynamic from 'next/dynamic';
const Flickity = dynamic(() => import('react-flickity-component'), {
  ssr: false,
});


const flickityOptions = {
  wrapAround: true,
  pageDots: false ,
  initialIndex: 1,
  arrowShape: "M27.43,77.43l4.45-4.45L12.06,53.15H100v-6.3H12.06l19.82-19.82l-4.45-4.45L0,50L27.43,77.43z"
}


function Carousel({innerText,subText}){
return ( <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} >

<div className="carousel-cell ">
<div className='flex items-center flex-col  mx-10 mt-8 '>
<img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://images.hindustantimes.com/img/2022/12/12/1600x900/_38b36c44-c6e8-11e9-9ed0-dd7a6b36c3ad_1670826748640_1670826748640.jpg'/>
<h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
<h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
<h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
</div>
</div>

<div className="carousel-cell ">
<div className='flex items-center flex-col  mx-10 mt-8 '>
<img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://static01.nyt.com/images/2019/05/22/arts/22got-clarke/9f1eb2dc57734232b6f8cd0f13567ce9-superJumbo.jpg'/>
<h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
<h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
<h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
</div>
</div>

<div className="carousel-cell ">
<div className='flex items-center flex-col  mx-10 mt-8 '>
<img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://images.immediate.co.uk/production/volatile/sites/3/2022/09/Ewan-Mitchell-Aemond-Targaryen-House-of-the-Dragon-adc1735.jpg?quality=90&resize=620,414'/>
<h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
<h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
<h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
</div>
</div>

<div className="carousel-cell ">
<div className='flex items-center flex-col  mx-10 mt-8 '>
<img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://www.stylist.co.uk/images/app/uploads/2022/08/20160036/matt-smith_0-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'/>
<h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
<h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
<h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
</div>
</div>

<div className="carousel-cell ">
<div className='flex items-center flex-col  mx-10 mt-8 '>
<img className='rounded-full h-[80px] w-[80px] object-cover mb-2' src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/House-of-the-Dragon-Ser-Criston-Cole.jpg'/>
<h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
<h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
<h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
</div>
</div>


</Flickity>
)
}

const page = (props) => {
const{border,textColor,overlay, innerText,subText, buttonColour}=props



return (
  <>

<style>
        {
          `.flickity-button {
            background: ${buttonColour};
            z-index: 100;
          }`
        }
  </style>

  <style>
        {    
         `.flickity-button:hover {
             background: ${buttonColour};
           }`
        }
  </style>
  
  <header className='mt-10 pb-20 '>

   <section className='pt-10  lg:pt-20 flex items-center  justify-center'>
   <section style={{ border: `${border}` }} className={` ${textColor}  box-border py-[6.8px] px-[18px] text-xs font-semibold tracking-[0.06em] rounded-2xl	flex justify-center items-center`}><img src='../images/Icons/Handshake.svg' className='pr-2'/>Trusted Provider</section></section>

  <h6 className='font-extrabold text-[23px] sm:text-[28px]  md:text-[35px] lg:text-[46px]	text-center mt-8'>What do customers say about Care Express</h6>

  <div className=' mt-20 relative' >
  <Carousel innerText={innerText} subText={subText}/>
  <section className='h-full  w-full absolute top-0 ' style={{ background: `${overlay}` }}></section>
  </div>

   </header> 
 </>   
)
}

export default page