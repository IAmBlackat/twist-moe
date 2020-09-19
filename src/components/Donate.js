import React from 'react';

export const Donate = () => {
  return (
    <div className="flex flex-col">
      <span className="body-font text-twistorange-lightgray">
        Please donate to keep the site up & running, ad-free, and subscription
        free. We need your help!
      </span>
      <div
        className="rounded-full my-2 bg-twistorange-gray"
        style={{ height: '4px' }}
      >
        <div
          className="h-full rounded-full bg-twistorange-red"
          style={{
            width: '55.5779527557%',
          }}
        ></div>
      </div>
      <div className="flex flex-row-reverse">
        <button className="focus:outline-none cursor-default bg-twistorange-800 px-4 h-10 self-start rounded border border-transparent transition duration-500 ease-in-out hover:border-twistorange-gray">
          <span className="font-body text-gray-300">Sure, I'll donate</span>
        </button>
        <span className="mr-2 my-auto text-twistorange-lightgray font-body">
          $352.92 / $635.00 for September
        </span>
      </div>
    </div>
  );
};
