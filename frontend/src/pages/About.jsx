import React from 'react'
import aboutImage from '../assets/about_img.png' // Add your clothing rack image here
import NewLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] py-20 px-6'>
      {/* About Us Section */}
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-[#a5faf7] mb-8'>
            ABOUT US
          </h1>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          {/* Left Side - Image */}
          <div className='flex justify-center lg:justify-start'>
            <div className='relative bg-white rounded-lg p-8 shadow-2xl max-w-md'>
              {/* Replace with your actual clothing rack image */}
              <div className='bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center'>
                <img 
                  src={aboutImage} 
                  alt="Fashion clothing rack" 
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
              
              {/* OneCart Branding */}
              <div className='text-left mb-4'>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>AI Powered Fashion Store</h2>
                <p className='text-sm text-gray-600 mb-4'>
                  Slim-fit cotton shirt, breathable, stylish, comfortable, easy-care, premium quality.
                </p>
              </div>
              
              {/* Special Offer Badge */}
              <div className='absolute top-4 right-4 bg-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg border-2 border-gray-200'>
                <span className='text-xs text-gray-500 uppercase'>Special Offer</span>
                <span className='text-xl font-bold text-gray-800'>30%</span>
                <span className='text-xl font-bold text-gray-800'>OFF</span>
              </div>
              
              {/* Bottom Text */}
              <div className='text-center mt-4'>
                <p className='text-lg font-semibold text-gray-700'>SUITABLE FOR</p>
                <p className='text-lg font-semibold text-gray-700'>ALL BABIES</p>
                <div className='mt-4 bg-gray-100 p-2 rounded'>
                  <p className='text-sm text-gray-600'>WWW.AI Powered Fashion Store.COM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className='text-white space-y-6'>
            <div>
              <p className='text-lg md:text-xl leading-relaxed text-gray-300'>
                AI Powered Fashion Store born for smart, seamless shopping—created to deliver quality products, 
                trending styles, and everyday essentials in one place. With reliable service, fast 
                delivery, and great value, OneCart makes your online shopping experience simple, 
                satisfying, and stress-free.
              </p>
            </div>

            <div>
              <p className='text-lg md:text-xl leading-relaxed text-gray-300'>
                modern shoppers—combining style, convenience, and affordability. Whether it's 
                fashion, essentials, or trends, we bring everything you need to one trusted platform 
                with fast delivery, easy returns, and a customer-first shopping experience you'll love.
              </p>
            </div>

            <div className='mt-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-[#a5faf7] mb-4'>
                Our Mission
              </h3>
              <p className='text-lg md:text-xl leading-relaxed text-gray-300'>
                Our mission is to redefine online shopping by delivering quality, affordability, and 
                convenience. OneCart connects customers with trusted products and brands, offering 
                a seamless, customer-focused experience that saves time, adds value, and fits every 
                lifestyle and need.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='mt-20'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[#a5faf7] mb-8'>
              WHY CHOOSE US
            </h2>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Quality Assurance */}
            <div className='bg-gray-800/50 border border-gray-600 rounded-lg p-8 text-center hover:bg-gray-700/50 transition-all duration-300'>
              <h3 className='text-xl md:text-2xl font-bold text-[#a5faf7] mb-6'>
                Quality Assurance
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                We guarantee quality through strict checks, reliable sourcing, and a commitment to 
                customer satisfaction always.
              </p>
            </div>

            {/* Convenience */}
            <div className='bg-gray-800/50 border border-gray-600 rounded-lg p-8 text-center hover:bg-gray-700/50 transition-all duration-300'>
              <h3 className='text-xl md:text-2xl font-bold text-[#a5faf7] mb-6'>
                Convenience
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                Shop easily with fast delivery, simple navigation, secure checkout, and everything 
                you need in one place.
              </p>
            </div>

            {/* Customer Service */}
            <div className='bg-gray-800/50 border border-gray-600 rounded-lg p-8 text-center hover:bg-gray-700/50 transition-all duration-300'>
              <h3 className='text-xl md:text-2xl font-bold text-[#a5faf7] mb-6'>
                Exceptional Customer Service
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                Our dedicated support team ensures quick responses, helpful solutions, and a smooth 
                shopping experience every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About