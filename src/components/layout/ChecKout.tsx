import { useEffect, useState } from "react";
import { useCreteOrderMutation } from "../../redux/api/baseApi";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../redux/featues/CartSlice";

const CheckOutPage = () => {
  const [createOrder] = useCreteOrderMutation();

  const [user, setUser] = useState({
    name: "SH Roni",
    email: "example@gmail.com",
    phone: "0123456789",
    address: "Dhaka, Bangladesh",
  });

  const cart = useSelector((state: any) => state.cart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Handle input changes
  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      user,
      products: cart.cartItems.map((item: any) => ({
        product: item?._id,
        quantity: item?.cartQuantity,
      })),
    };
    // console.log(data);
    try {
      const res = await createOrder(data).unwrap();
      console.log(res);
      if (res.success) {
        console.log(res);
        window.location.href = res.data.payment_url;
      } else {
        console.error("Order creation failed:", res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-fuchsia-700 mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8 border p-5 rounded">
          <h3 className="text-xl font-semibold text-fuchsia-700 mb-4">
            User Information
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 text-left">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fuchsia-700 mb-4">
            Order Summary
          </h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 font-mono  text-green-900">
                <th className="text-left py-3 px-4 font-bold text-base">
                  Product
                </th>
                <th className="text-center py-3 px-4 font-bold text-base">
                  Quantity
                </th>
                <th className="text-center py-3 px-4 font-bold text-base">
                  Unit Price
                </th>
                <th className="text-center py-3 px-4 font-bold text-base">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems?.map((item: any) => (
                <tr
                  key={item._id}
                  className="border-b text-green-800 font-semibold"
                >
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 text-center px-4">{item.cartQuantity}</td>
                  <td className="py-3 text-center px-4">${item.price}</td>
                  <td className="py-3 text-center px-4">
                    ${item.price * item.cartQuantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex p-4  justify-end mr-5 gap-10">
            <h1 className="text-2xl font-bold text-blue-950 font-serif">
              Total :
            </h1>
            <p className="font-bold text-green-900 text-2xl">
              ${cart.cartTotalAmount}
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutPage;
