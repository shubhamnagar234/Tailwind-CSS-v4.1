import { cn } from "@/lib/utils";

export const Form = () => {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14 text-center">
      <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-neutral-800 to-neutral-700">
        This is a{" "}
        <span
          className={cn(
            "inline-block relative z-10 text-white",
            "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:-skew-2"
          )}
        >
          crazy
        </span>{" "}
        good form
      </h1>

      <div className="my-12 flex flex-col gap-8 max-w-sm mx-auto">
        <Group>
          <Label htmlFor="firstname" className="">
            First Name
          </Label>
          <Input
            disabled
            name="firstname"
            type="text"
            placeholder="Enter Your First Name"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </Group>
        <Group>
          <Label htmlFor="email" className="">
            Email
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            className="invalid:border-red-500 invalid:shadow-none "
          />
        </Group>

        <Group>
          <Label htmlFor="company" className="">
            Company
          </Label>
          <Input
            name="company"
            type="text"
            placeholder="Enter Your Company Name"
          />
        </Group>

        <Group>
          <Label htmlFor="message" className="">
            Message
          </Label>
          <Input name="message" type="text" placeholder="Enter Your Message" />
        </Group>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:scale-95 after:content-[''] after:w-1/2 after:h-[400px] after:absolute after:bg-white/10 relative overflow-hidden after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop-blur-[0.5px] after:transition-all after:duration-500 after:ease-in-out">
          Send me text now
        </button>
      </div>
    </form>
  );
};

const Group = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 has-invalid:bg-red-100 rounded-md p-2",
        className
      )}
    >
      {children}
    </div>
  );
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
        "focus:outline-none border focus:ring-2 focus:ring-gray-300 focus:ring-offset-4 focus:bg-gray-100 focus:border-gray-300 border-transparent px-4 py-2 bg-white rounded-lg  transition-all duration-300 placeholder:text-neutral-300 text-neutral-800",
        className
      )}
    />
  );
};
