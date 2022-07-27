import Header from '../Header';
import Stats from '../Stats';

export const Hero = () => {
  return (
    <div className='flex flex-col min-h-screen bg-red-600 dark:bg-black'>
      <Header />
      <div className='flex-1 px-4 sm:px-8 flex items-center justify-center'>
        <div className='text-center max-w-4xl'>
          <h1 className='text-white text-8xl text-center font-semibold'>
            SafeWord
          </h1>
          <h2 className='text-gray-50 text-4xl text-center mt-12 leading-tight'>
            <span className='block'>When it comes to crypto,</span>
            <span className='block'> do you even need one?</span>
          </h2>
        </div>
      </div>
      <Stats />
    </div>
  );
};
