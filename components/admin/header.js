import { useRouter } from 'next/router';

export default function Header() {

  const router = useRouter();

  return (
      <div className="px-10 py-4 border-b border-gray-100">
        <div className="grid grid-cols-2">
          <div className="text-lg" onClick={() => router.push('/admin')}>
            Melina <span className="font-extralight">&nbsp;|&nbsp; Admin</span>
          </div>
          <div className="place-self-end justify-items-end grid gap-4">
            {/* <div className="indicator">
              <div className="indicator-item bg-red-400 p-1 rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer hover:text-gray-700 fill-current h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </div> */}
            <div className="bg-gray-100 border cursor-pointer border-gray-300 hover:border-gray-300 hover:bg-gray-200 px-3 py-1 space-x-4 rounded-md flex items-center justify-between">
              <div className="tracking-tight">Ladi</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-gray-700 h-4 w-4 mt-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}