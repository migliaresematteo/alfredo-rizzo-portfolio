import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        lessons: 'Lessons',
        repertoire: 'Repertoire',
        performances: 'Performances',
        contact: 'Contact',
      },
      header: {
        title: 'Alfredo Rizzo',
        subtitle: 'Classical Pianist',
        description: 'Experience the timeless beauty of classical piano through masterful performances',
        cta: 'Explore Performances',
      },
      about: {
        title: 'The Artist',
        description: 'With over a decade of dedication to classical piano, I bring forth the emotional depth and technical precision of timeless compositions. Each performance is a journey through the rich tapestry of classical music.',
        button: 'View Repertoire',
      },
      footer: {
        copyright: 'All rights reserved',
        author: 'Logo',
      },
    },
  },
  it: {
    translation: {
      nav: {
        home: 'Home',
        about: 'Chi Sono',
        lessons: 'Lezioni',
        repertoire: 'Repertorio',
        performances: 'Esibizioni',
        contact: 'Contatti',
      },
      header: {
        title: 'Alfredo Rizzo',
        subtitle: 'Pianista Classico',
        description: 'Scopri la bellezza senza tempo del pianoforte classico attraverso interpretazioni magistrali',
        cta: 'Esplora le Performance',
      },
      about: {
        title: 'L\'Artista',
        description: 'Con oltre un decennio di dedizione al pianoforte classico, porto avanti la profondità emotiva e la precisione tecnica delle composizioni senza tempo. Ogni esibizione è un viaggio attraverso il ricco tessuto della musica classica.',
        button: 'Vedi Repertorio',
      },
      footer: {
        copyright: 'Tutti i diritti riservati',
        author: 'Logo',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
