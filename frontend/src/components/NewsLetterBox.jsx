import React from 'react'

function NewLetterBox() {
    const handleSubmit=()=>{
        e.preventDefault();
        // Add your form submission logic here
        alert("Thank you for subscribing!")
    }
  return (
    <div className='w-full min-h-[40vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center py-16'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        {/* Main heading */}
        <h2 className='text-2xl md:text-4xl text-[#a5faf7] font-semibold mb-4'>
          Subscribe now & get 20% off
        </h2>
        
        {/* Subheading */}
        <p className='text-sm md:text-lg text-blue-100 font-medium mb-8 max-w-2xl mx-auto leading-relaxed'>
          Subscribe now and enjoy exclusive savings, special deals, and early access to new collections.
        </p>
        
        {/* Email subscription form */}
        <form className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'
        onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className='flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-[#a5faf7] focus:outline-none transition-colors'
            required
          />
          <button
            type="submit"
            className='px-8 py-3 bg-[#a5faf7] text-gray-900 font-semibold rounded-lg hover:bg-[#8ae8ec] transition-colors duration-300'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewLetterBox