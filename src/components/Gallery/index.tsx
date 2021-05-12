import React from "react";

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    color: "bg-blue-600",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    color: "bg-red-600",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    color: "bg-green-400",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    color: "bg-purple-600",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
];

export default function Gallery() {
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md text-center sm:max-w-3xl lg:max-w-7xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
          NFTs
        </h2>
        <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
          We will be releasing several collections.
        </p>
        <ul className='mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
          {files.map((file, index) => (
            <li key={index} className='relative'>
              <div
                className={`group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-500 overflow-hidden ${file.color}`}>
                <img
                  src={file.source}
                  alt=''
                  className='hidden object-cover pointer-events-none group-hover:opacity-75'
                />
                <button
                  type='button'
                  className='absolute inset-0 focus:outline-none'>
                  <span className='sr-only'>View details for {file.title}</span>
                </button>
              </div>
              {/* <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
                {file.title}
              </p>
              <p className='block text-sm font-medium text-gray-500 pointer-events-none'>
                {file.size}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
