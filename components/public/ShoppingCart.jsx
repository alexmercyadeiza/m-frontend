import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { useAppContext } from "../../lib/context/global";
import { useRouter } from 'next/router';
import _ from 'lodash';

export default function ShoppingCart() {
  const [sharedState, updateSharedState] = useAppContext();
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]); 

  const router = useRouter();

  const setClose = () => {
    updateSharedState({ ...sharedState, cartStatus: false });
  };

  const removeProduct = (id, price) => {
    const cartItems = sharedState.cartItems.filter((item) => item.info.id != id);
    updateSharedState({
      ...sharedState,
      cartItems,
    });
  };

  
  useEffect(() => {
    let a = 0;
    sharedState.cartItems.map((product) => {
      a = a + (product.info.price * product.quantity);
    });
    setTotal(a);
    // console.log(total);

  }, [sharedState.cartItems])

  return (
   
      <Transition.Root show={sharedState.cartStatus} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setClose}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <XIcon
                            onClick={setClose}
                            className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {sharedState.cartItems.map((product) => (
                              <li key={product.info.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <img
                                    src={product.images[0]}
                                    alt={product.info.name}
                                    className="w-full h-full object-center object-cover"
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex capitalize justify-between text-base tracking-tight font-medium text-gray-900">
                                      <h3>{product.info.name}</h3>
                                      <p className="ml-4 font-mono">
                                        ${product.info.price * product.quantity}
                                      </p>
                                    </div>


                                    <p className="mt-1 text-sm text-gray-500">
                                    x {product.quantity}
                                  </p>
                                  </div>
                                  <div className="flex-1 flex items-end justify-between text-sm">
                                    {/* <p className="text-gray-500">
                                    Qty {product.quantity}
                                  </p> */}

                                    <div className="flex">
                                      <div
                                        onClick={() => {
                                          removeProduct(
                                            product.info.id,
                                            product.info.price
                                          );
                                        }}
                                        className="cursor-pointer font-medium text-2xs text-yellow-600 hover:text-yellow-500"
                                      >
                                        Remove
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex tracking-tight justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p className="font-mono">
                          $ {total}
                        </p>
                      </div>
                      <p className="mt-0.5 tracking-tight text-sm text-gray-500">
                        Shipping will be calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <div onClick={() => {
                          router.push('/checkout/cart')
                        }} className="cursor-pointer flex justify-center items-center px-6 py-3 border border-transparent tracking-tight shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
                          Checkout
                        </div>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        {/* <div>
                          or{" "}
                          <div
                            className="cursor-pointer text-yellow-600 font-medium rounded-none hover:text-yellow-500"
                            onClick={setClose}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    
  );
}
