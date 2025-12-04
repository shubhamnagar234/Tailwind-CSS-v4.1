import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full max-w-4xl mx-auto py-20 bg-neutral-50">
      <Header />
      <div className="grid grid-cols-4 gap-4 my-10">
        <Column>
          <Card src="/images/1.jpg" alt="1" className="" />
          <Card src="/images/5.jpg" alt="2" className="" />
          <Card src="/images/3.jpg" alt="3" className="" />
        </Column>
        <Column>
          <Card src="/images/4.jpg" alt="4" className="" />
          <Card src="/images/5.jpg" alt="5" className="" />
          <Card src="/images/6.jpg" alt="6" className="" />
        </Column>
        <Column>
          <Card src="/images/1.jpg" alt="7" className="" />
          <Card src="/images/8.jpg" alt="8" className="" />
          <Card src="/images/3.jpg" alt="9" className="" />
        </Column>
        <Column>
          <Card src="/images/4.jpg" alt="4" className="" />
          <Card src="/images/5.jpg" alt="5" className="" />
          <Card src="/images/6.jpg" alt="6" className="" />
        </Column>
      </div>
    </div>
  );
}

const Card = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  return (
    <div className="card">
      <Image
        src={src}
        alt={alt}
        height={500}
        width={500}
        className={cn("", className)}
      />
    </div>
  );
};

const Column = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter text-neutral-700">
        Bento grids are cool, you should try it sometimes.
      </h1>
      <p className="text-base text-neutral-500 max-w-4xl mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ex
        aliquid aperiam provident, laboriosam hic corrupti. Labore, libero
        recusandae unde nihil similique ipsum ad qui nesciunt a debitis culpa
        ipsa.
      </p>
    </>
  );
};
