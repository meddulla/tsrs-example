/** Languages the Worker can greet in. */
export type Language = "en" | "pt" | "fr";

const GREETINGS: Record<Language, string> = {
  en: "Hello",
  pt: "Olá",
  fr: "Bonjour",
};

export function isLanguage(value: string): value is Language {
  return value in GREETINGS;
}

export function greet(name: string, language: Language = "en"): string {
  return `${GREETINGS[language]}, ${name}!`;
}
