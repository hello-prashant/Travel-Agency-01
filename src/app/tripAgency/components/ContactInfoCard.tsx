export default function ContactInfoCard(){
  return (
    <div className="w-full min-h-80 border border-gray-200 shadow p-6 flex flex-col gap-4">
      <h2 className="text-lg font-semibold ">Contact Information</h2>
      <div className="">
        <p className="text-sm text-gray-600">Response Time</p>
        <span className="text-base font-medium">{"< 2 Hours"}</span>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">Phone</p>
        <a href="tel:+91 1234567890"
        className="text-base font-medium">
          +91 1234567890</a>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">Email</p>
        <a href="mailto:contact@wanderlust.com"
        className="text-base font-medium">
          contact@wanderlust.com
        </a>
      </div>
      <div className="">
        <p className="text-sm text-gray-600">Website</p>
        <a href="https:wanderlust.com" target="_blank" rel="noopener noreferrer"
        className="text-base font-medium text-green-500">
          https:wanderlust.com
        </a>
      </div>

      <i className="bg-black h-px w-full"/>

      <div className="">
        <button className="w-full h-8 text-white bg-cyan-900 font-semibold cursor-pointer">
          Send Message
        </button>
      </div>
    </div>
  )
}