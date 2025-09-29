
// import Background from '../components/Background'
// import Hero from '../components/Hero';
// import { FaCircle } from "react-icons/fa";
// import React, { useState, useEffect } from 'react';
// import Product from './Product';
// import OurPolicy from '../components/OurPolicy';
// import NewLetterBox from '../components/NewsLetterBox';
// import Footer from '../components/Footer';



// function Home() {
//    let heroData=[
//     {text1:"30% OFF Limited Offer",text2:"Style that"},
//     {text1:"Discover the Best of Bold Fashion",text2:"Limited Time Only!"},
//     {text1:"Explore Our Best Collection ",text2:"Shop Now!"},
//     {text1:"Choose your Perfect Fasion Fit",text2:"Now on Sale!"}
// ]

// let [heroCount,setHeroCount]=useState(0);

// useEffect(()=>{
//   let interval = setInterval(()=>{
//     setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
//   },3000)

//   return ()=> clearInterval(interval)
// },[])
//   return (
//     <>
//     <div className='w-full h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25]'>
//       {/* Home Page */}

//       <Background heroCount={heroCount} />
//       <Hero
//         heroCount={heroCount}
//         setHeroCount={setHeroCount}
//         heroData={heroData[heroCount]}
//       />

//     </div>
//     <Product/>
//     <OurPolicy/>
//     <NewLetterBox/>
//     <Footer/>
//     </>
//   )
// }

// export default Home

import Background from '../components/Background'
import Hero from '../components/Hero';
import { FaCircle } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import Product from './Product';
import OurPolicy from '../components/OurPolicy';
import NewLetterBox from '../components/NewsLetterBox';
import Footer from '../components/Footer';

function Home() {
   let heroData=[
    {},
    {},
    {},
    {}
]

let [heroCount,setHeroCount]=useState(0);

useEffect(()=>{
  let interval = setInterval(()=>{
    setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
  },3000)

  return ()=> clearInterval(interval)
},[])
  return (
    <>
    <div className='w-full h-screen bg-gradient-to-l from-[#141414] to-[#0c0c25]'>
      {/* Home Page */}

      <Background heroCount={heroCount} />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        heroData={heroData[heroCount]}
      />

    </div>
    <Product/>
    <OurPolicy/>
    <NewLetterBox/>
    <Footer/>
    </>
  )
}

export default Home