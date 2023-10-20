import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import { CartItemProps } from "../pages/CartPage";
import { ProductItemProps } from "../components/Product/ProductItem";

// Define a type for the slice state
interface UserState {
  value: number;
  cart: CartItemProps[];
  wishilist: ProductItemProps[];
}
type CartItemKey = keyof CartItemProps;

// Define the initial state using that type
const initialState = {
  value: 0,
  cart: [
    {
      id: 1,
      src: 1,
      to: "/product/detail/tops",
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
      quantity: 2,
    },
    {
      id: 3,
      src: 5,
      to: "/product/detail/tops",
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
      quantity: 1,
    },
  ],
  wishilist: [],
} as UserState;

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setCartItemQuantity: (
      state: UserState,
      action: PayloadAction<{
        index: number;
        key: CartItemKey;
        value: CartItemProps[CartItemKey];
      }>
    ) => {
      const { index, key, value } = action.payload;
      state.cart = state.cart.map((item: CartItemProps, number: number) => {
        const tempItem: CartItemProps = item;
        if (number === index) {
          tempItem[key] = value;
        }
        return tempItem;
      });
      // state.cart.push(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount, setCartItemQuantity } =
  userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value;

export default userSlice.reducer;
