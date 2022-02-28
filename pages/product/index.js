import Like from "../../components/public/Like";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import PublicWrapper from "../../components/public/PublicWrapper";

export default function Product() {
  return (
    <PublicWrapper>
      <Header />
      <div className="grid grid-cols-2 flex-grow">
        {/* Cart  */}
        <div className="grid h-screen border-r">
          <div className="p-20">
            <div className="space-y-6">
              {/* Product  */}
              <div className="flex space-x-16">
                <div className="space-y-8">
                  <div className="flex-shrink-0 w-96 h-96 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-16 h-16 border-gray-200 rounded-md overflow-hidden opacity-80">
                      <img
                        src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="w-16 h-16 border-gray-200 rounded-md overflow-hidden opacity-30 hover:opacity-80">
                      <img
                        src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="w-16 h-16 border-gray-200 rounded-md overflow-hidden opacity-30 hover:opacity-80">
                      <img
                        src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <h4 className="text-sm text-gray-900 font-bold uppercase">
                      Color
                    </h4>

                    <div className="flex items-center space-x-4">
                      <fieldset>
                        <legend className="sr-only">Choose a color</legend>
                        <div className="flex items-center space-x-3">
                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-yellow-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="White"
                              className="sr-only"
                              aria-labelledby="color-choice-0-label"
                            />
                            <p id="color-choice-0-label" className="sr-only">
                              White
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>

                          <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-yellow-400">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Gray"
                              className="sr-only"
                              aria-labelledby="color-choice-1-label"
                            />
                            <p id="color-choice-1-label" className="sr-only">
                              Gray
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>

                          <label className="ring ring-offset-1 -m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                            <input
                              type="radio"
                              name="color-choice"
                              value="Black"
                              className="sr-only"
                              aria-labelledby="color-choice-2-label"
                            />
                            <p id="color-choice-2-label" className="sr-only">
                              Black
                            </p>
                            <span
                              aria-hidden="true"
                              className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"
                            ></span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm text-gray-900 font-bold uppercase">
                      Size
                    </h4>

                    <div className="flex space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-yellow-300 rounded-full mt-1 h-8 w-8 cursor-pointer text-yellow-700 hover:text-yellow-900 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <div className="text-3xl text-gray-500">1</div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="bg-yellow-300 rounded-full h-8 w-8 mt-1 cursor-pointer text-yellow-700 hover:text-yellow-900 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-20 space-y-8">
          <div className="space-y-6">
            <div className="text-4xl font-medium capitalize tracking-tight">
              Hair shampoo
            </div>
            <div className="tracking-tight text-sm">
              Dampen your hair with water, take a sufficient quantity, apply
              onto hair, then massage your scalp fingertips, wash well, then
              rinse off with warm water. Wash twice for effective results.
            </div>
          </div>

          <div className="space-y-1">
            <div className="tracking-tight font-bold uppercase">
              Product Specification
            </div>
            <div className="tracking-tight uppercase text-sm">
              500ml / 16.9 FL OZ
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-bold tracking-tight uppercase">Benefits</div>
            <div className="text-sm tracking-tight">
              Melina shampoo effectively wash and clean your hair without
              stripping your hair oil. Moisturizes and nourishes your hair
              leaving it free from tangle and knots. It increases manageability
              and hydrates your hair strands. Balances your hair PH. Improve
              your scalp health, eliminate dandruff, itchy and dry scalp gives
              your hair a healthy volume and sheen.
            </div>
          </div>

          <div className="space-y-1">
            <div className="tracking-tight font-bold uppercase">
              Product Ingredients
            </div>
            <div className="capitalize tracking-tight text-sm">
              <span>Distilled water</span> / <span>Black soap</span> /{" "}
              <span>Shea butter</span> / <span>Glycerin</span> /{" "}
              <span>Essential oil</span> / <span>Emulsifier</span> /
              <span>preservative</span>
            </div>
          </div>

          <div className="space-y-1 flex space-x-2 items-center">
            <button className="btn rounded-none bg-yellow-600 border-none">
              add to cart
            </button>
            <Like />
          </div>

          {/* <div className="space-y-4">
            <div className="tracking-tight font-bold uppercase">Reviews</div>
            <hr />
            <div className="tracking-tight text-sm space-y-8">
              <div className="space-y-1">
                <div className="flex space-x-1 items-center">
                  <div className="pr-2 font-medium text-gray-800">(Alina Mark)</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>

                  <div className="pl-2 lowercase font-medium text-xs text-gray-500">
                    3 of 5
                  </div>
                </div>
                <div>
                  This is a wonderful product, I really loved it. My hair was
                  shiny in no time.
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex space-x-1 items-center">
                  <div className="pr-2 font-medium text-gray-800">(Alina Mark)</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>

                  <div className="pl-2 lowercase font-medium text-xs text-gray-500">
                    3 of 5
                  </div>
                </div>
                <div>
                  This is a wonderful product, I really loved it. My hair was
                  shiny in no time.
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Footer  */}
      <Footer />
    </PublicWrapper>
  );
}
