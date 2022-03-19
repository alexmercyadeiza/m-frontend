export default function Orders() {
    return (
      <>
        <div className="border p-4 rounded-md space-y-6 mx-10">
          <div className="col-span-3 px-4 tracking-normal font-bold text-gray-700">
            Recent Orders
          </div>

          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>photos</th>
                  <th>date</th>
                  <th>customer</th>
                  <th>payment</th>
                  <th>category</th>
                  <th>price</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://images.pexels.com/photos/3373737/pexels-photo-3373737.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold capitalize text-sm">
                          Hair regrowth oil
                        </div>
                        <div className="text-xs opacity-80">#234344545</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm font-medium tracking-tight text-gray-600">
                    March 10th, 2022
                  </td>
                  <td className="text-sm font-medium tracking-tight text-gray-600">
                    alina@gmail.com
                  </td>
                  <td className="text-sm font-medium tracking-tight text-gray-600">
                    Stripe
                  </td>
                  <td className="text-sm font-medium tracking-tight text-gray-600">
                    Hair Essentials
                  </td>
                  <th>
                    <div className="text-sm text-green-600">$29</div>
                  </th>
                  <th>
                    <div className="grid grid-cols-2">
                      <div className="text-yellow-600 border border-yellow-300 px-2 text-2xs uppercase py-0.5 rounded-lg bg-yellow-100 place-self-start self-center">
                        Pending
                      </div>
                    </div>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}