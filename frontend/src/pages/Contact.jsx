import React from 'react'
import contactImage from '../assets/contact_img.jpg' // Add your laptop/office image here

function Contact() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Page Title */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-[#a5faf7] mb-8'>
            CONTACT US
          </h1>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Left Side - Image */}
          <div className='flex justify-center lg:justify-start'>
            <div className='bg-white rounded-lg p-4 shadow-2xl max-w-md'>
              <img 
                src={contactImage} 
                alt="Office workspace with laptop" 
                className='w-full h-64 object-cover rounded-lg'
              />
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className='text-white space-y-10'>
            {/* Our Store Section */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-[#a5faf7] mb-6'>
                Our Store
              </h2>
              <div className='space-y-4'>
                <div>
                  <p className='text-lg text-gray-300'>
                    12345 Random Station
                  </p>
                  <p className='text-lg text-gray-300'>
                    random city, state, India
                  </p>
                </div>
                <div className='space-y-2'>
                  <p className='text-lg text-gray-300'>
                    tel: +91-7276922936
                  </p>
                  <p className='text-lg text-gray-300'>
                    Email: admin@AIPoweredFashionStore.com
                  </p>
                </div>
              </div>
            </div>

            {/* Careers Section */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-[#a5faf7] mb-6'>
                Careers at AI Powered Fashion Store
              </h2>
              <p className='text-lg text-gray-300 mb-6'>
                Learn more about our teams and job openings
              </p>
              <button className='border-2 border-gray-400 text-white px-8 py-3 rounded-lg hover:bg-gray-700 hover:border-[#a5faf7] transition-all duration-300 text-lg font-medium'>
                Explore Jobs
              </button>
            </div>

            {/* Contact Form */}
            <div className='bg-gray-800/50 border border-gray-600 rounded-lg p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-[#a5faf7] mb-6'>
                Get in Touch
              </h3>
              <form className='space-y-4'>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#a5faf7] focus:outline-none transition-colors'
                    placeholder='Your full name'
                  />
                </div>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#a5faf7] focus:outline-none transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Subject
                  </label>
                  <input
                    type='text'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#a5faf7] focus:outline-none transition-colors'
                    placeholder='Subject of your message'
                  />
                </div>
                <div>
                  <label className='block text-gray-300 mb-2 font-medium'>
                    Message
                  </label>
                  <textarea
                    rows='5'
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#a5faf7] focus:outline-none transition-colors resize-vertical'
                    placeholder='Your message here...'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-[#a5faf7] text-gray-900 py-3 rounded-lg font-semibold hover:bg-[#8ae8ec] transition-colors duration-300'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center bg-gray-800/50 border border-gray-600 rounded-lg p-6'>
            <div className='text-3xl text-[#a5faf7] mb-4'>📍</div>
            <h3 className='text-lg font-bold text-white mb-2'>Visit Us</h3>
            <p className='text-gray-300 text-sm'>
              Come visit our physical store location
            </p>
          </div>
          
          <div className='text-center bg-gray-800/50 border border-gray-600 rounded-lg p-6'>
            <div className='text-3xl text-[#a5faf7] mb-4'>📞</div>
            <h3 className='text-lg font-bold text-white mb-2'>Call Us</h3>
            <p className='text-gray-300 text-sm'>
              Mon-Fri: 9AM-6PM<br />
              Sat-Sun: 10AM-4PM
            </p>
          </div>
          
          <div className='text-center bg-gray-800/50 border border-gray-600 rounded-lg p-6'>
            <div className='text-3xl text-[#a5faf7] mb-4'>✉️</div>
            <h3 className='text-lg font-bold text-white mb-2'>Email Us</h3>
            <p className='text-gray-300 text-sm'>
              We reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact