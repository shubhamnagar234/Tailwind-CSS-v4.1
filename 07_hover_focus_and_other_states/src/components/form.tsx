import { cn } from "@/lib/utils";

export const Form = () => {
  return (
    <div className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-700">This is a {" "}
        <span className={cn("inline-block relative z-10 text-white", "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:-skew-2")}>crazy</span>{" "}
        good form
      </h1>

      <div className="my-12 flex flex-col gap-8 max-w-sm mx-auto">
        <Group>
          <Label htmlFor="firstname" className="">
          First Name
        </Label>
        <Input name="firstname" type="text" placeholder="Enter Your First Name" />
        </Group>
        <Group>
          <Label htmlFor="email" className="">
          Email
        </Label>
        <Input name="email" type="email" placeholder="Enter Your Email" />
        </Group>

        <Group>
          <Label htmlFor="company" className="">
          Company
        </Label>
        <Input name="company" type="text" placeholder="Enter Your Company Name" />
        </Group>

        <Group>
          <Label htmlFor="message" className="">
          Message
        </Label>
        <Input name="message" type="text" placeholder="Enter Your Message" />
        </Group>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password"></label>
      </div>
    </div>
  );
};

const Group = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

const Label = ({
  className,
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...props}
      className={cn(
        "after:content-['*'] after:ml-0.5 after:text-red-500 text-black",
        className
      )}
    >
      {children}
    </label>
  );
};

const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:bg-gray-100 focus:border-gray-300 border-transparent px-4 py-2 bg-white rounded-lg  transition-all duration-300 placeholder:text-neutral-300",
        className
      )}
    />
  );
};
