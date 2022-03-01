import { useAppContext } from "../../lib/context/global";
import { useRouter } from 'next/router';

export default function Header() {
  const [sharedState, updateSharedState] = useAppContext();
  const router = useRouter();

  const showCart = () => {
    updateSharedState({ ...sharedState, cartStatus: true });
  };

  return (
    <div className="grid grid-cols-9 w-full mx-auto border-b bg-gray-50">
      <div className="col-span-2 py-7 pl-20 grid">
        <div
          onClick={() => router.push("/home")}
          className="font-bold font-mono tracking-widest hover:text-gray-600 cursor-pointer uppercase flex"
        >
          <span>Melina</span>
        </div>
      </div>
      <div className="col-span-7 pr-20 self-center">
        <div className="grid grid-cols-4 gap-10">
          <div className="justify-self-center uppercase text-xs tracking-wider font-bold flex items-center col-span-3 space-x-20">
            <div className="text-gray-500 cursor-pointer hover:text-gray-700">
              About melina
            </div>
            <div className="text-gray-500 cursor-pointer hover:text-gray-700">
              Shop
            </div>
            <div className="text-gray-500 cursor-pointer hover:text-gray-700">
              Sale &#128293;
            </div>
            <div className="text-gray-500 cursor-pointer hover:text-gray-700">
              How to
            </div>
            <div className="text-gray-500 cursor-pointer hover:text-gray-700">
              live support
            </div>
          </div>

          <div className="flex items-center justify-self-end space-x-4">
            <div
              onClick={showCart}
              className="rounded-lg hover:bg-stone-200 cursor-pointer p-2 border border-stone-300 relative inline-block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-stone-600"
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
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-2xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full">
                {sharedState.cartItems.length}
              </span>
            </div>

            <div className="rounded-lg p-2 hover:bg-stone-200 cursor-pointer border border-stone-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-stone-600"
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
            </div>

            <div className="rounded-lg p-2 hover:bg-stone-200 cursor-pointer border border-stone-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-stone-600"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
