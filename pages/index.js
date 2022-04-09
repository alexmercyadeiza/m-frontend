import Head from "next/head";
import Product from "../components/public/Product";
import { useAppContext } from "../lib/context/global";
import { products } from "../lib/data";
import SubHeader from "../components/public/SubHeader";
import PublicWrapper from "../components/public/PublicWrapper";
import Header from "../components/public/Header";
import Footer from "../components/public/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import TopHeader from '../components/public/TopHeader';

export default function Home() {
  const [sharedState, updateSharedState] = useAppContext();
  const router = useRouter();
  const [prods, setProds] = useState([]);

  const addToCart = (product) => {
    updateSharedState({
      ...sharedState,
      cartItems: [...sharedState.cartItems, product],
      cartTotalPrice: sharedState.cartTotalPrice + product.price,
    });
  };

  useEffect(() => {

      const p = async () => {
        var res = await getProducts();
        setProds(res.data);     
      }
      
      p();

  }, [])

  // const p = async () => {
  //     getProducts();
  // }

  const goToProduct = (product) => {
    router.push({ pathname: "/product", query: { id: product.id } });
  };

  return (
    <>
      <TopHeader title={"Home"} />
      <PublicWrapper>
        <Header />
        {/* <SubHeader /> */}

        {/* {JSON.stringify()} */}

        <div className="md:mx-10 mx-8 space-y-16 md:py-16 py-8 mb-20">
          <div className="grid lg:grid-cols-3 gap-8 h-[40rem]">
            {/* Hair Essentials */}
            <div
              onClick={() => router.push("/products/hair-essentials")}
              className="cursor-pointer bg-blend-overlay bg-zinc-600 rounded bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1972113/pexels-photo-1972113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              <div className="p-10 text-white space-y-1">
                <div className="text-3xl tracking-tight font-light">
                  Braided Wigs
                </div>
                <div className="items-center flex space-x-1">
                  <div className="text-xs">SHOP NOW</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
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
            <div className="hidden md:grid gap-8">
              {/* Hair Tips */}
              <div
                className="cursor-pointer bg-blend-overlay bg-zinc-600 rounded bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/2661255/pexels-photo-2661255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
                }}
              >
                <div className="p-10 text-white space-y-1">
                  <div className="text-3xl tracking-tight font-light capitalize">
                    Tips
                  </div>
                  <div className="items-center flex space-x-1">
                    <div className="text-xs tracking-widest uppercase">
                      [coming soon]
                    </div>
                    <div>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Hair Basics */}
              <div
                onClick={() => router.push("/products/hair-basics")}
                className="cursor-pointer bg-blend-overlay bg-zinc-600 rounded bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                style={{
                  backgroundImage: `url('https://cdn.pixabay.com/photo/2021/09/23/17/13/shampoo-6650408_960_720.jpg')`,
                }}
              >
                <div className="p-10 text-white space-y-1">
                  <div className="text-3xl tracking-tight font-light">
                    Hair Basics
                  </div>
                  <div className="items-center flex space-x-1">
                    <div className="text-xs">SHOP NOW</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
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
            {/* On Sale */}
            <div
              className="cursor-pointer bg-blend-overlay bg-zinc-600 rounded bg-center bg-cover transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/7319324/pexels-photo-7319324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              }}
            >
              <div className="p-10 space-y-1 text-white">
                <div className="text-3xl tracking-tight font-light">
                  On Sale
                </div>
                <div className="items-center flex space-x-1">
                  <div className="text-xs">SHOP NOW</div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
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

          <div className="text text-center uppercase tracking-widest font-bold">
            <span className="text-yellow-600">[</span> all items{" "}
            <span className="text-yellow-600">]</span>
          </div>

          <div className="w-full">
            <div className="grid md:grid-cols-5 gap-8">
              {prods.map((p) => (
                <Product
                  key={p.id}
                  price={p.price}
                  currency={"$"}
                  name={p.name}
                  image={p.image}
                  addtocart={() => {
                    addToCart(p);
                  }}
                  viewProduct={() => {
                    goToProduct(p);
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
