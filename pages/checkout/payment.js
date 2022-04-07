import { useState, useEffect } from "react";
import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import Breadcrumbs from "../../components/public/Breadcrumbs";
// import NextButton from "../../components/public/NextButton";
import ReturnLinks from "../../components/public/ReturnLinks";
import CheckoutCart from "../../components/public/CheckoutCart";
import { useRouter } from "next/router";
import { useAppContext } from "../../lib/context/global";
import Visa from "../../components/icons/visa";
import MasterCard from "../../components/icons/mastercard";
import Card from "../../components/icons/card";
import CashApp from "../../components/public/Modals/CashApp";
import BankTransfer from "../../components/public/Modals/BankTransfer";
import { createOrder } from "../../lib/api";

export default function Payment() {
  const router = useRouter();
  const [sharedState, updateSharedState] = useAppContext();
  const [openCA, setOpenCA] = useState(false);
  const [openBT, setOpenBT] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statx, setStatx] = useState('');

  const [payment, setPayment] = useState({
    method: "",
  });

  const [status, setStatus] = useState({
    fw: false,
    st: false,
    ca: false,
    bt: false,
  });

  useEffect(() => {
    // console.log(`mlna-${Date.now()}`);
  }, []);

  const completeOrder = async () => {
    const { method } = payment;
    const { shipping, total_price, cartItems } = sharedState;

    //prepare data for all use
    const order = {
      tx_ref: `mlna-${Date.now()}`,
      products: JSON.stringify(cartItems),
      firstname: shipping.firstname,
      lastname: shipping.lastname,
      email: shipping.email,
      phone: shipping.phone,
      address: shipping.address,
      city: shipping.city,
      state: shipping.state,
      country: shipping.country,
      postal: shipping.postal,
      total_amount: total_price,
      method: payment.method,
    };

    if (method === "flutterwave") {
      setLoading(true);
      const res = await createOrder(order);
      if (res.status === 'success') {
          setLoading(false);
        router.push(res.link);
        };
      
    }

    if (method === "stripe") {
    }

    if (method === "cashapp") {
      setOpenCA(true);
    }

    if (method === "banktransfer") {
      setOpenBT(true);
    }
  };

  const toggle = (e) => {
    const { name } = e.target;
    if (name === "fw") {
      setStatus({ ...status, fw: !status.fw, st: false, ca: false, bt: false });
      setPayment({ method: "flutterwave" });
    }
    if (name === "st") {
      setStatus({ ...status, st: !status.st, fw: false, ca: false, bt: false });
      setPayment({ method: "stripe" });
    }
    if (name === "ca") {
      setStatus({ ...status, ca: !status.ca, st: false, fw: false, bt: false });
      setPayment({ method: "cashapp" });
    }
    if (name === "bt") {
      setStatus({ ...status, bt: !status.bt, st: false, ca: false, fw: false });
      setPayment({ method: "banktransfer" });
    }
  };

  return (
    <>
      <PublicWrapper>
        <Header />
        <Wrapper>
          {/* Order details */}
          <One>
            {/* Breadcrumbs */}
            <Breadcrumbs />

            <div className="border rounded-md">
              <div className="border-b">
                <div className="p-4">
                  <div className="text-2xs">
                    {JSON.stringify(sharedState.shipping)}
                    {JSON.stringify(sharedState.cartItems)}
                    {JSON.stringify(sharedState.total_price)}
                    {JSON.stringify(payment.method)}
                    <br />
                    <br />
                    {JSON.stringify(loading)}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                      <div className="text-sm font-medium tracking-tight">
                        Contact
                      </div>
                      <div className="text-sm font-light tracking-tight">
                        {sharedState.shipping.email}
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        router.push("/checkout/information");
                      }}
                      className="cursor-pointer capitalize text-sm font-medium"
                    >
                      Change
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                      <div className="text-sm font-medium tracking-tight">
                        Ship to
                      </div>
                      <div className="pl-1 text-sm font-light tracking-tight">
                        {sharedState.shipping.address}
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        router.push("/checkout/information");
                      }}
                      className="cursor-pointer capitalize text-sm font-medium"
                    >
                      Change
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm grid grid-flow-col auto-cols-max gap-8 items-center">
                    <div className="text-sm font-medium tracking-tight">
                      Method
                    </div>
                    <div className="text-sm font-light tracking-tight">
                      DHL Express
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      router.push("/checkout/shipping");
                    }}
                    className="cursor-pointer capitalize text-sm font-medium"
                  >
                    Change
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="capitalize font-medium">Payment</div>
              <div className="text-sm font-light tracking-tight">
                All transactions are secure and encrypted.
              </div>
            </div>

            {/* Flutterwave  */}
            <div className="border rounded-md text-gray-500">
              <div className="rounded-b-md">
                {/* Header  */}
                <div
                  className={`p-4 bg-gray-100 rounded-t-md ${
                    status.fw ? "border-b" : ""
                  }`}
                >
                  <div className="space-x-3 flex justify-between items-center">
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                      <input
                        name="fw"
                        type="checkbox"
                        checked={status.fw ? true : false}
                        onChange={toggle}
                        className="focus:ring-gray-500 self-center h-5 w-5 text-gray-600 border-gray-300 rounded-full"
                      />
                      {/* Flutterwave  */}
                      <div className="text-sm">
                        <img
                          src="https://ik.imagekit.io/et8vxrzxxdj/melina/flutterwave_BQf1iAeNl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645881231696"
                          className="w-36"
                          alt=""
                        />
                      </div>
                    </div>

                    {/* Cards  */}
                    <div className="flex space-x-2">
                      <Visa />
                      <MasterCard />
                    </div>
                  </div>
                </div>

                {/* Body  */}
                {status.fw && (
                  <div className="p-4">
                    <div className="grid place-items-center">
                      <div className="flex items-center">
                        <Card />
                      </div>

                      <div className="text-sm font-light text-center tracking-tight px-20">
                        After clicking{" "}
                        <span className="font-medium">Complete order</span>, you
                        will be redirected to Flutterwave to complete your
                        purchase securely.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stripe  */}
            <div className="border rounded-md text-gray-500 opacity-50">
              <div className="rounded-b-md">
                {/* Header  */}
                <div
                  className={`p-4 bg-gray-100 rounded-t-md ${
                    status.st ? "border-b" : ""
                  }`}
                >
                  <div className="space-x-3 flex justify-between items-center">
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                      <input
                        name="st"
                        disabled={true}
                        type="checkbox"
                        onChange={toggle}
                        checked={status.st ? true : false}
                        className="focus:ring-gray-500 self-center h-5 w-5 text-gray-600 border-gray-300 rounded-full"
                      />
                      {/* Stripe  */}
                      <div className="text-sm flex items-center space-x-2">
                        <img
                          src="https://ik.imagekit.io/et8vxrzxxdj/melina/stripe-seeklogo.com_92iB8vM_o.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645893106520"
                          className="w-16"
                          alt=""
                        />
                        <div className="capitalize">(Coming soon)</div>
                      </div>
                    </div>

                    {/* Cards  */}
                    <div className="flex space-x-2"></div>
                  </div>
                </div>

                {/* Body  */}
                {status.st && (
                  <div className="p-4">
                    <div className="grid place-items-center">
                      <div className="flex items-center">
                        <Card />
                      </div>

                      <div className="text-sm font-light tracking-tight text-center px-20">
                        After clicking{" "}
                        <span className="font-medium">Complete order</span>, you
                        will be redirected to Stripe to complete your purchase
                        securely.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CashApp  */}
            <div className="border rounded-md text-gray-500">
              <div className="rounded-b-md">
                {/* Header  */}
                <div
                  className={`p-4 bg-gray-100 rounded-t-md ${
                    status.ca ? "border-b" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                      <input
                        name="ca"
                        type="checkbox"
                        onChange={toggle}
                        checked={status.ca ? true : false}
                        className="focus:ring-gray-500 self-center h-5 w-5 text-gray-600 border-gray-300 rounded-full"
                      />
                      {/* Flutterwave  */}
                      <div className="text-sm">
                        <img
                          src="https://ik.imagekit.io/et8vxrzxxdj/melina/Cash_App_logo_vBNzHX1bC.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645891276419"
                          className="w-36"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body  */}
                {status.ca && (
                  <div className="px-28 py-6">
                    <div className="text-2xl text-center text-green-500 col-span-8">
                      <span className="block mb-2 text-sm font-light tracking-tight text-gray-500">
                        Make a transfer of{" "}
                        <span className="font-bold">$234.03</span> to this
                        $Cashtag and click on{" "}
                        <span className="font-medium">Complete order</span>.
                      </span>
                      @MelinaStore
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bank Transfer  */}
            <div className="border rounded-md text-gray-500">
              <div className="rounded-b-md">
                {/* Header  */}
                <div
                  className={`p-4 bg-gray-100 rounded-t-md ${
                    status.bt ? "border-b" : ""
                  }`}
                >
                  <div className="space-x-3 flex justify-between items-center">
                    <div className="grid grid-flow-col auto-cols-max gap-8">
                      <input
                        name="bt"
                        type="checkbox"
                        onChange={toggle}
                        checked={status.bt ? true : false}
                        className="focus:ring-gray-500 self-center h-5 w-5 text-gray-600 border-gray-300 rounded-full"
                      />
                      {/* Flutterwave  */}
                      <div className="text-lg font-medium tracking-tight">
                        Bank Transfer
                      </div>
                    </div>

                    {/* Cards  */}
                    <div className="flex space-x-2">
                      {/* EUR Image */}

                      {/* GBP Image */}

                      {/* USD Image */}
                    </div>
                  </div>
                </div>

                {/* Bank Transfer Body 
               USD  */}

                {status.bt && (
                  <div>
                    <div className="px-6 pt-4 text-sm font-light tracking-tight">
                      Make a direct transfer to the correct currency account
                      below and click on{" "}
                      <span className="font-medium">Complete order</span>.
                    </div>

                    <div className="p-6 m-4 rounded-md bg-gray-50 hover:bg-gray-100 hover:shadow">
                      <div className="grid space-y-3">
                        <div className="text-sm font-bold text-green-500">
                          ($) USD Only
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                          <div className="flex items-center space-x-3">
                            <svg className="w-8" viewBox="0 0 32 33">
                              <path
                                d="M21.137 26.927a5.167 5.167 0 00-1.63-4.65 5.158 5.158 0 00-3.492-1.357 4.701 4.701 0 01-2.158-.52h-.002a4.764 4.764 0 01-2.048-2.052v-.001a6.045 6.045 0 00.395-2.161 3.819 3.819 0 003.855 3.818 3.819 3.819 0 003.743-3.817c0-.762.138-1.49.395-2.161v-.002c.3-.798.765-1.518 1.353-2.115a6.067 6.067 0 014.658-1.824 11.993 11.993 0 00-4.099-4.114 6.084 6.084 0 01-1.215 3.955 7.617 7.617 0 00-.753-.524A5.167 5.167 0 0021.2 6.26a5.152 5.152 0 00-.386-1.967 5.195 5.195 0 00-4.662-3.224c-.046-.002-.092-.002-.138-.002-.045 0-.091 0-.137.002-1.31.01-2.58.19-3.79.518A15.163 15.163 0 001.432 12.253 6.082 6.082 0 000 16.021C.087 7.296 7.135.24 15.849.153c.055-.002.11-.002.164-.002a5.924 5.924 0 01.223.003c8.674.133 15.676 7.172 15.762 15.868.002.055.002.11.002.165 0 .054 0 .11-.002.164a6.082 6.082 0 01-1.432 3.768 6.095 6.095 0 01-4.36 2.168 6.067 6.067 0 01-3.968-1.215 7.8 7.8 0 01-1.354 1.36l.01.013a6.084 6.084 0 011.215 3.957 11.993 11.993 0 004.098-4.115 6.16 6.16 0 001.135-.163 12.9 12.9 0 01-6.555 5.956 12.71 12.71 0 01-4.8.934 2.89 2.89 0 01-2.3-1.139 2.896 2.896 0 01.424-3.972 7.88 7.88 0 001.876.224 1.984 1.984 0 00-1.983 1.986c0 1.096.888 1.985 1.983 1.985a12.116 12.116 0 00.028 0 1.984 1.984 0 001.983-1.986 1.984 1.984 0 00-1.983-1.985 7.908 7.908 0 01-6.252-3.056c.246-.185.477-.388.69-.608a7.067 7.067 0 002.07 1.814 6.982 6.982 0 003.492.933c.715 0 1.371.262 1.876.692a2.896 2.896 0 01.428 3.967 11.786 11.786 0 002.818-.942zm6.522-13.045a11.85 11.85 0 00-.932-2.822 5.153 5.153 0 00-4.657 1.63 5.171 5.171 0 00-1.355 3.497 4.72 4.72 0 01-.52 2.16v.002a4.764 4.764 0 01-2.037 2.045l.015.005h.002c.792.299 1.506.76 2.1 1.343a7.067 7.067 0 001.796-2.058 7.004 7.004 0 00.932-3.497c0-.717.26-1.373.69-1.879a2.89 2.89 0 013.966-.426zm.223 2.219a1.984 1.984 0 00-3.965.156 1.984 1.984 0 103.965-.156zm-4.189 1.965a7.86 7.86 0 01-.931 2.251 5.146 5.146 0 003.137 1.062 5.136 5.136 0 001.964-.386 5.201 5.201 0 003.22-4.669c.002-.046.002-.092.002-.137 0-.046 0-.092-.002-.138a15.038 15.038 0 00-.517-3.795A15.163 15.163 0 0019.956 1.6a6.104 6.104 0 011.992 3.235 12.9 12.9 0 015.916 6.547c.602 1.484.933 3.107.933 4.806 0 .937-.447 1.772-1.138 2.302a2.89 2.89 0 01-3.966-.423zm-7.93 14.152C7.09 32.085.089 25.046.003 16.35 0 16.296 0 16.24 0 16.186c0-.055 0-.11.002-.165a6.082 6.082 0 011.432-3.768 6.095 6.095 0 014.36-2.168A6.067 6.067 0 019.762 11.3a7.8 7.8 0 011.354-1.36 6.084 6.084 0 01-1.225-3.97 11.993 11.993 0 00-4.098 4.115 6.16 6.16 0 00-1.135.163 12.9 12.9 0 016.555-5.955 12.71 12.71 0 014.8-.935c.937 0 1.771.448 2.3 1.14a2.896 2.896 0 01-.424 3.972 7.908 7.908 0 00-1.876-.225 1.984 1.984 0 001.983-1.985 1.984 1.984 0 00-1.983-1.986 12.116 12.116 0 00-.028.001 1.984 1.984 0 00-1.983 1.985c0 1.097.888 1.986 1.983 1.986a7.908 7.908 0 016.252 3.055 5.948 5.948 0 00-.69.608 7.067 7.067 0 00-2.07-1.814 6.982 6.982 0 00-3.492-.933 2.883 2.883 0 01-1.876-.692 2.896 2.896 0 01-.428-3.966 11.786 11.786 0 00-2.818.94 5.167 5.167 0 001.63 4.65 5.158 5.158 0 003.492 1.358c.778 0 1.512.188 2.158.521h.002a4.764 4.764 0 012.048 2.051v.002a6.045 6.045 0 00-.395 2.16 3.819 3.819 0 00-3.855-3.817 3.819 3.819 0 00-3.743 3.817 6.02 6.02 0 01-.395 2.16v.002a6.066 6.066 0 01-1.353 2.115 6.067 6.067 0 01-4.658 1.824 11.993 11.993 0 004.099 4.115 6.084 6.084 0 011.215-3.955c.239.189.49.363.753.523a5.167 5.167 0 00-1.06 3.143 5.152 5.152 0 00.386 1.967 5.195 5.195 0 004.8 3.225c.045 0 .091 0 .137-.002 1.31-.01 2.58-.19 3.79-.517a15.163 15.163 0 0010.654-10.667A6.082 6.082 0 0032 16.35c-.087 8.725-7.135 15.782-15.849 15.869l-.164.001-.165-.001-.058-.002zm-3.718-1.445a6.104 6.104 0 01-1.993-3.235 12.9 12.9 0 01-5.916-6.546 12.753 12.753 0 01-.933-4.806c0-.938.447-1.773 1.138-2.303a2.89 2.89 0 013.966.423 7.86 7.86 0 01.931-2.251 5.146 5.146 0 00-3.137-1.061 5.136 5.136 0 00-1.964.386 5.201 5.201 0 00-3.22 4.668c-.002.046-.002.092-.002.138a15.038 15.038 0 00.519 3.932 15.163 15.163 0 0010.61 10.655zm-6.772-9.46c.27.042.545.065.826.065a5.153 5.153 0 003.83-1.695 5.171 5.171 0 001.356-3.497c0-.78.188-1.514.52-2.161v-.002a4.764 4.764 0 012.036-2.044 5.94 5.94 0 01-.014-.006h-.002a6.056 6.056 0 01-2.1-1.343 7.067 7.067 0 00-1.796 2.059 7.004 7.004 0 00-.932 3.497 2.89 2.89 0 01-.69 1.878 2.89 2.89 0 01-3.966.426c.194.99.51 1.937.932 2.822zm-1.155-5.041a1.984 1.984 0 003.964-.157 1.984 1.984 0 10-3.964.157z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            <div className="text-sm font-medium">
                              Evolve Bank
                            </div>
                          </div>

                          <div>
                            <div className="text-sm font-medium">
                              Account Name
                            </div>
                            <div className="text-sm">Ladi Jeremiah</div>
                          </div>

                          <div>
                            <div className="text-sm font-medium">
                              Account No.
                            </div>
                            <div className="text-sm">8335742807</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 m-4 rounded-md bg-gray-50 hover:bg-gray-100 hover:shadow">
                      <div className="grid space-y-3">
                        <div className="text-sm font-bold text-green-500">
                          (£) GBP Only
                        </div>
                        <div className="grid grid-cols-3 gap-8">
                          <div>
                            <img
                              src="https://clearjunction.com/wp-content/themes/framework/images/logo.svg"
                              className="w-28"
                              alt=""
                            />
                          </div>

                          <div>
                            <div className="text-sm font-medium">
                              Account Name
                            </div>
                            <div className="text-sm">Ladi Jeremiah</div>
                          </div>

                          <div>
                            <div className="text-sm font-medium">
                              Account No.
                            </div>
                            <div className="text-sm">33506986</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="p-6 m-4 rounded-md bg-gray-50 hover:bg-gray-100 hover:shadow">
                    <div className="grid space-y-3">
                      <div className="text-sm font-bold text-green-500">
                        (£) EUR Only
                      </div>
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <div className="text-sm font-medium">Bank Name</div>
                          <div className="text-sm">&mdash;</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium">
                            Account Name
                          </div>
                          <div className="text-sm">Ladi Jeremiah</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium">Account No.</div>
                          <div className="text-sm">&mdash;</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                )}
              </div>
            </div>

            {/* Billing Address  */}

            {/* <div className="pt-6">
            <div className="capitalize font-medium">Billing address</div>
            <div className="text-sm font-light tracking-tight">
              Select the address that matches your card or payment method.
            </div>
          </div>

          <div className="border rounded-md text-gray-500">
            <div className="rounded-b-md">
              <div className="p-4 border-b rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      name="billing_address"
                      className="radio text-black"
                    />
                    <div className="text-sm font-medium tracking-tight">
                      <div>Same as shipping address</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-b rounded-t-md">
                <div className="flex justify-between items-center">
                  <div className="grid grid-flow-col auto-cols-max gap-8">
                    <input
                      type="radio"
                      name="billing_address"
                      className="radio text-black"
                    />
                    <div className="text-sm font-medium tracking-tight">
                      <div>Use a different billing address</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

            <div className="flex space-x-3 items-center">
              <button
                className={loading ? `btn loading` : `btn`}
                onClick={completeOrder}
              >
                Complete Order
              </button>

              <ReturnLinks
                path={"/checkout/shipping"}
                title={"Return to shipping"}
              />
            </div>
          </One>

          <Two>
            <CheckoutCart />
          </Two>
        </Wrapper>
        <Footer />
      </PublicWrapper>

      {openCA && <CashApp toggle={() => setOpenCA(false)} />}
      {openBT && <BankTransfer toggle={() => setOpenBT(false)} />}
    </>
  );
}
