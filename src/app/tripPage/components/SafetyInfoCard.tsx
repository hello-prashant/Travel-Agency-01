import { LuShieldCheck } from "react-icons/lu";
export default function SafetyInfoCard(){
  return (
    <div className="w-full min-h-24 px-6 py-4 bg-blue-100 rounded-lg border border-green-300 inline-flex items-center gap-6 ">
      <LuShieldCheck className='text-blue-100 fill-green-500 scale-250' />
      <div className="">
        <h4 className='text-lg font-semibold mb-3'>Safety Information</h4>
        <p className='text-gray-800'>All travelers are verified by the community. The trip leader has a 96% safety rating.</p>
      </div>
      
    </div>
  )
}