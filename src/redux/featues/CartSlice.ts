import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  cartQuantity: number;
  stockQuantity: number;
}

interface CartState {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[existingIndex].name} quantity`,
          {
            position: "bottom-left",
          }
        );
      } else {
        // Check if stock quantity is available
        if (action.payload.stockQuantity > 0) {
          const tempProductItem: CartItem = {
            ...action.payload,
            cartQuantity: 1,
          };
          state.cartItems.push(tempProductItem);
          toast.success(`${action.payload.name} added to cart`, {
            position: "bottom-left",
          });
        } else {
          toast.error(`Sorry, ${action.payload.name} is out of stock.`, {
            position: "bottom-left",
          });
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //DecraseCart Function..

    decreaseCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info(`Decreased ${action.payload.name} from cart quantity`, {
            position: "bottom-left",
          });
        } else {
          const nextCartItems = state.cartItems.filter(
            (item) => item._id !== action.payload._id
          );
          state.cartItems = nextCartItems;
          toast.error(`${action.payload.name}removed from cart`, {
            position: "bottom-left",
          });
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Remove From Cart...
    removeFromCart(state, action: PayloadAction<CartItem>) {
      const nextCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      toast.error(`${action.payload.name}removed from cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //Get Totals....
    getTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));
    },

    //Clear cart...
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
