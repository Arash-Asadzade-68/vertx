import { LinkButton } from "@/components/ui/link-button";
import { StatisticItem } from "@/components/ui/statistic-item";


export function Insights() {
  return (
    <div className="flex flex-col">
      <p className="text-white text-xl font-bold mb-4">Insights</p>
      <StatisticItem label="Founders" value='7.49K' percentage='+000%' threshould={0} className="mb-[11px]" />
      <StatisticItem label="Investors" value='6.09K' percentage='+000%' threshould={0} className="mb-[11px]" />

      <div className="border-[#555555] border mt-[18px] mb-[22px]" />
      <div className="flex justify-end">
        <LinkButton title="View detailed insights" />
      </div>
    </div>
  )
}
