import clsx from "clsx";

interface IStatisticItem {
  label?: string;
  value: string;
  percentage: string;
  threshould: number;
  className?: string;
}
export function StatisticItem({ label, percentage, threshould, value, className }: IStatisticItem) {
  return (
    <>
      {label && <p className="text-base font-semibold text-white">{label}</p>}
      <div className={clsx("flex flex-row gap-2 items-center", className)}>

        <p className="text-[32px] font-extrabold text-white">{value}</p>
        <div className="flex flex-col gap-1 text-xs font-semibold">
          <span className={
            clsx(
              threshould >= 0 ? 'text-[#01754F]' : 'text-red-600')
          }>{percentage}</span>
          <span className="text-[#555555]">({threshould})</span>
        </div>
      </div>
    </>
  )
}
