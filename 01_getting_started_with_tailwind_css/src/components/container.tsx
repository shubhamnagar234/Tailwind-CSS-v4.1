import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("w-full max-w-7xl mx-auto px-4 relative z-10", className)}>
    {children}
  </div>
);
