
import { Progress } from "@/components/ui/progress";

interface ICountryProgress {
  iso: React.ReactNode;
  value: number;
  country: string;
  color:string;
}
export function CountryProgress({ country, iso, value, color }: ICountryProgress) {
  return (
    <div className="flex flex-row items-center gap-3 max-sm:w-full">
      {iso}
      <div className="flex flex-col max-sm:flex-gro">
        <div className="flex flex-row justify-between">
          <span className="text-base font-semibold">{country}</span>
          <span className="text-sx font-semibold">{value}%</span>
        </div>
        <Progress value={value} color={color} className="min-w-[189px] w-full"/>
      </div>
    </div>
  )
}
