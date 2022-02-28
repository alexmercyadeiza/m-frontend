import PublicWrapper from "../../components/public/PublicWrapper";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from '../../components/public/Grid/Two';

export default function Complete() {
  return (
    <PublicWrapper>
      <Header />
      <Wrapper>
        {/* Order details */}
        <One>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div className="space-y-6 col-span-4">
            <div className="tracking-tight items-center">
              <div className="text-sm text-gray-500">Order #011</div>
              <div>Thank you!</div>
              <div className="text-2xl">Print Something</div>
            </div>

            <div className="border rounded-md text-gray-500">
              <div className="p-4 space-y-2">
                <div className="text-lg font-medium">Your order is confirmed</div>
                <div className="text-sm">
                  Our customer service representative will contact you now to
                  get more details about your order.
                </div>
                <div className="text-sm">
                  Thanks for shopping with Melina Beauty &amp; Digitals.
                </div>
              </div>
              {/* <div className="border-t bg-gray-100 rounded-b-md">
                    <div className="p-4">
                      <div className="flex space-x-3 items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                        />
                        <div className="text-sm">Email me with news and offers</div>
                      </div>
                    </div>
                  </div> */}
            </div>

            <div className="border rounded-md text-gray-500">
              <div className="p-4 space-y-2">
                <div className="text-lg font-medium">Order updates</div>
                <div className="text-sm">
                  You'll get shipping and delivery updates by email.
                </div>
              </div>
            </div>

            <div className="border rounded-md text-gray-500">
              <div className="p-4 space-y-2">
                <div className="text-lg font-medium">Customer Information</div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-5">
                    <div className="space-y-1">
                      <div className="text-xs font-medium">Contact information</div>
                      <div className="text-xs font-light">pike@gmail.com</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-medium">Shipping address</div>
                      <div className="text-xs font-light">
                        Pike County, Santa Monica, 21000, Salt Lake, SF, CA
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-medium">Shipping method</div>
                      <div className="text-xs font-light">Express delivery</div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-1">
                      <div className="text-xs font-medium">Payment method</div>
                      <div className="text-xs font-light">
                        Pike County, Santa Monica, 21000, Salt Lake, SF, CA
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-medium">Billing address</div>
                      <div className="text-xs font-light">
                        Pike County, Santa Monica, 21000, Salt Lake, SF, CA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="border-t bg-gray-100 rounded-b-md">
                    <div className="p-4">
                      <div className="flex space-x-3 items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
                        />
                        <div className="text-sm">Email me with news and offers</div>
                      </div>
                    </div>
                  </div> */}
            </div>

            <div className="flex space-x-3 items-center">
              <button className="btn">Continue shopping</button>
              <div className="text-xs font-medium">
                <span className="text-gray-600">Need help?</span>{" "}
                <a href="#">Contact us</a>
              </div>
            </div>
          </div>
        </One>

        <Two>
          <div className="space-y-6">
            {/* Product  */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex space-x-6 items-center">
                <div className="rounded-lg hover:bg-stone-200 cursor-pointer p-2 border border-stone-300 relative inline-block">
                  <div className="flex-shrink-0 w-20 h-20 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-2xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-yellow-600 rounded-full">
                    {" "}
                    2{" "}
                  </span>
                </div>

                <div>
                  <div className="text-sm font-medium">Hair re-growth oil</div>
                  <div className="text-xs">20mm / Hair food</div>
                </div>
              </div>

              <div className="font-mono text-lg">$29.01</div>
            </div>

            <hr />

            {/* Order details  */}
            <div>
              <div className="flex justify-between">
                <div className="text-sm text-gray-600">Subtotal</div>
                <div className="font-medium font-mono text-lg">$30.01</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm text-gray-600">Shipping</div>
                <div className="font-medium font-mono text-lg">$30.01</div>
              </div>

              <div className="flex justify-between">
                <div className="text-sm text-gray-600">Taxes</div>
                <div className="font-medium font-mono text-lg">$30.01</div>
              </div>
            </div>

            <hr />

            {/* Total  */}
            <div className="flex justify-between">
              <div className="text-sm text-gray-600">Total</div>
              <div className="font-medium font-mono text-xl">$30.01</div>
            </div>
          </div>
        </Two>
      </Wrapper>
      <Footer />
    </PublicWrapper>
  );
}
