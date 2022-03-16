
import Stats from './Components/Stats';
import Orders from "./Components/Orders";
import { DateTime } from "luxon";

export default function Home() {

    const dt = DateTime.now();

    return (
      <div className="min-h-screen h-full col-span-4 bg-white">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="col-span-3 px-20 text-2xl pt-10">
              Dashboard
              <span className="block text-xs tracking-tight text-gray-400 pt-2">
                Welcome back Ladi, here are your stats for {" "}
                {dt.toLocaleString(DateTime.DATE_MED)}
              </span>
            </div>

            <Stats />

            <Orders />
          </div>
        </div>
      </div>
    );
}