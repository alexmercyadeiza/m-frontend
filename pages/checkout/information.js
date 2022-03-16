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

export default function Information() {
  const [sharedState, updateSharedState] = useAppContext();

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
        {/* Cart  */}
        <One>
          <Breadcrumbs />

          <div className="flex justify-between items-center border-b pb-4">
            <div className="capitalize tracking-tight font-bold">
              Contact information
            </div>
            <div className="capitalize text-xs font-light">
              Already have an account?
              <span className="font-medium pl-1">Log in</span>
            </div>
          </div>

          <span className="text-2xs block font-light">
            {/* {JSON.stringify(sharedState.shipping, null, 4)} */}
          </span>

          <div>
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={sharedState.shipping.email}
            />
          </div>

          <div className="flex justify-between pt-6">
            <div className="capitalize tracking-tight font-bold">
              Shipping address
            </div>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              value={sharedState.shipping.country}
            />
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="First name (optional)"
                name="firstname"
                onChange={handleChange}
                value={sharedState.shipping.firstname}
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Last name"
                name="lastname"
                onChange={handleChange}
                value={sharedState.shipping.lastname}
              />
            </div>

            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Address"
              name="address"
              onChange={handleChange}
              value={sharedState.shipping.address}
            />

            <div className="grid grid-cols-3 gap-6">
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={sharedState.shipping.city}
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="State"
                name="state"
                onChange={handleChange}
                value={sharedState.shipping.state}
              />
              <input
                type="text"
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                placeholder="Postal code"
                name="postal"
                onChange={handleChange}
                value={sharedState.shipping.postal}
              />
            </div>

            <input
              type="text"
              className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={sharedState.shipping.phone}
            />
          </div>

          <div className="flex space-x-3 items-center">
            <NextButton
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
  );
}
