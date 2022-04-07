import Breadcrumbs from "../../components/public/Breadcrumbs";
import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import { useAppContext } from "../../lib/context/global";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import NextButton from '../../components/public/NextButton';
import CheckoutCart from '../../components/public/CheckoutCart';

export default function Cart() {
  const router = useRouter();

  const goToProduct = (product) => {
    router.push({ pathname: "/product", query: { id: product._id } });
  };

  useEffect(() => {
    updateSharedState({ ...sharedState, cartStatus: false });
  }, []);

  const [sharedState, updateSharedState] = useAppContext();

  return (
    <PublicWrapper>
      <Header />
      <Wrapper>
        {/* Cart  */}
        <One>
          <Breadcrumbs />

          <div className="border-b pb-4">
            <div className="capitalize tracking-tight font-bold">
              Cart items
            </div>

            <div className="text-2xs">
              {/* {JSON.stringify(sharedState.cartItems, null, 4)} */}
            </div>
          </div>

          {/* Product */}

          {sharedState.cartItems.map((product) => (
            <div key={product._id} className="space-y-2 grid">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 justify-self-end hover:text-gray-800 cursor-pointer text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg> */}
              <div
                onClick={() => {
                  goToProduct(product);
                }}
                className="flex items-center justify-between space-x-4 py-2 pl-2 pr-4 border cursor-pointer bg-gray-50 hover:bg-gray-100 rounded-xl"
              >
                <div className="flex space-x-6 items-center">
                  <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={product.image}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="capitalize tracking-tight font-medium">
                      {product.name}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm">{product.quantity}</div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <div className="text-sm">${product.price}</div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex space-x-3 items-center">
                  <svg
                    onClick={() => {
                      decrementItem(product._id);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div className="text-lg font-medium">{product.quantity}</div>

                  <svg
                    onClick={() => {
                      incrementItem(product._id);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}

          {sharedState.cartItems.length === 0 &&
            <div className="text-gray-400">
              No items in cart.
            </div>
          }

          <div className="flex space-x-3 pt-10 items-center">
            <NextButton path={'/checkout/information'} status={sharedState.cartItems.length === 0 ? true : false} title={'Continue'} />
          </div>
        </One>

        <Two>
         <CheckoutCart />
        </Two>
      </Wrapper>
      <Footer />
    </PublicWrapper>
  );
}
