import React from "react";

export default function Home() {
  return (
    <main className='min-w-0 flex-1 flex items-center justify-center overflow-y-scroll'>
      <section
        aria-labelledby='primary-heading'
        className='px-4 sm:px-8 max-w-8xl'>
        <h1 id='primary-heading' className='sr-only'>
          Home
        </h1>
        <h1 className='text-white text-8xl text-center'>SafeWord</h1>
        <h1 className='text-gray-200 text-5xl text-center'>Coming Soon</h1>
      </section>
    </main>
  );
}
