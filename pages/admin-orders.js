import Head from "next/head";
import BodyWrapper from "../components/BodyWrapper";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

export default function Orders() {
  const router = useRouter();

  return (
    <BodyWrapper>
      <Head>
        <title>Orders &mdash; Melina Beauty &amp; Digitals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header />
      <Menu /> */}

      {/* {JSON.stringify(router.pathname)} */}
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="text-lg font-medium">All Orders</div>
      </div>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Customer Details</th>
              <th>Order ID</th>
              <th>Date / Time</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Shampoo</div>
                    <div className="text-sm opacity-50">$44.90</div>
                  </div>
                </div>
              </td>
              <td>jewell@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 10:49 AM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-yellow-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Pending
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Gel</div>
                    <div className="text-sm opacity-50">$64.90</div>
                  </div>
                </div>
              </td>
              <td>mary.joana@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-green-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Completed
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Conditioner</div>
                    <div className="text-sm opacity-50">$24.00</div>
                  </div>
                </div>
              </td>
              <td>ladi.jerry@gmail.com</td>
              <td>M1985245-22</td>
              <td>Mar 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-red-600 text-white px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Failed
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs btn space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Shampoo</div>
                    <div className="text-sm opacity-50">$44.90</div>
                  </div>
                </div>
              </td>
              <td>jewell@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 10:49 AM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-yellow-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Pending
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Gel</div>
                    <div className="text-sm opacity-50">$64.90</div>
                  </div>
                </div>
              </td>
              <td>mary.joana@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-green-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Completed
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Conditioner</div>
                    <div className="text-sm opacity-50">$24.00</div>
                  </div>
                </div>
              </td>
              <td>ladi.jerry@gmail.com</td>
              <td>M1985245-22</td>
              <td>Mar 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-red-600 text-white px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Failed
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs btn space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Shampoo</div>
                    <div className="text-sm opacity-50">$44.90</div>
                  </div>
                </div>
              </td>
              <td>jewell@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 10:49 AM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-yellow-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Pending
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Gel</div>
                    <div className="text-sm opacity-50">$64.90</div>
                  </div>
                </div>
              </td>
              <td>mary.joana@gmail.com</td>
              <td>M1985245-22</td>
              <td>Jan 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-green-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Completed
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>

            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="https://ik.imagekit.io/et8vxrzxxdj/melina/conditioner_-_wash_out_Jodz9Oz42.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642283397695"
                        className="ob"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hair Conditioner</div>
                    <div className="text-sm opacity-50">$24.00</div>
                  </div>
                </div>
              </td>
              <td>ladi.jerry@gmail.com</td>
              <td>M1985245-22</td>
              <td>Mar 12, 2022 1:49 PM</td>
              <td>
                <div className="grid">
                  <div className="place-self-start bg-gray-300 px-2 py-1 rounded-md uppercase text-xs font-medium tracking-wide">
                    Processing
                  </div>
                </div>
              </td>
              <th>
                <button className="btn btn-xs btn space-x-1">
                  <div>view details</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform -rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </th>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <div className="btn-group">
                  <button className="btn btn-outline btn-sm">Previous</button>
                  <button className="btn btn-outline btn-sm">1</button>
                  <button className="btn btn-sm">2</button>
                  <button className="btn btn-outline btn-sm">3</button>
                  <button className="btn btn-outline btn-sm">4</button>
                  <button className="btn btn-outline btn-sm">Next</button>
                </div>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </BodyWrapper>
  );
}
