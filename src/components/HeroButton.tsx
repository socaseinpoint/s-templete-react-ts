import decor1 from '@/assets/elements/hero-button-decor1.svg'
import decor2 from '@/assets/elements/hero-button-decor2.svg'
import decor3 from '@/assets/elements/hero-button-decor3.svg'
import decor4 from '@/assets/elements/hero-button-decor4.svg'
import energyMini from '@/assets/icons/energy-mini.svg'

const HeroButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="relative block w-full">
      <span className="relative rounded-[16px] h-[64px] w-full bg-gradient-to-r from-[#FFC64A] via-[#FFD74A] to-[#FFC64A] flex overflow-hidden">
        {/* Внешняя рамка */}
        <img
          src={decor1}
          alt="decor1"
          className="absolute top-[2px] left-[20px] z-[1]"
        />
        <img
          src={decor2}
          alt="decor2"
          className="absolute bottom-[9px] right-[9px] z-[1]"
        />
        <img
          src={decor3}
          alt="decor3"
          className="absolute top-[2px] right-[-4px] z-0"
        />
        <img
          src={decor4}
          alt="decor4"
          className="absolute bottom-[0] left-[-2px] z-0"
        />
        <span className="left-0 top-0 absolute border-2 border-[#3B2A27] h-full w-full rounded-[16px] flex z-1">
          <span className="inset-0 border-t-2 border-[#f9dc90] rounded-[14px] pointer-events-none w-full h-full"></span>
        </span>

        <span className="left-0 top-0 absolute border-2 border-[#3B2A27] h-full w-full rounded-[16px] flex z-1">
          <span className="inset-0 border-b-2 border-[#ee933b] rounded-[14px] pointer-events-none w-full h-full"></span>
        </span>

        {/* Основной контент */}
        <span className="relative w-full h-full flex items-center justify-center border-2 border-[#3B2A27]">
          <span className="relative pl-[10px] pr-[10px] pt-[10px] pb-[10px] flex items-center justify-center text-[19px] font-bold text-[#3B2A27] z-[1]">
            BATTLE
          </span>
        </span>
      </span>
      <span className="text-[14px] px-[24px] rounded-[16px] h-[28px] absolute left-1/2 -translate-x-1/2 -translate-y-[50%] top-[0] flex items-center justify-center bg-[#3B2A27] rounded-[10px]">
        <span className="text-[12px] font-bold text-[#FFFFFF]">1000</span>
        <img src={energyMini} alt="energyMini" />
      </span>
    </button>
  )
}

export default HeroButton
