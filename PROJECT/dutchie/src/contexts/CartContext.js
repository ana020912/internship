
import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

const initialCartState = {
  cardList: [],
  totalPrice: 0
}

export const ACTIONS = {
  ADD_ITEM: 'added',
  DELETE_ITEM: 'deleted'
}

function cartReducer(cartState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      console.log('add item');
      return {
        cardList: [...cartState.cardList,
        {
          id: action.payload.itemId, 
          name: action.payload.itemName, 
          price: action.payload.itemPrice
        }],
        totalPrice: cartState.totalPrice + action.payload.price
        }
    }
  }
}

export function useCartContext() {
  const cart = useContext(CartContext);
  if (cart === undefined) {
    throw new Error ("undefined cart");
  }
  return cart;
}

export function useCartDispatchContext() {
  const cart = useContext(CartDispatchContext);
  return cart;
}

export default function CartContextProvider({ children }) {

  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={cartState}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}


