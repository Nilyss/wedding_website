import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { useEffect, useState } from "react";

// components
import Header from "./views/components/header/header";
import Navigation from "./views/components/navigation/navigation";
import Footer from "./views/components/footer/footer";
import Loader from "./views/components/loader/loader";

// pages
import FaireParts from "./views/pages/faireParts/faireParts";
import Galerie from "./views/pages/galerie/galerie";
import NotFoundPage from "./views/pages/notFound/404";

// styles
import "./index.scss";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {isLoaded ? (
        <Router>
          <Header />
          <Navigation />
          <Routes>
            <Route path={"/"} element={<Navigate to="/accueil" />} />
            <Route path={"/accueil"} element={<FaireParts />} />
            <Route path={"/galerie"} element={<Galerie />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
