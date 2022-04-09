import Like from "./Like";
import Image from "next/image";

export default function Product({
  name,
  price,
  currency,
  image,
  addtocart,
  viewProduct,
}) {
  return (
    <div className="cursor-pointer" onClick={viewProduct}>
      <div className="w-full rounded h-52 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={image}
          alt={name}
          className="object-center h-52 w-full object-cover group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between space-x-6 items-center">
        <h3 className="text-xs tracking-widest uppercase">
          {name}
        </h3>

        <p className="text-lg font-medium text-gray-900">{`${currency}${price}`}</p>
      </div>
    </div>
  );
}
