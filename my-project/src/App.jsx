import './App.css';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import PageContent from './layout/PageContent.jsx';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-montserrat text-dark-blue">
      <Header />
      
      <PageContent>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* Diğer sayfalar (Shop, Product, vb.) buraya gelecek */}
        </Switch>
      </PageContent>

      <Footer />
      
    </div>
  )
}

export default App