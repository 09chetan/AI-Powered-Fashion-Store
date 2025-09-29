//  import User from "../model/usermodel.js";

// export const addToCart = async (req, res) => {
//   try {
//     const { itemId, size } = req.body;

//     const userData = await User.findById(req.userId);

//     // Check if user exists
//     if (!userData) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Ensure cartData is initialized
//     let cartData = userData.cartData || {};

//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }

//     await User.findByIdAndUpdate(req.userId, { cartData });

//     return res.status(201).json({ message: "Added to cart" });
//   } catch (error) {
//     console.error("addToCart error:", error);
//     return res.status(500).json({ message: "addToCart error" });
//   }
// };



// export const removeFromCart = (req, res) => {
//   try {
//     const { itemId, size } = req.body;
//     res.json({
//       success: true,
//       message: `Item ${itemId} with size ${size} removed from cart`,
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export const getCart = (req, res) => {
//   try {
//     res.json({ success: true, cart: [] }); // placeholder empty cart
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// import User from "../model/usermodel.js";

// export const addToCart = async (req, res) => {
//   try {
//     console.log("🛒 ADD TO CART CALLED");
//     console.log("📥 Request body:", req.body);
//     console.log("👤 User ID from middleware:", req.userId);
    
//     const { itemId, size } = req.body;

//     if (!itemId || !size) {
//       console.log("❌ Missing itemId or size");
//       return res.status(400).json({ success: false, message: "ItemId and size required" });
//     }

//     console.log("🔍 Finding user with ID:", req.userId);
//     const userData = await User.findById(req.userId);
//     console.log("👤 User found:", userData ? "YES" : "NO");

//     if (!userData) {
//       console.log("❌ User not found in database");
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     console.log("📦 Current cartData:", userData.cartData);

//     // Ensure cartData is initialized
//     let cartData = userData.cartData || {};
//     console.log("📦 Initial cartData:", cartData);

//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//         console.log(`➕ Incremented ${itemId}-${size} to ${cartData[itemId][size]}`);
//       } else {
//         cartData[itemId][size] = 1;
//         console.log(`🆕 Added new size ${size} for ${itemId}`);
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//       console.log(`🆕 Added new item ${itemId} with size ${size}`);
//     }

//     console.log("📦 Updated cartData:", cartData);
//     console.log("💾 Saving to database...");

//     // Update the user's cart in database
//     const updateResult = await User.findByIdAndUpdate(
//       req.userId, 
//       { cartData }, 
//       { new: true } // Return updated document
//     );

//     console.log("✅ Update result:", updateResult ? "SUCCESS" : "FAILED");
//     console.log("📦 Saved cartData:", updateResult?.cartData);

//     return res.status(200).json({ 
//       success: true, 
//       message: "Added to cart", 
//       cart: cartData,
//       debug: {
//         userId: req.userId,
//         itemId,
//         size,
//         updatedCart: updateResult?.cartData
//       }
//     });

//   } catch (error) {
//     console.error("❌ addToCart error:", error);
//     return res.status(500).json({ 
//       success: false, 
//       message: "addToCart error",
//       error: error.message 
//     });
//   }
// };

// export const getCart = async (req, res) => {
//   try {
//     console.log("🔍 GET CART CALLED");
//     console.log("👤 User ID:", req.userId);
    
//     const userData = await User.findById(req.userId);
//     console.log("👤 User found:", userData ? "YES" : "NO");

//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     const cartData = userData.cartData || {};
//     console.log("📦 Retrieved cartData:", cartData);
    
//     res.json({ 
//       success: true, 
//       cart: cartData 
//     });
//   } catch (error) {
//     console.error("❌ getCart error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// export const removeFromCart = async (req, res) => {
//   try {
//     const { itemId, size } = req.body;

//     const userData = await User.findById(req.userId);

//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     if (cartData[itemId] && cartData[itemId][size]) {
//       cartData[itemId][size] -= 1;
      
//       if (cartData[itemId][size] <= 0) {
//         delete cartData[itemId][size];
        
//         if (Object.keys(cartData[itemId]).length === 0) {
//           delete cartData[itemId];
//         }
//       }
//     }

//     await User.findByIdAndUpdate(req.userId, { cartData });

//     res.json({
//       success: true,
//       message: `Item ${itemId} with size ${size} updated in cart`,
//       cart: cartData
//     });
//   } catch (error) {
//     console.error("removeFromCart error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


import User from "../model/usermodel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

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

    await User.findByIdAndUpdate(req.userId, { cartData });

    return res.status(200).json({ 
      success: true, 
      message: "Added to cart", 
      cart: cartData 
    });

  } catch (error) {
    console.error("addToCart error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "addToCart error" 
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;

    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (cartData[itemId] && cartData[itemId][size]) {
      cartData[itemId][size] -= 1;
      
      if (cartData[itemId][size] <= 0) {
        delete cartData[itemId][size];
        
        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      }
    }

    await User.findByIdAndUpdate(req.userId, { cartData });

    res.json({
      success: true,
      message: "Item removed from cart",
      cart: cartData
    });
  } catch (error) {
    console.error("removeFromCart error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};
    
    res.json({ 
      success: true, 
      cart: cartData 
    });
  } catch (error) {
    console.error("getCart error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};