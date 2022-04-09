import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import PublicWrapper from "../../components/public/PublicWrapper";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppContext } from "../../lib/context/global";
import moment from "moment";
import { getAProduct } from "../../lib/api";
import TopHeader from '../../components/public/TopHeader';

export default function Product() {
  const router = useRouter();
  const [product, setProduct] = useState();
  const [status, setStatus] = useState(false);
  const [qty, setQty] = useState(1);
  const [sharedState, updateSharedState] = useAppContext();
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    //get product from server and set the product
    setStatus(false);

    let isMounted = true;

    if (isMounted && router.query.id) {
      getAProduct(router.query.id)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data); // no more error
          setStatus(true);
          // console.log(data);
        });
    }

    if (status && product.images.length !== 0) {
      setActiveImage(product.images[0]);
    }

    return () => {
      isMounted = false;
    };
  }, [router]);

  const increment = () => {
    setQty(qty + 1);
  };

  const decrement = () => {
    setQty(qty - 1);
  };

  const swapImage = (image) => {
   const img = product.images.filter(img => image === img);
   setActiveImage(img[0]);
  //  console.log(img);
  }

  const handleAddToBag = (id) => {
    // remove the similar product
    const filtered = sharedState.cartItems.filter(
      (product) => parseInt(product.info.id) != id
    );

    //update the qty for new product sent in
    const updatedProduct = { ...product, quantity: qty };

    // add the product to all other existing products
    const newFiltered = [...filtered, updatedProduct];

    // update the global state products
    updateSharedState({
      ...sharedState,
      cartItems: newFiltered,
    });
  };

  return (
    <>
      <TopHeader
        title={product ? product.info.name : 'Products'}
      />

      <PublicWrapper>
        <Header />
        {product && (
          <Wrapper>
            {/* Cart  */}

            {!status && (
              <div className="col-span-2 place-self-center min-h-screen grid place-items-center">
                <svg
                  className="w-16 text-black stroke-current"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </div>
            )}

            {status && (
              <div className="col-span-2 grid lg:grid-cols-2">
                <One>
                  {/* Product  */}
                  <div className="space-y-12">
                    <div>
                      <div className="space-y-8">
                        <div className="h-96 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={activeImage ? activeImage : product.images[0]}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="flex space-x-4">
                          {product.images.map((image) => (
                            <div
                              key={Math.random()}
                              onClick={() => swapImage(image)}
                              className="h-16 w-16 overflow-hidden cursor-pointer rounded-md border-gray-200 opacity-30 hover:opacity-80"
                            >
                              <img
                                src={image}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium uppercase tracking-widest">
                        How to use
                      </div>
                      <div className="capitalize text-sm font-light">
                        {product.info.howtouse}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-medium uppercase tracking-widest">
                        Product Specification
                      </div>
                      <div className="capitalize text-sm font-light">
                        {`${product.info.weight_fl} FL ${product.info.weight_ml} ML`}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm font-medium uppercase tracking-widest">
                        Product Ingredients
                      </div>

                      <div className="capitalize text-sm font-light">
                        {product.info.precaution}
                      </div>
                    </div>
                  </div>
                </One>

                <Two>
                  <div className="space-y-2">
                    <div className="text-2xl capitalize font-medium tracking-tight">
                      {product.info.name}
                    </div>
                    <div className="uppercase text-3xl">
                      ${product.info.price}
                    </div>
                  </div>

                  <div className="lg:w-10/12 border-b pb-4">
                    <div className="flex justify-between items-center">
                      <div
                        disabled={qty <= 0 ? true : false}
                        onClick={decrement}
                        className="btn btn-sm btn-outline border-gray-300 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                      </div>

                      <div className="text-xl font-light">{qty}</div>

                      <button
                        onClick={increment}
                        className="btn btn-sm btn-outline border-gray-300 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="lg:flex lg:space-x-2 space-y-3 lg:space-y-0 items-center lg:w-10/12">
                    <div className="w-full">
                      <button
                        onClick={() => {
                          handleAddToBag(product.info.id);
                        }}
                        className="btn rounded-md bg-black hover:bg-gray-800 capitalize w-full"
                      >
                        add to bag
                      </button>
                    </div>

                    <div>
                      <button
                        disabled
                        className="btn rounded-md btn-outline border-none hover:bg-black capitalize lg:w-40 w-full"
                      >
                        Wishlist
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium uppercase tracking-widest">
                      estimated delivery
                    </div>
                    <div className="capitalize text-sm font-light">
                      {" "}
                      {moment(moment().add(7, "days").calendar()).format(
                        "ll"
                      )}{" "}
                      -{" "}
                      {moment(moment().add(14, "days").calendar()).format("ll")}
                    </div>
                  </div>
                </Two>
              </div>
            )}
          </Wrapper>
        )}
        {/* Footer  */}
        {/* <Footer /> */}
      </PublicWrapper>
    </>
  );
}
