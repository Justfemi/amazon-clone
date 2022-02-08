export const initialState = {
  basket: [
    {
      id:"1236",
      title:"Samsung LC49305868948942602 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5128 x 1448",
      price:104.98,
      rating:4,
      image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    },
    {
      id:"1266",
      title:"Samsung LC49305868948942602 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5128 x 1448",
      price:104.98,
      rating:4,
      image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return { 
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0 ){
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
        );
      }

      return { ...state, basket: newBasket, };
    default:
      return state;
  }
}

export default reducer;