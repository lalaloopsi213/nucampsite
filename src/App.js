import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
    return (
      <div className="App">
        <Header />
        <CampsitesDirectoryPage />
        <Footer />
      </div>
    );
  }
  
  export default App;