export default function Stats() {
    return (
      <div className="grid grid-cols-3 border-b border-t m-10">
        <div className="py-10 space-y-2 border-r ml-10">
          <div className="text-xs font-medium">Sales Today</div>
          <div className="tracking-tight text-3xl font-medium">$ 2.5K</div>
          <div className="flex items-center text-red-500 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>12%</div>
          </div>
        </div>

        <div className="py-10 space-y-2 border-r ml-10">
          <div className="text-xs font-medium">Total Orders</div>
          <div className="tracking-tight text-3xl font-medium">495</div>
          <div className="flex items-center text-red-500 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>12%</div>
          </div>
        </div>

        <div className="py-10 space-y-2 ml-10">
          <div className="text-xs font-medium">Total Sales</div>
          <div className="tracking-tight text-3xl font-medium">$ 12,000.00</div>
          <div className="flex items-center text-red-500 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <div>12%</div>
          </div>
        </div>
      </div>
    );
}