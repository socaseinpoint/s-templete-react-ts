import hp from '@/assets/icons/hp.svg'
import attack from '@/assets/icons/attack.svg'
import power from '@/assets/icons/power.svg'
import arrowRight from '@/assets/icons/arrow-right.svg'

const StatItem = ({
  icon,
  label,
  value,
  withArrow,
}: {
  icon: string
  label: string
  value: string
  withArrow?: boolean
}) => {
  return (
    <div className="flex flex-row gap-[8px] bg-[#B09472] rounded-[16px] border-[2px] border-[#3D352B] p-[6px] w-full justify-between pr-[12px]">
      <div className="flex flex-row gap-[8px]">
        <div className="w-[40px] h-[40px] bg-[#7F694D] flex items-center justify-center rounded-[10px]">
          <img src={icon} alt={label} />
        </div>
        <span className="text-[14px] font-bold text-[#3D352B] flex items-start flex-col justify-center">
          <p className="text-[#FFFFFF] text-[10px]">{label}</p>
          <p className="text-[#FFFFFF] text-[14px]">{value}</p>
        </span>
      </div>
      {withArrow && <img src={arrowRight} alt="arrowRight" />}
    </div>
  )
}

const HeroStats = () => {
  return (
    <div className="gap-[8px] flex flex-row">
      <StatItem icon={hp} label="HP" value="100" />
      <StatItem withArrow icon={power} label="Power" value="100" />
      <StatItem icon={attack} label="Attack" value="100" />
    </div>
  )
}

export default HeroStats
