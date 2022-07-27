import { LOGO } from "../../assets";
import { navigation } from "../../data/navigation";

export const Header = () => {
  return (
    <header className=''>
      <nav className='px-4 sm:px-6 lg:px-16' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-red-500 lg:border-none'>
          <a href='/'>
            <span className='sr-only'>SafeWord</span>
            <img src={LOGO} alt='logo' className='h-10 w-auto' />
          </a>

          <div className='hidden ml-10 space-x-8 lg:block'>
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-base font-medium text-white hover:text-indigo-50'>
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-base font-medium text-white hover:text-indigo-50'>
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
