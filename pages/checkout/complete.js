import PublicWrapper from "../../components/public/PublicWrapper";
import Header from "../../components/public/Header";
import Footer from "../../components/public/Footer";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from '../../components/public/Grid/Two';
import NextButton from "../../components/public/NextButton";
import CheckoutCart from "../../components/public/CheckoutCart";
import { useAppContext } from "../../lib/context/global";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Success from '../../components/icons/success';
import Failed from '../../components/icons/failed';
import TopHeader from '../../components/public/TopHeader';

export default function Complete() {

  const [sharedState, updateSharedState] = useAppContext();
  const {id, email, address, city, state, postal, payment, method} = sharedState.shipping;

  const router = useRouter();

  const { status, tx_ref } = router.query;

  useEffect(() => {
    // console.log(JSON.stringify(router.query));
  }, [])

  return (
    <>
      <TopHeader title={"Complete Order"} />

      <PublicWrapper>
        <Header />
        <Wrapper>
          {/* Order details */}
          <One>
            <div>{status === "success" ? <Success /> : <Failed />}</div>

            <div className="space-y-6 col-span-4">
              <div className="tracking-tight items-center">
                <div className="text-sm text-gray-500">Order #ID: {tx_ref}</div>

                {status === "success" ? (
                  <div className="space-y-6">
                    <div>Thank you!</div>
                    <div className="text-2xl">Print Something</div>
                  </div>
                ) : (
                  <div className="text-2xl capitalize mt-5">{status}.</div>
                )}
              </div>

              {status === "success" && (
                <div className="space-y-6">
                  <div className="border rounded-md text-gray-500">
                    <div className="p-4 space-y-2">
                      <div className="text-lg font-medium">
                        Your order is confirmed
                      </div>
                      {/* <div className="text-sm">
                  Our customer service representative will contact you now to
                  get more details about your order.
                </div> */}
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
                        You will get shipping and delivery updates by email.
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-md text-gray-500">
                    <div className="p-4 space-y-2">
                      <div className="text-lg font-medium">
                        Customer Information
                      </div>

                      <div className="grid grid-cols-2 gap-10">
                        <div className="space-y-5">
                          <div className="space-y-1">
                            <div className="text-xs font-medium">
                              Contact information
                            </div>
                            <div className="text-xs font-light">
                              pike@gmail.com
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-xs font-medium">
                              Shipping address
                            </div>
                            <div className="text-xs font-light">
                              {`${address}, ${city}, ${state}`}
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="text-xs font-medium">
                              Shipping method
                            </div>
                            <div className="text-xs font-light">{method}</div>
                          </div>
                        </div>

                        <div className="space-y-5">
                          <div className="space-y-1">
                            <div className="text-xs font-medium">
                              Payment method
                            </div>
                            <div className="text-xs font-light uppercase">
                              {payment}
                            </div>
                          </div>

                          {/* <div className="space-y-1">
                      <div className="text-xs font-medium">Billing address</div>
                      <div className="text-xs font-light">
                        Pike County, Santa Monica, 21000, Salt Lake, SF, CA
                      </div>
                    </div> */}
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
                </div>
              )}

              <div className="flex space-x-3 items-center">
                <NextButton path={"/"} title={"Continue shopping"} />

                <div className="text-xs font-medium space-x-1">
                  <span className="text-gray-600">Need help?</span>
                  <a href="mailto:info@melinastore.com">Contact us</a>
                </div>
              </div>
            </div>
          </One>

          <Two>
            <CheckoutCart />
          </Two>
        </Wrapper>
        <Footer />
      </PublicWrapper>
    </>
  );
}
