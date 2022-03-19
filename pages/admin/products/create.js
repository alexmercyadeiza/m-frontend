import Layout from "../../../components/admin/layout";
import Header from "../../../components/admin/header";
import { useState } from "react";
import { useRouter } from 'next/router';
import ProductHeader from '../../../components/admin/product/header';
import Colors from '../../../components/admin/product/colors';
import CurrencyInput from "react-currency-input-field";

export default function Create() {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    weight: '',
    howtouse: '',
    ingredients: '',
    colors: [],
    description: '',
    length: [],
    frontal: {
      status: false,
      type: {
        size: '',
        price: 0,
      }
    }
  })

  const [type, setType] = useState({});

  const [length, setLength] = useState({
    length: '',
    price: 0,
  });

  const [toggleColor, setToggleColor] = useState(false);

  /**
   * Handle Form Changes
   */
  const handleProductInfo = (e) => {
    const {name, value} = e.target;
    setProduct({...product, [name]: value});
  }

  const handleLength = (e) => {
    const {name, value} = e.target;
    setLength({...length, [name]: value });
  }

  const addLength = () => {
    setProduct({...product, length: [...product.length, length]});
    setLength({ width: '', length: '' });
  }

  const handleColor = (e) => {
    const {name, value} = e.target;
    setProduct({...product, colors: [...product.colors, ]});
  }

  const router = useRouter();

  const handleImages = (e) => {
    const { name, value, files } = e.target;
    // console.log(name, value);

    let img = [];

    for (let i = 0; i < files.length; i++) {
      img.push(URL.createObjectURL(files[i]));
    }

    setImages(img);
  };

  const removeImage = (i) => {
    const filter = images.filter((image) => image != i);
    setImages(filter);
  };

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen h-full col-span-4 mb-10 bg-white">
          <div className="grid md:grid-cols-3">
            <ProductHeader />

            <div className="col-span-2 lg:mb-40 pt-10 pb-20 space-y-10 lg:border-r border-gray-100">
              <div className="text-2xs">
                {" "}
                {JSON.stringify(product, null, 4)}
              </div>
              <div className="text-2xs"> {JSON.stringify(length, null, 4)}</div>

              <div className="text-2xs">
                {" "}
                {JSON.stringify(product.colors, null, 4)}
              </div>

              <div className="col-span-3 px-10 tracking-tight text-2xl">
                Create a new product
              </div>

              <div className="grid md:grid-cols-3 px-10 gap-8">
                <div className="space-y-2 text-sm">
                  <div className="font-medium">Name</div>
                  <div className="flex items-center px-4 rounded-md border">
                    <div className="text-sm border-r pr-4 border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      onChange={handleProductInfo}
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="font-medium">Price</div>
                  <div className="flex items-center rounded-md border">
                    <div className="text-sm border-r border-gray-200">
                      <select className="block text-sm rounded-md border-transparent focus:border-none focus:bg-white focus:ring-0">
                        <option>NGN</option>
                        <option>USD</option>
                        <option>EUR</option>
                      </select>
                    </div>
                    {/* <input
                      type="text"
                      name="price"
                      onChange={handleProductInfo}
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      placeholder=""
                    /> */}
                    <CurrencyInput
                      name="price"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      onChange={handleProductInfo}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="font-medium">Weight (FL OZ)</div>
                  <div className="flex items-center px-4 rounded-md border">
                    <div className="text-sm border-r pr-4 border-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                      </svg>
                    </div>
                    {/* <input
                      type="text"
                      name="weight"
                      onChange={handleProductInfo}
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      placeholder=""
                    /> */}
                    <CurrencyInput
                      name="weight"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      onChange={handleProductInfo}
                    />
                  </div>
                </div>
              </div>

              <div className="px-10 grid md:grid-cols-3 gap-8">
                <textarea
                  className="mt-1 col-span-2 lg:col-span-1 block w-full rounded-md border-gray-200 border text-sm focus:border-gray-300 focus:bg-white focus:ring-0"
                  rows="3"
                  name="howtouse"
                  onChange={handleProductInfo}
                  placeholder="How to use"
                ></textarea>
                <textarea
                  className="mt-1 col-span-2 lg:col-span-1 block w-full rounded-md border-gray-200 border text-sm focus:border-gray-300 focus:bg-white focus:ring-0"
                  rows="3"
                  name="ingredients"
                  onChange={handleProductInfo}
                  placeholder="Ingredients"
                ></textarea>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      onClick={() => setToggleColor(!toggleColor)}
                      className="inline-flex rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-indigo-500"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Colors
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {toggleColor && <Colors />}
                </div>
                <textarea
                  className="col-span-2 block w-full rounded-md border-gray-200 border text-sm focus:border-gray-300 focus:bg-white focus:ring-0"
                  rows="3"
                  name="description"
                  onChange={handleProductInfo}
                  placeholder="Description"
                ></textarea>
              </div>

              <div className="px-10 grid md:grid-cols-3 gap-8">
                <div className="space-y-2 text-sm">
                  <div className="font-medium">Custom Length & Price</div>
                  <div className="flex items-center pl-4 pr-0.5 rounded-md border">
                    <div className="text-sm border-r pr-3 border-gray-200 font-bold">
                      L
                    </div>
                    <CurrencyInput
                      name="length"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      onChange={handleLength}
                    />
                    <div className="text-sm border-r pr-3 border-gray-200 font-bold">
                      $
                    </div>
                    <CurrencyInput
                      name="price"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      onChange={handleLength}
                    />
                    <button className="btn btn-sm btn-outline border-none">
                      add
                    </button>
                  </div>
                 <Error error={'Provide the length and price.'} />
                </div>
              </div>

              <hr />

              <div className="px-10 grid grid-flow-col auto-cols-max gap-8">
                <div className="text-sm flex space-x-6 items-center">
                  <div className="font-medium">Frontal</div>
                  <input
                    type="checkbox"
                    className="rounded-md p-2.5 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-0 focus:ring-gray-100"
                  />
                </div>

                <div className="flex space-x-12">
                  <div className="flex space-x-5 items-center">
                    <div>13 x 4</div>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-neutral"
                    />
                  </div>
                  <div className="flex space-x-5 items-center">
                    <div>13 x 6</div>
                    <input
                      type="radio"
                      name="radio-2"
                      className="radio radio-neutral"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center rounded-md border">
                    <div className="text-sm border-r px-3 border-gray-200 font-medium">
                      $
                    </div>
                    <input
                      type="text"
                      className="block w-full focus:border-b rounded-r-md text-sm border-none focus:border-none focus:ring-0"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div className="px-10 grid grid-flow-col auto-cols-max gap-8">
                <div className="text-sm flex space-x-6 items-center">
                  <div className="font-medium">Closure</div>
                  <input
                    type="checkbox"
                    className="rounded-md p-2.5 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-0 focus:ring-gray-100"
                  />
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center rounded-md border">
                    <div className="text-sm border-r px-3 border-gray-200 font-medium">
                      $
                    </div>
                    <input
                      type="text"
                      className="block w-full focus:border-b text-sm border-none rounded-r-md focus:border-none focus:ring-0"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-5 mx-10">
              <div class="col-span-3 font-medium pt-10">
                Upload Product Image
              </div>
              <div class="grid auto-cols-max">
                <div class="mb-3 w-3/4">
                  <input
                    class="form-control text-sm block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-0 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="file"
                    id="formFileMultiple"
                    name="images"
                    onChange={handleImages}
                    multiple
                  />
                </div>
              </div>

              <div class="w-full">
                <div class="grid grid-cols-3 gap-3">
                  {images.map((image) => (
                    <div
                      key={image}
                      onClick={() => {
                        removeImage(image);
                      }}
                      class="relative w-24 h-24 border-gray-100 hover:shadow-lg border bg-cover bg-center rounded-md"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <div class="absolute top-0 right-0 p-1 m-1 rounded-full hover:bg-red-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div class="space-y-10 pt-10">
                <div class="text-xs">
                  You can save this product as a draft if you are not ready to
                  publish it yet.{" "}
                  <a
                    onClick={() => router.push("/admin/products")}
                    class="link"
                  >
                    View product drafts -&gt;
                  </a>
                </div>
                <div class="space-y-4 lg:space-x-4">
                  <button class="btn btn-sm btn-outline">save as draft</button>
                  <button class="btn btn-sm btn-success">publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
