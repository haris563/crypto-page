/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Latest() {
  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=''
        containerClass='container-with-dots'
        dotListClass=''
        draggable
        focusOnSelect={false}
        infinite
        itemClass=''
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=''
        slidesToSlide={1}
        swipeable>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700 font-semibold'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
        <div className='bg-white p-4 space-y-2'>
          <h6 className='text-gray-700'>
            LUNA/BUSD <span className='text-red-700'>-1.66</span>
          </h6>

          <h1 className='text-3xl text-gray-900 font-semibold'>378.7</h1>
          <h1>$239.7</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Latest;
