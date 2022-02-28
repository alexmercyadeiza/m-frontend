export default function TopSelling() {
  return (
    <div className="border rounded-md p-5 bg-white grid self-start">
      <div className="grid grid-cols-2">
        <div className="space-y-1 justify-self-start">
          <div className="tracking-tight text-sm">Top Selling</div>
          <div className="tracking-tight font-medium">HairShampoo</div>
        </div>

        <div className="justify-self-end self-center grid bg-gray-100 border rounded px-2 py-1">
          <div className="text-xl tracking-tight font-medium text-green-600 justify-self-center">
            2K
          </div>
          <div className="text-2xs uppercase tracking-wide justify-self-center font-bold">
            sold
          </div>
        </div>
      </div>
    </div>
  );
}
