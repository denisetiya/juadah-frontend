import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"
function App() {


  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/auth" Component={AuthPage} />
    </Routes>
  )
}

export default App
