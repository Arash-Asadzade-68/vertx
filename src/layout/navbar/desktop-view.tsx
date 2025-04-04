import Logo from '@/assets/vertx-group.svg?react';
import { selectPageTitle } from '@/store/page-title/page-title-slice';
import { useSelector } from 'react-redux';

export function DesktopView() {
  const pageTitle = useSelector(selectPageTitle);

  return (
    <nav className="text-white flex flex-row border-b border-[#555555] items-center justify-between min-h-[50px] max-sm:hidden bg-black">
      <div className='flex flex-row h-full'>
        <div className="w-[50px] justify-center flex items-center ">
          <div className="bg-white rounded-full min-w-[30px] min-h-[30px] flex items-center justify-center">
            <Logo width={16} height={16} />
          </div>
        </div>
        <p className="text-lg font-bold pl-[23px] w-[190px] border-r border-[#555555] h-full flex items-center">
          Vertxlabs, Inc
        </p>
        
        <p className="text-base font-semibold pl-[23px] h-full flex items-center">
          {pageTitle}
        </p>

      </div>
      <div className='flex flex-row items-center text-base font-semibold h-full'>
        <div className='px-8 h-full flex items-center border-l border-[#555555] cursor-pointer hover:text-[#555555]'>
          Activity
        </div>
        <div className='px-8 h-full flex items-center border-l border-[#555555] cursor-pointer hover:text-[#555555]'>
          Log Out
        </div>
      </div>
    </nav>
  )
}
