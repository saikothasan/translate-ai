import React, { useState } from 'react';
import { languages } from './data/languages';
import { Header } from './components/Header';
import { TranslationControls } from './components/TranslationControls';
import { TranslationArea } from './components/TranslationArea';
import './styles/animations.css';

function App() {
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('fr');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('https://nameless.aicodegen.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: sourceText,
          source_lang: sourceLang,
          target_lang: targetLang,
        }),
      });
      
      const data = await response.json();
      setTranslatedText(data.text);
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Header />
        
        <div className="backdrop-blur-sm rounded-2xl bg-white/80 p-6 shadow-xl ring-1 ring-gray-900/5">
          <TranslationControls
            sourceLang={sourceLang}
            targetLang={targetLang}
            onSourceLangChange={setSourceLang}
            onTargetLangChange={setTargetLang}
            onSwap={swapLanguages}
            languages={languages}
          />

          <TranslationArea
            sourceText={sourceText}
            translatedText={translatedText}
            onSourceTextChange={setSourceText}
            isLoading={isLoading}
            onTranslate={handleTranslate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;