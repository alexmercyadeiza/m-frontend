import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Breadcrumbs from "../../components/public/Breadcrumbs";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import NextButton from '../../components/public/NextButton';
import ReturnLinks from '../../components/public/ReturnLinks';
import CheckoutCart from '../../components/public/CheckoutCart';
import { useAppContext } from "../../lib/context/global";
import Error from '../../components/admin/product/error-alert';
import { useEffect, useState } from 'react';
import TopHeader from '../../components/public/TopHeader';

export default function Information() {
  const [sharedState, updateSharedState] = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSharedState({
      ...sharedState,
      shipping: { ...sharedState.shipping, [name]: value },
    });
  };

  const [next, setNext] = useState(true);

  useEffect(() => {
    const {email, country, firstname, lastname, address, city, state, phone} = sharedState.shipping;
    if (email.length && country.length && firstname.length && lastname.length && address.length && city.length && state.length && phone.length) {
      setNext(false);
    } else {
      setNext(true);
    }

    // console.log(next);
  }, [sharedState.shipping]);

  return (
    <>
      <TopHeader title={"Contact Information"} />

      <PublicWrapper>
        <Header />
        <Wrapper>
          {/* Cart  */}
          <One>
            <Breadcrumbs />

            <div className="flex justify-between items-center border-b pb-4">
              <div className="text-sm font-medium uppercase tracking-widest">
                Contact information
              </div>
              {/* <div className="capitalize text-xs font-light">
              Already have an account?
              <span className="font-medium pl-1">Log in</span>
            </div> */}
            </div>

            <span className="text-2xs block font-light">
              {/* {JSON.stringify(sharedState.shipping, null, 4)} */}
            </span>

            <div className="space-y-4">
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={sharedState.shipping.email}
              />

              {sharedState.shipping.email.length === 0 && (
                <Error error={"Email is required."} />
              )}
            </div>

            <div className="flex justify-between pt-6">
              <div className="text-sm font-medium uppercase tracking-widest">
                Shipping address
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Country"
                  name="country"
                  onChange={handleChange}
                  value={sharedState.shipping.country}
                />
                {sharedState.shipping.country.length === 0 && (
                  <Error error={"Shipping country is required."} />
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="First name (optional)"
                    name="firstname"
                    onChange={handleChange}
                    value={sharedState.shipping.firstname}
                  />
                  {sharedState.shipping.firstname.length === 0 && (
                    <Error error={"Fullname is required."} />
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Last name"
                    name="lastname"
                    onChange={handleChange}
                    value={sharedState.shipping.lastname}
                  />
                  {sharedState.shipping.lastname.length === 0 && (
                    <Error error={"Lastname is required."} />
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  value={sharedState.shipping.address}
                />
                {sharedState.shipping.address.length === 0 && (
                  <Error error={"Shipping address is required."} />
                )}
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="City"
                    name="city"
                    onChange={handleChange}
                    value={sharedState.shipping.city}
                  />
                  {sharedState.shipping.city.length === 0 && (
                    <Error error={"Shipping city is required."} />
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="State"
                    name="state"
                    onChange={handleChange}
                    value={sharedState.shipping.state}
                  />
                  {sharedState.shipping.state.length === 0 && (
                    <Error error={"Shipping state is required."} />
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="Postal code"
                    name="postal"
                    onChange={handleChange}
                    value={sharedState.shipping.postal}
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={sharedState.shipping.phone}
                />
                {sharedState.shipping.phone.length === 0 && (
                  <Error error={"Please provide a phone number."} />
                )}
              </div>
            </div>

            <div className="flex space-x-3 items-center">
              <NextButton
                status={next}
                path={"/checkout/shipping"}
                title={"Continue to shipping"}
              />
              <ReturnLinks path={"/checkout/cart"} title={"Return to cart"} />
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
