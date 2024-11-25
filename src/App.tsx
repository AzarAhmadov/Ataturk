import { FC } from "react";
import Home from "./pages/HomeScreen/HomeScreen";
import { ScrollRestoration } from "react-router-dom";

const App: FC = () => {
  return (
    <main>
      <ScrollRestoration />
      <Home />
    </main>
  );
};

export default App;
