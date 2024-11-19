import icon1 from '@/assets/nav/1.svg'
import icon2 from '@/assets/nav/2.svg'
import icon3 from '@/assets/nav/3.svg'
import icon4 from '@/assets/nav/4.svg'
import icon5 from '@/assets/nav/5.svg'
import icon1Active from '@/assets/nav/1-active.svg'
import icon2Active from '@/assets/nav/2-active.svg'
import icon3Active from '@/assets/nav/3-active.svg'
import icon4Active from '@/assets/nav/4-active.svg'
import icon5Active from '@/assets/nav/5-active.svg'
import Button from './ui/Button'

const ACTIVE_ITEM_STYLE = 'bg-[#FFD8A7] text-[#371C07] border-[#371C07]'
const INACTIVE_ITEM_STYLE = 'text-[#FFD8A7] border-[transparent]'

const mapNameToIcon = {
  Shop: icon1,
  Inventory: icon2,
  Main: icon3,
  Tournament: icon4,
  Market: icon5,
}

const mapNameToActiveIcon = {
  Shop: icon1Active,
  Inventory: icon2Active,
  Main: icon3Active,
  Tournament: icon4Active,
  Market: icon5Active,
}

const NavItem = ({
  isActive,
  label,
}: {
  isActive?: boolean
  label: string
}) => {
  return (
    <Button
      className={`border-2 flex flex-col justify-center items-center text-text w-1/5 text-center text-[12px] h-[60px] mt-[4px] rounded-[16px] ${
        isActive ? ACTIVE_ITEM_STYLE : INACTIVE_ITEM_STYLE
      }`}
    >
      {isActive ? (
        <img
          src={mapNameToActiveIcon[label as keyof typeof mapNameToActiveIcon]}
          alt={label}
        />
      ) : (
        <img
          src={mapNameToIcon[label as keyof typeof mapNameToIcon]}
          alt={label}
        />
      )}
      <p className="mt-[4px]">{label}</p>
    </Button>
  )
}

const Navbar = () => {
  return (
    <div className="flex gap-[8px] flex-row bg-[#51280A] h-[94px] rounded-t-[16px] border-t-[1px] border-[#FFD8A7]">
      <NavItem label="Shop"></NavItem>
      <NavItem label="Inventory" isActive></NavItem>
      <NavItem label="Main"></NavItem>
      <NavItem label="Tournament"></NavItem>
      <NavItem label="Market"></NavItem>
    </div>
  )
}

export default Navbar
