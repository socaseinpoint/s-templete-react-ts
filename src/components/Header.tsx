import avatar from '@/assets/avatar.png'
import settings from '@/assets/settings.svg'
import energy from '@/assets/icons/energy.svg'
import lvl from '@/assets/lvl.svg'

const Avatar = () => {
  return (
    <div className="w-[32px] h-[32px] border-[1px] border-[#371C07] rounded-full overflow-hidden">
      <img src={avatar} alt="avatar" className="w-full h-full" />
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center justify-between h-[50px] bg-[#CAB294] border-b-[1px] border-[#371C0750] px-[16px]">
      <div className="flex flex-row gap-[8px] items-center">
        <Avatar />
        <div>
          <p className="text-[14px] font-semibold text-[#371C07]">
            Pavel Durov
          </p>
          <div className="flex flex-row items-center gap-[4px]">
            <img src={lvl} alt="lvl" />
            <p className="text-[10px] font-semibold text-[#371C07]">lvl 999</p>
            <div className="h-[8px] bg-[#33760C] rounded-[4px] flex items-center w-[64px] px-[1px]">
              <div className="w-[34px] h-[6px] bg-[#47B403] rounded-l-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[8px]">
        <div className="flex flex-row items-center gap-[4px] relative">
          <img
            src={energy}
            alt="energy"
            className="w-[20px] h-[31px] absolute left-[-10px]"
          />
          <p className="text-[12px] font-semibold text-[#FFFFFF] bg-[#90785B] px-[4px] py-[2px] rounded-[4px] pl-[12px]">
            100/1000
          </p>
        </div>
        <img src={settings} alt="settings" className="w-[32px] h-[32px]" />
      </div>
    </div>
  )
}

export default Header
