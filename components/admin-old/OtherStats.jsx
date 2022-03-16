export default function OtherStats() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
      <div className="rounded-md border bg-white">
        <div className="border-b bg-white rounded-t-md">
          <div className="p-4 font-medium">Top Selling Items</div>
        </div>
        <div className="rounded-b-md">
          <div className="p-4 flex justify-between">
            <div>Hair Shampoo</div>
            <div className="font-bold">450</div>
          </div>
          <div className="p-4 flex justify-between">
            <div>Hair Conditioner</div>
            <div className="font-bold">200</div>
          </div>
          <div className="p-4 flex justify-between">
            <div>Shea Butter</div>
            <div className="font-bold">123</div>
          </div>
          <div className="p-4 flex justify-between">
            <div>Edges Re-Growth Cream</div>
            <div className="font-bold">80</div>
          </div>
          <div className="p-4 flex justify-between">
            <div>Edges Re-Growth Oil</div>
            <div className="font-bold">56</div>
          </div>
          <div className="p-4 flex justify-between">
            <div>Hair Gel</div>
            <div className="font-bold">13</div>
          </div>
        </div>
      </div>
      <div className="rounded-md border bg-white self-start">
        <div className="border-b bg-white rounded-t-md">
          <div className="p-4 font-medium">Top Purchasing Customers</div>
        </div>

        <div className="rounded-b-md">
          <div className="p-4 flex justify-between">
            <div>Jvelyn Carr</div>
            <div className="font-bold">450</div>
          </div>
        </div>
      </div>
    </div>
  );
}
