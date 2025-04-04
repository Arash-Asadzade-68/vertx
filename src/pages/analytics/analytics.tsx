import { LazyLoadComponent } from "@/components/lazy-load-component/lazy-load-component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lazy } from "react";

const Overview = lazy(() =>
  import('@/pages/analytics/overview').then((module) => ({
    default: module.Overview,
  }))
);
const Demographics = lazy(() =>
  import('@/pages/analytics/demographics').then((module) => ({
    default: module.Demographics,
  }))
);

const analyticTabs = [
  {
    title: 'Overview',
    value: 'overview',
    Component: Overview
  },
  {
    title: 'Demographics',
    value: 'demographics',
    Component:Demographics
  }
]

export function Analytics() {
  return (
    <div className="flex flex-col w-full sm:h-[calc(100%-60px)] h-[calc(100%-140px)]">
      <Tabs defaultValue="overview" className="w-full h-full p-0 border-none gap-0">
        <div className="min-h-[50px] sm:border-b sm:border-b-[#555555] w-full flex sm:justify-between items-center max-sm:bg-black">
        <TabsList className="bg-transparent p-0 rounded-none h-full ">
          {analyticTabs.map(tab => <TabsTrigger className="cursor-pointer text-[#555555] rounded-none shadow-none sm:border-r sm:border-r-[#555555] px-[23px] data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:font-semibold text-base max-sm:border-b-2 border-b-0  data-[state=active]:border-b-white" value={tab.value}>{tab.title}</TabsTrigger>)}
        </TabsList>
        <div className='text-white text-base font-semibold px-8 h-full flex items-center border-l border-[#555555] cursor-pointer hover:text-[#555555] max-sm:hidden'>
          More
        </div>
        </div>
        {analyticTabs.map(({Component, value, title}) => <TabsContent key={title} className="overflow-auto sm:px-[60px] sm:py-[34px] px-[23px] py-[26px]" value={value}>
          <LazyLoadComponent Component={<Component/>}/>
        </TabsContent>)}

      </Tabs>
    </div>
  )
}
