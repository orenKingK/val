import { useState } from 'react';
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import FlowerGarden from './components/FlowerGarden';
import WishSection from './components/WishSection';
import GiftSelector from './components/GiftSelector';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app-container">
      <AnimatePresence>
        {!started && (
          <WelcomeScreen key="welcome" onStart={() => setStarted(true)} />
        )}
      </AnimatePresence>

      {started && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ width: '100%', minHeight: '100vh', paddingBottom: '30px' }}
        >
          {/* Main Content */}
          <h1 style={{ marginTop: '3rem', fontSize: '3rem', marginBottom: '1rem' }}>יום אהבה שמח, אהובתי!</h1>

          <WishSection />



          <GiftSelector />

          <FlowerGarden />

        </motion.div>
      )}
    </div>
  );
}

export default App;
