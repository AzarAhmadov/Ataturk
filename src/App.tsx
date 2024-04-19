import { FC } from "react"
import Home from "./pages/HomeScreen/HomeScreen"
import LanguageSwitcher from "./common/LanguageSwitcher/LanguageSwitcher"

const App: FC = () => {
  return (
    <main>
      <Home />
      <LanguageSwitcher />
    </main>
  )
}

export default App
