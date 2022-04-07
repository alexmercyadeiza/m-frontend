import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Breadcrumbs from "../../components/public/Breadcrumbs";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import NextButton from "../../components/public/NextButton";
import ReturnLinks from "../../components/public/ReturnLinks";
import CheckoutCart from "../../components/public/CheckoutCart";
import { useAppContext } from "../../lib/context/global";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Shipping() {
  const router = useRouter();

  const [sharedState, updateSharedState] = useAppContext();

  // const [ship, setShip] = useState({
  //   email: "",
  //   country: "",
  //   firstname: "",
  //   lastname: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   postal: "",
  //   phone: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSharedState({
      ...sharedState,
      shipping: { ...sharedState.shipping, [name]: value },
    });
  };

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
                    <div className="capitalize text-sm font-medium">
                      Contact
                    </div>
                    <div className="text-sm font-light">
                      {sharedState.shipping.email}
                    </div>
                  </div>
                  <div onClick={() => {router.push('/checkout/information')}} className="cursor-pointer capitalize text-sm font-medium">Change</div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                  <div className="capitalize text-sm font-medium">Ship to</div>
                  <div className="capitalize text-sm font-light">
                    {/* Jahi One, Abuja, 90001 Abuja FCT, NG */}
                    {sharedState.shipping.address}
                  </div>
                </div>
                <div onClick={() => {router.push('/checkout/information')}} className="cursor-pointer capitalize text-sm font-medium">Change</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="capitalize font-bold tracking-tight">
              Shipping method
            </div>
          </div>

          {/* Billing  */}
          <div className="border rounded-md">
            <div className="rounded-b-md">
              {/* <div className="p-4 border-b rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      name="billing_address"
                      className="radio text-black"
                    />
                    <div className="text-sm font-medium self-center">
                      <div className="capitalize text-sm font-medium">
                        Pick up in store
                      </div>
                    </div>
                  </div>
                  <div className="capitalize text-sm font-light">Free</div>
                </div>
              </div> */}

              <div className="p-4 rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      className="radio text-black"
                      value={sharedState.shipping.method}
                      checked={true}
                      name="method"
                      onChange={handleChange}
                    />
                    <div className="text-sm font-medium self-center">
                      <div className="capitalize text-sm font-medium">
                        DHL Express
                      </div>
                    </div>
                  </div>
                  <div className="capitalize text-sm font-light">$35</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <NextButton
              path={"/checkout/payment"}
              title={"Continue to payment"}
            />
            <ReturnLinks
              path={"/checkout/information"}
              title={"Return to information"}
            />
          </div>
        </One>

        <Two>
          <CheckoutCart />
        </Two>
      </Wrapper>
      <Footer />
    </PublicWrapper>
  );
}
