import Like from "./like";
import Image from "next/image";

export default function Product({ name, price, currency, image, addtocart }) {
  return (
    <div className="group">
      <div className="w-full h-52 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={image}
          alt={name}
          className="object-center h-52 w-full object-cover group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between space-x-6 items-center">
        <h3 className="text-sm text-gray-700 tracking-tight capitalize">
          {name}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 hover:text-gray-700 cursor-pointer text-gray-500"
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
      </div>
      <p className="text-lg font-medium text-gray-900">{`${currency}${price}`}</p>
    </div>
  );
}
