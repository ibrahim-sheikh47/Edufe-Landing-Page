import React, { createContext, useState, useContext } from "react";

// Create a context for language
export const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
