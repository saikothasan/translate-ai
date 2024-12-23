export type Language = {
  code: string;
  name: string;
};

export type TranslationRequest = {
  text: string;
  source_lang: string;
  target_lang: string;
};

export type TranslationResponse = {
  text: string;
};