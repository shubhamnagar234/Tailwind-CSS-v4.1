import React from "react";
import { cn } from "@/lib/utils";
import { BrainIcon } from "./icons";

export const Grid = () => {
  return (
    <div className="max-w-5xl py-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-2 divide-x divide-y divide-neutral-100">
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
            <div className="h-full w-full bg-gray-200"></div>
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
          <CardSkeleton>
            <div className="h-full w-full bg-blue-200"></div>
          </CardSkeleton>
        </Card>

        <Card className="col-span-2">
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
            <div className="h-full w-full bg-blue-200"></div>
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
      className={cn("h-40 w-full my-4 rounded-lg overflow-hidden", className)}
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
