
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image:[],
    totalPrice : 0,
}

export const productslice = createSlice({
  name: 'thaliapp',
  initialState,
  reducers: {

    //show images function
    showImage:(state,action)=>{
      
        action.payload.totalQuantityPrice = action.payload.price * action.payload.quantity;
        state.image.push(action.payload);
    },

    //add quantity function
    increaseQuantity:(state,action)=>{

      state.image[action.payload].quantity = state.image[action.payload].quantity + 1;
            state.image[action.payload].totalQuantityPrice = state.image[action.payload].price * state.image[action.payload].quantity
    },

    //minus quantity function
    decreaseQuantity:(state,action)=>{
      state.image[action.payload].quantity = state.image[action.payload].quantity - 1;
            state.image[action.payload].totalQuantityPrice = state.image[action.payload].price * state.image[action.payload].quantity
    },

    //delete quantity function
    deleteImage:(state,action)=>{
      state.image.splice(action.payload,1)
  },


//calculate total quantity wise
calculateTotal:(state)=>{
  let price = 0
   for(let i = 0 ; i < state.image.length; i++){
       price = price + state.image[i].totalQuantityPrice
   }
   state.totalPrice = price;
},

  },

})

// Action creators are generated for each case reducer function
export const { showImage,deleteImage,increaseQuantity,decreaseQuantity,calculateTotal} = productslice.actions;

export default productslice.reducer;