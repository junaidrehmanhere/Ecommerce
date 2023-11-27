const initialState = {
  quantities: 0,
  cart: [],
};

export const ProductDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_QUANTITY":
      return { ...state, quantities: state.quantities + 1 };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        quantities: state.quantities > 0 ? state.quantities - 1 : 0,
      };
    case "ADD_TO_CART": 
    
        const updatedCart = [...state.cart, action.payload];
      return { ...state, cart: updatedCart};
    case "REMOVE_CART":
        const updatedCart1 = [...state.cart];
        updatedCart1.splice(action.payload, 1);
        console.log(updatedCart1);
        return {...state, cart:updatedCart1};
    default:
        return state;    
  }
};
