import { PropsType } from '../types/type'
import MainSection from './MainSection'

function Home({darkMode}:PropsType) {
  return (
    <div className={`flex flex-col dark:bg-[#151B28] justify-center items-center py-10 md:py-40`}>
    <div className="">
    </div>
   <MainSection darkMode={darkMode}/>     
  </div>
  )
}

export default Home