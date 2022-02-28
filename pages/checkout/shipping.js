import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Breadcrumbs from "../../components/public/Breadcrumbs";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";

export default function Shipping() {
  return (
    <PublicWrapper>
      <Header />
      <Wrapper>
        {/* Order details */}
        <One>
          <Breadcrumbs />

          <div className="border rounded-md">
            <div className="border-b">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                    <div className="text-gray-500">Contact</div>
                    <div>pike@gmail.com</div>
                  </div>
                  <div className="text-sm font-medium">Change</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                  <div className="text-gray-500">Ship to</div>
                  <div>Jahi One, Abuja, 90001 Abuja FCT, NG</div>
                </div>
                <div className="text-sm font-medium">Change</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="text-lg font-medium font-mono text-gray-500 uppercase">
              Shipping method
            </div>
          </div>

          {/* Billing  */}
          <div className="border rounded-md text-gray-500">
            <div className="rounded-b-md">
              {/* Header  */}
              <div className="p-4 border-b rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      name="billing_address"
                      className="radio text-black"
                      checked
                    />
                    {/* Flutterwave  */}
                    <div className="text-sm font-medium">
                      <div>Pick up in store</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold">Free</div>
                </div>
              </div>

              <div className="p-4 rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      name="billing_address"
                      className="radio text-black"
                      checked
                    />
                    {/* Flutterwave  */}
                    <div className="text-sm font-medium">
                      <div>DHL Express</div>
                    </div>
                  </div>
                  <div className="font-mono">$23.99</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <button className="btn loading">Continue to payment</button>
            <div className="text-xs font-semibold">
              <span className="text-gray-600">Return to information</span>
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
