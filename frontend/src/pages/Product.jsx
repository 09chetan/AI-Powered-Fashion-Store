import React from 'react'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

function Product() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        
        {/* Latest Collection Section */}
        <section className='mb-16'>
          <div className='text-center mb-12'>
            <LatestCollection />
          </div>
        </section>
        
        {/* Best Seller Section */}
        <section>
          <div className='text-center'>
            <BestSeller />
          </div>
        </section>
        
      </div>
    </div>
  )
}

export default Product