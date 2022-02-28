import TopSelling from "./stat_components/TopSelling";
import TotalRevenue from "./stat_components/TotalRevenue";
import TotalOrders from "./stat_components/TotalOrders";
import ProductsSold from "./stat_components/ProductsSold";
import StoreTraffic from "./stat_components/StoreTraffic";

export default function Stats() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-5 gap-6">
        <TotalRevenue />

        <TopSelling />

        <TotalOrders />

        <ProductsSold />

        <StoreTraffic />
      </div>
    </div>
  );
}
