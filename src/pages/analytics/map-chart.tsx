import { WorldMap } from "react-svg-worldmap";
import { data } from '@/constants/map';
import { US, IN, CA, DE } from 'country-flag-icons/react/3x2'
import { CountryProgress } from "@/components/ui/country-progress";
import { LinkButton } from "@/components/ui/link-button";


const MapChart = () => {

  const stylingFunction = (context: any) => {
    context.maxValue = 121224;
    const opacityLevel =
      0.3 +
      (1.5 * (context.countryValue - context.minValue)) /
      (context.maxValue - context.minValue);
    //console.log(context);
    return {
      fill: context.color,
      fillOpacity: isNaN(opacityLevel) ? 0 : opacityLevel,
      stroke: "white",
      strokeWidth: 1,
      strokeOpacity: 0.2,
      cursor: "pointer",
    };
  };
  return (
    <div className="flex lg:flex-row lg:justify-between flex-col gap-14 items-center">
      <div className="[&_svg]:max-w-[400px]">
      <WorldMap
        richInteraction={true}
        backgroundColor={"transparent"}
        borderColor={"white"}
        color={"#93BED4"}
        tooltipBgColor={"#31323f"}
        title=""
        valueSuffix="applications"
        valuePrefix=":"
        size="responsive"
        data={data}
        styleFunction={stylingFunction}
        
      />
      </div>
      <div className="flex flex-col gap-5 min-w-[238px] max-sm:w-full">
        <CountryProgress iso={<IN width={40} height={28} className="rounded-sm" />} value={44} country="India" color="#4834D4" />
        <CountryProgress iso={<US width={40} height={28} className="rounded-sm" />} value={25} country="USA" color="#BD5302" />
        <CountryProgress iso={<CA width={40} height={28} className="rounded-sm" />} value={10} country="Canada" color="#E9C16B" />
        <CountryProgress iso={<DE width={40} height={28} className="rounded-sm" />} value={7} country="Germany" color="#579560" />
        <div className="border-[#555555] border mt-[18px] mb-[22px]" />
        <div className="flex justify-end">
          <LinkButton title="View all countries" />
        </div>
      </div>
    </div>
  );
};

export default MapChart;
