export default function SubHeader() {
  return (
    <div className="bg-black text-white px-10">
      <div className="grid grid-cols-5 gap-8">
        <div className="flex cursor-pointer items-center justify-between space-x-3 bg-yellow-600 p-4 hover:bg-yellow-700">
          <div className="text-sm uppercase tracking-widest">shop all</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="place-self-center text-xs uppercase tracking-widest">
          hair essentials
        </div>
        <div className="place-self-center text-xs uppercase tracking-widest opacity-50">
          hair tips [ coming soon ]
        </div>
        <div className="place-self-center text-xs uppercase tracking-widest">
          hair basics
        </div>
        <div className="place-self-center text-xs uppercase tracking-widest opacity-50">
          sale items [ coming soon]
        </div>
      </div>
    </div>

    // <div className="w-full">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center space-x-1 border px-3 py-2 rounded-xl hover:bg-stone-100 cursor-pointer border-stone-300">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 text-gray-500"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
    //           />
    //         </svg>
    //       </div>
    //       <div className="tracking-tight font-semibold text-gray-500">
    //         Categories
    //       </div>
    //     </div>
    //     <div>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-6 w-6"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
  );
}
