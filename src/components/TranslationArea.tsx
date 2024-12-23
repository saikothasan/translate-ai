import React from 'react';
import { TranslationBox } from './TranslationBox';

interface TranslationAreaProps {
  sourceText: string;
  translatedText: string;
  onSourceTextChange: (value: string) => void;
  isLoading: boolean;
  onTranslate: () => void;
}

export function TranslationArea({
  sourceText,
  translatedText,
  onSourceTextChange,
  isLoading,
  onTranslate,
}: TranslationAreaProps) {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="animate-slideInLeft">
          <TranslationBox
            value={sourceText}
            onChange={onSourceTextChange}
            placeholder="Enter text to translate..."
          />
        </div>
        <div className="animate-slideInRight">
          <TranslationBox
            value={translatedText}
            placeholder="Translation will appear here..."
            readonly
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onTranslate}
          disabled={isLoading || !sourceText.trim()}
          className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-white transition-all hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-300 disabled:to-indigo-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isLoading ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Translating...
              </>
            ) : (
              'Translate'
            )}
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-700 to-indigo-700 transition-transform group-hover:translate-x-0"></div>
        </button>
      </div>
    </>
  );
}