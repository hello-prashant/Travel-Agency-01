'use client'
import { ReactNode, useState } from "react";

type Props = {
  children?: ReactNode[];
}

export default function TabNavigation({children}: Props){
  const [activeTab, setActiveTab] = useState<number>(0)
  return (
    <section className="max-h-screen relative shadow z-10">
    <div className="w-full h-15 p-6 flex flex-row gap-10 bg-gray-200 border-b absolute top-0 left-0">
      <div className={`inline-flex gap-4 items-center justify-center text-cyan-900 text-lg relative ${activeTab !== 0? "cursor-pointer":"cursor-default"}`}
        onClick={()=>(setActiveTab(0))}
      >
        <span>Upcoming Trips</span>
        <span className="w-7 h-7 rounded-full block text-center content-center bg-cyan-900 text-white">
          4
        </span>
        {
          activeTab === 0 &&
          <span className="w-[80%] h-1.5 bg-cyan-900 absolute rounded-t-full translate-y-[27px] pl-3"></span>
        }
      </div>

      <div className={`inline-flex gap-4 items-center justify-center text-cyan-900 text-lg relative ${activeTab !== 1? "cursor-pointer":"cursor-default"}`}
        onClick={()=>(setActiveTab(1))}
      >
        <span>Past Trips</span>
        <span className="w-7 h-7 rounded-full block text-center content-center bg-cyan-900 text-white">
          3
        </span>
        {
          activeTab === 1 &&
          <span className="w-[80%] h-1.5 bg-cyan-900 absolute rounded-t-full translate-y-[27px] px-3"></span>
        }
      </div>

      <div className={`inline-flex gap-4 items-center justify-center text-cyan-900 text-lg relative ${activeTab !== 2? "cursor-pointer":"cursor-default"}`}
        onClick={()=>setActiveTab(2)}
      >
        <span>Reviews</span>
        <span className="w-7 h-7 rounded-full block text-center content-center bg-cyan-900 text-white">
          6
        </span>
        {
          activeTab === 2 &&
          <span className="w-[80%] h-1.5 bg-cyan-900 absolute rounded-t-full translate-y-[27px] px-3 "></span>
        }
      </div>

      <div className={`inline-flex gap-4 items-center justify-center text-cyan-900 text-lg relative ${activeTab !== 3? "cursor-pointer":"cursor-default"}`}
        onClick={()=>setActiveTab(3)}
      >
        <span>Travel Photos</span>
        <span className="w-7 h-7 rounded-full block text-center content-center bg-cyan-900 text-white">
          11
        </span>
        {
          activeTab === 3 &&
          <span className="w-[80%] h-1.5 bg-cyan-900 absolute rounded-t-full translate-y-[27px] px-3"></span>
        }
      </div>
    </div>

    <div className="w-full h-full p-6 pt-21 overflow-y-scroll ">
      <div className="relative -z-10">
      { 
        Array.isArray(children) && children.length>0 ?
          children[activeTab] :
          <></>
      }
      </div>
    </div>    
    </section>
  )
}

// Todo: implement motion animation with active tab indicator