/** @format */

import Navbar from "./components/Navbar";
import bannerImg from "./Images/Crypto1.png";
import Crypto2 from "./Images/crypto2.png";
import Latest from "./components/Latest";

export default function App() {
  return (
    <div>
      <div className="bg-[url('./Images/banner-bg.svg')] ">
        <Navbar />
        <div className='w-full h-[500px]  flex flex-row '>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='space-y-4'>
              <h1 className='text-4xl font-bold text-gray-700'>
                Buy & sell <span className='text-sky-600'>Crypto</span> in
                minutes
              </h1>
              <h1 className='text-gray-600'>
                Join the best crypto trading network
              </h1>
              <button className='bg-gradient-to-r from-sky-700 to-sky-600 w-3/6 py-2 rounded-md text-white font-semibold'>
                Register Now
              </button>
            </div>
          </div>
          <div className='w-1/2 h-[450px] '>
            <img
              src={bannerImg}
              alt='banner Image'
              className='h-full w-full object-contain my-auto animate-bounce-slow '
            />
          </div>
        </div>
        <Latest />
      </div>
      <div className='mt-8 '>
        <h1 className='flex justify-center text-5xl font-bold uppercase text-gray-400 my-10'>
          How it Works
        </h1>
        <div className='w-7xl h-[500px] flex flex-row'>
          <div className='w-1/2 h-full justify-center align-middle items-center'>
            <img
              src={Crypto2}
              className='w-full h-[400px] object-contain animate-spin-slow '
            />
          </div>
          <div className='w-1/2 h-full'>
            <div className=' flex flex-col h-full w-[80%] mx-auto space-y-5 '>
              <h6 className='text-2xl font-semibold text-gray-600'>
                We’ve built a platform to buy and sell shares
              </h6>
              <h6 className='text-sm text-gray-600'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printe
              </h6>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
