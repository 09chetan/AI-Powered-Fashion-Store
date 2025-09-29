import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { allOrders, placeOrder, updateStatus, userOrders } from '../controller/orderController.js'  // ← Change to "placeOrder"
import adminAuth from "../middleware/adminAuth.js"; 

const orderRoutes = express.Router()

orderRoutes.post("/placeorder",isAuth,placeOrder)
orderRoutes.post("/userorder",isAuth,userOrders)


//for admin
orderRoutes.post("/list",adminAuth,allOrders)
orderRoutes.post("/status",adminAuth,updateStatus)


export default orderRoutes