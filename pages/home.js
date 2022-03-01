import Head from "next/head";
import Product from "../components/public/product";
import { useAppContext } from "../lib/context/global";
import { products } from "../lib/data";
import SubHeader from "../components/public/subheader";
import ShoppingCart from "../components/public/shoppingcart";
import PublicWrapper from "../components/public/PublicWrapper";
import Header from '../components/public/Header';
import Footer from '../components/public/Footer';
import Wrapper from "../components/public/Grid/Wrapper";

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

        <div className="mx-auto max-w-screen-2xl w-full">
          <SubHeader />

          <div class="grid lg:grid-cols-3 gap-2 h-[40rem]">
            <div
              class="bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1994818/pexels-photo-1994818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
              }}
            >
              <div class="p-10 text-white space-y-1">
                <div class="text-3xl tracking-tight font-light">
                  Hair Essentials
                </div>
                <div class="items-center flex space-x-1">
                  <div class="text-xs">SHOP NOW</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden md:grid gap-2">
              <div
                class="bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div class="p-10 text-white space-y-1">
                  <div class="text-3xl tracking-tight font-light capitalize">
                    Tips
                  </div>
                  <div class="items-center flex space-x-1">
                    <div class="text-xs uppercase">Learn more</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                style={{
                  backgroundImage: `url('https://cdn.pixabay.com/photo/2021/09/23/17/13/shampoo-6650408_960_720.jpg')`,
                }}
              >
                <div class="p-10 text-white space-y-1">
                  <div class="text-3xl tracking-tight font-light">
                    Hair Basics
                  </div>
                  <div class="items-center flex space-x-1">
                    <div class="text-xs">SHOP NOW</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/5650025/pexels-photo-5650025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
              }}
            >
              <div class="p-10 space-y-1">
                <div class="text-3xl tracking-tight font-light">On Sale</div>
                <div class="items-center flex space-x-1">
                  <div class="text-xs">SHOP NOW</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-36">
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
        </div>

        <Footer />
      </PublicWrapper>
    </>
  );
}
