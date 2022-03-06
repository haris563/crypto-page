/** @format */

import Navbar from "./components/Navbar";
import bannerImg from "./Images/heroImg.jpg";
import Latest from "./components/Latest";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='w-full h-[350px] bg-white flex flex-row '>
        <div className='w-1/2 flex justify-center items-center'>
          <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-gray-700'>
              Buy & sell Crypto in minutes
            </h1>
            <h1 className='text-gray-600'>
              Join the best crypto trading network
            </h1>
            <button className='bg-gradient-to-r from-pink-700 to-pink-600 w-3/6 py-2 rounded-md text-white font-semibold'>
              Register Now
            </button>
          </div>
        </div>
        <div className='w-1/2 h-full'>
          <img
            src={bannerImg}
            alt='banner Image'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
      <Latest />
    </div>
  );
}
