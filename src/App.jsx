import Header from './components/Header';
import Hero from './components/Hero';
import CountrySelector from './components/CountrySelector';
import Welcome from './components/Welcome';
import TimelineChecklist from './components/TimelineChecklist';
import AIAnalysis from './components/AIAnalysis';
import Universities from './components/Universities';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CountrySelector />
        <Welcome />
        <TimelineChecklist />
        <AIAnalysis />
        <Universities />
      </main>
      <Footer />
    </>
  );
}

export default App;

