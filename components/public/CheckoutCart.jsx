import { useAppContext } from "../../lib/context/global";
import { useEffect, useState } from "react";

export default function CheckoutCart() {
  const [sharedState, updateSharedState] = useAppContext();
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [shipping, setShipping] = useState(35);

  useEffect(() => {
    let a = 0;
    sharedState.cartItems.map((product) => {
      a = a + product.info.price * product.quantity;
    });
    setTotal(a);

    // set tax rate
    const rate = (5 / 100) * total;
    setTaxes(rate);

    updateSharedState({
      ...sharedState,
      total_price: total + rate + shipping,
    });

  }, [sharedState.cartItems, total]);

  return (
    <div className="space-y-6">
      {sharedState.cartItems.map((product) => (
        <div key={product.info.id} className="flex items-center justify-between space-x-4">
          <div className="flex space-x-6 items-center">
            <div className="rounded-lg hover:bg-stone-100 cursor-pointer p-2 relative inline-block">
              <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src={product.images[0]}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-2xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full">
                {product.quantity}
              </span> */}
            </div>

            <div className="space-y-1"> 
              <div className="text-sm font-medium capitalize">
                {product.info.name}
              </div>
              <div className="text-xs uppercase">60mg / FL OZ</div>
              <div className="text-xs uppercase">x {product.quantity}</div>
            </div>
          </div>

          <div className="font-mono text-lg">
            ${product.info.price * product.quantity}
          </div>
        </div>
      ))}

      <hr />
      {/* <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Discount code"
            className="block w-full rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          />
          <button className="btn w-28" disabled>
            apply
          </button>
        </div>

        <hr /> */}

      {/* Order details  */}
      <div>
        <div className="flex justify-between">
          <div className="text-sm text-gray-600">Subtotal</div>
          <div className="font-medium font-mono text-lg">${total}</div>
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-gray-600">Shipping</div>
          <div className="font-medium font-mono text-lg">${shipping}</div>
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-gray-600">Taxes</div>
          <div className="font-medium font-mono text-lg">
            ${parseFloat(taxes).toFixed(2)}
          </div>
        </div>
      </div>

      <hr />

      {/* Total  */}
      <div className="flex justify-between">
        <div className="text-sm text-gray-600">Total</div>
        <div className="font-medium font-mono text-xl">
          ${total + taxes + shipping}
        </div>
      </div>
    </div>
  );
}
