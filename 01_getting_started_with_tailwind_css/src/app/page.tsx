import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative bg-custom-gradient">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0" />
      </div>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"/>
       <div className="max-w-7xl mx-auto p-z">
         <Image src="/hero-image.jpg" alt="Hero Image"  width={1000} height={100} className="rounded-2xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-20% to-40%"/>
       </div>
      </div>
    </div>
  );
}
