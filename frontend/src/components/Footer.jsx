import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <footer className='w-full bg-gradient-to-r from-slate-50 to-gray-100 mt-16'>
            <div className='max-w-7xl mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    
                    {/* Company Info Section */}
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <img 
                                src={logo} 
                                alt="AI Powered Fashion Store Logo" 
                                className='w-10 h-10 md:w-12 md:h-12' 
                            />
                            <h2 className='text-xl md:text-2xl font-bold text-gray-800'>
                                AI Powered Fashion Store
                            </h2>
                        </div>
                        
                        <p className='text-gray-600 text-sm md:text-base leading-relaxed max-w-md'>
                            Your all-in-one online shopping destination, offering top-quality products, 
                            unbeatable deals, and fast delivery—all backed by trusted service designed 
                            to make your life easier every day.
                        </p>
                        
                        <p className='text-gray-700 font-medium text-sm'>
                            Fast. Easy. Reliable. AI Powered Fashion Store Shopping
                        </p>
                    </div>

                    {/* Company Links Section */}
                    <div className='space-y-4'>
                        <h3 className='text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-wide'>
                            Company
                        </h3>
                        <ul className='space-y-3'>
                            <li>
                                <a 
                                    href="#" 
                                    className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm md:text-base'
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm md:text-base'
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm md:text-base'
                                >
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className='text-gray-600 hover:text-gray-800 transition-colors duration-300 text-sm md:text-base'
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact/Support Section */}
                    <div className='space-y-4'>
                        <h3 className='text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-wide'>
                            Get In Touch
                        </h3>
                        <div className='space-y-3'>
                            <div className='text-gray-600 text-sm md:text-base'>
                                <p>📞 +1-234-567-8900</p>
                            </div>
                            <div className='text-gray-600 text-sm md:text-base'>
                                <p>✉️ support@aifashionstore.com</p>
                            </div>
                            <div className='text-gray-600 text-sm md:text-base'>
                                <p>📍 123 Fashion Street, Style City, SC 12345</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-300 mt-12 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-gray-600 text-sm text-center md:text-left'>
                            © 2024 AI Powered Fashion Store. All rights reserved.
                        </p>
                        <div className='flex gap-6'>
                            <a href="#" className='text-gray-500 hover:text-gray-700 transition-colors'>
                                Terms of Service
                            </a>
                            <a href="#" className='text-gray-500 hover:text-gray-700 transition-colors'>
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer