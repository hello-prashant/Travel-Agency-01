import { ShieldCheck } from "lucide-react"
export default function SafetyCard(){
  return (
    <div className="w-full min-h-24 p-3 bg-blue-100 rounded-lg border border-green-300 inline-flex gap-2">
      <ShieldCheck className='text-blue-100 fill-green-500' width={28} height={28}/>
      <div className="">
        <h4 className='text-lg font-semibold mb-3'>Safety Information</h4>
        <p className='text-gray-800'>All travelers are verified by the community. The trip leader has a 96% safety rating.</p>
      </div>
      
    </div>
  )
}