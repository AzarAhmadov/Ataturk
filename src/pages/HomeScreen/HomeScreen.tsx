import { FC, lazy } from "react";
import Hero from "../../components/Hero/Hero";
const CardsArea = lazy(() => import("../../components/CardsArea/CardsArea"));

const Home: FC = () => {
  return (
    <>
      <Hero />
      <CardsArea />
    </>
  );
};

export default Home;
