import { Card } from "@/components/ui/card";
import { LineChart } from "./line-chart";
import { Insights } from "./insights";
import MapChart from "./map-chart";

export function Overview() {
  return (
    <div className="h-[calc(100% - 100px)] overflow-auto">
      <p className="text-white text-[28px] font-extrabold mb-[25px]">Overview</p>

      <div className="flex sm:flex-row flex-col gap-4">
        <Card rootClassName="flex-grow sm:min-w-[600px]">
          <LineChart />
        </Card>
        <Card rootClassName="min-w-[274px]">
          <Insights />
        </Card>
      </div>
      <Card rootClassName="flex flex-col mt-4 w-full sm:min-w-[900px]">
        <p className="text-white text-xl font-bold mb-4">Demographics</p>
        <MapChart/>
      </Card>
    </div>
  )
}
