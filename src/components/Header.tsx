import React from 'react';
import { Languages } from 'lucide-react';

export function Header() {
  return (
    <div className="mb-12 text-center animate-fadeIn">
      <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 p-3 animate-float">
        <Languages className="h-8 w-8 text-blue-600" />
      </div>
      <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        AI Language Translator
      </h1>
      <p className="text-lg text-gray-600">
        Translate text between multiple languages instantly
      </p>
    </div>
  );
}