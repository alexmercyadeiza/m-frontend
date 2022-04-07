
import Wrapper from '../Modals/Wrapper';
export default function CashApp({toggle}) {
    return (
      <Wrapper>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-1 sm:pt-4 sm:pb-4 space-y-4">
            <div className="mt-3 text-center sm:mt-1 sm:mx-4 sm:text-left flex justify-between">
              <img
                className="w-36"
                src="https://ik.imagekit.io/et8vxrzxxdj/melina/Cash_App_logo_vBNzHX1bC.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1645891276419"
                alt=""
              />
              <svg
                onClick={toggle}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current text-gray-500 cursor-pointer hover:text-gray-800"
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
            {/* {JSON.stringify(formValues, null, 2)} */}
            <div className="sm:items-start">
              <form>
                <div className="overflow-hidden sm:rounded-md">
                  <div className="bg-white sm:p-4">
                    <div className="grid place-items-center tracking-tight space-y-1">
                      <div className="text-sm">
                        By clicking confirm payment, you acknowlegde the
                        transfer of <span className="font-bold">$123.34</span>{" "}
                        to the $cashtag{" "}
                        <span className="font-bold">@MelinaStore.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-gray-50 py-5 px-5 sm:flex">
            <button className="btn btn-block bg-green-500 hover:bg-green-800 border-none">
              Confirm Payment
            </button>
          </div>
        </div>
      </Wrapper>
    );
}