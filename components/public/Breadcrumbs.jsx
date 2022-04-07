import { useRouter } from "next/router";
import { useAppContext } from "../../lib/context/global";

export default function Breadcrumbs() {
  // const [sharedState, updateSharedState] = useAppContext();
  const router = useRouter();
  const inActive = `text-gray-400`;

  // const status = sharedState.cartItems.length === 0 ? false : true;

  return (
    <div className="text-2xs breadcrumbs">
      <ul>
        <li
          // onClick={() => {
          //   router.push("/checkout/cart");
          // }}
        >
          <a className={router.pathname === "/checkout/cart" ? "" : inActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
          </a>
        </li>
        <li
          // onClick={() => {
          //   router.push("/checkout/information");
          // }}
        >
          <a className={router.pathname === "/checkout/information" ? "" : inActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Information
          </a>
        </li>

        <li
          // onClick={() => {
          //   router.push("/checkout/shipping");
          // }}
        >
          <a className={router.pathname === "/checkout/shipping" ? "" : inActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Shipping
          </a>
        </li>

        <li
          // onClick={() => {
          //   router.push("/checkout/payment");
          // }}
        >
          <a className={router.pathname === "/checkout/payment" ? "" : inActive}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Payment
          </a>
        </li>
      </ul>
    </div>
  );
}
