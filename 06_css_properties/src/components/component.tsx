import { cn } from "@/lib/utils";

const Component = () => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl min-h-100 bg-neutral-100",
        "[background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        "p-8 flex items-center justify-center"
      )}
    >
      <div
        className={cn(
          "size-60 rounded-lg bg-neutral-100 border border-neutral-200",
          "[background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
          "[background-size:10px_10px]",
          "shadow-2xl"
        )}
      >
        <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" className={cn("h-full w-full object-cover object-top-left")} alt="avatar"/>
      </div>
    </div>
  );
};

export default Component;
