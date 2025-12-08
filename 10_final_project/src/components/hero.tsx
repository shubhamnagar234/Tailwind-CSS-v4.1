import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";

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
    </Container>
  </div>
);
