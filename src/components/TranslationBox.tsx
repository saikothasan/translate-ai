import React from 'react';

interface TranslationBoxProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
}

export function TranslationBox({ value, onChange, placeholder, readonly }: TranslationBoxProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
      readOnly={readonly}
      className="h-40 w-full rounded-lg border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
    />
  );
}