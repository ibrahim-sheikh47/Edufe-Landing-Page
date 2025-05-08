import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;