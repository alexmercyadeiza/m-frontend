import Head from "next/head";
import Product from "../components/public/product";
import { useAppContext } from "../lib/context/global";
import { products } from "../lib/data";
import SubHeader from "../components/public/subheader";
import ShoppingCart from "../components/public/shoppingcart";
import PublicWrapper from "../components/public/PublicWrapper";
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';

export default function Home() {
  const [sharedState, updateSharedState] = useAppContext();

  const addToCart = (product) => {
    updateSharedState({
      ...sharedState,
      cartItems: [...sharedState.cartItems, product],
      cartTotalPrice: sharedState.cartTotalPrice + product.price,
    });
  };

  return (
    <>
      <ShoppingCart />
      <PublicWrapper>
        <Header />

        <SubHeader />

        <div className="w-full border-b p-10">
          <div className="flex items-center max-w-screen-2xl mx-auto justify-between">
            <div className="flex items-center space-x-1 border px-3 py-2 rounded-xl hover:bg-stone-100 cursor-pointer border-stone-300">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div className="tracking-tight font-semibold text-gray-500">
                All Products
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto p-10 py-36">
          <div className="grid grid-cols-5 gap-14">
            {products.map((product) => (
              <Product
                key={product._id}
                price={product.price}
                currency={"$"}
                name={product.name}
                image={product.image}
                addtocart={() => {
                  addToCart(product);
                }}
              />
            ))}
          </div>
        </div>
        <Footer />
      </PublicWrapper>
    </>
  );
}
