import { features } from '../../data/features';

export const FeatureSection = () => {
  return (
    <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
      <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
        <h2 className='text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
          Token Distribution
        </h2>
        <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
          Tokens will be distributed in such a way that the community is given
          the majority, yet we're still able to accomplish our marketing goals
          and list on exchanges.
        </p>
        <div className='mt-12'>
          <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {features?.map((feature) => (
              <div key={feature.name} className='pt-6 h-full'>
                <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full'>
                  <div className='-mt-6'>
                    <div>
                      <span className='inline-flex items-center justify-center p-3 bg-red-500 h-12 w-12 text-white text-sm font-semibold rounded-md shadow-lg'>
                        {feature.share}
                      </span>
                    </div>
                    <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
                      {feature.name}
                    </h3>
                    <p className='mt-5 text-base text-gray-500'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
