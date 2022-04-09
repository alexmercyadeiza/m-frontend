import { useAppContext } from "../../lib/context/global";
import { useRouter } from 'next/router';
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  const [sharedState, updateSharedState] = useAppContext();
  const router = useRouter();

  const showCart = () => {
    updateSharedState({ ...sharedState, cartStatus: true });
  };

  return (
    <>
      <div className="py-10 bg-black">
        <div
          onClick={() => router.push("/")}
          className="grid place-items-center cursor-pointer text-white"
        >
          {/* <img
            src="https://ik.imagekit.io/et8vxrzxxdj/melina/logo_Gvm6FnfoW.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1649374463616"
            className="w-56"
            alt=""
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-56" viewBox="0 0 242.92 40.23">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path d="M6.23 2.32 2.38 40.23H0c1-1.23 1.19-2.5 1.93-8.33L5.27.57h6.23L25 32.29 36 .57h6.18l7.31 39.66h-6.03L36.6 2.38 23.51 40.23h-1.19zM61.14.57h30l.56 2.26C89 2 83.63 1.53 79 1.42H66.41v18.75H88.9V21H66.41v18.38h13.71c4.65-.12 10-.63 12.75-1.42l-.57 2.27H61.14zM104.54.57h5.27v38.81h12.58c4.65-.12 10-.63 12.75-1.42l-.57 2.27h-30zM145.68.57H151v39.66h-5.27zM166.65 5.5v34.73h-1.82c.8-2.72.8-8 .85-12.7V.57h4.88l25.49 30.08V.57h1v39.66h-1.19zM230.05 25.61h-15.3v-.28l-5.89 14.9h-1.47c1.7-2.61 2-3.91 5.55-12.75L223.87 0h1l16.37 40.23h-5.38zm-.4-1-7.31-18.43L215 24.65zM239.49 0h1.36v.23h-.55l-.3 1.54h-.26L240 .25h-.55zM241.47 0l.33 1.36.8-1.36h.32l-.29 1.75h-.25l.21-1.25-.72 1.27h-.21L241.34.5l-.21 1.27h-.25l.27-1.77z" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="bg-black border-t border-gray-600 text-white">
        <div className="grid grid-cols-6 gap-8">
          <div
            onClick={() => router.push("/products/all")}
            className="px-10 flex cursor-pointer items-center justify-between bg-yellow-600 p-6 hover:bg-yellow-700"
          >
            <div className="text-sm uppercase tracking-widest">shop all</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div
            onClick={() => router.push("/products/hair-essentials")}
            className="place-self-center text-xs uppercase tracking-widest cursor-pointer hover:text-gray-400"
          >
            hair essentials
          </div>
          <div className="place-self-center text-xs uppercase tracking-widest opacity-50">
            hair tips [ coming soon ]
          </div>
          <div
            onClick={() => router.push("/products/hair-essentials")}
            className="place-self-center text-xs uppercase tracking-widest cursor-pointer hover:text-gray-400"
          >
            hair basics
          </div>
          <div className="place-self-center text-xs uppercase tracking-widest opacity-50">
            sale items [ coming soon]
          </div>

          <div className="px-10 flex items-center space-x-4 place-self-center justify-self-end text-white">
            <div
              onClick={showCart}
              className="relative inline-block cursor-pointer rounded-lg border border-stone-300 p-2 hover:bg-stone-200 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-2xs absolute top-0 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-yellow-600 px-1.5 py-1 font-medium leading-none text-red-100">
                {" "}
                {sharedState.cartItems.length}{" "}
              </span>
            </div>

            {/* <div className="cursor-pointer rounded-lg border border-stone-300 p-2 hover:bg-stone-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div> */}

            {/* <div className="cursor-pointer rounded-lg border border-stone-300 p-2 hover:bg-stone-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div> */}
          </div>
        </div>
      </div> 
    </>
  );
}
