import React from "react";
import { cn } from "@/lib/utils";
import { BrainIcon } from "./icons";
import { text } from "stream/consumers";

const MainSkeleton = () => {
  const chat = [
    {
      role: "user",
      text: "Hello there!",
    },
    {
      role: "assistant",
      text: "Hi! How can I help you.",
    },
    {
      role: "user",
      text: "I'm looking for a job.",
    },
    {
      role: "assistant",
      text: "Great! I'm happy to help you find a job. What kind of job are you looking for?",
    },
  ];

  const UserMessage = ({ text }: { text: string }) => {
    return (
      <div className="w-fit ml-auto flex justify-end items-start gap-2 bg-blue-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg p-2">
        <p className="text-sm text-white">{text}</p>
        <div className="rounded-full size-6 bg-linear-to-r from-blue-500 to-purple-500" />
      </div>
    );
  };

  const AIMessage = ({ text }: { text: string }) => {
    return (
      <div className="flex w-fit mr-auto  justify-start items-start gap-2 bg-gray-100 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-lg p-2">
        <div className="rounded-full size-6 shrink-0 bg-linear-to-r from-green-500 to-emerald-500" />
        <p className="text-sm text-black">{text}</p>
      </div>
    );
  };

  return (
    <div className="h-fit relative w-full px-12 flex flex-col gap-4 z-20">
      <input
        type="text"
        placeholder="Type your text here"
        className="w-[calc(100%-4rem)] h-10 bg-white border border-neutral-200 mx-auto absolute bottom-0 inset-x-0 rounded-md px-4 text-sm placeholder-neutral-600
      "
      />
      {chat.map((message) => {
        return message.role === "user" ? (
          <UserMessage text={message.text} />
        ) : (
          <AIMessage text={message.text} />
        );
      })}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="max-w-5xl py-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-neutral-100">
        <Card>
          <CardHeader>
            <BrainIcon className="text-gray-500" />
            <CardTitle>LLM Models Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>

        <Card>
          <CardHeader>
            {" "}
            <BrainIcon className="text-gray-500" />
            <CardTitle>LLM Models Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="h-full w-full bg-white">
            <MainSkeleton />
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            {" "}
            <BrainIcon className="text-gray-500" />
            <CardTitle>LLM Models Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full"></div>
          </CardSkeleton>
        </Card>
      </div>
    </div>
  );
};

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      // style={{
      //   backgroundImage: "radial-gradient(black 1px, transparent 1px)",
      //   backgroundSize: "10px 10px",
      // }}
      className={cn(
        "h-40 w-full my-4 rounded-lg overflow-hidden",
        "[background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)]",
        "[background-size:10px_10px]",
        // "bg-[radial-gradient(var(--color-neutral-200))_1px,transparent_1px]",
        // "bg-size-[10px_10px]",
        "mask-radial-from-40%",
        className
      )}
    >
      {children}
    </div>
  );
};

const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("bg-white p-4", className)}>{children}</div>;
};

const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
};

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "font-medium text-neutral-500 text-lg tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
};

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-neutral-400", className)}>{children}</p>
  );
};
