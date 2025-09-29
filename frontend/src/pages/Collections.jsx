import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'   // ✅ Make sure this path is correct
import { shopDataContext } from '../context/ShopContext'
import Card from '../components/Card'  // ✅ Make sure this path is correct

function Collections() {
  let [showfilter, setShowfilter] = useState(false)
  let { products, search, showSearch } = useContext(shopDataContext)
  let [filterProduct, setFilterProduct] = useState([])
  let [category, setCategory] = useState([]) // Fixed typo: setCaterory -> setCategory
  let [subCategory, setSubCategory] = useState([]) // Fixed typo: setSubCaterory -> setSubCategory
  let [sortType, setSortType] = useState("relevant") // Fixed typo: relavent -> relevant

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if (showSearch && search) {
      productCopy = productCopy.filter(item => item.name.
        toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // Apply sorting to filtered products
    switch (sortType) {
      case 'low-high':
        productCopy.sort((a, b) => a.price - b.price)
        break

      case 'high-low':
        productCopy.sort((a, b) => b.price - a.price)
        break

      default:
        // Keep original order for 'relevant'
        break
    }

    setFilterProduct(productCopy)
  }

  // Initialize products when component mounts or products change
  useEffect(() => {
    if (products && products.length > 0) {
      setFilterProduct(products)
    }
  }, [products])

  // Apply filters and sorting when any dependency changes
  useEffect(() => {
    applyFilter()
  }, [category, subCategory, products, sortType,search,showSearch]) // Added sortType as dependency

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]'>

      {/* Sidebar Filters */}
      <div className='md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed'>

        <p
          className='text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer'
          onClick={() => setShowfilter(prev => !prev)}
        >
          FILTERS
        </p>

        {/* Categories */}
        <div className={`border-[2px] border-[#dedcdc] px-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter ? "" : "hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>CATEGORIES</p>
          <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'Men'}
                className='w-3'
                onChange={toggleCategory}
                checked={category.includes('Men')}
              /> Men
            </p>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'Women'}
                className='w-3'
                onChange={toggleCategory}
                checked={category.includes('Women')}
              /> Women
            </p>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'Kids'}
                className='w-3'
                onChange={toggleCategory}
                checked={category.includes('Kids')}
              /> Kids
            </p>
          </div>
        </div>

        {/* Sub-Categories */}
        <div className={`border-[2px] border-[#dedcdc] px-5 py-3 mt-6 rounded-md bg-slate-600 ${showfilter ? "" : "hidden"} md:block`}>
          <p className='text-[18px] text-[#f8fafa]'>SUB-CATEGORIES</p>
          <div className='w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col'>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'TopWear'}
                className='w-3'
                onChange={toggleSubCategory}
                checked={subCategory.includes('TopWear')}
              /> TopWear
            </p>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'BottomWear'}
                className='w-3'
                onChange={toggleSubCategory}
                checked={subCategory.includes('BottomWear')}
              /> BottomWear
            </p>
            <p className='flex items-center gap-[10px] text-[16px] font-light'>
              <input
                type="checkbox"
                value={'WinterWear'}
                className='w-3'
                onChange={toggleSubCategory}
                checked={subCategory.includes('WinterWear')}
              /> WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='lg:pl-[20%] md:py-[10px]'>
        <div className='md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Sort Dropdown */}
          <select
            className='bg-slate-600 w-[60%] md:w-[200px] h-[50px] px-[10px] text-[white] rounded-lg hover:border-[#46d1f7] border-[2px]'
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        <div className='lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]'>
          {
            filterProduct.map((item, index) => (
              <Card key={item._id || index} id={item._id} name={item.name} price={item.price} image={item.image1} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections