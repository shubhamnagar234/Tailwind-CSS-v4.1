import { Button } from "./button";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import Link from "next/link";

export const Hero = () => (
  <div className="pt-10 md:pt-20 lf:pt-32">
    <Container>
      <Heading as="h1">
        Agents that do the work <br /> Approvals that keep you safe.
      </Heading>
      <SubHeading className="py-8">
        Deploy AI Agents that plan, act through your tools, and remote
        outcomes-without changing how your teams work.
      </SubHeading>
      <div className="flex items-center gap-6">
        <Button>Start your free trial</Button>
        <Button variants="secondary">
          <Link href="#">View role based demos</Link>
        </Button>
      </div>
      <div className="relative min-h-140 w-full pt-20"></div>
    </Container>
  </div>
);
