/** @format */

import Navbar from "./components/Navbar";
import bannerImg from "./Images/Crypto1.png";
import Crypto2 from "./Images/crypto2.png";
import Latest from "./components/Latest";
import feature1 from "./Images/feature1.png";
import feature2 from "./Images/feature2.png";
import feature3 from "./Images/feature-3.png";
import feature4 from "./Images/feature-4.png";
import feature5 from "./Images/feature-5.png";
import feature6 from "./Images/feature-6.png";
import { CheckCircleIcon, CircleCircleIcon } from "@heroicons/react/outline";
import Footer from "./components/Footer";
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
              <h1 className='text-gray-600 font-semibold'>
                Join the best crypto trading network
              </h1>
              <button className='bg-gradient-to-r from-sky-500 to-sky-300 w-3/6 py-2 rounded-md text-white font-semibold'>
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
      <div className='my-8 '>
        <h1 className='flex justify-center text-5xl font-bold uppercase text-gray-400 my-20'>
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
              <div className='space-y-6'>
                <div className='flex flex-row items-center'>
                  <CheckCircleIcon className='h-6 text-sky-400' />
                  <h6 className='text-sm text-gray-600 px-2'>
                    Irure ut amet nulla irure.
                  </h6>
                </div>
                <div className='flex flex-row items-center'>
                  <CheckCircleIcon className='h-6 text-sky-400' />
                  <h6 className='text-sm text-gray-600 px-2'>
                    Irure ut amet nulla irure.
                  </h6>
                </div>
                <div className='flex flex-row items-center'>
                  <CheckCircleIcon className='h-6 text-sky-400' />
                  <h6 className='text-sm text-gray-600 px-2'>
                    Irure ut amet nulla irure.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8 '>
        <h1 className='flex justify-center text-5xl font-bold uppercase text-gray-400 my-10'>
          Best Features
        </h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto '>
          <div className='space-y-4 px-10 py-10'>
            <img src={feature1} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600 hover:text-sky-300'>
              Safe & Secure
            </h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              labore et.Lorem ipsum dolor sit amet.
            </h6>
          </div>
          <div className='space-y-4 px-10 py-10'>
            <img src={feature2} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600'>Safe & Secure</h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              labore et.Lorem ipsum dolor sit amet.
            </h6>
          </div>
          <div className='space-y-4 px-10 py-10'>
            <img src={feature3} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600'>
              Exchanges supported
            </h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Binance(China) Binance(USA) Bybit Deribit BitMEX Coinbase
            </h6>
          </div>
          <div className='space-y-4 py-10  px-10'>
            <img src={feature4} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600'>Safe & Secure</h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              labore et.Lorem ipsum dolor sit amet.
            </h6>
          </div>
          <div className='space-y-4 px-10 py-10'>
            <img src={feature5} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600'>Safe & Secure</h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              labore et.Lorem ipsum dolor sit amet.
            </h6>
          </div>
          <div className='space-y-4 px-10 py-10'>
            <img src={feature6} className='h-20 w-20 object-contain' />
            <h6 className='text-3xl font-bold text-gray-600'>Safe & Secure</h6>
            <h6 className='text-sm font-semibold text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipi-sicing elit, sed do
              eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet,
              labore et.Lorem ipsum dolor sit amet.
            </h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
