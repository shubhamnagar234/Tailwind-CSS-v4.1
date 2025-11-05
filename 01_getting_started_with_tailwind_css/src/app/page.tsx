import { Container } from "../components/container";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative bg-custom-gradient">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0" />
      </div>
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}
