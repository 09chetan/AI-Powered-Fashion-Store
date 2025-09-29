// import express from 'express'
// // import { addToCart, getUserCart, updateCart } from '../controller/cartContoller.js'
// import { addToCart, getCart as getUserCart, removeFromCart as updateCart } from '../controller/cartController.js'

// import isAuth from '../middleware/isAuth.js'
// const cartRoutes = express.Router()

// cartRoutes.post('/get', isAuth, getUserCart)
// cartRoutes.post('/add', isAuth, addToCart)
// cartRoutes.post('/update', isAuth, updateCart)


// export default cartRoutes

// import express from 'express'
// import { addToCart, getCart, removeFromCart } from '../controller/cartController.js'
// import isAuth from '../middleware/isAuth.js'

// const cartRoutes = express.Router()

// // Use GET for fetching cart data
// cartRoutes.get('/get', isAuth, getCart)
// cartRoutes.post('/add', isAuth, addToCart)
// cartRoutes.post('/update', isAuth, removeFromCart)

// export default cartRoutes






import express from 'express'
import { addToCart, getCart, removeFromCart } from '../controller/cartController.js'
import isAuth from '../middleware/isAuth.js'

const cartRoutes = express.Router()

cartRoutes.get('/get', isAuth, getCart)
cartRoutes.post('/add', isAuth, addToCart)
cartRoutes.post('/update', isAuth, removeFromCart)

export default cartRoutes