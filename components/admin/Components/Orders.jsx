export default function Orders() {
    return (
      <>
        <div className="col-span-3 px-20 text-xl pt-10">Recent Orders</div>
        <div>
          <div className="col-span-3 grid grid-cols-4 bg-gray-100 rounded-md py-2 mt-4 mx-10 px-10 text-sm font-medium">
            <div>Product</div>
            <div>Customer</div>
            <div>Amount</div>
            <div>Status</div>
          </div>

          <div className="col-span-3 grid grid-cols-4 rounded-md mx-10 px-10 py-2 mt-2 text-sm cursor-pointer hover:bg-gray-50">
            <div className="self-center">
              <div>Hair Gel</div>
            </div>
            <div className="self-center">alina.bey@gmail.com</div>
            <div className="self-center">$283</div>

            <div className="grid grid-cols-2">
              <div className="text-yellow-600 border border-yellow-300 px-2 text-2xs uppercase py-0.5 rounded-lg bg-yellow-100 place-self-start self-center">
                Pending
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 justify-self-end transform rotate-45 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </>
    );
}