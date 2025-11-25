export const Form = () => {
  return (
    <div className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-700"></h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email"
        className="after:content-['*'] after:ml-0.5 after:text-red-500 text-black"
        >Email</label>
        <input name="email" type="email" 
        placeholder="Enter Your Email"  
        className="focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:bg-gray-100 focus:border-gray-300 border-transparent px-4 py-2 bg-white rounded-lg  transition-all duration-300 placeholder:text-neutral-300 "/>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password"
        ></label>
      </div>
    </div>
  );
};
