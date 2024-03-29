import React from 'react'

const Banner = () => {
  return (
    <div className='text-center flex-col justify-center justify-items-center items-center   mt-10 p-8 '>
        <div className=''>
            <h1 className="text-3xl text-center font-semibold text-black portFolioHeadingMobileFont">Scalable, secure, <span className="text-blue-700"> and compliant</span></h1>
            <p className='text-xl text-center text-black-500 portFolioSubHeadingMobileFont'>CMP Global Consultants follows industry-standard regulations and safe data practices</p>
        </div>
    </div>
  )
}

export default Banner;