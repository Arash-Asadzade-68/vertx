import { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

interface ILazyLoadComponent {
  Component: React.ReactNode;
}
export function LazyLoadComponent({
  Component,
}: ILazyLoadComponent) {

  return <Suspense fallback={
    <div className='h-full sm:px-[60px] sm:py-[34px] px-[23px] py-[26px]'>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-40 w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  }>{Component}</Suspense>;
}
