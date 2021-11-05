import { useState } from "react";
import { terms } from "./terms";
import { phrases } from "./phrases";

export default function SafeWordGenerator() {
  const [safeword, setSafeWord] = useState<string>("");
  const termsLen = terms.length;
  const phrasesLen = phrases.length;

  const onClick = () => {
    const rand = Math.random();
    const phrase = phrases[Math.floor(rand * phrasesLen)];
    const word = terms[Math.floor(rand * termsLen)];
    setSafeWord(phrase.replace("{1}", word));
  };

  return (
    <div className='min-h-screen bg-gray-50 bg-fixed bg-no-repeat bg-left-bottom md:bg-silhouette bg-contain flex flex-col justify-center items-center'>
      <div className='max-w-prose text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-black sm:text-4xl'>
          What's your SafeWord?
        </h2>
        <p className='mt-4 text-lg leading-6 text-gray-800'>
          Perfect for all of your scandalous crypto roleplay. Hey, we're not
          here to judge you.
        </p>
        <button
          onClick={onClick}
          type='button'
          className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 sm:w-auto'>
          Go!
        </button>
        <h2 className='mt-8 text-3xl font-extrabold text-red-600 sm:text-4xl break-words'>
          {safeword}
        </h2>
      </div>
    </div>
  );
}
