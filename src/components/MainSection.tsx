import {useEffect,useContext, useState} from 'react'
import blackLogo from '../assets/Lookscout.png';
import whiteLogo from '../assets/Lookscout-white.png'
import IconBox from './IconBox';
import Form from './Form';
import { PropsType, userDataType } from '../types/type';
import axios from 'axios';
import { DATA_CONTEXT } from '../context/DataProvider';


function MainSection({darkMode}:PropsType) {
  // @ts-ignore
  const {email,updateInfo}=useContext(DATA_CONTEXT);
  // const [userData,setUserData]=useState<userDataType|any>({})
  // useEffect(()=>{
  //   axios.get(`https://dglabs-server.vercel.app/get_user/${email}`)
  //     .then(res => {
  //       setUserData(res.data)
  //     })
  //     .catch(err => console.log(err))
  // },[email])
  
  return (
    <div className="w-full px-4 md:w-[650px]">
        <div className="flex justify-center pb-10">
        <img src={`${updateInfo?.logo?updateInfo?.data?.logo:`${darkMode?whiteLogo:blackLogo}`}`} alt="" />
        </div>
    <div className="h-[680px] dark:bg-[#1C2534] md:h-[630px]  border  border-gray-300 dark:border-0 rounded-lg">
        {/* icon box */}
        <div className={`h-[84px] md:h-[108px] px-4 md:px-12 flex justify-between items-center rounded-tl-lg rounded-tr-lg dark:bg-[#252D3C] bg-[#FAFBFC]`}>
            <IconBox darkMode={darkMode}/>
        </div>
        <div className="">
        <Form btnTitle={updateInfo?.btnTitle}/>
        </div>
        {/* <div className="md:pt-4 md:pb-5 px-4 md:px-12 rounded-bl-lg rounded-br-lg dark:bg-[#252D3C] flex justify-center md:justify-end">
          <button type='submit' className='flex w-full md:w-auto items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg'>Next <FiChevronRight/></button>
        </div> */}
    </div>
    </div>
  )
}

export default MainSection;
//border-[#DAE0E6]