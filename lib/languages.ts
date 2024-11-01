export type Language = 'de' | 'en' | 'tr';

export const languages = {
  de: 'Deutsch',
  en: 'English',
  tr: 'Türkçe',
};

export const translations = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      contact: 'Kontakt',
      emergency: 'Notdienst',
    },
    home: {
      hero: {
        title: 'Elektro Schiel',
        subtitle: 'Ihre Experten für Elektroinstallationen',
        cta: 'Jetzt Kontakt aufnehmen',
      },
      services: {
        title: 'Unsere Leistungen',
        installation: {
          title: 'Elektroinstallationen',
          description: 'Neu- und Umbauten, Modernisierung elektrischer Anlagen',
        },
        security: {
          title: 'Sicherheitstechnik',
          description: 'Alarmanlagen, Videoüberwachung, Brandschutz',
        },
        emergency: {
          title: '24/7 Notdienst',
          description: 'Schnelle Hilfe bei elektrischen Notfällen',
        },
      },
      emergency: {
        title: 'Notfall? Wir sind für Sie da!',
        subtitle: '24/7 Notdienst unter',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      contact: 'Contact',
      emergency: 'Emergency',
    },
    home: {
      hero: {
        title: 'Elektro Schiel',
        subtitle: 'Your Experts for Electrical Installations',
        cta: 'Contact Us Now',
      },
      services: {
        title: 'Our Services',
        installation: {
          title: 'Electrical Installations',
          description: 'New construction, renovation, and modernization of electrical systems',
        },
        security: {
          title: 'Security Technology',
          description: 'Alarm systems, video surveillance, fire protection',
        },
        emergency: {
          title: '24/7 Emergency Service',
          description: 'Quick help for electrical emergencies',
        },
      },
      emergency: {
        title: 'Emergency? We are here for you!',
        subtitle: '24/7 Emergency Service at',
      },
    },
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      contact: 'İletişim',
      emergency: 'Acil Servis',
    },
    home: {
      hero: {
        title: 'Elektro Schiel',
        subtitle: 'Elektrik Tesisatında Uzmanınız',
        cta: 'Şimdi İletişime Geçin',
      },
      services: {
        title: 'Hizmetlerimiz',
        installation: {
          title: 'Elektrik Tesisatı',
          description: 'Yeni yapı, tadilat ve elektrik sistemlerinin modernizasyonu',
        },
        security: {
          title: 'Güvenlik Teknolojisi',
          description: 'Alarm sistemleri, video gözetim, yangın koruması',
        },
        emergency: {
          title: '7/24 Acil Servis',
          description: 'Elektrik acil durumları için hızlı yardım',
        },
      },
      emergency: {
        title: 'Acil durum? Buradayız!',
        subtitle: '7/24 Acil Servis hattı',
      },
    },
  },
};