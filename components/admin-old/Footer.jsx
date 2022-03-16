export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto flex justify-between">
      <div className="text-2xs">&copy; 2022 Melina Beauty & Digitals</div>
      <div className="text-2xs border border-blue-400 px-2 cursor-pointer hover:bg-blue-200 bg-blue-100 rounded-md py-1 space-x-1 font-bold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-gray-600 h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <div>Report a bug.</div>
      </div>
    </div>
  );
}
