export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export const defaultLanguage = languages[0];

export const translations = {
  en: {
    welcome: 'Welcome to our website',
    description: 'Select your preferred language',
    about: 'About Us',
    contact: 'Contact',
  },
  es: {
    welcome: 'Bienvenido a nuestro sitio web',
    description: 'Selecciona tu idioma preferido',
    about: 'Sobre Nosotros',
    contact: 'Contacto',
  },
  fr: {
    welcome: 'Bienvenue sur notre site',
    description: 'Sélectionnez votre langue préférée',
    about: 'À Propos',
    contact: 'Contact',
  },
  de: {
    welcome: 'Willkommen auf unserer Website',
    description: 'Wählen Sie Ihre bevorzugte Sprache',
    about: 'Über Uns',
    contact: 'Kontakt',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
