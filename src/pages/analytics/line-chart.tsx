import ReactECharts from 'echarts-for-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { addOptions, categories, periods } from "./select-options"
import { StatisticItem } from '@/components/ui/statistic-item';
import { useEChartsOptions } from './hooks/useEChartsOptions';






export function LineChart() {
  const {option, onAddSeries} = useEChartsOptions();

  return (
    <div className='flex flex-col'>
      <div className="flex flex-row gap-[6px]">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map(({ id, label, value }) => <SelectItem key={id} value={value}>{label}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectGroup>
                {periods.map(({ id, label, value }) => <SelectItem key={id} value={value}>{label}</SelectItem>)}
              </SelectGroup>
            </SelectGroup>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger className='border border-dotted rounded-2xl border-[#555555] flex flex-row items-center pt-[3px] pb-[5px] px-[11px] cursor-pointer'>
          <Plus size={16}/><p className='text-xs font-semibold'>Add</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
          {addOptions.map(({ id, label }) => <DropdownMenuItem key={id} onClick={onAddSeries} >{label}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <StatisticItem value='13.49K' percentage='+469%' threshould={897} />
      <ReactECharts option={option} style={{ height: 198 }} opts={{}} />
    </div>
  )
}
