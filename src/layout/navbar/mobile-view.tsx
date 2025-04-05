import Logo from '@/assets/vertx.svg?react';
import { EllipsisVertical } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Sidebar } from '../sidebar';
import { useState } from 'react';

export function MobileView() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="text-white flex flex-row items-center justify-between min-h-[96px] xl:hidden pt-4 bg-black">
      <div className="w-[50px] justify-center flex items-center xl:hidden">
        <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center ">
          <span className="font-bold text-amber-400">
            A
          </span>
        </div>
      </div>
      <Logo />
      <div className='w-[30px] h-[30px] flex items-center justify-center'>
        <Drawer direction='left' open={open}>
        <DrawerTrigger> <EllipsisVertical className='text-white cursor-pointer' size={30} onClick={()=>setOpen(!open)} /></DrawerTrigger>
        <DrawerContent className='bg-black'>
          <Sidebar setOpen={setOpen}/>
        </DrawerContent>
      </Drawer>
      </div>
      
    </nav>
  )
}
