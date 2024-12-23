import React from 'react';
import { ArrowRightLeft } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { Language } from '../types';

interface TranslationControlsProps {
  sourceLang: string;
  targetLang: string;
  onSourceLangChange: (value: string) => void;
  onTargetLangChange: (value: string) => void;
  onSwap: () => void;
  languages: Language[];
}

export function TranslationControls({
  sourceLang,
  targetLang,
  onSourceLangChange,
  onTargetLangChange,
  onSwap,
  languages,
}: TranslationControlsProps) {
  return (
    <div className="mb-6 flex flex-col items-center gap-4 md:flex-row">
      <div className="flex-1">
        <LanguageSelector
          value={sourceLang}
          onChange={onSourceLangChange}
          languages={languages}
          label="Translate from"
        />
      </div>
      
      <button
        onClick={onSwap}
        className="group mx-2 mt-6 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 p-3 transition-all hover:from-blue-100 hover:to-indigo-100"
      >
        <ArrowRightLeft className="h-5 w-5 text-blue-600 transition-transform group-hover:rotate-180" />
      </button>

      <div className="flex-1">
        <LanguageSelector
          value={targetLang}
          onChange={onTargetLangChange}
          languages={languages}
          label="Translate to"
        />
      </div>
    </div>
  );
}