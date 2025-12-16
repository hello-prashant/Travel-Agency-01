import { GoVerified } from "react-icons/go";
import { MdShield } from "react-icons/md";

export default function TrustSafetyCard(){
  return (
    <div className="w-full min-h-50 border border-gray-200 p-6 flex flex-col gap-3 shadow">
      <h2 className='text-2xl font-bold inline-flex items-center gap-4' > 
        <MdShield  className='text-green-500 fill-green-500'/>
        Trust and Safety
      </h2>
      <div className='inline-flex items-center gap-4 text-gray-500 '>
        <GoVerified className='text-green-500 text-xl'/>
        Identity Verified</div>
      <div className='inline-flex items-center gap-4 text-gray-500'>
        <GoVerified className='text-green-500 text-xl'/>
        Licensed Agency</div>
      <div className='inline-flex items-center gap-4 text-gray-500'>
        <GoVerified className='text-green-500 text-xl'/>
        Background Checked</div>
      <div className='inline-flex items-center gap-4 text-gray-500'>
        <GoVerified className='text-green-500 text-xl'/>
        Insurance Covered</div>

    </div>
  )
}