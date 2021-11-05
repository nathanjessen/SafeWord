export default function Stats() {
  const price = 0;
  const holders = 0;
  const supply = "1,000,000,000";
  const marketcap = 0;

  return (
    <div className='bg-red-600'>
      <div className='max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8'>
        <dl className='mt-10 text-center sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8'>
          <div className='flex flex-col'>
            <dt className='order-2 mt-2 text-base leading-5 font-medium text-red-100'>
              Price
            </dt>
            <dd className='order-1 text-3xl font-extrabold text-white'>
              {price}
            </dd>
          </div>
          <div className='flex flex-col mt-10 sm:mt-0'>
            <dt className='order-2 mt-2 text-base leading-5 font-medium text-red-100'>
              Holders
            </dt>
            <dd className='order-1 text-3xl font-extrabold text-white'>
              {holders}
            </dd>
          </div>
          <div className='flex flex-col mt-10 sm:mt-0'>
            <dt className='order-2 mt-2 text-base leading-5 font-medium text-red-100'>
              Supply
            </dt>
            <dd className='order-1 text-3xl font-extrabold text-white'>
              {supply}
            </dd>
          </div>
          <div className='flex flex-col mt-10 sm:mt-0'>
            <dt className='order-2 mt-2 text-base leading-5 font-medium text-red-100'>
              MarketCap
            </dt>
            <dd className='order-1 text-3xl font-extrabold text-white'>
              {marketcap}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
