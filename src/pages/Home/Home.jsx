import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ProblemSection from "../../components/ProblemSection/ProblemSection";
import ConcernCards from "../../components/ConcernCards/ConcernCards";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <ConcernCards />
    </>
  );
}

export default Home;