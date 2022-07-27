import { collections } from "../../data/collections";

export const Gallery = () => {
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
          {collections.map((collection, index) => (
            <li key={index} className='relative'>
              <div
                className={`group block w-full aspect-w-10 aspect-h-7 rounded-lg focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-red-500 overflow-hidden ${collection.color ? collection.color : 'bg-gray-100'}`}>
                <img
                  src={collection.source}
                  alt=''
                  className='hidden object-cover pointer-events-none group-hover:opacity-75'
                />
                <button
                  type='button'
                  className='absolute inset-0 focus:outline-none'>
                  <span className='sr-only'>View details for {collection.title}</span>
                </button>
              </div>
              {/* <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>
                {collection.title}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
