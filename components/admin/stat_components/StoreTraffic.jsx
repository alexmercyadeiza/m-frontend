export default function StoreTraffic() {
  return (
    <div className="border rounded-md p-5 bg-white grid-cols-2 grid self-start">
      <div className="self-start">
        <div className="tracking-tight text-sm">Store Traffic</div>
        <div className="text-2xl tracking-tight font-bold">545</div>
      </div>

      <div className="justify-self-end self-start p-1 bg-gray-100 border rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 rotate-45 fill-current text-red-600"
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
  );
}
