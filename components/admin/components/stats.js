export default function Stats() {
    return (
      <div className="grid grid-cols-4 gap-6 m-10">
        <div className="border p-4 rounded-md space-y-3 place-self-start w-full">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 text-purple-700 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="font-bold text-xs text-green-600">+23%</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight">$523.10</div>
          </div>

          <div className="tracking-tight font-medium text-gray-400 text-xs">
            24hr Sales
          </div>
        </div>

        <div className="border p-4 rounded-md space-y-3 place-self-start w-full">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 text-blue-700 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <div className="font-bold text-xs text-green-600">+23%</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight">$23,000.23</div>
          </div>

          <div className="tracking-tight font-medium text-gray-400 text-xs">
            Total Sales
          </div>
        </div>

        <div className="border p-4 rounded-md space-y-3 place-self-start w-full">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-orange-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <div className="font-bold text-xs text-green-600">+14%</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight">256</div>
          </div>

          <div className="tracking-tight font-medium text-gray-400 text-xs">
            Total Visitors
          </div>
        </div>

        <div className="border p-4 rounded-md space-y-3 place-self-start w-full">
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <div className="font-bold text-xs text-green-600">+14%</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold text-xl tracking-tight">256</div>
          </div>

          <div className="tracking-tight font-medium text-gray-400 text-xs">
            Total Orders
          </div>
        </div>
      </div>
    );
}