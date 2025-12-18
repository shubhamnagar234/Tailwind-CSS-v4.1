import { cn } from "@/lib/utils";

export const Button = () => {
  return (
    <button className="relative rounded-md group pl-8 pr-3 tracking-tight border border-white/20 flex items-center gap-2 cursor-pointer">
      <Box />
      <div className="absolute inset-0 rounded-[5px] bg-white/20 [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] transition-[clip-path] duration-500 ease-out" />
      <span className="inline-block group-hover:-translate-x-6 transition-transform duration-500">
        Chat with Me
      </span>
    </button>
  );
};

const Box = () => {
  return (
    <div className="absolute size-6 group-hover:left-[calc(100%-1.5rem)] group-hover:transform group-hover:rotate-180 ease-out left-0 inset-y-0 my-auto transition-all duration-500 flex gap-px flex-col rounded-[5px] bg-primary justify-center items-center z-40">
      <div className="flex gap-px">
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={true} />
        <Bubble highlight={false} />
        <Bubble highlight={false} />
      </div>
      <div className="flex gap-px">
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={true} />
        <Bubble highlight={false} />
      </div>
      <div className="flex gap-px">
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
        <Bubble highlight={true} />
      </div>
      <div className="flex gap-px">
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={true} />
        <Bubble highlight={false} />
      </div>
      <div className="flex gap-px">
        <Bubble highlight={false} />
        <Bubble highlight={false} />
        <Bubble highlight={true} />
        <Bubble highlight={false} />
        <Bubble highlight={false} />
      </div>
    </div>
  );
};

const Bubble = ({ highlight }: { highlight: boolean }) => {
  return (
    <div
      className={cn(
        "inline-block size-0.75 rounded-full shrink-0 bg-white/25",
        highlight && "bg-white animate-pulse ease-linear duration-200"
      )}
    ></div>
  );
};
