import { Card } from "@/components/ui/card";
import { LineChart } from "./line-chart";
import { Insights } from "./insights";
import MapChart from "./map-chart";

export function Overview() {
  return (
    <div className="h-[calc(100% - 100px)] overflow-y-auto">
      <p className="text-white text-[28px] font-extrabold mb-[25px]">Overview</p>

      <div className="flex xl:flex-row flex-col gap-4">
        <Card rootClassName="flex-grow">
          <LineChart />
        </Card>
        <Card rootClassName="min-w-[274px]">
          <Insights />
        </Card>
      </div>
      <Card rootClassName="flex flex-col mt-4 w-full">
        <p className="text-white text-xl font-bold mb-4">Demographics</p>
        <MapChart/>
      </Card>
    </div>
  )
}
