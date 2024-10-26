import { Layout } from "antd";
import "react-toastify/dist/ReactToastify.css";
import CommonLayout from "./CommonLayout";
import Container from "../ui/container";
import Footer from "../../pages/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux/featues/CartSlice";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { CreditCard } from "lucide-react";

const CartLayout = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveCart = (cartItem: any) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreseCart = (cartItem: any) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreseCart = (cartItem: any) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Layout>
      <CommonLayout />
      <ToastContainer />
      <Container>
        <div className="mt-10 sm:mt-36">
          <h1 className="text-center text-red-600 my-5 font-semibold text-2xl sm:text-3xl">
            Shopping Cart
          </h1>
          {cart.cartItems.length === 0 ? (
            <div className="text-center font-semibold min-h-80 mt-10 text-lg">
              <p>Your cart is currently empty</p>
              <div className="flex justify-center items-center">
                <ArrowLeftOutlined />
                <Link to={"/"} className="ml-2">
                  Start Shopping
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-12 gap-4 text-lg font-mono text-red-950 pl-2 sm:pl-5 py-2 border-b-2 border-gray-500">
                <div className="col-span-2 sm:col-span-6">
                  <p>PRODUCT</p>
                </div>
                <div className="hidden sm:block col-span-2 text-center">
                  <p>PRICE</p>
                </div>
                <div className="col-span-2 sm:col-span-2 text-center">
                  <p>QUANTITY</p>
                </div>
                <div className="hidden lg:ml-16 sm:block col-span-2  justify-end">
                  <p>TOTAL</p>
                </div>
              </div>

              <div>
                {cart.cartItems?.map((cartItem: any) => (
                  <div
                    key={cartItem._id}
                    className="grid grid-cols-2 sm:grid-cols-12 gap-4 text-lg font-mono text-red-950 pl-2 sm:pl-5 border-b-2 border-gray-500 py-5 mb-10"
                  >
                    <div className="col-span-2 sm:col-span-6 flex">
                      <img
                        className="w-24 h-24 sm:w-36 sm:h-36"
                        src={cartItem.imageUrl}
                        alt="image"
                      />
                      <div className="ml-5 mt-3">
                        <h3 className="text-md sm:text-lg font-semibold font-serif">
                          {cartItem.name}
                        </h3>
                        <p className="text-sm text-red-950">
                          {cartItem.description}
                        </p>
                        <button
                          onClick={() => handleRemoveCart(cartItem)}
                          className="mt-3 text-sm font-bold text-gray-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="hidden sm:block col-span-2 mt-10 text-center">
                      <p className="text-lg font-semibold">${cartItem.price}</p>
                    </div>
                    <div className="col-span-2 sm:mt-8 lg:mt-8 md:mt-8 sm:col-span-2 mx-auto my-auto text-center mt-2 border-2 border-gray-400 h-10 flex px-2 sm:px-4 font-semibold">
                      <button
                        onClick={() => handleDecreseCart(cartItem)}
                        className="text-lg"
                      >
                        -
                      </button>
                      <div className="my-auto px-3">
                        {cartItem.cartQuantity}
                      </div>
                      <button
                        onClick={() => handleIncreseCart(cartItem)}
                        className="text-lg"
                      >
                        +
                      </button>
                    </div>
                    <div className="hidden  sm:block col-span-2 font-semibold mt-9 lg:ml-16  justify-end">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center sm:mr-10 mb-10">
                <button
                  onClick={() => handleClearCart()}
                  className="border-2 border-gray-400 rounded-sm text-center p-2 h-12 my-auto w-full sm:w-28 text-gray-900 font-semibold mb-4 sm:mb-0"
                >
                  Clear Cart
                </button>
                <div className="flex flex-col items-center">
                  <div className="flex text-lg lg:text-2xl font-semibold justify-between text-red-950 mb-2">
                    <h3 className="px-5">Total : </h3>
                    <p>${cart.cartTotalAmount}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/checkout");
                    }}
                    className="my-4 bg-blue-700 w-full sm:w-64 h-10 rounded-sm text-white font-bold flex gap-2 items-center justify-center"
                  >
                    <span>Proceed Checkout</span>
                    <CreditCard className="inline" width={15} height={15} />
                  </button>
                  <Link to={"/"}>
                    <p className="text-sm font-semibold flex items-center">
                      <ArrowLeftOutlined className="mr-2" /> Continue Shopping
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </Layout>
  );
};

export default CartLayout;
