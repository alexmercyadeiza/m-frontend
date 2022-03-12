import { useState } from "react";
import Footer from "../../components/public/Footer";
import Header from "../../components/public/Header";
import PublicWrapper from "../../components/public/PublicWrapper";
import Wrapper from "../../components/public/Grid/Wrapper";
import One from "../../components/public/Grid/One";
import Two from "../../components/public/Grid/Two";
import Breadcrumbs from "../../components/public/Breadcrumbs";
import NextButton from "../../components/public/NextButton";
import ReturnLinks from "../../components/public/ReturnLinks";
import CheckoutCart from "../../components/public/CheckoutCart";
import { useRouter } from "next/router";
import { useAppContext } from "../../lib/context/global";

export default function Payment() {
  const router = useRouter();
  const [sharedState, updateSharedState] = useAppContext();
  const [payment, setPayment] = useState({
    method: "",
  });

  const [status, setStatus] = useState({
    fw: false,
    st: false,
    ca: false,
    bt: false,
  });

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
                                  <div className="text-2xs">{JSON.stringify(payment)}</div>


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
                    <svg className="w-8" viewBox="0 0 200 120" version="1.1">
                      <g
                        id="Rounded"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Large"
                          transform="translate(-32.000000, -28.000000)"
                        >
                          <g
                            id="large/visa"
                            transform="translate(32.000000, 28.000000)"
                          >
                            <rect
                              id="Background"
                              fill="#25459A"
                              x="0"
                              y="0"
                              width="200"
                              height="120"
                              rx="8"
                            ></rect>
                            <g
                              id="Logo"
                              transform="translate(32.000000, 40.000000)"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            >
                              <path
                                d="M68.2672516,27.2122001 C68.1919404,21.6403198 73.5588253,18.5307792 77.601826,16.6821648 C81.7558108,14.7851962 83.151042,13.5689046 83.1351871,11.8727915 C83.1034772,9.27654823 79.8215122,8.130928 76.7496247,8.08629345 C71.3906676,8.00818295 68.2751783,9.44392782 65.7978502,10.5300353 L63.8675158,2.05318951 C66.3527715,0.97824065 70.9546576,0.0409150083 75.7269836,0 C86.9284726,0 94.2574019,5.18876693 94.2970395,13.2341454 C94.3406403,23.4442997 79.2467723,24.0096708 79.3498288,28.5735539 C79.3855023,29.9572251 80.7926254,31.4338851 83.8764037,31.8095591 C85.4024382,31.9992559 89.6158792,32.1443183 94.3921687,30.0799701 L96.2670112,38.2815696 C93.6985165,39.1593824 90.3967329,40 86.2863494,40 C75.7428385,40 68.3267073,34.7405617 68.2672516,27.2122001 M114.282145,39.2932862 C112.236863,39.2932862 110.512642,38.1737028 109.743679,36.4552724 L93.7421172,0.602566485 L104.93568,0.602566485 L107.163294,6.37902176 L120.842112,6.37902176 L122.134286,0.602566485 L132,0.602566485 L123.390787,39.2932862 L114.282145,39.2932862 M115.847817,28.8413614 L119.078253,14.3128138 L110.231217,14.3128138 L115.847817,28.8413614 M54.6954535,39.2932862 L45.8721999,0.602566485 L56.538586,0.602566485 L65.3578762,39.2932862 L54.6954535,39.2932862 M38.915861,39.2932862 L27.8134648,12.958899 L23.3225632,35.3505672 C22.7953877,37.8501021 20.7144316,39.2932862 18.4035794,39.2932862 L0.253678458,39.2932862 L0,38.1699831 C3.72590236,37.4111957 7.95916162,36.187465 10.5236923,34.8781847 C12.0933277,34.0784823 12.5412287,33.3792076 13.0565131,31.4785195 L21.5626689,0.602566485 L32.8355053,0.602566485 L50.1173503,39.2932862 L38.915861,39.2932862"
                                id="Shape"
                                transform="translate(66.000000, 20.000000) scale(-1, 1) rotate(-180.000000) translate(-66.000000, -20.000000) "
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>

                    <svg className="w-8" viewBox="0 0 200 120" version="1.1">
                      <g
                        id="Rounded"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Large"
                          transform="translate(-32.000000, -404.000000)"
                        >
                          <g
                            id="large/mastercard"
                            transform="translate(32.000000, 404.000000)"
                          >
                            <rect
                              id="Background"
                              fill="#10427A"
                              x="0"
                              y="0"
                              width="200"
                              height="120"
                              rx="8"
                            ></rect>
                            <g
                              id="Logo"
                              transform="translate(52.000000, 20.000000)"
                              fillRule="nonzero"
                            >
                              <g id="mastercard">
                                <rect
                                  id="Rectangle-path"
                                  fill="#FF5F00"
                                  x="36.444549"
                                  y="6.79534022"
                                  width="27.0118354"
                                  height="49.9501544"
                                ></rect>
                                <path
                                  d="M38.1595777,31.7704094 C38.1595777,21.621526 42.7901781,12.6199079 49.9075824,6.79533142 C44.6767188,2.55927578 38.0738258,-7.82864208e-06 30.8706697,-7.82864208e-06 C13.8060499,-7.82864208e-06 6.74147421e-07,14.2084287 6.74147421e-07,31.7704094 C6.74147421e-07,49.3323899 13.8060499,63.5408265 30.8706697,63.5408265 C38.0738258,63.5408265 44.6767188,60.9815429 49.9075824,56.7454874 C42.7901781,51.0091618 38.1595777,41.9192929 38.1595777,31.7704094 Z"
                                  id="Shape"
                                  fill="#EB001B"
                                ></path>
                                <path
                                  d="M99.900916,31.7704094 C99.900916,49.3323899 86.0948668,63.5408265 69.0302469,63.5408265 C61.8270906,63.5408265 55.2241973,60.9815429 49.9933344,56.7454874 C57.1964902,50.920911 61.7413387,41.9192929 61.7413387,31.7704094 C61.7413387,21.621526 57.1107383,12.6199079 49.9933344,6.79533142 C55.2241973,2.55927578 61.8270906,-7.82864208e-06 69.0302469,-7.82864208e-06 C86.0948668,-7.82864208e-06 99.900916,14.2966799 99.900916,31.7704094 Z"
                                  id="Shape"
                                  fill="#F79E1B"
                                ></path>
                              </g>
                              <path
                                d="M14.5714286,83.8235292 L14.5714286,78.5294113 C14.5714286,76.4999997 13.2380952,75.1764701 10.9523809,75.1764701 C9.80952379,75.1764701 8.57142853,75.5294112 7.71428569,76.6764701 C7.04761902,75.705882 6.09523806,75.1764701 4.66666666,75.1764701 C3.71428569,75.1764701 2.76190473,75.4411763 2,76.4117648 L2,75.3529409 L0,75.3529409 L0,83.8235292 L2,83.8235292 L2,79.1470587 C2,77.6470586 2.85714284,76.9411763 4.19047618,76.9411763 C5.52380951,76.9411763 6.19047617,77.7352936 6.19047617,79.1470587 L6.19047617,83.8235292 L8.19047617,83.8235292 L8.19047617,79.1470587 C8.19047617,77.6470586 9.14285713,76.9411763 10.3809523,76.9411763 C11.7142857,76.9411763 12.3809524,77.7352936 12.3809524,79.1470587 L12.3809524,83.8235292 L14.5714286,83.8235292 L14.5714286,83.8235292 Z M44.1904762,75.3529409 L40.9523808,75.3529409 L40.9523808,72.7941173 L38.9523812,72.7941173 L38.9523812,75.3529409 L37.1428572,75.3529409 L37.1428572,77.0294113 L38.9523812,77.0294113 L38.9523812,80.9117645 C38.9523812,82.8529411 39.8095237,84 42.0952384,84 C42.9523809,84 43.904762,83.7352938 44.5714285,83.3823527 L44.0000002,81.7941173 C43.4285714,82.1470584 42.7619049,82.2352938 42.2857143,82.2352938 C41.3333336,82.2352938 40.9523808,81.7058822 40.9523808,80.8235291 L40.9523808,77.0294113 L44.1904762,77.0294113 L44.1904762,75.3529409 L44.1904762,75.3529409 Z M61.1428572,75.1764701 C60.0000001,75.1764701 59.2380954,75.705882 58.7619047,76.4117648 L58.7619047,75.3529409 L56.7619047,75.3529409 L56.7619047,83.8235292 L58.7619047,83.8235292 L58.7619047,79.0588233 C58.7619047,77.6470586 59.4285713,76.8529409 60.6666666,76.8529409 C61.047619,76.8529409 61.5238096,76.9411763 61.9047619,77.0294113 L62.4761907,75.2647055 C62.0952383,75.1764701 61.5238096,75.1764701 61.1428572,75.1764701 L61.1428572,75.1764701 L61.1428572,75.1764701 Z M35.5238095,76.0588232 C34.5714286,75.4411763 33.2380953,75.1764701 31.8095238,75.1764701 C29.5238096,75.1764701 27.9999999,76.235294 27.9999999,77.9117644 C27.9999999,79.3235295 29.1428572,80.1176468 31.142857,80.382353 L32.0952382,80.470588 C33.1428571,80.6470583 33.7142856,80.9117645 33.7142856,81.3529411 C33.7142856,81.970588 32.9523809,82.4117646 31.6190475,82.4117646 C30.2857143,82.4117646 29.2380952,81.970588 28.5714284,81.5294114 L27.6190475,82.9411765 C28.6666666,83.6470584 30.0952381,84 31.5238094,84 C34.1904762,84 35.7142857,82.8529411 35.7142857,81.2647057 C35.7142857,79.7647056 34.4761904,78.9705883 32.5714285,78.7058821 L31.6190475,78.6176467 C30.7619047,78.5294113 30.0952381,78.352941 30.0952381,77.8235294 C30.0952381,77.2058821 30.7619047,76.8529409 31.8095238,76.8529409 C32.9523809,76.8529409 34.095238,77.2941175 34.6666665,77.5588232 L35.5238095,76.0588232 L35.5238095,76.0588232 Z M88.6666667,75.1764701 C87.5238096,75.1764701 86.7619049,75.705882 86.2857143,76.4117648 L86.2857143,75.3529409 L84.2857143,75.3529409 L84.2857143,83.8235292 L86.2857143,83.8235292 L86.2857143,79.0588233 C86.2857143,77.6470586 86.9523809,76.8529409 88.1904762,76.8529409 C88.5714285,76.8529409 89.0476191,76.9411763 89.4285715,77.0294113 L90.0000002,75.2647055 C89.6190479,75.1764701 89.0476191,75.1764701 88.6666667,75.1764701 L88.6666667,75.1764701 L88.6666667,75.1764701 Z M63.1428572,79.5882348 C63.1428572,82.1470584 65.0476191,84 68.0000002,84 C69.3333333,84 70.2857144,83.7352938 71.2380952,83.0294115 L70.2857144,81.5294114 C69.5238097,82.0588234 68.761905,82.3235292 67.904762,82.3235292 C66.2857144,82.3235292 65.1428572,81.2647057 65.1428572,79.5882348 C65.1428572,77.9999998 66.2857144,76.9411763 67.904762,76.8529409 C68.761905,76.8529409 69.5238097,77.1176467 70.2857144,77.6470586 L71.2380952,76.1470586 C70.2857144,75.4411763 69.3333333,75.1764701 68.0000002,75.1764701 C65.0476191,75.1764701 63.1428572,77.0294113 63.1428572,79.5882348 L63.1428572,79.5882348 L63.1428572,79.5882348 Z M81.6190477,79.5882348 L81.6190477,75.3529409 L79.6190477,75.3529409 L79.6190477,76.4117648 C78.9523811,75.6176466 78,75.1764701 76.7619047,75.1764701 C74.1904763,75.1764701 72.1904763,77.0294113 72.1904763,79.5882348 C72.1904763,82.1470584 74.1904763,84 76.7619047,84 C78.0952382,84 79.0476193,83.558823 79.6190477,82.7647057 L79.6190477,83.8235292 L81.6190477,83.8235292 L81.6190477,79.5882348 Z M74.2857145,79.5882348 C74.2857145,78.0882348 75.3333334,76.8529409 77.0476193,76.8529409 C78.666667,76.8529409 79.8095241,77.9999998 79.8095241,79.5882348 C79.8095241,81.0882349 78.666667,82.3235292 77.0476193,82.3235292 C75.3333334,82.2352938 74.2857145,81.0882349 74.2857145,79.5882348 L74.2857145,79.5882348 Z M50.3809523,75.1764701 C47.7142857,75.1764701 45.8095238,76.9411763 45.8095238,79.5882348 C45.8095238,82.2352938 47.7142857,84 50.4761905,84 C51.8095238,84 53.142857,83.6470584 54.1904759,82.8529411 L53.2380952,81.5294114 C52.4761905,82.0588234 51.5238094,82.4117646 50.5714287,82.4117646 C49.3333334,82.4117646 48.0952381,81.882353 47.8095238,80.382353 L54.5714283,80.382353 L54.5714283,79.6764701 C54.6666665,76.9411763 52.9523806,75.1764701 50.3809523,75.1764701 L50.3809523,75.1764701 L50.3809523,75.1764701 Z M50.3809523,76.7647055 C51.6190476,76.7647055 52.4761905,77.4705883 52.6666665,78.7941175 L47.9047621,78.7941175 C48.0952381,77.6470586 48.952381,76.7647055 50.3809523,76.7647055 L50.3809523,76.7647055 Z M100,79.5882348 L100,72 L98,72 L98,76.4117648 C97.3333334,75.6176466 96.3809523,75.1764701 95.1428574,75.1764701 C92.5714286,75.1764701 90.5714286,77.0294113 90.5714286,79.5882348 C90.5714286,82.1470584 92.5714286,84 95.1428574,84 C96.4761905,84 97.4285716,83.558823 98,82.7647057 L98,83.8235292 L100,83.8235292 L100,79.5882348 Z M92.6666668,79.5882348 C92.6666668,78.0882348 93.7142857,76.8529409 95.4285716,76.8529409 C97.0476193,76.8529409 98.1904764,77.9999998 98.1904764,79.5882348 C98.1904764,81.0882349 97.0476193,82.3235292 95.4285716,82.3235292 C93.7142857,82.2352938 92.6666668,81.0882349 92.6666668,79.5882348 L92.6666668,79.5882348 Z M25.8095239,79.5882348 L25.8095239,75.3529409 L23.8095239,75.3529409 L23.8095239,76.4117648 C23.1428571,75.6176466 22.1904762,75.1764701 20.9523809,75.1764701 C18.3809522,75.1764701 16.3809522,77.0294113 16.3809522,79.5882348 C16.3809522,82.1470584 18.3809522,84 20.9523809,84 C22.2857142,84 23.2380953,83.558823 23.8095239,82.7647057 L23.8095239,83.8235292 L25.8095239,83.8235292 L25.8095239,79.5882348 Z M18.3809523,79.5882348 C18.3809523,78.0882348 19.4285714,76.8529409 21.1428571,76.8529409 C22.7619047,76.8529409 23.9047618,77.9999998 23.9047618,79.5882348 C23.9047618,81.0882349 22.7619047,82.3235292 21.1428571,82.3235292 C19.4285714,82.2352938 18.3809523,81.0882349 18.3809523,79.5882348 Z"
                                id="Shape"
                                fill="#FFFFFF"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Body  */}
              {status.fw && (
                <div className="p-4">
                  <div className="grid place-items-center">
                    <div className="flex items-center">
                      <svg
                        className="h-28 w-28"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.5"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>

                    <div className="text-sm font-light text-center tracking-tight px-20">
                      After clicking "Complete order", you will be redirected to
                      Flutterwave to complete your purchase securely.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stripe  */}
          <div className="border rounded-md text-gray-500">
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
                      type="checkbox"
                      onChange={toggle}
                      checked={status.st ? true : false}
                      className="focus:ring-gray-500 self-center h-5 w-5 text-gray-600 border-gray-300 rounded-full"
                    />
                    {/* Stripe  */}
                    <div className="text-sm">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/stripe-seeklogo.com_92iB8vM_o.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645893106520"
                        className="w-16"
                        alt=""
                      />
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
                      <svg
                        className="h-28 w-28"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="0.5"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>

                    <div className="text-sm font-light tracking-tight text-center px-20">
                      After clicking "Complete order", you will be redirected to
                      Stripe to complete your purchase securely.
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
                      $Cashtag and click on "Complete order".
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
                    Make a direct transfer to the correct currency account below
                    and click on "Complete Order".
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
                          <div className="text-sm font-medium">Evolve Bank</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium">
                            Account Name
                          </div>
                          <div className="text-sm">Ladi Jeremiah</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium">Account No.</div>
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
                          <div className="text-sm font-medium">Account No.</div>
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

          <div className="pt-6">
            <div className="capitalize font-medium">Billing address</div>
            <div className="text-sm font-light tracking-tight">
              Select the address that matches your card or payment method.
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
                    />
                    {/* Flutterwave  */}
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
                    {/* Flutterwave  */}
                    <div className="text-sm font-medium tracking-tight">
                      <div>Use a different billing address</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 items-center">
            <NextButton path={"/checkout/complete"} title={"Complete order"} />

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
  );
}
