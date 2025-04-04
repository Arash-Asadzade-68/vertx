import { ArrowRight } from 'lucide-react';

interface ILinkButton{
  title:string;
  path?:string;
}
export function LinkButton({title}:ILinkButton) {
  return (
    <div className='flex flex-row items-center space-x-[13px] cursor-pointer'>
      <p className='font-semibold text-[10px]'>{title}</p>
      <ArrowRight/>
    </div>
  )
}
