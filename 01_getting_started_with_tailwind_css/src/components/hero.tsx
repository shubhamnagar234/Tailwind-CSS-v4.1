export const Hero = () => {
  return (
    <div className="px-4 py-2 flex items-center flex-col w-full my-20">
      <button className="border px-4 py-1 rounded-full border-gray-200 hover:bg-gray-200 transition cursor-pointer duration-200 bg-gray-100 text-gray-600">
        What are early stage tax requirements &rarr;
      </button>
      <div>
        <h1 className="font-medium mt-10 text-7xl text-black tracking-tighter text-center">
          Magically simplify accounting and taxes
        </h1>
        <p className="max-w-2xl text-center mt-4 mx-auto text-lg text-neutral-700">
          Automated bookkeeping, effortless tax filling, real-time insights. Set
          up in 10 mins. Back to building by 4:28pm.
        </p>
        <div className="flex items-center justify-center gap-4 mt-10 relative z-10">
          <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white shadow-lg text-shadow-md tracking-wide cursor-pointer">
            Start free trial
          </button>
          <button className="px-4 py-2 rounded-lg text-black tracking-wide cursor-pointer">
            Pricing &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
