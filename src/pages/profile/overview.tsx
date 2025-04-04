import { Card } from "@/components/ui/card";
import UserLogo from '@/assets/user.svg?react';
import LinkedIn from '@/assets/linked-in.svg?react';
import TwitterIcon from '@/assets/twitter.svg?react';
import TwitterVerifiedIcon from '@/assets/Twitter_Verified_Badge.svg?react';
import VertxGroupIcon from '@/assets/vertx-group.svg?react';
import GmailIcon from '@/assets/gmail.svg?react';
import Tag from "@/components/ui/tag";
import { IconLabel } from "@/components/ui/IconLabel";


export function Overview() {
  return (
    <div className="h-[calc(100% - 100px)] overflow-auto">
      <p className="text-white text-[28px] font-extrabold mb-[25px]">Overview</p>
      <Card rootClassName="py-[29px] px-[44px]">
        <div className="flex sm:flex-row flex-col sm:gap-8 gap-3 sm:items-center">
          <UserLogo />
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="flex flex-row space-x-1 items-center">
                <p className="text-2xl font-bold">Mr Arash Asadzade</p>
                <TwitterVerifiedIcon />
              </div>
              <div className="flex flex-row gap-1 items-center">
                <p className="text-xs font-medium">Co-Founder & CEO @Vertx</p>
                <div className="bg-white p-[2px] rounded-xs flex items-center">
                  <VertxGroupIcon />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col sm:gap-8 flex-row justify-between max-sm:items-center">
              <Tag title="Entrepreneur" bgClassName="bg-white" textColor="text-black" />
              <div className="flex flex-row gap-2">
                <LinkedIn className="max-sm:w-5 max-sm:h-5" />
                <TwitterIcon className="max-sm:w-5 max-sm:h-5" />
                <GmailIcon className="max-sm:w-5 max-sm:h-5 w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex lg:flex-row flex-col gap-4 mt-4">
        <Card rootClassName="flex flex-col w-full">
          <p className="text-white text-lg font-extrabold">Founded Companies</p>
          <p className="text-[64px] font-bold">02</p>
          <div className="grid gap-6">
            <IconLabel title="Vertx" icon={<VertxGroupIcon width={18} height={18} />} tag={<Tag title="CEO" bgClassName="bg-[#579560]" textColor="text-[#04470B]" />} link="View Profile" subtitle={<p>Founded in 2025. in <strong>Fintech</strong>.</p>} />
            <IconLabel title="Comp 1" tag={<Tag title="PROPRIETOR" bgClassName="bg-[#B1BDEB]" textColor="text-[#10074F]" />} link="View Profile" subtitle={<p>Founded in 2023. Acquired by abc. <strong>QuickCommerce.</strong>.</p>} />
          </div>
        </Card>
        <Card rootClassName="flex flex-col w-full">
          <p className="text-white text-lg font-extrabold">Experience</p>
          <p className="text-[64px] font-bold">03</p>
          <div className="grid gap-6">

            <IconLabel title="Company 1" link="View Profile" />
            <IconLabel title="Company 2" link="View Profile" />
            <IconLabel title="Company 3" link="View Profile" />

          </div>
        </Card>
      </div>

    </div>
  )
}
