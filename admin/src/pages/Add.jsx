import { useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import upload from '/src/assets/upload.png'
import axios from "axios";
import { authDataContext } from '../context/AuthContext'
import { useContext } from 'react'

function Add() {
  let [image1, setImage1] = useState(false)
  let [image2, setImage2] = useState(false)
  let [image3, setImage3] = useState(false)
  let [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const handleAddProduct = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))
      formData.append("image1", image1)
      formData.append("image2", image2)
      formData.append("image3", image3)
      formData.append("image4", image4)

      let result = await axios.post(
        `${serverUrl}/api/product/addproduct`,
        formData,
        { withCredentials: true }
      );

      console.log(result.data)

      if (result.data) {
        setName("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestSeller(false)
        setCategory("Men")
        setSubCategory("TopWear")
        setSizes([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    )
  }

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-violet-950/20 text-white overflow-x-hidden">
      <Nav />
      <Sidebar />

      <div className="ml-[18%] w-[82%] min-h-screen pt-[70px]">
        <form className="w-full h-full flex flex-col gap-8 py-12 px-8 md:px-12"
          onSubmit={handleAddProduct}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
            Add Product
          </h1>

          {/* Upload Images */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <p className="text-xl font-semibold text-gray-300 mb-4">
              Upload Images
            </p>

            <div className="flex items-center justify-start gap-4 flex-wrap">
              {[image1, image2, image3, image4].map((img, idx) => {
                const setImg = [setImage1, setImage2, setImage3, setImage4][idx];
                const inputId = `image${idx + 1}`;
                
                return (
                  <label
                    key={inputId}
                    htmlFor={inputId}
                    className="w-24 h-24 md:w-32 md:h-32 cursor-pointer backdrop-blur-md bg-gray-900/70 border-2 border-gray-700 hover:border-indigo-500 rounded-xl p-2 transition-all duration-300 hover:scale-105 group"
                  >
                    <img
                      src={!img ? upload : URL.createObjectURL(img)}
                      alt=""
                      className="w-full h-full rounded-lg object-cover"
                    />
                    <input
                      type="file"
                      id={inputId}
                      hidden
                      accept="image/*"
                      onChange={(e) => setImg(e.target.files[0])}
                    />
                  </label>
                );
              })}
            </div>
          </div>

          {/* Product Name */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          {/* Product Description */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Product Description</label>
            <textarea
              placeholder="Enter product description"
              className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition resize-none h-32"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          {/* Category + Subcategory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
              <label className="text-sm font-medium text-gray-300 mb-2 block">Product Category</label>
              <select
                className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
              <label className="text-sm font-medium text-gray-300 mb-2 block">Sub Category</label>
              <select
                className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition"
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomeWear">BottomeWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <label className="text-sm font-medium text-gray-300 mb-2 block">Product Price</label>
            <input
              type="number"
              placeholder="$2000"
              className="w-full px-6 py-3 backdrop-blur-md bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 transition"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* Sizes */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <label className="text-sm font-medium text-gray-300 mb-4 block">Product Size</label>
            <div className="flex items-center justify-start gap-4 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`px-6 py-3 rounded-lg text-base font-medium cursor-pointer border-2 transition-all duration-300 ${
                    sizes.includes(size)
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-transparent shadow-lg shadow-indigo-600/40"
                      : "backdrop-blur-md bg-gray-900/70 text-gray-400 border-gray-700 hover:border-indigo-500 hover:text-indigo-400"
                  }`}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Bestseller Checkbox */}
          <div className="backdrop-blur-lg bg-gray-900/60 rounded-2xl border border-gray-800 p-6 hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="checkbox"
                className="w-5 h-5 accent-indigo-500 rounded border-gray-700 focus:ring-indigo-500 cursor-pointer"
                onChange={() => setBestSeller((prev) => !prev)}
                checked={bestseller}
              />
              <label htmlFor="checkbox" className="text-base font-medium text-gray-300 cursor-pointer">
                Add to BestSeller
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-xl hover:shadow-indigo-600/40 transition-all duration-300 hover:scale-105 active:scale-95 self-start"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add