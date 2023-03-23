// "use client"
// var $ = require('jquery');
// if (typeof window !== 'undefined') {
//    window.$ = window.jQuery = require('jquery');
// }
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import dynamic from 'next/dynamic';
// const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
//   ssr: false,
// });


// const page = (props) => {
//   const{border,textColor,overlay, innerText,subText}=props

//   return (
//     <>

// <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={2} center   nav>

  
//   <div className="carousel-cell ">
//   <div className='flex items-center flex-col  mx-10 mt-8 '>
//   <img className='rounded-[50%] circleimg mt-4 h-[80px] w-[80px] object-contain mb-2' src='https://static01.nyt.com/images/2019/05/22/arts/22got-clarke/9f1eb2dc57734232b6f8cd0f13567ce9-superJumbo.jpg'/>
//   <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
//   <h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
//   <h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
//   </div>
//   </div>

//   <div className="carousel-cell ">
//   <div className='flex items-center flex-col  mx-10 mt-8 '>
//   <img className='rounded-[50%] circleimg mt-4 h-[80px] w-[80px] object-contain mb-2' src='https://images.immediate.co.uk/production/volatile/sites/3/2022/09/Ewan-Mitchell-Aemond-Targaryen-House-of-the-Dragon-adc1735.jpg?quality=90&resize=620,414'/>
//   <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
//   <h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
//   <h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
//   </div>
//   </div>

//   <div className="carousel-cell ">
//   <div className='flex items-center flex-col  mx-10 mt-8 '>
//   <img className='rounded-[50%] circleimg mt-4 h-[80px] w-[80px] object-contain mb-2' src='https://www.stylist.co.uk/images/app/uploads/2022/08/20160036/matt-smith_0-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress'/>
//   <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
//   <h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
//   <h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
//   </div>
//   </div>

//   <div className="carousel-cell ">
//   <div className='flex items-center flex-col  mx-10 mt-8 '>
//   <img className='rounded-[50%] circleimg mt-4 h-[80px] w-[80px] object-contain mb-2' src='https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/09/House-of-the-Dragon-Ser-Criston-Cole.jpg'/>
//   <h4 className='font-semibold text-2xl tracking-[0.01em] text-center'>Christy Murphy</h4>
//   <h4 className={`text-xl text-center font-normal ${innerText}`}>Warsaw</h4>
//   <h6 className={`text-center mt-5 tracking-[0.03em] font-medium italic ${subText} leading-[37px] text-[14px] md:text-[20px]`}>The agency offered us a great nanny! My daughter, who <br></br> doesn’t get along with strangers, connected<br></br> immediately with our nanny! The whole process of <br></br>selecting a nanny was quick and the contact was<br></br> hassle-free. I highly recommend it! :)</h6>
//   </div>
//   </div>

// </OwlCarousel>

//     </>
//   )
// }

// export default page


// /** @type {import('next').NextConfig} */
// const webpack = require("webpack");

// const nextConfig = {
//   experimental: {
//     appDir: true,
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//       config.plugins.push(
//        new webpack.ProvidePlugin({
//        $: 'jquery',
//        jQuery: 'jquery',
//        'window.jQuery': 'jquery',
//     }));
//    return config;
//   }},
// };

// module.exports = nextConfig
