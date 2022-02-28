import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Breadcrumbs from "../../components/public/Breadcrumbs";
import Wrapper from '../../components/public/Grid/Wrapper';
import One from '../../components/public/Grid/One';
import Two from "../../components/public/Grid/Two";

export default function Information() {
  return (
    <PublicWrapper>
      <Header />
      <Wrapper>
        {/* Cart  */}
        <One>
          <Breadcrumbs />

          <div className="flex justify-between border-b pb-4">
            <div className="text-lg font-medium font-mono uppercase">Contact information</div>
            <div className="text-xs text-gray-600">
              Already have an account?
              <span className="font-medium pl-2">Log in</span>
            </div>
          </div>

          <div>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Email"
            />
          </div>

          <div className="flex justify-between pt-6">
            <div className="text-lg font-medium font-mono text-gray-500 uppercase">Shipping address</div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Country"
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="First name (optional)"
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Last name"
              />
            </div>

            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Address"
            />

            <div className="grid grid-cols-3 gap-6">
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="City"
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="State"
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Postal code"
              />
            </div>

            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Phone"
            />
          </div>

          <div className="flex space-x-3 items-center">
            <button className="btn loading">Continue to shipping</button>
            <div className="text-xs font-semibold">
              <span className="text-gray-600">Return to cart</span>
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
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Discount code"
                className="block w-full rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              />
              <button className="btn w-28" disabled>
                apply
              </button>
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
