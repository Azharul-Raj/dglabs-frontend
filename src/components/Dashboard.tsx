import { useEffect, useState, useContext, ChangeEvent } from "react";
import toast from 'react-hot-toast';
import { PropsType, userDataType } from "../types/type";
import blackLogo from '../assets/Lookscout.png';
import whiteLogo from '../assets/Lookscout-white.png'
import axios from "axios";
import { DATA_CONTEXT } from "../context/DataProvider";
import { Link } from "react-router-dom";
import ImageLoader from "./ImageLoader";

function Dashboard({ darkMode }: PropsType) {
  // @ts-ignore
  const { email,setUpdateInfo } = useContext(DATA_CONTEXT);
  const [refresh,setRefresh]=useState(false);
  const [loading,setLoading]=useState(false)
  const [userData, setUserData] = useState<userDataType>();
  useEffect(() => {
    axios.get(`https://dglabs-server.vercel.app/get_user/${email}`)
      .then(res => {
        setUserData(res.data)
        setUpdateInfo(res.data.data)
      })
      .catch(err => toast.error(err.message))
  }, [email,refresh])
  
  const handleUpdate=(e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const form=e.target;
    const btnTitle=form.btnTitle.value;
    const image=form.image.files[0];
    const formData=new FormData()
    formData.append('image',image)
    // console.log(formData);
    setLoading(true)
    axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY}`,formData)
    .then(res=>{
      const url=res.data.data.url;
      const data={btnTitle,url}
      axios.put(`https://dglabs-server.vercel.app/update_info/${email}`,data)
      .then(res=>{
        setLoading(false)
        console.log(res.data)
        setRefresh(!refresh)
      })
      .catch(err=>{
        setLoading(false)
        toast.error(err.message)
      })
    })
    .catch(err=>{
      setLoading(false)
      toast.error(err.message)
    })
  }
  

  return (

    <section className="bg-gray-100 dark:bg-gray-900">
      <aside
        className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700"
      >
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link to="/" title="home">
              <img src={`${userData?.data?.logo?userData?.data?.logo:`${darkMode ? whiteLogo : blackLogo}`}`} className="w-32" alt="tailus logo" />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbmRzb21lJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">{userData?.data?.name ? userData?.data?.name : 'Unknown'}</h5>
            <span className="hidden text-gray-400 lg:block">{userData?.data?.email ? userData?.data?.email : 'Unknown'}</span>
          </div>

          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <a
                href="#"
                aria-label="dashboard"
                className="relative flex items-center space-x-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="dark:fill-slate-600 fill-current text-cyan-400"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Categories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-gray-50">Other data</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700 dark:group-hover:text-white">Finance</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
          </button>
        </div>
      </aside>
      <div className="ml-auto mb-6 h-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">Dashboard</h5>
            <button className="-mr-2 h-16 w-12 border-r lg:hidden dark:border-gray-700 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              {/* <!--search bar --> */}
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                  />
                </div>
              </div>
              {/* <!--/search bar --> */}
              <button
                aria-label="search"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
              <button
                aria-label="chat"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </button>
              <button
                aria-label="notification"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

       {loading?
       <div className="flex h-[100vh] justify-center items-center">
        <ImageLoader/>
       </div>
       : <div className="px-6 pt-6 2xl:container">
          <div
            className="flex h-[100vh] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600"
          >
            {/* form */}
            <form onSubmit={handleUpdate} className="space-y-4" action="">
              <div className="">
                <label className="block text-white font-semibold " htmlFor="title">ButtonTitle</label>
              <input required className="bg-white rounded-lg p-2 focus:outline-none" type="text" name="btnTitle" id="" />
              </div>
              {/* file upload */}
              <div className="">
             <label className="block text-white font-semibold" htmlFor="uploadImage">Upload Logo</label>
             <input required className="text-white" type="file" name="image" id="" />
              </div>
              {/* submit btn */}
              <button type="submit" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r from-yellow-300 to-pink-300 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span className="relative text-base font-semibold text-gray-900">Update info</span>
              </button>
              {/* submit btn */}
            </form>
            {/* form */}
          </div>
        </div>}
      </div>
    </section>

  )
}

export default Dashboard;