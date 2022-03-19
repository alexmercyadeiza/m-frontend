
import Stats from './components/stats';
import Orders from "./components/orders";
import { DateTime } from "luxon";
import Chart from './components/chart';

export default function Home() {

    const dt = DateTime.now();

    return (
      <div className="min-h-screen h-full col-span-4 bg-white">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="col-span-3 px-10 tracking-tight text-2xl pt-10">
              Overview
              <span className="block text-xs tracking-tight text-gray-400 pt-2">
                Welcome back Ladi, here are your stats for {" "}
                {dt.toLocaleString(DateTime.DATE_MED)}
              </span>
            </div>

            <Stats />

            <Chart />

            <Orders />
          </div>
        </div>
      </div>
    );
}