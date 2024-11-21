import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import AuthPage from "./pages/AuthPage"
import Navbar from './components/fragments/Navbar'
import Footer from "./components/fragments/Footer"
import DiscoverPage from "./pages/DiscoverPage"


function App() {
  const location = useLocation();
  const noNavbarPaths = ['/auth'];
  const showNavbar = !noNavbarPaths.includes(location.pathname);


  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={AuthPage} />
        <Route path="/discover" Component={DiscoverPage} />
      </Routes>
      {showNavbar && <Footer />}
    </div>
  )
}

export default App

