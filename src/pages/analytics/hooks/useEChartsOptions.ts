
import { EChartsOption } from 'echarts';
import { useMemo, useState } from 'react';

export function useEChartsOptions() {
  const [state, setSeries] = useState<{data:number[],type:string}[]>([{data:[100, 150, 200, 500, 1400, 1500, 1800],type:'line'}]);


  function onAddSeries (){
   if(state.length < 3){
    setSeries(prevState => [...prevState, {data:[Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0), Math.floor(Math.random() * (2000 - 0 + 1) + 0)],type:'line'}])
   }
  }

  const option: EChartsOption = useMemo(()=> ({
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
    series: state
  } as EChartsOption),[state]) ;
 return {
  option,
  onAddSeries,
  state
 }
}
