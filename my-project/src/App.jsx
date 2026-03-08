import './App.css';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import PageContent from './layout/PageContent.jsx';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  return (
    /* bg-brand-light (#FAFAFA) ekleyerek sayfa tabanını gri yaptık.
       text-brand-dark (#252B42) ile varsayılan yazı rengini sabitledik.
    */
    <div className="min-h-screen flex flex-col font-montserrat bg-[#FAFAFA] text-[#252B42]">
      <Header />
      
      {/* PageContent her iki sayfa için de genişliği kontrol eder */}
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </PageContent>

      <Footer />
    </div>
  );
}

export default App;