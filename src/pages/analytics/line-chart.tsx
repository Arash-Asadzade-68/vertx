import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
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
import { categories, periods } from "./select-options"
import { StatisticItem } from '@/components/ui/statistic-item';



const option: EChartsOption = {
  grid: {
    left: "1%",
    right: "7%",
    bottom: "14%",
    containLabel: true
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false
    },
    data: ['Mar1', 'Mar5', 'Mar10', 'Mar15', 'Mar20', 'Mar25', 'Mar30'],
  },
  yAxis: {
    type: 'value',
    scale: true,
    splitLine: {
      show: false
    },
    axisLabel: {
      formatter: (value) => value >= 1000 ? `${value / 1000}k` : `${value}`
    },
  },
  series: [
    {
      data: [0, 200, 400, 800, 1200, 1600, 2000],
      type: 'line'
    }
  ]
};


export function LineChart() {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-row gap-[6px]">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map(({ id, label, value }) => <SelectItem key={id} value={value}>{label}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a period" />
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
            <DropdownMenuItem>Connections</DropdownMenuItem>
            <DropdownMenuItem>Interactions</DropdownMenuItem>
            <DropdownMenuItem>Impressions</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <StatisticItem value='13.49K' percentage='+469%' threshould={897} />
      <ReactECharts option={option} style={{ height: 198 }} opts={{}} />
    </div>
  )
}
