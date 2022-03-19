
import Header from '../../../components/admin/header';
import Layout from '../../../components/admin/layout';
import ProductHeader from '../../../components/admin/product/header';
export default function Product() {
    return (
      <>
        <Header />
        <Layout>
          <div className="min-h-screen h-full col-span-4 mb-10 bg-white">
            <div className="grid md:grid-cols-3">
              <ProductHeader />

              <div className="col-span-3 pb-20 pt-10">
                <div className="rounded-md space-y-6">
                  <div className="grid grid-cols-2 px-10 col-span-3">
                    <div className="tracking-tight text-2xl">All products</div>
                    <div className="font-bold  justify-self-end text-gray-500 tracking-tight text-right">
                      <span className='text-2xs tracking-tight font-normal block'>Products</span>
                      34
                    </div>
                  </div>

                  <div className="overflow-x-auto w-full px-10">
                    <table className="table w-full">
                      <thead>
                        <tr>
                          <th>photos</th>
                          <th>date</th>
                          <th>category</th>
                          <th>price</th>
                          <th>status</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src="https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold capitalize text-sm">
                                  Hair regrowth oil
                                </div>
                                <div className="text-sm opacity-50">
                                  #234344545
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-sm">March 10th, 2022</td>
                          <td className="text-sm">Hair Essentials</td>
                          <th>
                            <div className="text-sm text-green-600">$29</div>
                          </th>
                          <th>
                            <div className="grid">
                              <div className="text-green-600 border border-green-300 px-2 text-2xs uppercase py-0.5 rounded-lg bg-green-100 place-self-start self-center">
                                Available
                              </div>
                            </div>
                          </th>
                          <td>
                            <button className="btn btn-sm">Edit</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
}