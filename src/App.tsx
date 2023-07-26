import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom'

// components
import Header from './views/components/header/header'
import Navigation from "./views/components/navigation/navigation";
import Footer from './views/components/footer/footer'

// pages
import FaireParts from "./views/pages/faireParts/faireParts";
import Galerie from "./views/pages/galerie/galerie";
import NotFoundPage from './views/pages/notFound/404'

// styles
import './index.scss'

function App() {
    return (
        <Router>
            <Header />
            <Navigation />
            <Routes>
                <Route path={'/'} element={<Navigate to="/accueil" />} />
                <Route path={'/accueil'} element={<FaireParts />} />
                <Route path={'/galerie'} element={<Galerie />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
