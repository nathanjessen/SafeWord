import { CheckIcon } from "@heroicons/react/solid";

const steps = [
  {
    name: "Generate Meme",
    description: "All projects start with a great idea.",
    status: "complete",
  },
  {
    name: "Commission logo and graphics",
    description: "What's a project without a few quality graphics?",
    status: "complete",
  },
  {
    name: "Launch Website",
    description: "We can do a lot of cool stuff with a website and dApp",
    status: "complete",
  },
  {
    name: "Write a Litepaper",
    description: "Every great meme deserves a mission statement and a token.",
    status: "current",
  },
  {
    name: "Explore Charitable Causes",
    description:
      "Contribute some profits to charities related to sexual wellness, awareness, and education.",
    status: "upcoming",
  },
  {
    name: "Launch Token",
    description:
      "Let's make it available on a network with low fees. BSC anyone?",
    status: "upcoming",
  },
  {
    name: "CoinGecko and CoinMarketCap",
    description: "Everyone should be able to find and track the token.",
    status: "upcoming",
  },
  {
    name: "More to come",
    description:
      "Where would you like the project to go? What can we bring to DeFi?",
    status: "upcoming",
  },
  {
    name: "Launch $DOGE Campaign",
    description: "Let's help bridge the communities and grow together.",
    status: "upcoming",
  },
  {
    name: "1 Doll Hair",
    description: "Let's be honest. Isn't that your goal?",
    status: "upcoming",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Roadmap() {
  return (
    <div className='relative min-h-screen bg-gray-50 px-4 md:px-8 py-16 sm:py-24 lg:py-32 bg-fixed bg-no-repeat bg-left-bottom lg:bg-silhouette bg-contain'>
      <div className='mx-auto max-w-md sm:max-w-3xl lg:max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
            Roadmap
          </h2>
          <p className='mt-5 max-w-prose mx-auto text-xl text-gray-600'>
            Let's start with a meme and build into something bigger.
          </p>
        </div>
        <div className='mt-12 flex'>
          <div className='lg:w-1/2'></div>
          <nav aria-label='Progress' className='lg:w-1/2'>
            <ol className='overflow-hidden'>
              {steps.map((step, stepIdx) => (
                <li
                  key={step.name}
                  className={classNames(
                    stepIdx !== steps.length - 1 ? "pb-10" : "",
                    "relative"
                  )}>
                  {step.status === "complete" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-red-600'
                          aria-hidden='true'
                        />
                      ) : null}
                      <span className='relative flex items-start group'>
                        <span className='h-9 flex items-center'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full group-hover:bg-red-800'>
                            <CheckIcon
                              className='w-5 h-5 text-white'
                              aria-hidden='true'
                            />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase'>
                            {step.name}
                          </span>
                          <span className='text-sm text-gray-800'>
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </>
                  ) : step.status === "current" ? (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <span
                        className='relative flex items-start group'
                        aria-current='step'>
                        <span
                          className='h-9 flex items-center'
                          aria-hidden='true'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-red-600 rounded-full'>
                            <span className='h-2.5 w-2.5 bg-red-600 rounded-full' />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase text-red-600'>
                            {step.name}
                          </span>
                          <span className='text-sm text-gray-800'>
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </>
                  ) : (
                    <>
                      {stepIdx !== steps.length - 1 ? (
                        <div
                          className='-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300'
                          aria-hidden='true'
                        />
                      ) : null}
                      <span className='relative flex items-start group'>
                        <span
                          className='h-9 flex items-center'
                          aria-hidden='true'>
                          <span className='relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                            <span className='h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300' />
                          </span>
                        </span>
                        <span className='ml-4 min-w-0 flex flex-col'>
                          <span className='text-xs font-semibold tracking-wide uppercase text-gray-700'>
                            {step.name}
                          </span>
                          <span className='text-sm text-gray-800'>
                            {step.description}
                          </span>
                        </span>
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
