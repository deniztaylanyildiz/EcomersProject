import './App.css';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import PageContent from './layout/PageContent.jsx';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ShopPage from "./pages/ShopPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx"; // Yeni import

function App() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat bg-[#FAFAFA] text-[#252B42]">
      <Header />
      
      <PageContent>
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/shop"><ShopPage /></Route>
          <Route path="/shop/:category/:productId/:productNameSlug"><ProductDetailPage /></Route>
          <Route path="/contact"><ContactPage /></Route>
          {/* Yeni Ekip Sayfası Rotası */}
          <Route path="/team"><TeamPage /></Route>
        </Switch>
      </PageContent>

      <Footer />
    </div>
  );
}

export default App;