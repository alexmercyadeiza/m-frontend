import Layout from "../../../components/admin/layout";
import Header from "../../../components/admin/header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductHeader from "../../../components/admin/product/header";
import Colors from "../../../components/admin/product/colors";
import CurrencyInput from "react-currency-input-field";
import Error from "../../../components/admin/product/error-alert";
import { useAppContext } from "../../../lib/context/global";
import { Transition } from "@headlessui/react";
import TextArea from "../../../components/admin/product/textarea";
import { postImage } from "../../../lib/api";

export default function Create() {
  /**
   * States
   */
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);
  const [type, setType] = useState({});

  const [length, setLength] = useState({
    size: "",
    price: '',
  });

  const [product, setProduct] = useState({
    category_id: "",
    name: "",
    price: "",
    weight_ml: '',
    weight_fl: '',
    howtouse: "",
    ingredients: "",
    precaution: "",
    benefits: "",
    colors: {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false,
      c9: false,
      c10: false,
      c12: false,
    },
    length: [],
    frontal: {
      status: false,
      size: "",
      price: "",
    },
    closure: {
      status: false,
      price: "",
    },
    status: 0,
  });

  const [sharedState, updateSharedState] = useAppContext();

  /**
   * U  S   E   E   F   F   E   C   T   S
   */
  useEffect(() => {
    // Get store categories
    fetch("http://127.0.0.1:8000/v1/store/category", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer 2|7n7kIgzmpMizpeTlHZ7r2VK9vgwc4sbzEediVQaH",
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  /**
   * Data from server
   */
  const [categories, setCategories] = useState([]);

  /**
   * Handle Form Changes
   */
  const handleProductInfo = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Length
  const handleLength = (e) => {
    const { name, value } = e.target;
    setLength({ ...length, [name]: value });
  };

  const addLength = () => {
    if (!length.size && !length.price) return setLengthError(true);
    setProduct({ ...product, length: [...product.length, length] });
    setLength({ size: "", price: "" });
    setLengthError(false);
  };

  // Colors
  const handleColors = (e) => {
    const { name, checked } = e.target;
    setProduct({ ...product, colors: { ...product.colors, [name]: checked } });
  };

  // Images
  const handleImages = (e) => {
    const { files } = e.target;

    // create empty array to hold image preview urls and
    let img = [];
    // let serverImg = [];

    const arr = Array.from(files);

    for (let i = 0; i < files.length; i++) {
      img.push(URL.createObjectURL(files[i]));
      //   serverImg.push(files);
      //set images for push to server
    }
    //set image preview
    setImagePreview(img);

    const imagesArray = [];
    // let isValid = "";

    for (let i = 0; i < files.length; i++) {
      imagesArray.push(files[i]);
    }

    setImages(imagesArray);
  };

  // Frontal
  const handleFrontal = (e) => {
    const { name, checked } = e.target;
    setProduct({
      ...product,
      frontal: { ...product.frontal, [name]: checked },
    });
  };

  const handleFrontalValue = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      frontal: {
        ...product.frontal,
        [name]: value,
      },
    });
  };

  // Closure
  const handleClosure = (e) => {
    const { name, checked } = e.target;
    setProduct({
      ...product,
      closure: { ...product.closure, [name]: checked },
    });
  };

  const handleClosureValue = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      closure: { ...product.closure, [name]: value },
    });
  };

  // Publish
  const handlePublish = () => {
    /**
     * data.append adds a new data to the FormData instance
     */
    const data = new FormData();
    for (let i = 0; i < images.length; i++) {
      data.append("images[]", images[i]);
    }

    /**
     * This data is bloated ugh!, I need to find a way to clean in up!
     */
    data.append("category_id", product.category_id);
    data.append("name", product.name);
    data.append("price", product.price);
    data.append("weight_ml", product.weight_ml);
        data.append("weight_fl", product.weight_fl);

    data.append("howtouse", product.howtouse);
    data.append("ingredients", product.ingredients);
    data.append("precaution", product.precaution);
    data.append("benefits", product.benefits);
    // data.append("description", product.description);
    data.append("colors", JSON.stringify(product.colors));
    data.append("length", JSON.stringify(product.length));
    data.append("frontal", JSON.stringify(product.frontal));
    data.append("closure", JSON.stringify(product.closure));
    data.append("status", product.status);

    // post the data to the server
    postImage(data);
  };

  /**
   * Remove Items
   */
  const removeImage = (i) => {
    const filter = imagePreview.filter((image) => image != i);
    setImagePreview(filter);
  };

  const removeLength = (i) => {
    const filter = product.length.filter((l) => l.size != i);
    setProduct({ ...product, length: filter });
  };

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen h-full col-span-4 mb-10 bg-white">
          <div className="grid md:grid-cols-3">
            <ProductHeader />

            <div className="col-span-2 lg:mb-40 pt-10 pb-20 space-y-10 lg:border-r border-gray-100">
              {/* <div className="text-2xs">{JSON.stringify(product, null, 4)}</div> */}
              {/* <div className="text-2xs"> {JSON.stringify(imagePreview, null, 4)}</div> */}

              {/* <div className="text-2xs">
                {JSON.stringify(product.colors, null, 4)}
              </div> */}

              {/* <div className="text-2xs">{JSON.stringify(image, null, 4)}</div> */}

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
                      className="block capitalize w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="font-medium">Price</div>
                  <div className="flex items-center px-4 rounded-md border">
                    <div className="text-sm border-r pr-4 border-gray-200">
                      <div>$</div>
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

                <div className="flex space-x-4">
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
                      <CurrencyInput
                        name="weight_fl"
                        className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                        decimalsLimit={2}
                        onChange={handleProductInfo}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="font-medium">Weight (ML)</div>
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
                            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <CurrencyInput
                        name="weight_ml"
                        className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                        decimalsLimit={2}
                        onChange={handleProductInfo}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-10 grid md:grid-cols-3 gap-8">
                <TextArea
                  name={"howtouse"}
                  handleChange={handleProductInfo}
                  placeholder={"How to use"}
                />
                <TextArea
                  name={"ingredients"}
                  handleChange={handleProductInfo}
                  placeholder={"Ingredients"}
                />
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
                        xmlns="http://www.w3.org/2000/svg"
                        className={`-mr-1 ml-2 h-5 w-5 ${
                          toggleColor && `transform rotate-90`
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {toggleColor && (
                    <Transition
                      show={toggleColor}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Colors
                        setColor={handleColors}
                        colors={product.colors}
                        open={toggleColor}
                      />
                    </Transition>
                  )}
                </div>
                {/* <TextArea
                  name={"description"}
                  span={"col-span-2"}
                  handleChange={handleProductInfo}
                  placeholder={"Description"}
                /> */}
                <TextArea
                  name={"precaution"}
                  handleChange={handleProductInfo}
                  placeholder={"Precaution"}
                />
                <TextArea
                  name={"benefits"}
                  handleChange={handleProductInfo}
                  placeholder={"Benefits"}
                />
              </div>

              <div className="px-10 grid md:grid-cols-3 gap-8">
                <div className="space-y-2 text-sm">
                  <div className="font-medium">Custom Length & Price</div>
                  <div className="flex items-center pl-4 pr-0.5 rounded-md border">
                    <div className="text-sm border-r pr-3 border-gray-200 font-bold">
                      L
                    </div>
                    <CurrencyInput
                      name="size"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      value={length.size}
                      onChange={handleLength}
                    />
                    <div className="text-sm border-r pr-3 border-gray-200 font-bold">
                      $
                    </div>
                    <CurrencyInput
                      name="price"
                      className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                      decimalsLimit={2}
                      value={length.price}
                      onChange={handleLength}
                    />
                    <button
                      onClick={addLength}
                      className="btn btn-sm btn-outline border-none"
                    >
                      add
                    </button>
                  </div>
                  {lengthError && (
                    <Error error={"Provide the length and price."} />
                  )}
                </div>
                <div className="p-2 grid gap-4 grid-cols-4 col-span-2">
                  {product.length.map((l) => (
                    <div
                      key={l.size}
                      className="text-xs bg-gray-200 rounded-md place-self-start flex items-center space-x-2 px-3 py-1"
                    >
                      <div>L {l.size}</div>
                      <div>$ {l.price}</div>
                      <div className="p-1 m-1 rounded-full hover:bg-white place-self-start">
                        <svg
                          onClick={() => removeLength(l.size)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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

              <div className="px-10 grid md:grid-cols-3 gap-8">
                <label className="block text-sm">
                  <span className="text-gray-700 font-medium">
                    Select Product Category
                  </span>
                  <select
                    name={"category_id"}
                    onChange={handleProductInfo}
                    className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-200 border text-sm focus:border-gray-300 focus:bg-white focus:ring-0
                  "
                  >
                    <option value={0}>
                      Choose
                    </option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <hr />

              <div className="px-10 grid grid-flow-col auto-cols-max gap-8">
                <div className="text-sm flex space-x-6 items-center">
                  <div className="font-medium">Frontal</div>
                  <input
                    type="checkbox"
                    name="status"
                    onChange={handleFrontal}
                    className="rounded-md p-2.5 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-0 focus:ring-gray-100"
                  />
                </div>

                {product.frontal.status && (
                  <>
                    <div className="flex space-x-12">
                      <div className="flex space-x-5 items-center">
                        <div>13 x 4</div>
                        <input
                          type="radio"
                          name="size"
                          value="13 x 4"
                          onChange={handleFrontalValue}
                          className="radio radio-neutral"
                        />
                      </div>
                      <div className="flex space-x-5 items-center">
                        <div>13 x 6</div>
                        <input
                          type="radio"
                          name="size"
                          value="13 x 6"
                          onChange={handleFrontalValue}
                          className="radio radio-neutral"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center rounded-md border">
                        <div className="text-sm border-r px-3 border-gray-200 font-medium">
                          $
                        </div>
                        <CurrencyInput
                          name="price"
                          className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                          decimalsLimit={2}
                          value={product.frontal.price}
                          onChange={handleFrontalValue}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <hr />

              <div className="px-10 grid grid-flow-col auto-cols-max gap-8">
                <div className="text-sm flex space-x-6 items-center">
                  <div className="font-medium">Closure</div>
                  <input
                    type="checkbox"
                    name="status"
                    value={product.closure.status}
                    onChange={handleClosure}
                    className="rounded-md p-2.5 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-0 focus:ring-gray-100"
                  />
                </div>

                {product.closure.status && (
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center rounded-md border">
                      <div className="text-sm border-r px-3 border-gray-200 font-medium">
                        $
                      </div>
                      <CurrencyInput
                        name="price"
                        className="block w-full focus:border-b text-sm border-none focus:border-none focus:ring-0"
                        decimalsLimit={2}
                        value={product.closure.price}
                        onChange={handleClosureValue}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-5 mx-10">
              <div className="col-span-3 font-medium pt-10">
                Upload Product Image
              </div>
              <div className="grid auto-cols-max">
                <div className="mb-3 w-3/4">
                  <input
                    className="form-control text-sm block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:ring-0 focus:bg-white focus:border-gray-600 focus:outline-none"
                    type="file"
                    id="formFileMultiple"
                    name="images"
                    multiple
                    onChange={handleImages}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-3 gap-3">
                  {imagePreview.map((image) => (
                    <div
                      key={image}
                      onClick={() => {
                        removeImage(image);
                      }}
                      className="relative w-24 h-24 border-gray-100 hover:shadow-lg border bg-cover bg-center rounded-md"
                      style={{ backgroundImage: `url(${image})` }}
                    >
                      <div className="absolute top-0 right-0 p-1 m-1 rounded-full hover:bg-red-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
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

              <div className="space-y-10 pt-10">
                <div className="text-xs">
                  You can save this product as a draft if you are not ready to
                  publish it yet.{" "}
                  <a
                    onClick={() => router.push("/admin/products")}
                    className="link"
                  >
                    View product drafts -&gt;
                  </a>
                </div>
                <div className="space-y-4 lg:space-x-4">
                  <button className="btn btn-sm btn-outline">
                    save as draft
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={handlePublish}
                  >
                    publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
