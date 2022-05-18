import React from 'react'

const MailList = () => {
  return (
    <div className="w-full bg-blue-500 text-white flex flex-col justify-center items-center gap-6 p-10">
        <h1 className="text-5xl font-bold mt-8">Save time, save money!</h1>
        <span className="text-2xl font-semibold">Sign up and we will send the best deals to you</span>
        <div className="flex gap-x-4">
            <input type="text" placeholder="  Your Email" className="w-[300px] rounded-md"/>
            <button className="bg-blue-400 p-4 rounded-md font-bold">Subscribe</button>
        </div>
    </div>
  )
}

export default MailList