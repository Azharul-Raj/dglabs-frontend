import {FiLock,FiDollarSign,FiThumbsUp,FiCheck} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
 type Props={
    darkMode:boolean
 }
function IconBox({darkMode}:Props) {
  return (
    <>
        {/* icon */}
        <div className="flex flex-col items-center">
            <span className="border inline-block bg-white dark:text-white dark:bg-blue-500 font-semibold border-blue-500 text-blue-500 p-2 rounded-full">
            {darkMode?<FiCheck/>:<FiLock  />}
            </span>
            <p className='font-semibold text-sm pt-1 text-blue-500'>Account</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="border rounded-full p-2 dark:px-3 dark:py-[5px] dark:bg-[#333B48] dark:border-blue-500 bg-white text-gray-500">
            {darkMode? 2:<BiUser  />}
            </div>
            <p className='font-semibold text-sm pt-1 dark:text-blue-500 text-gray-500' >Personal</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="border rounded-full dark:px-3 dark:py-[5px] dark:bg-[#333B48] dark:border-0 dark:text-white p-2 bg-white text-gray-500">
            {darkMode?3:<FiDollarSign />}
            </div>
            <p className='font-semibold text-sm pt-1 text-gray-500' >Billing</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="border rounded-full dark:px-3 dark:py-[5px] dark:bg-[#333B48] dark:border-0 dark:text-white p-2 bg-white text-gray-500">
            {darkMode?4:<FiThumbsUp />}
            </div>
            <p className='font-semibold text-sm pt-1 text-gray-500' >Done</p>
        </div>
       
    </>
  )
}

export default IconBox;