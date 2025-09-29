// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './authcontext'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// export const shopDataContext = createContext()

// function ShopContext({ children }) {

//     let {productId}=useParams()
//     let {currency,addToCart}=useContext(shopDataContext)
//     let [products, setProducts] = useState([])
//     let [search, setSearch] = useState('')
//     let [showsearch, setShowSearch] = useState(false)
//     let { serverUrl } = useContext(authDataContext)
//     let [cartItem, setCartItem] = useState({});
//     let curreny = '$';
//     let delivery_fee = 40;

//     const getProducts = async () => {
//         try {
//             let result = await axios.get(serverUrl + "/api/product/list")
//             // console.log(result.data)
//             setProducts(result.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             console.log("Select Product Size");
//             return;
//         }

//         let cartData = structuredClone(cartItem); // Clone the product

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItem(cartData);
//     }

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItem) {
//             for (const item in cartItem[items]) {
//                 try {
//                     if (cartItem[items][item] > 0) {
//                         totalCount += cartItem[items][item]
//                     }
//                 } catch (error) {

//                 }
//             }
//         }
//     }

//     useEffect(() => {
//         getProducts()
//     })
//    let value = {
//     products, 
//     currency, 
//     delivery_fee,
//     getProducts,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItem,
//     addToCart,
//     getCartCount,
//     setCartItem
// }
//     return (
//         <div>
//             <shopDataContext.Provider value={value}>
//                 {children}
//             </shopDataContext.Provider>
//         </div>
//     )
// }

// export default ShopContext


// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './authcontext'
// import axios from 'axios'
// import {userDataContext} from './UserContext'
// export const shopDataContext = createContext()

// function ShopContext({ children }) {
//     let [products, setProducts] = useState([])
//     let [search, setSearch] = useState('')
//     let {userData}=useContext(userDataContext)
//     let [showsearch, setShowSearch] = useState(false)
//     let { serverUrl } = useContext(authDataContext)
//     let [cartItem, setCartItem] = useState({});
//     let currency = '$'; // Fixed typo: curreny -> currency
//     let delivery_fee = 40;

//     const getProducts = async () => {
//         try {
//             let result = await axios.get(serverUrl + "/api/product/list")
//             console.log(result.data)
//             setProducts(result.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             console.log("Select Product Size");
//             return;
//         }

//         let cartData = structuredClone(cartItem); // Clone the cart

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItem(cartData);
//         // console.log("Cart updated:", cartData);
//    if (userData) {
//         try {
//         let result=await axios.post(serverUrl + '/api/cart/add', { itemId, size }, { withCredentials: true });
//         console.log(result.data)

//         } catch (error) {
//             console.log(error);

//         }
//     }else{
//         console.log("Add error")
//     }


//     }




//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItem) {
//             for (const item in cartItem[items]) {
//                 try {
//                     if (cartItem[items][item] > 0) {
//                         totalCount += cartItem[items][item]
//                     }
//                 } catch (error) {
//                     console.log("Error counting cart items:", error);
//                 }
//             }
//         }
//         return totalCount; // Added return statement
//     }

//     useEffect(() => {
//         getProducts()
//     }, []) // Added dependency array to prevent infinite calls

//     let value = {
//         products, 
//         currency, 
//         delivery_fee,
//         getProducts,
//         search,
//         setSearch,
//         showsearch, // Fixed typo: showSearch -> showsearch (to match state variable)
//         setShowSearch,
//         cartItem,
//         addToCart,
//         getCartCount,
//         setCartItem
//     }

//     return (
//         <div>
//             <shopDataContext.Provider value={value}>
//                 {children}
//             </shopDataContext.Provider>
//         </div>
//     )
// }

// export default ShopContext


// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { authDataContext } from './authcontext'
// import axios from 'axios'
// import {userDataContext} from './UserContext'
// export const shopDataContext = createContext()

// function ShopContext({ children }) {
//     let [products, setProducts] = useState([])
//     let [search, setSearch] = useState('')
//     let {userData} = useContext(userDataContext)
//     let [showsearch, setShowSearch] = useState(false)
//     let { serverUrl } = useContext(authDataContext)
//     let [cartItem, setCartItem] = useState({});
//     let currency = '$';
//     let delivery_fee = 40;

//     const getProducts = async () => {
//         try {
//             let result = await axios.get(serverUrl + "/api/product/list")
//             console.log(result.data)
//             setProducts(result.data)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     // Fetch cart from server
//     const getCartFromServer = async () => {
//         if (!userData) return;

//         try {
//             let result = await axios.get(serverUrl + '/api/cart/get', { withCredentials: true });
//             if (result.data.success && result.data.cart) {
//                 setCartItem(result.data.cart);
//             }
//         } catch (error) {
//             console.log("Error fetching cart:", error);
//         }
//     }

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             console.log("Select Product Size");
//             return;
//         }

//         if (!userData) {
//             console.log("Please login to add items to cart");
//             return;
//         }

//         try {
//             // Send to server first
//             let result = await axios.post(serverUrl + '/api/cart/add', 
//                 { itemId, size }, 
//                 { withCredentials: true }
//             );

//             if (result.data.message === "Added to cart") {
//                 // Update local state only after successful server update
//                 let cartData = structuredClone(cartItem);

//                 if (cartData[itemId]) {
//                     if (cartData[itemId][size]) {
//                         cartData[itemId][size] += 1;
//                     } else {
//                         cartData[itemId][size] = 1;
//                     }
//                 } else {
//                     cartData[itemId] = {};
//                     cartData[itemId][size] = 1;
//                 }

//                 setCartItem(cartData);
//                 console.log("Item added to cart successfully");
//             }

//         } catch (error) {
//             console.log("Error adding to cart:", error);
//             // Optionally show user-friendly error message
//         }
//     }

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItem) {
//             for (const item in cartItem[items]) {
//                 try {
//                     if (cartItem[items][item] > 0) {
//                         totalCount += cartItem[items][item]
//                     }
//                 } catch (error) {
//                     console.log("Error counting cart items:", error);
//                 }
//             }
//         }
//         return totalCount;
//     }

//     // Load products and cart when component mounts
//     useEffect(() => {
//         getProducts()
//     }, [])

//     // Load cart when user data changes
//     useEffect(() => {
//         if (userData) {
//             getCartFromServer();
//         } else {
//             setCartItem({}); // Clear cart if user logs out
//         }
//     }, [userData])

//     let value = {
//         products, 
//         currency, 
//         delivery_fee,
//         getProducts,
//         search,
//         setSearch,
//         showsearch,
//         setShowSearch,
//         cartItem,
//         addToCart,
//         getCartCount,
//         setCartItem,
//         getCartFromServer
//     }

//     return (
//         <div>
//             <shopDataContext.Provider value={value}>
//                 {children}
//             </shopDataContext.Provider>
//         </div>
//     )
// }

// export default ShopContext



import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './authcontext'
import axios from 'axios'
import { userDataContext } from './UserContext'
export const shopDataContext = createContext()

function ShopContext({ children }) {
    let [products, setProducts] = useState([])
    let [search, setSearch] = useState('')
    let { userData } = useContext(userDataContext)
    let [showsearch, setShowSearch] = useState(false)
    let { serverUrl } = useContext(authDataContext)
    let [cartItem, setCartItem] = useState({});
    let currency = '$';
    let delivery_fee = 40;

    const getProducts = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/product/list")
            setProducts(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCartFromServer = async () => {
        if (!userData) return;

        try {
            let result = await axios.get(serverUrl + '/api/cart/get', { withCredentials: true });
            if (result.data.success && result.data.cart) {
                setCartItem(result.data.cart);
            }
        } catch (error) {
            console.log("Error fetching cart:", error);
        }
    }

    const addToCart = async (itemId, size) => {
        if (!size) {
            console.log("Select Product Size");
            return;
        }

        if (!userData) {
            console.log("Please login to add items to cart");
            return;
        }

        try {
            let result = await axios.post(serverUrl + '/api/cart/add',
                { itemId, size },
                { withCredentials: true }
            );

            if (result.data.message === "Added to cart") {
                let cartData = structuredClone(cartItem);

                if (cartData[itemId]) {
                    if (cartData[itemId][size]) {
                        cartData[itemId][size] += 1;
                    } else {
                        cartData[itemId][size] = 1;
                    }
                } else {
                    cartData[itemId] = {};
                    cartData[itemId][size] = 1;
                }

                setCartItem(cartData);
            }

        } catch (error) {
            console.log("Error adding to cart:", error);
        }
    }

    const getUserCart = async () => {
        try {
const result = await axios.get(serverUrl + '/api/cart/get', { withCredentials: true });        } catch (error) {
            console.log(error);
            // toast.error(error.message);
        }
    };

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
        if (userData) {
            try {
                await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true });
            } catch (error) {
                console.log(error);
                // toast.error(error.message);
            }
        }


    };
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {
                    console.log("Error counting cart items:", error);
                }
            }
        }
        return totalCount;
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItem) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItem[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalAmount;
    };


    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        if (userData) {
            getCartFromServer();
        } else {
            setCartItem({});
        }
    }, [userData])

    useEffect(() => {
        getUserCart()
    }, [])

    let value = {
        products,
        currency,
        delivery_fee,
        getProducts,
        search,
        setSearch,
        showsearch,
        setShowSearch,
        cartItem,
        addToCart,
        getCartCount,
        setCartItem,
        getCartFromServer,
        updateQuantity,
        getCartAmount
    }

    return (
        <div>
            <shopDataContext.Provider value={value}>
                {children}
            </shopDataContext.Provider>
        </div>
    )
}

export default ShopContext