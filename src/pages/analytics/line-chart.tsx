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
  const { option, onAddSeries, state } = useEChartsOptions();

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
            <Plus size={16} /><p className='text-xs font-semibold'>Add</p>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {addOptions.map(({ id, label }) => <DropdownMenuItem key={id} onClick={onAddSeries} >{label}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='flex flex-row flex-wrap space-x-1'>
        {state.map(() => <StatisticItem value={`${Math.floor(Math.random() * (20000 - 10000 + 1) + 10000) / 1000}k`} percentage={`+${Math.floor(Math.random() * (1000 - 0 + 1) + 0)}%`} threshould={Math.floor(Math.random() * (100 - 0 + 1) + 0)} />)}
      </div>
      <ReactECharts option={option} style={{ height: 198 }} opts={{}} />
    </div>
  )
}
