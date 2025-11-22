import { cn } from "@/lib/utils";

const Component = () => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-800",
        "[background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "dark:[background-image:radial-gradient(var(--color-neutral-700)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "p-8 flex flex-col items-center justify-center group"
      )}
    >
      <h2 className={cn("text-2xl font-bold mt-8 mb-2 tracking-tight", "text-neutral-800 dark:text-neutral-100 dark:text-shadow-neutral-600 text-shadow-sm text-shadow-neutral-300")}>Easily modify scale with Tailwind</h2>
      <p className="max-w-sm mx-auto text-sm text-center mb-8 bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600"> Hover over the image below to see a smooth 3D transformation effect. The card rotates and scales using css transforms and Tailwind&apos;s built-in classes.</p>
      <div
        className={cn(
          // 1. Added 'group' here so children can listen to the hover state
          "group size-60 rounded-lg bg-neutral-100  dark:bg-neutral-800 dark:border-neutral-600 border border-neutral-200 transition-all duration-300  dark:group-hover:border-neutral-300",
          
          // 2. Changed 'group-hover' to 'hover' for the container itself
          "hover:bg-neutral-200 hover:border-neutral-300", 
          
          "[background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(var(--color-neutral-600)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "shadow-2xl relative perspective-distant",
          "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 dark:group-hover:border-neutral-600"
        )}
      >
        <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" 
            className={cn(
                "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
                "h-full w-full object-cover object-top-left rounded-2xl",
                "transform rotate-x-30 rotate-z-30 -rotate-y-30 -translate-z-20",
                // These will now work because the parent has the 'group' class
                "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85"
            )} 
            alt="avatar"
        />
      </div>
    </div>
  );
};

export default Component;