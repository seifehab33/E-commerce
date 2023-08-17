import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[],
        amount:0,
        totalAmount:0,
        totalPrice:0
    },
    reducers:{
        addTocart:(state,action)=>
        {
            const productId = action.payload
            try {
                const exist = state.cart.find((product) =>
                    product.id === productId.id && product.size === productId.size
                )
                if(exist)
                {
                    exist.amount++
                    exist.totalPrice += productId.totalPrice
                    state.totalAmount++
                    state.totalPrice += productId.totalPrice
                }
                else
                {
                    state.cart.push({
                        id : productId.id,
                        price:productId.price,
                        size:productId.size,
                        amount:1,
                        totalPrice:productId.price,
                        name:productId.name,
                        img : productId.img,
                        text : productId.text
                    })
                    state.totalAmount++
                    state.totalPrice += productId.price
                }
            } catch (error) {
                return error
            }
        },
        removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    }
})
export const {addTocart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer
export const addProductToCart = (productData) => {
    return async (dispatch) => {
        try {
            dispatch(addTocart(productData));
            // ... other actions or updates you need
        } catch (error) {
            // Handle error if needed
        }
    };
};