import {useContext} from 'react'
import blackLogo from '../assets/Lookscout.png';
import whiteLogo from '../assets/Lookscout-white.png'
import IconBox from './IconBox';
import Form from './Form';
import { PropsType } from '../types/type';
import { DATA_CONTEXT } from '../context/DataProvider';


function MainSection({darkMode}:PropsType) {
 
  // @ts-ignore
  const {email,updateInfo}=useContext(DATA_CONTEXT);

  return (
    <div className="w-full px-4 md:w-[650px]">
        <div className="flex justify-center pb-10">
        <img height={30} src={`${updateInfo?.logo?updateInfo?.logo:`${darkMode?whiteLogo:blackLogo}`}`} alt="" />
        </div>
    <div className="h-[680px] dark:bg-[#1C2534] md:h-[630px]  border  border-gray-300 dark:border-0 rounded-lg">
        {/* icon box */}
        <div className={`h-[84px] md:h-[108px] px-4 md:px-12 flex justify-between items-center rounded-tl-lg rounded-tr-lg dark:bg-[#252D3C] bg-[#FAFBFC]`}>
            <IconBox darkMode={darkMode}/>
        </div>
        <div className="">
        <Form btnTitle={updateInfo?.btnTitle}/>
        </div>
    </div>
    </div>
  )
}

export default MainSection;
//border-[#DAE0E6]