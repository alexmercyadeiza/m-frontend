import { useRouter } from "next/router";

export default function ProductHeader() {

    const router = useRouter();

    const active = `cursor-pointer hover:bg-yellow-900 bg-yellow-800 text-white rounded-md py-2 px-3 flex items-center space-x-2`;
    const inactive = `bg-white cursor-pointer rounded-md py-2 px-3 flex space-x-2`;
    
    return (
      <div className="col-span-3 p-10 flex space-x-10 border-b border-gray-100 bg-yellow-500">
        <div
          className={router.pathname == "/admin/products" ? active : inactive}
          onClick={() => router.push("/admin/products")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
          <div className="text-sm tracking-tight">All Products</div>
        </div>

        <div
          className={
            router.pathname == "/admin/products/create" ? active : inactive
          }
          onClick={() => router.push("/admin/products/create")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm tracking-tight">Create a Product</div>
        </div>
      </div>
    );
}