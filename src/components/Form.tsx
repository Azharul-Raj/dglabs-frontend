import { ChangeEvent,useContext } from 'react'
import { FiInfo,FiChevronRight } from 'react-icons/fi'
import { DATA_CONTEXT } from '../context/DataProvider'
import { userProps } from '../types/type'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form() {
    const navigate=useNavigate()
    // @ts-ignore
    const {email,setEmail}=useContext(DATA_CONTEXT)
    const handleSubmit=async(e:ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.userName.value;
        const email=form.email.value;
        const data:userProps={name,email}        
        setEmail(email)
        axios.post(`https://dglabs-server.vercel.app/add_user`,data)
        .then(res=>{
            console.log(res.data);
            if(res.data){
                navigate('/dashboard')
            }
        })
        .catch(err=>console.log(err))
       
    }
    return (
        <div className="mt-6 md:mt-8">
            {/* form part */}
            <div className="">
                <form onSubmit={handleSubmit} action="">
                    <div className="px-4 md:px-12 ">
                    <div className="relative">
                        <label className='text-gray-900 dark:text-gray-200 font-semibold text-sm' htmlFor="Name">Name</label>
                        <input className='block border dark:bg-[#333B48] dark:border-0 dark:placeholder:text-[#F9F9F9] my-2 dark:text-gray-200 placeholder:text-gray-900 border-gray-300  focus:outline-none w-full rounded-md p-2' type="text" name="userName" id="name" placeholder='Bryan Koelpin' />
                        <FiInfo size={24} className="text-gray-500 absolute top-10 right-3" />
                    </div>
                    <div className="relative">
                        <label className='text-gray-900 dark:text-gray-200 font-semibold text-sm' htmlFor="Name">Email*</label>
                        <input required className='block border dark:bg-[#333B48] dark:border-0 dark:placeholder:text-[#F9F9F9] my-2 dark:text-gray-200 placeholder:text-gray-900 border-gray-300  focus:outline-none w-full rounded-md p-2' type="text" name="email" id="email" placeholder='Email Address' />
                        <span className='text-sm dark:text-gray-400 text-gray-500'>Please input a real Email Address</span>
                        <FiInfo size={24} className="text-gray-500 absolute top-10 right-3" />
                    </div>
                    {/* password section */}
                    <div className="flex justify-between flex-col md:flex-row md:my-6">
                        {/* password */}
                        <div className="relative">
                            <label className='text-gray-900 dark:text-gray-200 font-semibold text-sm' htmlFor="Name">Password*</label>
                            <input className='block border dark:bg-[#333B48] dark:border-0 dark:placeholder:text-[#F9F9F9] dark:text-gray-200 my-2 placeholder:text-gray-900 border-gray-300  focus:outline-none w-full rounded-md p-2' type="password" name="" id="password" placeholder='Password' />
                            <span className='text-sm dark:text-gray-400 text-gray-500'>Please enter your password</span>
                            <FiInfo size={24} className="text-gray-500 absolute top-10 right-3" />
                        </div>
                        {/* confirm password */}
                        <div className="relative">
                            <label className='text-gray-900 dark:text-gray-200 font-semibold text-sm' htmlFor="Name">Confirm Password*</label>
                            <input className='block border dark:bg-[#333B48] dark:border-0 dark:placeholder:text-[#F9F9F9]  dark:text-gray-200 my-2 placeholder:text-gray-900 border-gray-300  focus:outline-none w-full rounded-md p-2' type="password" name="" id="" placeholder='Confirm Password' />
                            <span className='text-sm dark:text-gray-400 text-gray-500'>Password need to match</span>
                            <FiInfo size={24} className="text-gray-500 absolute top-10 right-3" />
                        </div>
                    </div>
                    {/* password section */}
                    {/* check box section */}
                    <div className="flex items-start my-9">
                        <div className="flex items-start md:items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        <label htmlFor="remember" className="ml-2 text-[18px] dark:text-white text-gray-900 font-[500]">I accept the Terms and Privacy Policy</label>
                        </div>
                    </div>
                    </div>
                    {/* check box section */}
                    <div className="md:pt-4 md:pb-5 px-4 md:px-12 rounded-bl-lg rounded-br-lg dark:bg-[#252D3C] flex justify-center md:justify-end">
          <button type='submit' className='flex w-full md:w-auto items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-lg'>Next <FiChevronRight/></button>
        </div>
                </form>
            </div>
        </div>
    )
}

export default Form