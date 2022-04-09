import ShoppingCart from "./ShoppingCart";
import { useEffect } from "react";

export default function Footer() {

  useEffect(() => {
    // validateDOMNesting(...) error
    // console.log(document.querySelectorAll(" p > div "));
  }, []);

  return (
    <>
      <div className="border-t">
        <div className="py-8 px-10 flex items-center justify-between text-xs tracking-tight font-semibold">
          <div className="flex space-x-10">
            <a href="#">Refund policy</a>
            <a className="hidden md:block" href="#">Shipping policy</a>
            <a className="hidden md:block" href="#">Privacy policy</a>
            <a className="hidden md:block" href="#">Terms of service</a>
          </div>

          <a
            href="#"
            className="px-2 py-1 bg-gray-700 rounded-md flex items-center space-x-1 uppercase text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>

            <div>Track order</div>
          </a>
        </div>
      </div>

      <ShoppingCart />
    </>
  );
}
