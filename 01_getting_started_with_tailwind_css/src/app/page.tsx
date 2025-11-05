import { Container } from "../components/container";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen relative bg-custom-gradient">
      <Container>
        <Navbar />
      </Container>
    </div>
  );
}
