import Like from "../../components/public/Like";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import PublicWrapper from "../../components/public/PublicWrapper";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import DropDown from "../../components/public/DropDown";
import Two from "../../components/public/Grid/Two";

export default function Product() {
  return (
    <PublicWrapper>
      <Header />
      <Wrapper>
        {/* Cart  */}
        <One>
          {/* Product  */}
          <div className="flex">
            <div className="space-y-8">
              <div className="flex-shrink-0 h-80 border border-gray-200 rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="capitalize text-sm font-light">
                  Melina shampoo effectively wash and clean your hair without
                  stripping your hair oil. Moisturizes and nourishes your hair
                  leaving it free from tangle and knots. It increases
                  manageability and hydrates your hair strands. Balances your
                  hair PH. Improve your scalp health, eliminate dandruff, itchy
                  and dry scalp gives your hair a healthy volume and sheen.
                </div>
              </div>

              <div className="space-y-2">
                <div className="capitalize text-sm font-bold">How to use</div>
                <div className="capitalize text-sm font-light">
                  Dampen your hair with water, take a sufficient quantity, apply
                  onto hair, then massage your scalp fingertips, wash well, then
                  rinse off with warm water. Wash twice for effective results.
                </div>
              </div>

              <div className="space-y-2">
                <div className="capitalize text-sm font-bold">
                  Product Specification
                </div>
                <div className="capitalize text-sm font-light">
                  500ml / 16.9 FL OZ
                </div>
              </div>

              <div className="space-y-1">
                <div className="capitalize text-sm font-bold">
                  Product Ingredients
                </div>

                <div className="capitalize text-sm font-light">
                  <span>Distilled water</span> / <span>Black soap</span> /{" "}
                  <span>Shea butter</span> / <span>Glycerin</span> /{" "}
                  <span>Essential oil</span> / <span>Emulsifier</span> /
                  <span>preservative</span>
                </div>
              </div>
            </div>
          </div>
        </One>

        <Two>
          <div className="space-y-2">
            <div className="text-xs uppercase text-gray-500">all new</div>

            <div className="text-2xl capitalize font-medium tracking-tight">
              Hair shampoo
            </div>

            <div className="capitalize text-sm font-light">
              effectively wash and clean your hair
            </div>
            <div className="uppercase text-3xl">$129</div>
          </div>

          <div className="lg:w-10/12 border-b pb-4">
            <div className="flex justify-between items-center">
              <div className="p-1 rounded-full border hover:bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12H4"
                  />
                </svg>
              </div>

              <div className="text-xl font-light">1</div>

              <div className="p-1 border rounded-full hover:bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="lg:w-10/12">
            <div className="space-y-1">
              <div className="text-sm font-bold tracking-tight">Quantity</div>
              <div class="flex items-center space-x-3">
                <div>1</div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

                <div>$129</div>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:space-x-2 space-y-3 lg:space-y-0 items-center lg:w-10/12">
            <div className="w-full">
              <button className="btn rounded-md bg-black hover:bg-gray-800 capitalize w-full">
                add to bag
              </button>
            </div>

            <div>
              <button className="btn rounded-md btn-outline hover:bg-black capitalize lg:w-40 w-full">
                Wishlist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="capitalize text-sm font-bold">
              estimated delivery
            </div>
            <div className="capitalize text-sm font-light">Mar 1 - Apr 2</div>
          </div>
        </Two>
      </Wrapper>
      {/* Footer  */}
      <Footer />
    </PublicWrapper>
  );
}
