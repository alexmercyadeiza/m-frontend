export default function Like() {
  return (
    <div className="border text-gray-600 border-gray-300 place-self-start p-2 hover:bg-gray-100 cursor-pointer rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 stroke-current"
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </div>
  );
}
