import Logo from '@/assets/vertx.svg?react';
import { EllipsisVertical } from 'lucide-react';

export function MobileView() {
  return (
    <nav className="text-white flex flex-row items-center justify-between min-h-[96px] sm:hidden pt-4 bg-black">
      <div className="w-[50px] justify-center flex items-center sm:hidden">
        <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center ">
          <span className="font-bold text-amber-400">
            A
          </span>
        </div>
      </div>
      <Logo />
      <div className='w-[30px] h-[30px] flex items-center justify-center'>
      <EllipsisVertical className='text-white' size={30}/>
      </div>
    </nav>
  )
}
