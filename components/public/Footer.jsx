export default function Footer() {
  return (
    <div className="border-t">
      <div className="py-8 px-20 flex items-center space-x-10 text-xs tracking-tight font-semibold">
        <a href="#">Refund policy</a>
        <a href="#">Shipping policy</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms of service</a>
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
  );
}
