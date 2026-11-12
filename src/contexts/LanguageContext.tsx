import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'de' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.layout': 'Raumaufteilung und Ausstattung',
    'nav.prices': 'Preise & Konditionen',
    'nav.canyamel': 'Canyamel & Umgebung',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.title': 'Wohnen mit Meerblick',
    'hero.subtitle': 'in Canyamel',
    'hero.description': 'Ihr Zuhause auf Zeit zwischen Natur, Meer und Komfort (ab 2 Monaten)',
    'hero.cta.availability': 'Mietanfrage senden',
    'hero.cta.features': 'Wohnung ansehen',

    // About Section
    'about.title': 'Über uns',
    'about.landlordName': 'Christian Jaeger',
    'about.landlordSlogan': 'Mit Freude für Sie da',
    'about.landlordRole': 'Ihr Vermieter und Ansprechpartner',
    'about.landlordSubrole': 'für Ihren befristeten Aufenthalt in Canyamel',
    'about.p1': 'Wir leben und arbeiten in Deutschland, verbringen aber jedes Jahr viel Zeit auf Mallorca. Besonders schätzen wir die Natur, die ruhigen Seiten der Insel und die gute Infrastruktur.',
    'about.p2': 'Auf der Suche nach einem Ort, der all unsere Wünsche erfüllt, haben wir uns in Canyamel verliebt – einer der schönsten Orte Mallorcas.',
    'about.p3': 'Als IT-Profis war uns eine stabile Internetverbindung und ein geeigneter Arbeitsplatz für ungestörtes Remote-Arbeiten besonders wichtig. Gleichzeitig wollten wir die Wohnung nach unseren Vorstellungen gestalten: Sie ist zum Teil modernisiert, ohne dabei ihren natürlichen Charme zu verlieren.',
    'about.p4': 'Da wir die Wohnung nicht das ganze Jahr nutzen können, möchten wir sie in den Monaten unserer Abwesenheit für längere Aufenthalte (2–6 Monate) auch anderen zur Verfügung stellen.',
    'about.ctaText': 'Möbliertes Wohnen auf Zeit in Canyamel – saisonale Vermietung ab 2 Monaten',

    // Rooms
    'rooms.viewImages': 'Bilder ansehen',
    'rooms.balcony': 'Meerblick-Balkon',
    'rooms.balconyDesc': 'Großzügiger Meerblick-Balkon mit Outdoor-Lounge-Möbeln und elektrischer Markise',
    'rooms.floorplanTitle': 'Interaktiver Grundriss',
    'rooms.floorplanInstruction': 'Klicken Sie auf einen Raum im Grundriss, um die entsprechenden Bilder zu sehen',

    // Room names and descriptions
    'rooms.livingArea': 'Wohnbereich',
    'rooms.livingAreaDesc': 'Großzügiger Wohn- und Essbereich mit direktem Zugang zum Balkon, moderne Einrichtung, großer Flachbildfernseher',
    'rooms.kitchen': 'Küche',
    'rooms.kitchenDesc': 'Vollausgestattete moderne Küche mit allen notwendigen Geräten und Utensilien für längere Aufenthalte',
    'rooms.bedroom1': 'Schlafzimmer 1',
    'rooms.bedroom1Desc': 'Hauptschlafzimmer mit Doppelbett und eigenem Bad – klimatisiert durch Deckenventilator und zentrale Klimaanlage',
    'rooms.bedroom2': 'Schlafzimmer 2',
    'rooms.bedroom2Desc': 'Zweites Schlafzimmer mit Doppelbett und identischer Ausstattung wie Schlafzimmer 1 – zweites Bad direkt gegenüber',
    'rooms.bathroom1': 'Badezimmer 1',
    'rooms.bathroom1Desc': 'Modernes Badezimmer mit Badewanne und modernen Armaturen',
    'rooms.bathroom2': 'Badezimmer 2',
    'rooms.bathroom2Desc': 'Zweites Badezimmer mit ebenerdiger Dusche und modernen Armaturen',

    // Living Area Features
    'rooms.livingArea.feature1': '75" Smart TV',
    'rooms.livingArea.feature2': 'Essplatz für 4 Personen mit Stühlen',
    'rooms.livingArea.feature3': 'Direkter Balkonzugang & Panorama-Fenster',
    'rooms.livingArea.feature4': 'Arbeitsplätze: 1x fest installiert + 1x rollbar & höhenverstellbar',

    // Kitchen Features
    'rooms.kitchen.feature1': 'Spülmaschine',
    'rooms.kitchen.feature2': 'Induktionsherd mit Dunstabzug',
    'rooms.kitchen.feature3': 'Mikrowelle',
    'rooms.kitchen.feature4': 'Kaffeemaschine mit Siebträger & elektrische Kaffeemühle',

    // Bedroom 1 Features
    'rooms.bedroom1.feature1': 'Doppelbett 160x200 mit hochwertiger Matratze',
    'rooms.bedroom1.feature2': 'Eigenes Bad en suite',
    'rooms.bedroom1.feature3': 'Kleiderschrank mit Kleiderbügeln',
    'rooms.bedroom1.feature4': 'Nachttische mit Leselampen',
    'rooms.bedroom1.feature5': 'Deckenventilator & Klimatisierung durch zentrale Klimaanlage',

    // Bedroom 2 Features
    'rooms.bedroom2.feature1': 'Doppelbett 160x200 mit hochwertiger Matratze',
    'rooms.bedroom2.feature2': 'Zweites Bad direkt gegenüberliegend',
    'rooms.bedroom2.feature3': 'Kleiderschrank mit Kleiderbügeln (identisch Schlafzimmer 1)',
    'rooms.bedroom2.feature4': 'Nachttisch mit Lampe',
    'rooms.bedroom2.feature5': 'Deckenventilator & Klimatisierung durch zentrale Klimaanlage',

    // Bathroom 1 Features
    'rooms.bathroom1.feature1': 'Haartrockner (Föhn)',
    'rooms.bathroom1.feature2': 'Badewanne',
    'rooms.bathroom1.feature3': 'Bade- und Handtuchsets',

    // Bathroom 2 Features
    'rooms.bathroom2.feature1': 'mit Regendusche',
    'rooms.bathroom2.feature2': 'Bade- und Handtuchsets',

    // Balcony Features (Räume-Karte)
    'rooms.balcony.feature1': 'Outdoor-Lounge-Möbel',
    'rooms.balcony.feature2': 'Elektrische Markise',
    'rooms.balcony.feature3': 'Panorama-Meerblick',

    // Balcony Area Features

    // Laundry Room Features

    // Pool Features (Räume-Karte)
    'rooms.pool': 'Pool & Meerbereich',
    'rooms.poolDesc': 'Gemeinschaftspool mit Kalt/Warm-Außendusche und Privatzugang zum Wanderweg und Meer',
    'rooms.pool.feature1': 'Gemeinschaftspool (gepflegt)',
    'rooms.pool.feature2': 'Kalt/Warm-Außendusche',
    'rooms.pool.feature3': 'Privatzugang zum Wanderweg & Meer',

    // Workspace Features (Räume-Karte)
    'rooms.workspace': 'Mobiler Desk höhenverstellbar',
    'rooms.workspaceDesc': 'Vollwertiger Arbeitsplatz mit höhenverstellbarem Schreibtisch, zwei externen Monitoren und 300 Mbit/s Glasfaser-WLAN',
    'rooms.workspace.feature1': 'Höhenverstellbarer Schreibtisch (rollbar)',
    'rooms.workspace.feature2': '2 externe Monitore (24″ Full HD)',
    'rooms.workspace.feature3': '300 Mbit/s Glasfaser-WLAN',

    // Pool Area Features

    // Miscellaneous Items

    // Equipment

    // Equipment categories
    'equipment.office': 'Home Office & Technik',
    'equipment.kitchen': 'Küche & Haushaltsgeräte',
    'equipment.comfort': 'Komfort & Klimatisierung',
    'equipment.outdoor': 'Außenbereich & Pool',

    // Equipment highlights

    // Equipment rules

    // Equipment services

    // Prices
    'prices.title': 'Preise & Nebenkosten',
    'prices.subtitle': 'Unsere Wohnung in Canyamel kann zu unterschiedlichen Saisonpreisen gemietet werden',
    'prices.winter': 'Wintersaison',
    'prices.winterPeriod': 'November – März',
    'prices.summer': 'Sommersaison',
    'prices.summerPeriod': 'April – Oktober',
    'prices.perMonth': 'pro Monat',
    'prices.utilitiesPauschale': 'Pauschale Nebenkosten',
    'prices.utilitiesDesc': 'Die Nebenkosten sind im Mietpreis pauschal berücksichtigt. Sollte der tatsächliche Verbrauch niedriger ausfallen, wird der Überschuss zurückerstattet. Bei Mehrverbrauch wird der Differenzbetrag nachberechnet.',

    // Canyamel Page
    'canyamel.placeToFeelGood': 'Ein Ort zum Wohlfühlen',
    'canyamel.description1': 'Canyamel ist ein charmanter Küstenort an der Ostküste Mallorcas, der sich durch seine ruhige, angenehme Atmosphäre auszeichnet. Sie finden hier eine kleine, überschaubare Ortschaft mit mediterranem Charme – ideal für Menschen, die Wert auf Ruhe, Natur und ein angenehmes Wohnumfeld legen.',
    'canyamel.description2': 'Der Ort bietet eine gute Infrastruktur für den Alltag: Supermarkt, kleine Geschäfte, Restaurants und Cafés sind fußläufig erreichbar. Außerdem gibt es eine Apotheke, eine Arztpraxis sowie eine Bank. Die größeren Orte Artà, Capdepera und Cala Ratjada sind in wenigen Minuten mit dem Auto erreichbar.',
    'canyamel.description3': 'Die Umgebung ist von Pinienwäldern geprägt und eignet sich hervorragend für Spaziergänge, Wanderungen oder Radtouren. Das milde Klima im Winter und die warmen Sommer machen Canyamel zu einem idealen Ort für längere Aufenthalte. Frische Luft, eine saubere Umgebung und die ruhige Atmosphäre schaffen beste Voraussetzungen für konzentriertes Arbeiten und einen ruhigen Alltag.',
    'canyamel.description4': 'Auch das Umfeld hat einiges zu bieten: In den Nachbarorten Artà und Capdepera finden regelmäßig Wochenmärkte sowie kulturelle Veranstaltungen statt, und der Golfplatz Canyamel liegt in unmittelbarer Nähe.',
    'canyamel.description5': 'Ein besonderes Highlight ist die direkte Nähe zum Meer: Von der Wohnanlage aus haben Sie Meerblick und privaten Zugang zur Küste. Ein schöner Küstenweg führt direkt entlang des Meeres bis ins Ortszentrum.',
    'canyamel.description6': 'Die Nachbarschaft ist ruhig und angenehm – ein perfektes Umfeld für längere Aufenthalte auf der Insel.',
    'canyamel.featuresTitle': 'Das Wohnumfeld auf einen Blick',
    'canyamel.feature1Title': 'Ruhige Wohnlage',
    'canyamel.feature1Desc': 'Kleiner, ruhiger Küstenort mit überschaubarer Nachbarschaft',
    'canyamel.feature2Title': 'Alltag zu Fuß',
    'canyamel.feature2Desc': 'Supermarkt, Apotheke, Arztpraxis, Bank und kleine Geschäfte sind fußläufig erreichbar',
    'canyamel.feature3Title': 'Gute Anbindung',
    'canyamel.feature3Desc': 'Artà, Capdepera und Cala Ratjada sind in wenigen Minuten mit dem Auto erreichbar',
    'canyamel.feature4Title': 'Ruhig arbeiten',
    'canyamel.feature4Desc': 'Ruhige Umgebung für Home-Office und konzentriertes Arbeiten',
    'canyamel.feature5Title': 'Ganzjährig belebt',
    'canyamel.feature5Desc': 'Restaurants und Cafés haben das ganze Jahr über geöffnet, auch im Winter',
    'canyamel.feature6Title': 'Natur vor der Tür',
    'canyamel.feature6Desc': 'Pinienwälder und ein Küstenweg bis ins Ortszentrum',
    'canyamel.mobilityTitle': 'Mobilität im Alltag',
    'canyamel.mobilityRecommendation': 'Für Einkäufe, Arztbesuche und Behördengänge empfehlen wir aus Erfahrung ein Auto.',
    'canyamel.mobilityPublicTransport': 'In den Sommermonaten fahren die Busse häufiger; dann kommen Sie auch gut mit öffentlichen Verkehrsmitteln zurecht.',

    // Property Overview

    // Image Gallery
    'gallery.title': 'Bildgalerie',
    'gallery.description': 'Weitere Details finden Sie unter Raumaufteilung und Ausstattung',

    // CTA
    'cta.title': 'Interesse geweckt?',
    'cta.description': 'Senden Sie uns eine Mietanfrage mit Ihrem gewünschten Zeitraum – wir melden uns zeitnah.',
    'cta.inquiry': 'Mietanfrage senden',
    'cta.prices': 'Preise ansehen',

    // Footer
    'footer.description': 'Möbliertes Wohnen auf Zeit in Canyamel – mit Meerblick und allem Komfort. Saisonale Vermietung ab 2 Monaten, ideal für digitale Nomaden und Personen mit beruflichem oder privatem Anlass.',
    'footer.quickLinks': 'Schnellzugriff',
    'footer.aboutCanyamel': 'Über Canyamel',
    'footer.prices': 'Preise & Konditionen',
    'footer.contact': 'Kontakt & Anfrage',
    'footer.legal': 'Rechtliches & Kontakt',
    'footer.legalBasis': 'Rechtliche Grundlage der Vermietung',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.copyright': '© 2026 Wohnen auf Zeit mit Meerblick · ab 2 Monaten',

    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.description': 'Hier finden Sie Antworten auf alle wichtigen Fragen zur saisonalen Anmietung',
    'faq.viewing.question': 'Ist eine Besichtigung vor Ort möglich?',
    'faq.viewing.answer': 'Eine Besichtigung vor Ort ist grundsätzlich nach Absprache möglich. Ob und wann dies stattfinden kann, hängt davon ab, ob die Wohnung aktuell vermietet ist oder ob wir selbst gerade vor Ort sind. Falls eine persönliche Besichtigung nicht möglich ist, können wir gerne weitere Details per Video, Telefon oder Nachricht besprechen.',
    'faq.reason.question': 'Was kann ein berechtigter Grund für eine nicht-touristische saisonale Anmietung sein?',
    'faq.reason.answer': 'Ein berechtigter Grund liegt vor, wenn der Aufenthalt zeitlich begrenzt ist und einem konkreten temporären Zweck dient. Die Wohnung wird nicht touristisch vermietet, sondern ausschließlich befristet und zweckgebunden überlassen.\n\nMögliche Beispiele für einen solchen temporären Zweck können sein:\n• ein befristetes Remote-Work-Projekt\n• ein beruflicher Aufenthalt auf Mallorca\n• ein Online-Studium oder eine Weiterbildung mit ruhiger Arbeitsumgebung\n• Übergangswohnen während einer Wohnungssuche auf Mallorca\n• eine temporäre Wohnlösung während eines Umzugs\n• eine Renovierung der eigenen Wohnung\n• ein befristeter Orientierungsaufenthalt, um das Wohnen auf Mallorca im Alltag zu testen\n• ein Aufenthalt während einer ambulanten Behandlung\n• ein anderer nachvollziehbarer privater oder beruflicher Grund mit klar begrenztem Zeitraum\n\nWichtig: Der konkrete Aufenthaltsgrund wird vor Vertragsschluss abgefragt und im Mietvertrag dokumentiert. Reine Urlaubsaufenthalte, touristische Kurzbuchungen oder hotelähnliche Nutzungen sind ausgeschlossen.',
    'faq.minRental.question': 'Wie lang ist die Mindestmietdauer?',
    'faq.minRental.answer': 'Die Mindestmietdauer beträgt 2 Monate. Wir vermieten ausschließlich für längere Aufenthalte, nicht für kurze Ferienaufenthalte.',
    'faq.utilities.question': 'Wie werden Strom, Wasser und Internet abgerechnet?',
    'faq.utilities.answer': 'Strom, Wasser und Internet werden separat abgerechnet. Während der Mietdauer wird hierfür ein monatlicher Nebenkostenbetrag als Vorauszahlung bzw. Sicherheit berücksichtigt.\n\nDie tatsächliche Abrechnung erfolgt zum Mietende auf Basis der angefallenen Kosten. Internet wird mit 32 € pro Monat berechnet. Strom- und Wasserkosten werden entsprechend der tatsächlichen Rechnungen bzw. des Verbrauchs abgerechnet.\n\nBei regulärem Verbrauchsverhalten reicht der berücksichtigte Nebenkostenbetrag erfahrungsgemäß in der Regel aus. Die Abrechnung kann transparent nachvollzogen werden.',
    'faq.internet.question': 'Gibt es schnelles Internet fürs Home-Office?',
    'faq.internet.answer': 'Ja, wir haben eine private Glasfaser Leitung mit 300 Mbits, die perfekt für Home-Office und Video-Calls geeignet ist. Zusätzlich stehen 2 Arbeitsplätze zur Verfügung.',
    'faq.accessibility.question': 'Ist die Wohnung barrierefrei?',
    'faq.accessibility.answer': 'Die Wohnung befindet sich im 1. OG und ist über einen Treppenaufgang erreichbar. Sie ist daher nicht barrierefrei zugänglich.',
    'faq.smoking.question': 'Ist Rauchen erlaubt? Sind Haustiere erlaubt?',
    'faq.smoking.answer': 'Rauchen ist in der Wohnung nicht gestattet. Haustiere auf Anfrage.',
    'faq.heating.question': 'Gibt es eine Heizung für den Winter?',
    'faq.heating.answer': 'Neben der Klimaanlage (warm / kalt) stellen wir auch eine elektrische Ölheizung zur Verfügung. Diese reicht zum aufheizen z.B. des Schlafzimmers völlig aus.',
    'faq.deposit.question': 'Wie hoch ist die Kaution?',
    'faq.deposit.answer': 'Die Kaution beträgt insgesamt zwei Monatsmieten. Höhe, Zahlung und Rückzahlung werden im Mietvertrag geregelt.',
    'faq.parking.question': 'Gibt es Parkmöglichkeiten?',
    'faq.parking.answer': 'Es gibt einen privaten Parkplatz der genutzt werden kann. Zudem gibt es nur wenige Meter von der Anlage einen öffentlichen Parkplatz welcher in der Regel nur geringfügig belegt ist.',

    // Contact Page
    'contact.title': 'Kontakt & Anfrage',
    'contact.subtitle': 'Senden Sie uns Ihre Mietanfrage für einen saisonalen Aufenthalt in Canyamel – wir freuen uns auf Ihre Nachricht.',
    'contact.formTitle': 'Mietanfrage senden',
    'contact.faqTitle': 'Häufige Fragen bereits beantwortet?',
    'contact.faqText': 'Schauen Sie sich unsere FAQ an – vielleicht finden Sie dort bereits die Antwort auf Ihre Frage.',
    'contact.faqLink': 'Zu den FAQ',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.checkIn': 'Gewünschter Einzug',
    'contact.checkOut': 'Geplanter Auszug',
    'contact.guests': 'Anzahl Personen',
    'contact.message': 'Ihre Nachricht',
    'contact.purpose': 'Zweck des Aufenthalts',
    'contact.purposePlaceholder': 'z. B. Remote-Work-Projekt, Umzug, Renovierung',
    'contact.send': 'Mietanfrage senden',

    // Privacy Policy
    'privacy.heroTitle': 'Datenschutzerklärung',
    'contact.namePlaceholder': 'Ihr vollständiger Name',
    'contact.emailPlaceholder': 'ihre@email.com',
    'contact.phonePlaceholder': '+49 xxx xxx xxxx',
    'contact.messagePlaceholder': 'Erzählen Sie uns mehr über Ihren geplanten Mietzeitraum, Ihren Mietzweck oder besondere Wünsche...',
    'contact.guestOptions.1': '1 Person',
    'contact.guestOptions.2': '2 Personen',
    'contact.guestOptions.3': '3 Personen',
    'contact.guestOptions.4': '4 Personen',
    'contact.successTitle': 'Vielen Dank für Ihre Anfrage!',
    'contact.successText': 'Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24-48 Stunden bei Ihnen melden.',
    'contact.newInquiry': 'Neue Mietanfrage senden',
    'contact.required': ' *',

    // Legal
    'legal.title': 'Rechtliche Grundlage',
    'legal.section1Title': 'Befristete Vermietung nach spanischem Mietrecht',
    'legal.section1Text': 'Die Wohnung wird ausschließlich befristet und für mindestens 2 Monate vermietet. Grundlage ist die spanische Ley de Arrendamientos Urbanos (LAU) in der jeweils geltenden Fassung. Entscheidend ist, dass der Aufenthalt von Anfang an zeitlich begrenzt ist und einem konkreten, nachweisbaren Zweck dient – zum Beispiel Arbeiten auf Zeit, ein Projektaufenthalt, ein Studium oder eine Übergangsphase während eines Umzugs oder einer Wohnungssuche. Der Zweck wird vor Vertragsschluss abgefragt und im Mietvertrag festgehalten.',
    'legal.section2Title': 'Keine touristische Ferienvermietung',
    'legal.section2Text': 'Die Wohnung wird nicht als touristische Unterkunft und nicht mit hotelähnlichen Leistungen angeboten. Es gibt keine Rezeption, keine tägliche Reinigung, keine Verpflegung und keine touristischen Zusatzservices. Die Vermietung erfolgt nicht als kurzfristige Ferien- oder Hotelalternative, sondern ausschließlich auf Basis einer individuellen Mietanfrage und eines schriftlichen saisonalen Mietvertrags. Damit soll klar zwischen saisonaler Wohnnutzung und touristischer Vermietung nach den jeweils geltenden Vorgaben auf Mallorca/Balearen unterschieden werden.',
    'legal.section3Title': 'Schriftlicher Vertrag, Zeitraum und Transparenz',
    'legal.section3Text': 'Jede Vermietung erfolgt mit einem schriftlichen Mietvertrag, in dem Mietdauer, Mietzweck, Mietpreis, Nebenkosten, Kaution, Übergabe, Rückgabe und Inventar klar geregelt werden. Der Zeitraum wird vorab konkret vereinbart; eine automatische Umwandlung in eine unbefristete Wohnraummiete ist nicht beabsichtigt. Die Kaution und mögliche Nebenkosten werden transparent ausgewiesen. Registrierungs- oder Plattformpflichten werden vor Veröffentlichung bzw. Vertragsschluss nach der jeweils aktuellen Rechtslage geprüft.',

    // Imprint
    'imprint.title': 'Impressum',

    // 404
    'notFound.title': 'Seite nicht gefunden',
    'notFound.description': 'Die Seite, die Sie suchen, existiert leider nicht. Vielleicht haben Sie einen veralteten Link verwendet oder sich vertippt?',
    'notFound.home': 'Zur Startseite',
    'notFound.back': 'Zurück',

    // Story / AboutSection

    // Gallery
    'gallery.eyebrow': 'Einblicke',
    'gallery.viewAll': 'Raumaufteilung & Ausstattung',
    'gallery.close': 'Schließen',
    'gallery.prev': 'Vorheriges Bild',
    'gallery.next': 'Nächstes Bild',
    'gallery.img.balcony': 'Balkon & Meerblick',
    'gallery.img.living': 'Wohnbereich',
    'gallery.img.kitchen': 'Küche',
    'gallery.img.bedroom': 'Schlafzimmer',
    'gallery.img.pool': 'Pool & Meerblick',
    'gallery.img.bathroom': 'Badezimmer',

    // Owner section
    'owner.eyebrow': 'Ihr Vermieter',
    'owner.link': 'Mehr über uns →',
    'owner.ctaBtn': 'Kontakt aufnehmen',
    'owner.mapLink': 'Lage auf der Karte ansehen',

    // Hero
    'hero.scrollText': 'Entdecken',

    // CTA
    'cta.eyebrow': 'Verfügbarkeit',
    'cta.priceFrom': 'Ab',
    'cta.priceSuffix': '/ Monat Kaltmiete · Mindestmietdauer 2 Monate',

    // Contact page
    'contact.eyebrow': 'Saisonale Anmietung',
    'contact.sending': 'Wird gesendet…',
    'contact.errorAlert': 'Bitte wählen Sie ein Einzugsdatum.',
    'contact.sendError': 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
    'contact.privacyPrefix': 'Ich habe die',
    'contact.privacyLink': 'Datenschutzerklärung',
    'contact.privacySuffix': 'gelesen und nehme zur Kenntnis, dass meine Angaben zur Bearbeitung meiner Mietanfrage verarbeitet werden.',
    'contact.idealista.title': 'Auch auf Idealista',
    'contact.idealista.desc': 'Die Wohnung ist auch auf Idealista inseriert — dort finden Sie weitere Fotos und können direkt über die Plattform Kontakt aufnehmen.',
    'contact.idealista.link': 'Anzeige auf Idealista ansehen',

    // Prices page
    'prices.eyebrow': 'Transparente Konditionen',
    'prices.coldRent': 'Kaltmiete',
    'prices.utilities': '+ 100 € Nebenkosten · + 32 € Internet',
    'prices.ctaWinter': 'Mietanfrage Winter senden',
    'prices.ctaSummer': 'Mietanfrage Sommer senden',
    'prices.paymentHeading': 'Zahlungsablauf',
    'prices.paymentDesc': 'Transparent und sicher — nach spanischem Mietrecht (LAU).',
    'prices.paymentLink': 'Zahlungsablauf ansehen',

    // Zahlungsabwicklung page
    'payment.page.eyebrow': 'Ablauf & Konditionen',
    'payment.page.title': 'Zahlungsabwicklung',
    'payment.page.desc': 'Transparenter Ablauf von der Anfrage bis zum Einzug — alle Konditionen werden vor Vertragsschluss klar abgestimmt.',
    'payment.trust.eyebrow': 'Transparenz & Sicherheit',
    'payment.trust.heading': 'Sichere und transparente Zahlungsabwicklung',
    'payment.trust.sub': 'Alle Konditionen werden vor Vertragsschluss klar abgestimmt. Zahlungen erfolgen erst auf Grundlage eines vereinbarten Mietvertrags.',
    'payment.card1.title': 'Anfrage & Klärung',
    'payment.card1.text': 'Interessenten senden zunächst eine Mietanfrage mit gewünschtem Zeitraum, Personenzahl und Aufenthaltsgrund. Offene Fragen zu Ausstattung, Nebenkosten, Mietdauer und Ablauf werden vorab schriftlich oder per Telefonat geklärt.',
    'payment.card2.title': 'Digitale Vorstellung der Wohnung',
    'payment.card2.text': 'Da persönliche Besichtigungen vor Ort nicht immer möglich sind, bieten wir nach Absprache ein Telefonat, einen Videocall sowie zusätzliche Fotos oder Videos der Wohnung an. Eine Vor-Ort-Besichtigung ist nur abhängig von Verfügbarkeit und Anwesenheit möglich.',
    'payment.card3.title': 'Vertrag & Zahlung',
    'payment.card3.text': 'Die Zahlung erfolgt erst nach Abstimmung aller Details und auf Grundlage eines befristeten Mietvertrags. Miete, Kaution, Nebenkosten und Zahlungsfristen werden transparent im Vertrag geregelt. Keine ungeklärten Vorabzahlungen.',
    'payment.viewing.title': 'Hinweis zur Besichtigung',
    'payment.viewing.text': 'Die Wohnung kann zum gewünschten Zeitpunkt vermietet sein oder der Vermieter ist nicht dauerhaft vor Ort auf Mallorca. Persönliche Besichtigungen sind daher nicht immer möglich. Wir stellen die Wohnung transparent digital vor und beantworten alle Fragen vor Vertragsabschluss.',
    'payment.modal.eyebrow': 'Modalitäten',
    'payment.modal.heading': 'Zahlungsmodalitäten',
    'payment.modal.sub': 'Übersichtlich, planbar und schriftlich dokumentiert.',
    'payment.modal.bank.title': 'Banküberweisung',
    'payment.modal.bank.text': 'Zahlung per Überweisung auf deutsches Konto des Vermieters.',
    'payment.modal.monthly.title': 'Monatlich im Voraus',
    'payment.modal.monthly.text': 'Die Miete wird monatlich zu Beginn des jeweiligen Abrechnungszeitraums fällig.',
    'payment.modal.docs.title': 'Schriftliche Dokumentation',
    'payment.modal.docs.text': 'Alle Zahlungsdetails, Fristen und Beträge sind im Mietvertrag geregelt und nachvollziehbar dokumentiert.',
    'payment.cta.heading': 'Haben Sie Fragen?',
    'payment.cta.text': 'Wir beantworten gerne alle Fragen zur Zahlungsabwicklung, zum Mietvertrag und zum Ablauf — vor Vertragsabschluss.',

    // PaymentProcessSection steps
    'payment.steps.eyebrow': 'Ablauf',
    'payment.steps.heading': 'So läuft die Zahlungsabwicklung ab',
    'payment.steps.sub1': 'Transparent, nachvollziehbar und erst nach klarer Vertragsgrundlage.',
    'payment.steps.sub2': 'Damit beide Seiten Planungssicherheit haben, erfolgt die Abwicklung Schritt für Schritt – von der Anfrage bis zum Einzug.',
    'payment.step1.title': 'Anfrage prüfen',
    'payment.step1.text': 'Sie senden uns Ihre gewünschten Mietdaten. Wir prüfen die Verfügbarkeit und melden uns mit allen relevanten Details zurück.',
    'payment.step2.title': 'Mietvertrag erhalten',
    'payment.step2.text': 'Nach Bestätigung erhalten Sie den Mietvertrag mit Laufzeit, Mietpreis, Kaution und allen Konditionen zur Durchsicht.',
    'payment.step3.title': 'Kaution hinterlegen',
    'payment.step3.text': 'Die Kaution wird gemäß Mietvertrag vor Mietbeginn gezahlt. Die Zahlungsdetails erhalten Sie vorab schriftlich.',
    'payment.step4.title': 'Monatliche Zahlung',
    'payment.step4.text': 'Die Miete wird monatlich im Voraus gezahlt. So bleibt die Abwicklung für beide Seiten klar und planbar.',
    'payment.step5.title': 'Einzug nach Abschluss',
    'payment.step5.text': 'Der Einzug erfolgt nach vollständiger Vertragsabwicklung und Zahlung der vereinbarten Beträge.',
    'payment.trust1': 'Schriftliche Zahlungsdetails',
    'payment.trust2': 'Klare Mietkonditionen',
    'payment.trust3': 'Einzug erst nach Vertragsabschluss',

    // Apartment page
    'apartment.tabs.rooms': 'Räume',
    'apartment.tabs.equipment': 'Ausstattung',
    'apartment.tabs.floorplan': 'Grundriss und Fotos',
    'apartment.header.title': 'Das Apartment',
    'apartment.header.sub': '2 Schlafzimmer · 2 Bäder · Meerblick-Balkon · Pool',
    'apartment.equip.cat1.item1': 'WLAN 300 Mbit/s — perfekt für Video-Calls',
    'apartment.equip.cat1.item2': '2 vollwertige Arbeitsplätze',
    'apartment.equip.cat1.item3': '1× höhenverstellbarer Schreibtisch',
    'apartment.equip.cat1.item4': '2× externe Monitore (24″ Full HD)',
    'apartment.equip.cat1.item5': '75″ Smart TV mit Streaming-Apps',
    'apartment.equip.cat2.item1': 'Induktionsherd 4 Felder',
    'apartment.equip.cat2.item2': 'Backofen & Mikrowelle',
    'apartment.equip.cat2.item3': 'Geschirrspüler (Vollgröße)',
    'apartment.equip.cat2.item4': 'Kühl-Gefrierkombination',
    'apartment.equip.cat2.item5': 'Kaffeemaschine & Wasserkocher',
    'apartment.equip.cat2.item6': 'Vollständiges Kochgeschirr & Besteck',
    'apartment.equip.cat3.item1': 'Zentrale Klimaanlage für alle Räume',
    'apartment.equip.cat3.item2': 'Deckenventilatoren',
    'apartment.equip.cat3.item3': 'Elektrische Markise am Balkon',
    'apartment.equip.cat3.item4': 'Verdunklungs Persiana',
    'apartment.equip.cat3.item5': 'Hochwertige Matratzen & Bettwäsche',
    'apartment.equip.cat3.item6': 'Handtücher & Badausstattung komplett',
    'apartment.equip.cat3.item7': 'Heizen im Winter durch mobile Elektro-Ölheizung + Klima (Kalt/Warm)',
    'apartment.equip.cat4.item1': 'Meerblick-Balkon',
    'apartment.equip.cat4.item2': 'Outdoor-Lounge-Möbel',
    'apartment.equip.cat4.item3': 'Gemeinschaftspool',
    'apartment.equip.cat4.item4': 'Privater Meerzugang',
    'apartment.equip.cat4.item6': 'Sonnenschirm & Liegestühle',
    'apartment.rules.title': 'Hausregeln',
    'apartment.rules.1.title': 'Keine Partys',
    'apartment.rules.1.desc': 'Die Wohnung ist für ruhige Aufenthalte gedacht. Partys, Veranstaltungen und laute Zusammenkünfte sind nicht erlaubt.',
    'apartment.rules.2.title': 'Rücksicht auf Nachbarn',
    'apartment.rules.2.desc': 'Bitte vermeiden Sie laute Musik und respektieren Sie die Ruhezeiten sowie das Wohnumfeld der Anlage.',
    'apartment.rules.3.title': 'Hausordnung beachten',
    'apartment.rules.3.desc': 'Die geltende Hausordnung der Wohnanlage ist während des gesamten Aufenthalts einzuhalten.',
    'apartment.rules.4.title': 'Haustiere nach Absprache',
    'apartment.rules.4.desc': 'Haustiere sind grundsätzlich nur nach vorheriger Absprache und Genehmigung erlaubt. Bitte sprechen Sie dies im Vorfeld an.',
    'apartment.floorplan.hint': 'Klicken Sie auf einen Raum im Grundriss, um Fotos zu sehen.',
    'apartment.cta.title': 'Interesse?',
    'apartment.cta.sub': 'Schreiben Sie uns — wir antworten zeitnah.',
    'apartment.cta.btn': 'Mietanfrage senden',

    // Canyamel page
    'canyamel.map.eyebrow': 'Lage',
    'canyamel.map.heading': 'Canyamel auf Mallorca',
    'canyamel.features.eyebrow': 'Wohnumfeld',

    // FAQ nudge
    'faq.nudge.text': 'Sie haben weitere Fragen?',
    'faq.nudge.link': 'Schreiben Sie uns über das Kontaktformular.',

    // Footer
    'footer.apartment': 'Das Apartment',
    'footer.location': 'Canyamel, Mallorca · Spanien',

    // Feature72 (Homepage)
    'feature.eyebrow': 'Das Apartment',
    'feature.heading': 'Features auf einen Blick',
    'feature.sub': 'Alles, was den Aufenthalt komfortabel macht: schnelles Internet, Meerblick, durchdachte Raumaufteilung und angenehmes Raumklima.',
    'feature.wifi.title': '300 Mbit/s Glasfaser',
    'feature.wifi.desc': 'Schnelles, unbegrenztes Glasfaser-Internet – ideal für Remote Work, Video Calls und Streaming.',
    'feature.seaview.title': 'Meerblick aus jedem Zimmer',
    'feature.seaview.desc': 'Atemberaubender Ausblick auf das Meer – aus Wohnzimmer, Schlafzimmern und weiteren Wohnbereichen.',
    'feature.bedrooms.title': '2 Schlafzimmer & 2 Bäder',
    'feature.bedrooms.desc': 'Komfortable Raumaufteilung mit zwei separaten Schlafzimmern und zwei vollwertigen Badezimmern.',
    'feature.ac.title': 'Hochwertige Klimaanlage',
    'feature.ac.desc': 'Moderne Klimaanlage für angenehme Temperaturen – zuverlässig auch an warmen Sommertagen.',

    // MallorcaLocationMap
    'canyamel.map.desc': 'Canyamel liegt im ruhigen Nordosten Mallorcas – nah am Meer, umgeben von Natur und mit guter Erreichbarkeit der umliegenden Orte.',
    'canyamel.map.popup': 'Canyamel – Nordosten Mallorcas',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.layout': 'Layout & Amenities',
    'nav.prices': 'Prices & Conditions',
    'nav.canyamel': 'Canyamel & Surroundings',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Living with Sea View',
    'hero.subtitle': 'in Canyamel',
    'hero.description': 'Your temporary home between nature, sea and comfort (from 2 months)',
    'hero.cta.availability': 'Send Rental Inquiry',
    'hero.cta.features': 'View Apartment',

    // About Section
    'about.title': 'About Us',
    'about.landlordName': 'Christian Jaeger',
    'about.landlordSlogan': 'Happy to be there for you',
    'about.landlordRole': 'Your landlord and contact person',
    'about.landlordSubrole': 'for your temporary stay in Canyamel',
    'about.p1': 'We live and work in Germany, but spend a lot of time in Mallorca every year. We particularly appreciate the nature, the quiet sides of the island and the good infrastructure.',
    'about.p2': 'Looking for a place that fulfills all our wishes, we fell in love with Canyamel – one of the most beautiful places in Mallorca.',
    'about.p3': 'As IT professionals, a stable internet connection and a suitable workplace for undisturbed remote work were particularly important to us. At the same time, we wanted to design the apartment according to our ideas: it is partially modernized without losing its natural charm.',
    'about.p4': 'Since we cannot use the apartment all year round, we would like to make it available to others for longer stays (2-6 months) during the months of our absence.',
    'about.ctaText': 'Furnished temporary living in Canyamel – seasonal rental from 2 months',

    // Rooms
    'rooms.viewImages': 'View images',
    'rooms.balcony': 'Sea view balcony',
    'rooms.balconyDesc': 'Spacious sea-view balcony with outdoor lounge furniture and electric awning',
    'rooms.floorplanTitle': 'Interactive Floor Plan',
    'rooms.floorplanInstruction': 'Click on a room in the floor plan to see the corresponding images',

    // Room names and descriptions
    'rooms.livingArea': 'Living Area',
    'rooms.livingAreaDesc': 'Spacious living and dining area with direct access to the balcony, modern furnishing, large flat screen TV',
    'rooms.kitchen': 'Kitchen',
    'rooms.kitchenDesc': 'Fully equipped modern kitchen with all necessary appliances and utensils for longer stays',
    'rooms.bedroom1': 'Bedroom 1',
    'rooms.bedroom1Desc': 'Master bedroom with double bed and en suite bathroom – cooled and heated by ceiling fan and central air conditioning',
    'rooms.bedroom2': 'Bedroom 2',
    'rooms.bedroom2Desc': 'Second bedroom with double bed and same fittings as bedroom 1 – second bathroom directly opposite',
    'rooms.bathroom1': 'Bathroom 1',
    'rooms.bathroom1Desc': 'Modern bathroom with bathtub and modern fixtures',
    'rooms.bathroom2': 'Bathroom 2',
    'rooms.bathroom2Desc': 'Second bathroom with walk-in shower and modern fixtures',

    // Living Area Features
    'rooms.livingArea.feature1': '75" Smart TV',
    'rooms.livingArea.feature2': 'Dining area for 4 people with chairs',
    'rooms.livingArea.feature3': 'Direct balcony access & panoramic windows',
    'rooms.livingArea.feature4': 'Workstations: 1x permanently installed + 1x mobile & height-adjustable',

    // Kitchen Features
    'rooms.kitchen.feature1': 'Dishwasher',
    'rooms.kitchen.feature2': 'Induction cooktop with hood',
    'rooms.kitchen.feature3': 'Microwave',
    'rooms.kitchen.feature4': 'Espresso machine with portafilter & electric coffee grinder',

    // Bedroom 1 Features
    'rooms.bedroom1.feature1': 'Double bed 160x200 with high-quality mattress',
    'rooms.bedroom1.feature2': 'Private en suite bathroom',
    'rooms.bedroom1.feature3': 'Wardrobe with hangers',
    'rooms.bedroom1.feature4': 'Nightstands with reading lamps',
    'rooms.bedroom1.feature5': 'Ceiling fan & air conditioning via central unit',

    // Bedroom 2 Features
    'rooms.bedroom2.feature1': 'Double bed 160x200 with high-quality mattress',
    'rooms.bedroom2.feature2': 'Second bathroom directly opposite',
    'rooms.bedroom2.feature3': 'Wardrobe with hangers (same as bedroom 1)',
    'rooms.bedroom2.feature4': 'Nightstand with lamp',
    'rooms.bedroom2.feature5': 'Ceiling fan & air conditioning via central unit',

    // Bathroom 1 Features
    'rooms.bathroom1.feature1': 'Hair dryer',
    'rooms.bathroom1.feature2': 'Bathtub',
    'rooms.bathroom1.feature3': 'Bath and towel sets',

    // Bathroom 2 Features
    'rooms.bathroom2.feature1': 'with rain shower',
    'rooms.bathroom2.feature2': 'Bath and towel sets',

    // Balcony Features (Rooms card)
    'rooms.balcony.feature1': 'Outdoor lounge furniture',
    'rooms.balcony.feature2': 'Electric awning',
    'rooms.balcony.feature3': 'Panoramic sea view',

    // Balcony Area Features

    // Laundry Room Features

    // Pool Features (Rooms card)
    'rooms.pool': 'Pool & Sea Area',
    'rooms.poolDesc': 'Community pool with hot/cold outdoor shower and private access to the coastal path and sea',
    'rooms.pool.feature1': 'Community pool (well maintained)',
    'rooms.pool.feature2': 'Hot/cold outdoor shower',
    'rooms.pool.feature3': 'Private access to coastal path & sea',

    // Workspace Features (Rooms card)
    'rooms.workspace': 'Height-adjustable mobile desk',
    'rooms.workspaceDesc': 'Full workspace with height-adjustable desk, two external monitors and 300 Mbit/s fibre Wi-Fi',
    'rooms.workspace.feature1': 'Height-adjustable desk (mobile)',
    'rooms.workspace.feature2': '2 external monitors (24″ Full HD)',
    'rooms.workspace.feature3': '300 Mbit/s fibre Wi-Fi',

    // Pool Area Features

    // Miscellaneous Items

    // Equipment

    // Equipment categories
    'equipment.office': 'Home Office & Technology',
    'equipment.kitchen': 'Kitchen & Household appliances',
    'equipment.comfort': 'Comfort & Air conditioning',
    'equipment.outdoor': 'Outdoor area & Pool',

    // Equipment highlights

    // Equipment rules

    // Equipment services

    // Prices
    'prices.title': 'Prices & Additional Costs',
    'prices.subtitle': 'Our apartment in Canyamel can be rented at different seasonal prices',
    'prices.winter': 'Winter Season',
    'prices.winterPeriod': 'November – March',
    'prices.summer': 'Summer Season',
    'prices.summerPeriod': 'April – October',
    'prices.perMonth': 'per month',
    'prices.utilitiesPauschale': 'Flat rate utilities',
    'prices.utilitiesDesc': 'The utility costs are included in the rental price as a flat rate. Should the actual consumption be lower, the excess will be refunded. In case of higher consumption, the difference will be charged.',

    // Canyamel Page
    'canyamel.placeToFeelGood': 'A Place to Feel at Home',
    'canyamel.description1': 'Canyamel is a charming coastal town on the east coast of Mallorca, characterized by its peaceful, pleasant atmosphere. You will find a small, manageable town with Mediterranean charm – ideal for people who value peace, nature and a pleasant living environment.',
    'canyamel.description2': 'The town offers good infrastructure for daily life: supermarket, small shops, restaurants and cafés are within walking distance. There is also a pharmacy, a medical practice and a bank. The larger towns of Artà, Capdepera and Cala Ratjada can be reached by car in just a few minutes.',
    'canyamel.description3': 'The surroundings are characterized by pine forests and are excellent for walks, hikes or bike tours. The mild winter climate and warm summers make Canyamel an ideal place for longer stays. Fresh air, a clean environment and the peaceful atmosphere create the best conditions for focused work and a calm everyday life.',
    'canyamel.description4': 'The area has more to offer, too: weekly markets and cultural events take place regularly in the neighboring towns of Artà and Capdepera, and the Canyamel golf course is close by.',
    'canyamel.description5': 'A special highlight is the direct proximity to the sea: From the residential complex you have sea views and private access to the coast. A beautiful coastal path leads directly along the sea to the town center.',
    'canyamel.description6': 'The neighborhood is quiet and pleasant – a perfect environment for longer stays on the island.',
    'canyamel.featuresTitle': 'The Neighborhood at a Glance',
    'canyamel.feature1Title': 'Quiet Residential Area',
    'canyamel.feature1Desc': 'Small, quiet coastal town with a close-knit neighborhood',
    'canyamel.feature2Title': 'Daily Needs on Foot',
    'canyamel.feature2Desc': 'Supermarket, pharmacy, medical practice, bank and small shops within walking distance',
    'canyamel.feature3Title': 'Good Connections',
    'canyamel.feature3Desc': 'Artà, Capdepera and Cala Ratjada are a few minutes away by car',
    'canyamel.feature4Title': 'Quiet Place to Work',
    'canyamel.feature4Desc': 'Calm surroundings for remote work and focused work',
    'canyamel.feature5Title': 'Lively All Year',
    'canyamel.feature5Desc': 'Restaurants and cafés stay open all year round, including in winter',
    'canyamel.feature6Title': 'Nature on the Doorstep',
    'canyamel.feature6Desc': 'Pine forests and a coastal path to the town center',
    'canyamel.mobilityTitle': 'Getting Around',
    'canyamel.mobilityRecommendation': 'For shopping, doctor visits and errands, we recommend a car from our experience.',
    'canyamel.mobilityPublicTransport': 'Buses run more often in the summer months, so public transport works well then too.',

    // Property Overview

    // Image Gallery
    'gallery.title': 'Image Gallery',
    'gallery.description': 'Find more details under Room Layout and Equipment',

    // CTA
    'cta.title': 'Interested?',
    'cta.description': 'Send us a rental inquiry with your desired period – we will get back to you promptly.',
    'cta.inquiry': 'Send Rental Inquiry',
    'cta.prices': 'View Prices',

    // Footer
    'footer.description': 'Furnished temporary living in Canyamel – with sea view and full amenities. Seasonal rental from 2 months, ideal for digital nomads and professionals on an extended stay.',
    'footer.quickLinks': 'Quick Links',
    'footer.aboutCanyamel': 'About Canyamel',
    'footer.prices': 'Prices & Conditions',
    'footer.contact': 'Contact & Inquiry',
    'footer.legal': 'Legal & Contact',
    'footer.legalBasis': 'Legal basis of the rental',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.copyright': '© 2026 Temporary living with sea view · from 2 months',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Find answers to all important questions about seasonal rental',
    'faq.viewing.question': 'Is an on-site viewing possible?',
    'faq.viewing.answer': 'An on-site viewing is generally possible by arrangement. Whether and when this can take place depends on whether the apartment is currently rented or whether we are on-site ourselves. If a personal viewing is not possible, we are happy to discuss further details by video, phone, or message.',
    'faq.reason.question': 'What can be a valid reason for a non-tourist seasonal rental?',
    'faq.reason.answer': 'A valid reason exists when the stay is time-limited and serves a specific temporary purpose. The apartment is not rented out as tourist accommodation, but exclusively on a fixed-term and purpose-bound basis.\n\nPossible examples of such a temporary purpose include:\n• a fixed-term remote-work project\n• a professional stay on Mallorca\n• online studies or further training in a quiet working environment\n• transitional housing while searching for permanent accommodation on Mallorca\n• a temporary living solution during a move\n• renovation of one\'s own apartment\n• a fixed-term exploratory stay to experience daily life on Mallorca and assess whether a permanent move is an option\n• a stay during outpatient medical treatment\n• another plausible private or professional reason with a clearly defined time frame\n\nImportant: The specific reason for the stay is requested before the contract is signed and documented in the tenancy agreement. Pure holiday stays, short-term tourist bookings, or hotel-style use are excluded.',
    'faq.minRental.question': 'What is the minimum rental period?',
    'faq.minRental.answer': 'The minimum rental period is 2 months. We exclusively rent for longer stays, not for short vacation rentals.',
    'faq.utilities.question': 'How are electricity, water, and internet billed?',
    'faq.utilities.answer': 'Electricity, water, and internet are billed separately. During the rental period, a monthly utility advance payment is included as a deposit toward these costs.\n\nThe final settlement takes place at the end of the rental period based on actual costs incurred. Internet is charged at €32 per month. Electricity and water are billed according to actual invoices and consumption.\n\nWith regular usage, the included utility advance is generally sufficient in practice. The settlement can be traced transparently.',
    'faq.internet.question': 'Is there fast internet for home office?',
    'faq.internet.answer': 'Yes, we have a stable internet connection that is perfect for home office and video calls. Additionally, 2 workstations are available.',
    'faq.accessibility.question': 'Is the apartment barrier-free?',
    'faq.accessibility.answer': 'The apartment is located on the 1st floor and is accessible via a staircase. It is therefore not barrier-free accessible.',
    'faq.smoking.question': 'Is smoking allowed? Are pets allowed?',
    'faq.smoking.answer': 'Smoking is not permitted in the apartment. Pets are not allowed to protect the furnishings and other occupants.',
    'faq.heating.question': 'Is there heating for the winter?',
    'faq.heating.answer': 'In addition to the air conditioning (hot/cold), we also provide an electric oil heater. This is perfectly adequate for heating e.g. the bedroom.',
    'faq.deposit.question': 'How much is the deposit?',
    'faq.deposit.answer': 'The deposit amounts to two months\' rent in total. Amount, payment and refund are set out in the tenancy agreement.',
    'faq.parking.question': 'Are there parking options?',
    'faq.parking.answer': 'There is a private parking space that can be used. Additionally, there is a public parking lot just a few meters from the complex which is usually only lightly occupied.',

    // Contact Page
    'contact.title': 'Contact & Inquiry',
    'contact.subtitle': 'Send us your rental inquiry for a seasonal stay in Canyamel – we look forward to your message.',
    'contact.formTitle': 'Send Rental Inquiry',
    'contact.faqTitle': 'Frequently Asked Questions Already Answered?',
    'contact.faqText': 'Check out our FAQ – you might already find the answer to your question there.',
    'contact.faqLink': 'Go to FAQ',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.checkIn': 'Desired Move-in Date',
    'contact.checkOut': 'Planned Move-out Date',
    'contact.guests': 'Number of Persons',
    'contact.message': 'Your Message',
    'contact.purpose': 'Purpose of the stay',
    'contact.purposePlaceholder': 'e.g. remote-work project, relocation, renovation',
    'contact.send': 'Send Rental Inquiry',

    // Privacy Policy
    'privacy.heroTitle': 'Privacy Policy',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.phonePlaceholder': '+49 xxx xxx xxxx',
    'contact.messagePlaceholder': 'Tell us about your planned rental period, purpose of stay, or any special requests...',
    'contact.guestOptions.1': '1 Person',
    'contact.guestOptions.2': '2 Persons',
    'contact.guestOptions.3': '3 Persons',
    'contact.guestOptions.4': '4 Persons',
    'contact.successTitle': 'Thank You for Your Inquiry!',
    'contact.successText': 'We have received your message and will contact you within 24-48 hours.',
    'contact.newInquiry': 'Send New Rental Inquiry',
    'contact.required': ' *',

    // Legal
    'legal.title': 'Legal Basis',
    'legal.section1Title': 'Fixed-Term Rental under Spanish Tenancy Law',
    'legal.section1Text': 'The apartment is rented exclusively on a fixed-term basis and for a minimum of 2 months. The legal basis is the Spanish Ley de Arrendamientos Urbanos (LAU) in its current version. What is decisive is that the stay is limited in time from the outset and serves a specific, verifiable purpose — such as temporary work, a project assignment, studies, or a transitional phase during a move or a search for housing. The purpose is asked for before the contract is signed and recorded in the tenancy agreement.',
    'legal.section2Title': 'No Tourist Holiday Rental',
    'legal.section2Text': 'The apartment is not offered as tourist accommodation and does not include hotel-style services. There is no reception, no daily cleaning, no catering, and no tourist add-on services. The rental is not a short-term holiday or hotel alternative, but exclusively based on an individual rental enquiry and a written seasonal tenancy agreement. This is intended to clearly distinguish between seasonal residential use and tourist rental under the applicable regulations in Mallorca/Balearic Islands.',
    'legal.section3Title': 'Written Agreement, Fixed Term and Transparency',
    'legal.section3Text': 'Every rental is accompanied by a written tenancy agreement clearly setting out the rental period, purpose, rent, ancillary costs, deposit, handover, return, and inventory. The period is agreed in advance; an automatic conversion into an open-ended residential tenancy is not intended. The deposit and any ancillary costs are stated transparently. Any registration or platform obligations are reviewed before publication or contract conclusion in accordance with the applicable law at the time.',

    // Imprint
    'imprint.title': 'Imprint',

    // 404
    'notFound.title': 'Page Not Found',
    'notFound.description': 'The page you are looking for unfortunately does not exist. Maybe you used an outdated link or made a typo?',
    'notFound.home': 'To Homepage',
    'notFound.back': 'Back',

    // Story / AboutSection

    // Gallery
    'gallery.eyebrow': 'Impressions',
    'gallery.viewAll': 'Floor Plan & Equipment',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous image',
    'gallery.next': 'Next image',
    'gallery.img.balcony': 'Balcony & Sea View',
    'gallery.img.living': 'Living Area',
    'gallery.img.kitchen': 'Kitchen',
    'gallery.img.bedroom': 'Bedroom',
    'gallery.img.pool': 'Pool & Sea View',
    'gallery.img.bathroom': 'Bathroom',

    // Owner section
    'owner.eyebrow': 'Your Host',
    'owner.link': 'More about us →',
    'owner.ctaBtn': 'Get in touch',
    'owner.mapLink': 'View location on map',

    // Hero
    'hero.scrollText': 'Discover',

    // CTA
    'cta.eyebrow': 'Availability',
    'cta.priceFrom': 'From',
    'cta.priceSuffix': '/ month (excl. utilities) · Minimum stay 2 months',

    // Contact page
    'contact.eyebrow': 'Seasonal Rental',
    'contact.sending': 'Sending…',
    'contact.errorAlert': 'Please select a move-in date.',
    'contact.sendError': 'Error sending. Please try again.',
    'contact.privacyPrefix': 'I have read the',
    'contact.privacyLink': 'Privacy Policy',
    'contact.privacySuffix': 'and acknowledge that my data will be processed to handle my rental enquiry.',
    'contact.idealista.title': 'Also on Idealista',
    'contact.idealista.desc': 'The apartment is also listed on Idealista — find more photos there and contact us directly via the platform.',
    'contact.idealista.link': 'View listing on Idealista',

    // Prices page
    'prices.eyebrow': 'Transparent Terms',
    'prices.coldRent': 'Base rent',
    'prices.utilities': '+ €100 utilities · + €32 internet',
    'prices.ctaWinter': 'Send winter enquiry',
    'prices.ctaSummer': 'Send summer enquiry',
    'prices.paymentHeading': 'Payment process',
    'prices.paymentDesc': 'Transparent and secure — under Spanish tenancy law (LAU).',
    'prices.paymentLink': 'View payment process',

    // Zahlungsabwicklung page
    'payment.page.eyebrow': 'Process & Terms',
    'payment.page.title': 'Payment Process',
    'payment.page.desc': 'A transparent process from enquiry to move-in — all terms are agreed in writing before the contract is signed.',
    'payment.trust.eyebrow': 'Transparency & Security',
    'payment.trust.heading': 'Secure and transparent payment process',
    'payment.trust.sub': 'All terms are agreed before signing. Payments are only made on the basis of a signed tenancy agreement.',
    'payment.card1.title': 'Enquiry & Clarification',
    'payment.card1.text': 'Prospective tenants first send a rental enquiry with the desired period, number of people, and reason for stay. Open questions about equipment, utilities, rental duration, and process are clarified in writing or by phone.',
    'payment.card2.title': 'Digital Property Presentation',
    'payment.card2.text': 'Since in-person viewings are not always possible, we offer a phone call, video call, and additional photos or videos by arrangement. An on-site viewing is only possible subject to availability and the landlord\'s presence.',
    'payment.card3.title': 'Contract & Payment',
    'payment.card3.text': 'Payment is only made after all details have been agreed and on the basis of a fixed-term tenancy agreement. Rent, deposit, utilities, and payment deadlines are set out transparently in the contract. No unexplained advance payments.',
    'payment.viewing.title': 'Note on viewings',
    'payment.viewing.text': 'The apartment may be occupied at the desired time or the landlord may not be permanently on Mallorca. In-person viewings are therefore not always possible. We present the apartment transparently online and answer all questions before the contract is signed.',
    'payment.modal.eyebrow': 'Terms',
    'payment.modal.heading': 'Payment terms',
    'payment.modal.sub': 'Clear, plannable and documented in writing.',
    'payment.modal.bank.title': 'Bank transfer',
    'payment.modal.bank.text': 'Payment by bank transfer to the landlord\'s German account.',
    'payment.modal.monthly.title': 'Monthly in advance',
    'payment.modal.monthly.text': 'Rent is due monthly at the start of each billing period.',
    'payment.modal.docs.title': 'Written documentation',
    'payment.modal.docs.text': 'All payment details, deadlines, and amounts are set out in the tenancy agreement and clearly documented.',
    'payment.cta.heading': 'Have questions?',
    'payment.cta.text': 'We are happy to answer all questions about the payment process, tenancy agreement, and procedure — before signing.',

    // PaymentProcessSection steps
    'payment.steps.eyebrow': 'Process',
    'payment.steps.heading': 'How the payment process works',
    'payment.steps.sub1': 'Transparent, traceable, and only after a clear contractual basis.',
    'payment.steps.sub2': 'To give both parties planning certainty, the process runs step by step — from enquiry to move-in.',
    'payment.step1.title': 'Review enquiry',
    'payment.step1.text': 'You send us your desired rental dates. We check availability and get back to you with all relevant details.',
    'payment.step2.title': 'Receive tenancy agreement',
    'payment.step2.text': 'After confirmation you receive the tenancy agreement with duration, rent, deposit, and all terms for review.',
    'payment.step3.title': 'Lodge deposit',
    'payment.step3.text': 'The deposit is paid before the start of the tenancy in accordance with the agreement. Payment details are provided in writing in advance.',
    'payment.step4.title': 'Monthly payment',
    'payment.step4.text': 'Rent is paid monthly in advance, keeping the process clear and plannable for both parties.',
    'payment.step5.title': 'Move-in after completion',
    'payment.step5.text': 'Move-in takes place after the tenancy agreement is fully executed and agreed amounts have been paid.',
    'payment.trust1': 'Written payment details',
    'payment.trust2': 'Clear rental terms',
    'payment.trust3': 'Move-in only after contract',

    // Apartment page
    'apartment.tabs.rooms': 'Rooms',
    'apartment.tabs.equipment': 'Equipment',
    'apartment.tabs.floorplan': 'Floor Plan & Photos',
    'apartment.header.title': 'The Apartment',
    'apartment.header.sub': '2 Bedrooms · 2 Bathrooms · Sea-View Balcony · Pool',
    'apartment.equip.cat1.item1': 'WiFi 300 Mbit/s — perfect for video calls',
    'apartment.equip.cat1.item2': '2 full workstations',
    'apartment.equip.cat1.item3': '1× height-adjustable desk',
    'apartment.equip.cat1.item4': '2× external monitors (24″ Full HD)',
    'apartment.equip.cat1.item5': '75″ Smart TV with streaming apps',
    'apartment.equip.cat2.item1': 'Induction hob, 4 zones',
    'apartment.equip.cat2.item2': 'Oven & microwave',
    'apartment.equip.cat2.item3': 'Full-size dishwasher',
    'apartment.equip.cat2.item4': 'Fridge-freezer',
    'apartment.equip.cat2.item5': 'Coffee machine & kettle',
    'apartment.equip.cat2.item6': 'Full set of cookware & cutlery',
    'apartment.equip.cat3.item1': 'Central air conditioning for all rooms',
    'apartment.equip.cat3.item2': 'Ceiling fans',
    'apartment.equip.cat3.item3': 'Electric awning on balcony',
    'apartment.equip.cat3.item4': 'Blackout blinds (Persiana)',
    'apartment.equip.cat3.item5': 'Premium mattresses & bed linen',
    'apartment.equip.cat3.item6': 'Towels & bathroom essentials included',
    'apartment.equip.cat3.item7': 'Winter heating via mobile oil-filled radiator + A/C (heat/cool)',
    'apartment.equip.cat4.item1': 'Sea-view balcony',
    'apartment.equip.cat4.item2': 'Outdoor lounge furniture',
    'apartment.equip.cat4.item3': 'Communal pool',
    'apartment.equip.cat4.item4': 'Private sea access',
    'apartment.equip.cat4.item6': 'Sunshade & sunloungers',
    'apartment.rules.title': 'House Rules',
    'apartment.rules.1.title': 'No parties',
    'apartment.rules.1.desc': 'The apartment is intended for quiet stays. Parties, events, and loud gatherings are not permitted.',
    'apartment.rules.2.title': 'Respect for neighbours',
    'apartment.rules.2.desc': 'Please avoid loud music and respect quiet hours and the residential environment of the complex.',
    'apartment.rules.3.title': 'Follow house regulations',
    'apartment.rules.3.desc': 'The applicable house regulations of the complex must be observed throughout the stay.',
    'apartment.rules.4.title': 'Pets by arrangement',
    'apartment.rules.4.desc': 'Pets are generally only permitted with prior arrangement and approval. Please discuss this in advance.',
    'apartment.floorplan.hint': 'Click on a room in the floor plan to see photos.',
    'apartment.cta.title': 'Interested?',
    'apartment.cta.sub': 'Write to us — we respond promptly.',
    'apartment.cta.btn': 'Send rental enquiry',

    // Canyamel page
    'canyamel.map.eyebrow': 'Location',
    'canyamel.map.heading': 'Canyamel on Mallorca',
    'canyamel.features.eyebrow': 'Living environment',

    // FAQ nudge
    'faq.nudge.text': 'Have more questions?',
    'faq.nudge.link': 'Write to us via the contact form.',

    // Footer
    'footer.apartment': 'The Apartment',
    'footer.location': 'Canyamel, Mallorca · Spain',

    // Feature72 (Homepage)
    'feature.eyebrow': 'The Apartment',
    'feature.heading': 'Features at a Glance',
    'feature.sub': 'Everything that makes your stay comfortable: fast internet, sea views, a well-designed layout and a pleasant climate.',
    'feature.wifi.title': '300 Mbit/s Fibre',
    'feature.wifi.desc': 'Fast, unlimited fibre internet – ideal for remote work, video calls and streaming.',
    'feature.seaview.title': 'Sea View from Every Room',
    'feature.seaview.desc': 'Breathtaking views of the sea – from the living room, bedrooms and other living areas.',
    'feature.bedrooms.title': '2 Bedrooms & 2 Bathrooms',
    'feature.bedrooms.desc': 'Comfortable layout with two separate bedrooms and two full bathrooms.',
    'feature.ac.title': 'Premium Air Conditioning',
    'feature.ac.desc': 'Modern air conditioning for a pleasant temperature – reliable even on warm summer days.',

    // MallorcaLocationMap
    'canyamel.map.desc': 'Canyamel is located in the quiet northeast of Mallorca – close to the sea, surrounded by nature and with easy access to nearby towns.',
    'canyamel.map.popup': 'Canyamel – Northeast Mallorca',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.layout': 'Distribución y Equipamiento',
    'nav.prices': 'Precios y Condiciones',
    'nav.canyamel': 'Canyamel y Alrededores',
    'nav.contact': 'Contacto',

    // Hero
    'hero.title': 'Vivir con Vista al Mar',
    'hero.subtitle': 'en Canyamel',
    'hero.description': 'Su hogar temporal entre naturaleza, mar y comodidad (desde 2 meses)',
    'hero.cta.availability': 'Enviar Solicitud de Alquiler',
    'hero.cta.features': 'Ver Equipamiento',

    // About Section
    'about.title': 'Sobre Nosotros',
    'about.landlordName': 'Christian Jaeger',
    'about.landlordSlogan': 'Con mucho gusto para estar ahí para usted',
    'about.landlordRole': 'Su arrendador y persona de contacto',
    'about.landlordSubrole': 'para su estancia temporal en Canyamel',
    'about.p1': 'Vivimos y trabajamos en Alemania, pero pasamos mucho tiempo en Mallorca cada año. Especialmente apreciamos la naturaleza, los lados tranquilos de la isla y la buena infraestructura.',
    'about.p2': 'Buscando un lugar que cumpliera todos nuestros deseos, nos enamoramos de Canyamel, uno de los lugares más hermosos de Mallorca.',
    'about.p3': 'Como profesionales de TI, una conexión a internet estable y un lugar de trabajo adecuado para el trabajo remoto sin interrupciones eran especialmente importantes para nosotros. Al mismo tiempo, queríamos diseñar el apartamento según nuestras ideas: está parcialmente modernizado sin perder su encanto natural.',
    'about.p4': 'Como no podemos usar el apartamento todo el año, nos gustaría ponerlo a disposición de otros para estancias más largas (2-6 meses) durante los meses de nuestra ausencia.',
    'about.ctaText': 'Vivienda amueblada temporal en Canyamel – alquiler de temporada desde 2 meses',

    // Rooms
    'rooms.viewImages': 'Ver imágenes',
    'rooms.balcony': 'Balcón con vista al mar',
    'rooms.balconyDesc': 'Amplio balcón con vista al mar, muebles de salón exterior y toldo eléctrico',
    'rooms.floorplanTitle': 'Plano Interactivo',
    'rooms.floorplanInstruction': 'Haga clic en una habitación en el plano para ver las imágenes correspondientes',

    // Room names and descriptions
    'rooms.livingArea': 'Área de Estar',
    'rooms.livingAreaDesc': 'Amplia sala de estar y comedor con acceso directo al balcón, mobiliario moderno, gran televisor de pantalla plana',
    'rooms.kitchen': 'Cocina',
    'rooms.kitchenDesc': 'Cocina moderna totalmente equipada con todos los electrodomésticos y utensilios necesarios para estancias largas',
    'rooms.bedroom1': 'Dormitorio 1',
    'rooms.bedroom1Desc': 'Dormitorio principal con cama doble y baño en suite – climatizado mediante ventilador de techo y aire acondicionado central',
    'rooms.bedroom2': 'Dormitorio 2',
    'rooms.bedroom2Desc': 'Segundo dormitorio con cama doble e idéntico equipamiento al dormitorio 1 – baño de invitados directamente enfrente',
    'rooms.bathroom1': 'Baño 1',
    'rooms.bathroom1Desc': 'Baño moderno con bañera y accesorios modernos',
    'rooms.bathroom2': 'Baño 2',
    'rooms.bathroom2Desc': 'Segundo baño con ducha a ras de suelo y accesorios modernos',

    // Living Area Features
    'rooms.livingArea.feature1': '75" Smart TV',
    'rooms.livingArea.feature2': 'Comedor para 4 personas con sillas',
    'rooms.livingArea.feature3': 'Acceso directo al balcón y ventanas panorámicas',
    'rooms.livingArea.feature4': 'Estaciones de trabajo: 1x instalación fija + 1x móvil y ajustable en altura',

    // Kitchen Features
    'rooms.kitchen.feature1': 'Lavavajillas',
    'rooms.kitchen.feature2': 'Placa de inducción con campana extractora',
    'rooms.kitchen.feature3': 'Microondas',
    'rooms.kitchen.feature4': 'Máquina de café con portafiltro y molinillo eléctrico',

    // Bedroom 1 Features
    'rooms.bedroom1.feature1': 'Cama doble 160x200 con colchón de alta calidad',
    'rooms.bedroom1.feature2': 'Baño privado en suite',
    'rooms.bedroom1.feature3': 'Armario con perchas',
    'rooms.bedroom1.feature4': 'Mesitas de noche con lámparas de lectura',
    'rooms.bedroom1.feature5': 'Ventilador de techo & climatización mediante aire acondicionado central',

    // Bedroom 2 Features
    'rooms.bedroom2.feature1': 'Cama doble 160x200 con colchón de alta calidad',
    'rooms.bedroom2.feature2': 'Baño de invitados directamente enfrente',
    'rooms.bedroom2.feature3': 'Armario con perchas (idéntico al dormitorio 1)',
    'rooms.bedroom2.feature4': 'Mesita de noche con lámpara',
    'rooms.bedroom2.feature5': 'Ventilador de techo & climatización mediante aire acondicionado central',

    // Bathroom 1 Features
    'rooms.bathroom1.feature1': 'Secador de pelo',
    'rooms.bathroom1.feature2': 'Bañera',
    'rooms.bathroom1.feature3': 'Juegos de toallas de baño y mano',

    // Bathroom 2 Features
    'rooms.bathroom2.feature1': 'con ducha de lluvia',
    'rooms.bathroom2.feature2': 'Juegos de toallas de baño y mano',

    // Balcony Features (tarjeta Räume)
    'rooms.balcony.feature1': 'Muebles de salón exterior',
    'rooms.balcony.feature2': 'Toldo eléctrico',
    'rooms.balcony.feature3': 'Vista panorámica al mar',

    // Balcony Area Features

    // Laundry Room Features

    // Pool Features (tarjeta Räume)
    'rooms.pool': 'Piscina y Zona de Mar',
    'rooms.poolDesc': 'Piscina comunitaria con ducha exterior fría/caliente y acceso privado al sendero costero y al mar',
    'rooms.pool.feature1': 'Piscina comunitaria (bien cuidada)',
    'rooms.pool.feature2': 'Ducha exterior fría/caliente',
    'rooms.pool.feature3': 'Acceso privado al sendero costero y al mar',

    // Workspace Features (tarjeta Räume)
    'rooms.workspace': 'Escritorio móvil regulable en altura',
    'rooms.workspaceDesc': 'Espacio de trabajo completo con escritorio regulable, dos monitores externos y WiFi de fibra 300 Mbit/s',
    'rooms.workspace.feature1': 'Escritorio regulable en altura (móvil)',
    'rooms.workspace.feature2': '2 monitores externos (24″ Full HD)',
    'rooms.workspace.feature3': 'WiFi de fibra 300 Mbit/s',

    // Pool Area Features

    // Miscellaneous Items

    // Equipment

    // Equipment categories
    'equipment.office': 'Oficina en Casa y Tecnología',
    'equipment.kitchen': 'Cocina y Electrodomésticos',
    'equipment.comfort': 'Comodidad y Aire Acondicionado',
    'equipment.outdoor': 'Área Exterior y Piscina',

    // Equipment highlights

    // Equipment rules

    // Equipment services

    // Prices
    'prices.title': 'Precios y Costos Adicionales',
    'prices.subtitle': 'Nuestro apartamento en Canyamel se puede alquilar a diferentes precios estacionales',
    'prices.winter': 'Temporada de Invierno',
    'prices.winterPeriod': 'Noviembre – Marzo',
    'prices.summer': 'Temporada de Verano',
    'prices.summerPeriod': 'Abril – Octubre',
    'prices.perMonth': 'por mes',
    'prices.utilitiesPauschale': 'Servicios de tarifa plana',
    'prices.utilitiesDesc': 'Los costos de servicios públicos están incluidos en el precio de alquiler como una tarifa plana. Si el consumo real es menor, se reembolsará el exceso. En caso de mayor consumo, se cobrará la diferencia.',

    // Canyamel Page
    'canyamel.placeToFeelGood': 'Un Lugar para Sentirse Bien',
    'canyamel.description1': 'Canyamel es un encantador pueblo costero en la costa este de Mallorca, caracterizado por su atmósfera tranquila y agradable. Encontrarás aquí un pueblo pequeño y manejable con encanto mediterráneo – ideal para personas que valoran la paz, la naturaleza y un ambiente de vida agradable.',
    'canyamel.description2': 'El pueblo ofrece una buena infraestructura para la vida diaria: supermercado, pequeñas tiendas, restaurantes y cafés están a poca distancia. También hay una farmacia, una consulta médica y un banco. Los pueblos más grandes de Artà, Capdepera y Cala Ratjada se pueden alcanzar en coche en pocos minutos.',
    'canyamel.description3': 'Los alrededores están caracterizados por bosques de pinos y son excelentes para paseos, caminatas o rutas en bicicleta. El clima suave del invierno y los veranos cálidos hacen de Canyamel un lugar ideal para estancias más largas. Aire fresco, un ambiente limpio y la atmósfera tranquila crean las mejores condiciones para el trabajo concentrado y una vida cotidiana tranquila.',
    'canyamel.description4': 'El entorno también tiene mucho que ofrecer: en los pueblos vecinos de Artà y Capdepera se celebran regularmente mercados semanales y eventos culturales, y el campo de golf de Canyamel está muy cerca.',
    'canyamel.description5': 'Un punto destacado especial es la proximidad directa al mar: Desde el complejo residencial tienes vistas al mar y acceso privado a la costa. Un hermoso sendero costero lleva directamente a lo largo del mar hasta el centro del pueblo.',
    'canyamel.description6': 'El vecindario es tranquilo y agradable – un ambiente perfecto para estancias más largas en la isla.',
    'canyamel.featuresTitle': 'El entorno de un vistazo',
    'canyamel.feature1Title': 'Zona residencial tranquila',
    'canyamel.feature1Desc': 'Pueblo costero pequeño y tranquilo, con un vecindario cercano',
    'canyamel.feature2Title': 'Lo cotidiano a pie',
    'canyamel.feature2Desc': 'Supermercado, farmacia, consulta médica, banco y pequeñas tiendas a poca distancia',
    'canyamel.feature3Title': 'Buenas conexiones',
    'canyamel.feature3Desc': 'Artà, Capdepera y Cala Ratjada a pocos minutos en coche',
    'canyamel.feature4Title': 'Tranquilidad para trabajar',
    'canyamel.feature4Desc': 'Un entorno tranquilo para el teletrabajo y el trabajo concentrado',
    'canyamel.feature5Title': 'Vida todo el año',
    'canyamel.feature5Desc': 'Restaurantes y cafés abiertos durante todo el año, también en invierno',
    'canyamel.feature6Title': 'Naturaleza a la puerta',
    'canyamel.feature6Desc': 'Pinares y un sendero costero hasta el centro del pueblo',
    'canyamel.mobilityTitle': 'Movilidad en el día a día',
    'canyamel.mobilityRecommendation': 'Para compras, visitas médicas y trámites, por experiencia recomendamos un coche.',
    'canyamel.mobilityPublicTransport': 'En los meses de verano los autobuses pasan con más frecuencia, así que entonces el transporte público también funciona bien.',

    // Property Overview

    // Image Gallery
    'gallery.title': 'Galería de Imágenes',
    'gallery.description': 'Encuentra más detalles en Distribución de Habitaciones y Equipamiento',

    // CTA
    'cta.title': '¿Interesado?',
    'cta.description': 'Envíenos una solicitud de alquiler con el período deseado – le responderemos a la brevedad.',
    'cta.inquiry': 'Enviar solicitud de alquiler',
    'cta.prices': 'Ver Precios',

    // Footer
    'footer.description': 'Vivienda amueblada temporal en Canyamel – con vistas al mar y todas las comodidades. Alquiler de temporada desde 2 meses, ideal para nómadas digitales y personas con motivo profesional o personal.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.aboutCanyamel': 'Sobre Canyamel',
    'footer.prices': 'Precios y Condiciones',
    'footer.contact': 'Contacto y Consulta',
    'footer.legal': 'Legal y Contacto',
    'footer.legalBasis': 'Base legal del alquiler',
    'footer.privacy': 'Política de Privacidad',
    'footer.imprint': 'Aviso Legal',
    'footer.copyright': '© 2026 Vivienda temporal con vistas al mar · desde 2 meses',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.description': 'Encuentra respuestas a todas las preguntas importantes sobre el alquiler de temporada',
    'faq.viewing.question': '¿Es posible una visita in situ?',
    'faq.viewing.answer': 'Una visita in situ es posible en principio previa cita. Si puede realizarse y cuándo depende de si el apartamento está actualmente alquilado o si nosotros mismos estamos en el lugar. Si una visita personal no es posible, podemos hablar sobre más detalles por vídeo, teléfono o mensaje.',
    'faq.reason.question': '¿Qué puede ser un motivo válido para un alquiler de temporada no turístico?',
    'faq.reason.answer': 'Existe un motivo válido cuando la estancia está limitada en el tiempo y sirve a un propósito temporal concreto. El apartamento no se alquila como alojamiento turístico, sino exclusivamente de forma temporal y vinculada a un fin determinado.\n\nEjemplos posibles de un propósito temporal de este tipo:\n• un proyecto de trabajo remoto de duración limitada\n• una estancia profesional en Mallorca\n• estudios en línea o formación continua en un entorno de trabajo tranquilo\n• vivienda de transición mientras se busca alojamiento permanente en Mallorca\n• una solución habitacional temporal durante una mudanza\n• la renovación de la propia vivienda\n• una estancia de orientación limitada para conocer la vida cotidiana en Mallorca\n• una estancia durante un tratamiento médico ambulatorio\n• otro motivo privado o profesional razonable con un período de tiempo claramente delimitado\n\nImportante: El motivo concreto de la estancia se consulta antes de la firma del contrato y se documenta en el contrato de arrendamiento. Se excluyen las estancias puramente vacacionales, las reservas turísticas de corta duración y el uso hotelero.',
    'faq.minRental.question': '¿Cuál es el período mínimo de alquiler?',
    'faq.minRental.answer': 'El período mínimo de alquiler es de 2 meses. Alquilamos exclusivamente para estancias largas, no para alquileres vacacionales cortos.',
    'faq.utilities.question': '¿Cómo se facturan la electricidad, el agua y el internet?',
    'faq.utilities.answer': 'La electricidad, el agua y el internet se facturan por separado. Durante el período de alquiler, se incluye un pago mensual anticipado de gastos como depósito para cubrir estos costes.\n\nLa liquidación final tiene lugar al final del período de alquiler según los costes reales incurridos. El internet se cobra a 32 € al mes. La electricidad y el agua se facturan según las facturas reales y el consumo.\n\nCon un uso regular, el anticipo de gastos incluido suele ser suficiente en la práctica. La liquidación puede seguirse de forma transparente.',
    'faq.internet.question': '¿Hay internet rápido para oficina en casa?',
    'faq.internet.answer': 'Sí, tenemos una conexión a internet estable que es perfecta para oficina en casa y videollamadas. Además, hay 2 estaciones de trabajo disponibles.',
    'faq.accessibility.question': '¿Es el apartamento libre de barreras?',
    'faq.accessibility.answer': 'El apartamento está ubicado en el primer piso y es accesible a través de una escalera. Por lo tanto, no es accesible sin barreras.',
    'faq.smoking.question': '¿Está permitido fumar? ¿Se permiten mascotas?',
    'faq.smoking.answer': 'No se permite fumar en el apartamento. Las mascotas tampoco están permitidas, para proteger el mobiliario y los demás ocupantes.',
    'faq.heating.question': '¿Hay calefacción para el invierno?',
    'faq.heating.answer': 'Además del aire acondicionado (caliente/frío), también proporcionamos un calentador eléctrico de aceite. Esto es perfectamente adecuado para calentar, por ejemplo, el dormitorio.',
    'faq.deposit.question': '¿A cuánto asciende la fianza?',
    'faq.deposit.answer': 'La fianza asciende en total a dos mensualidades. La cuantía, el pago y la devolución se regulan en el contrato de arrendamiento.',
    'faq.parking.question': '¿Hay opciones de aparcamiento?',
    'faq.parking.answer': 'Hay un espacio de estacionamiento privado que se puede usar. Además, hay un estacionamiento público a solo unos metros del complejo que generalmente está poco ocupado.',

    // Contact Page
    'contact.title': 'Contacto y Consulta',
    'contact.subtitle': 'Envíenos su solicitud de alquiler para una estancia temporal en Canyamel – esperamos su mensaje.',
    'contact.formTitle': 'Enviar solicitud de alquiler',
    'contact.faqTitle': '¿Ya se Respondieron las Preguntas Frecuentes?',
    'contact.faqText': 'Consulte nuestras preguntas frecuentes: tal vez ya encuentre allí la respuesta a su pregunta.',
    'contact.faqLink': 'Ir a las FAQ',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.phone': 'Teléfono',
    'contact.checkIn': 'Fecha de entrada deseada',
    'contact.checkOut': 'Fecha prevista de fin del alquiler',
    'contact.guests': 'Número de personas',
    'contact.message': 'Su Mensaje',
    'contact.purpose': 'Motivo de la estancia',
    'contact.purposePlaceholder': 'p. ej. teletrabajo, mudanza, reforma',
    'contact.send': 'Enviar solicitud de alquiler',

    // Privacy Policy
    'privacy.heroTitle': 'Política de Privacidad',
    'contact.namePlaceholder': 'Su nombre completo',
    'contact.emailPlaceholder': 'su@email.com',
    'contact.phonePlaceholder': '+34 xxx xxx xxx',
    'contact.messagePlaceholder': 'Cuéntenos sobre el período de alquiler deseado, el motivo de su estancia o cualquier solicitud especial...',
    'contact.guestOptions.1': '1 Persona',
    'contact.guestOptions.2': '2 Personas',
    'contact.guestOptions.3': '3 Personas',
    'contact.guestOptions.4': '4 Personas',
    'contact.successTitle': '¡Gracias por su Consulta!',
    'contact.successText': 'Hemos recibido su mensaje y nos pondremos en contacto con usted en un plazo de 24-48 horas.',
    'contact.newInquiry': 'Enviar nueva solicitud de alquiler',
    'contact.required': ' *',

    // Legal
    'legal.title': 'Base Legal',
    'legal.section1Title': 'Alquiler de duración determinada según la legislación española de arrendamientos',
    'legal.section1Text': 'La vivienda se alquila exclusivamente por tiempo determinado y por un mínimo de 2 meses. La base legal es la Ley de Arrendamientos Urbanos (LAU) en su versión vigente. Lo decisivo es que la estancia esté limitada en el tiempo desde el principio y responda a un fin concreto y acreditable, como un trabajo temporal, un proyecto, estudios o una fase de transición durante una mudanza o la búsqueda de vivienda. El motivo se solicita antes de firmar el contrato y se hace constar en el contrato de arrendamiento.',
    'legal.section2Title': 'No es un alquiler turístico vacacional',
    'legal.section2Text': 'El apartamento no se ofrece como alojamiento turístico ni incluye servicios de tipo hotelero. No hay recepción, limpieza diaria, catering ni servicios turísticos adicionales. El alquiler no es una alternativa vacacional o hotelera a corto plazo, sino que se basa exclusivamente en una solicitud de alquiler individual y un contrato de arrendamiento de temporada por escrito. Con ello se pretende distinguir claramente entre el uso residencial de temporada y el alquiler turístico conforme a la normativa vigente en Mallorca/Baleares.',
    'legal.section3Title': 'Contrato escrito, plazo fijo y transparencia',
    'legal.section3Text': 'Cada alquiler se acompaña de un contrato de arrendamiento escrito que regula claramente el período de alquiler, el fin del arrendamiento, la renta, los gastos complementarios, la fianza, la entrega, la devolución y el inventario. El período se acuerda con antelación; no se prevé la conversión automática en un arrendamiento de vivienda de duración indefinida. La fianza y los posibles gastos complementarios se indican de forma transparente. Cualquier obligación de registro o de plataforma se revisa antes de la publicación o de la celebración del contrato conforme a la legislación vigente en cada momento.',

    // Imprint
    'imprint.title': 'Aviso Legal',

    // 404
    'notFound.title': 'Página No Encontrada',
    'notFound.description': 'La página que busca desafortunadamente no existe. ¿Tal vez usó un enlace desactualizado o se equivocó al escribir?',
    'notFound.home': 'A la Página Principal',
    'notFound.back': 'Atrás',

    // Story / AboutSection

    // Gallery
    'gallery.eyebrow': 'Galería',
    'gallery.viewAll': 'Distribución y equipamiento',
    'gallery.close': 'Cerrar',
    'gallery.prev': 'Imagen anterior',
    'gallery.next': 'Imagen siguiente',
    'gallery.img.balcony': 'Balcón y vistas al mar',
    'gallery.img.living': 'Sala de estar',
    'gallery.img.kitchen': 'Cocina',
    'gallery.img.bedroom': 'Dormitorio',
    'gallery.img.pool': 'Piscina y vistas al mar',
    'gallery.img.bathroom': 'Baño',

    // Owner section
    'owner.eyebrow': 'Su anfitrión',
    'owner.link': 'Más sobre nosotros →',
    'owner.ctaBtn': 'Ponerse en contacto',
    'owner.mapLink': 'Ver ubicación en el mapa',

    // Hero
    'hero.scrollText': 'Descubrir',

    // CTA
    'cta.eyebrow': 'Disponibilidad',
    'cta.priceFrom': 'Desde',
    'cta.priceSuffix': '/ mes (sin gastos) · Estancia mínima 2 meses',

    // Contact page
    'contact.eyebrow': 'Alquiler estacional',
    'contact.sending': 'Enviando…',
    'contact.errorAlert': 'Por favor, seleccione una fecha de entrada.',
    'contact.sendError': 'Error al enviar. Por favor, inténtelo de nuevo.',
    'contact.privacyPrefix': 'He leído la',
    'contact.privacyLink': 'Política de privacidad',
    'contact.privacySuffix': 'y acepto que mis datos serán procesados para gestionar mi consulta de alquiler.',
    'contact.idealista.title': 'También en Idealista',
    'contact.idealista.desc': 'El apartamento también está publicado en Idealista — allí encontrará más fotos y podrá contactarnos directamente a través de la plataforma.',
    'contact.idealista.link': 'Ver anuncio en Idealista',

    // Prices page
    'prices.eyebrow': 'Condiciones transparentes',
    'prices.coldRent': 'Renta base',
    'prices.utilities': '+ 100 € suministros · + 32 € internet',
    'prices.ctaWinter': 'Enviar consulta de invierno',
    'prices.ctaSummer': 'Enviar consulta de verano',
    'prices.paymentHeading': 'Proceso de pago',
    'prices.paymentDesc': 'Transparente y seguro — según la Ley de Arrendamientos Urbanos española (LAU).',
    'prices.paymentLink': 'Ver proceso de pago',

    // Zahlungsabwicklung page
    'payment.page.eyebrow': 'Proceso y condiciones',
    'payment.page.title': 'Proceso de pago',
    'payment.page.desc': 'Un proceso transparente desde la consulta hasta la entrada — todas las condiciones se acuerdan por escrito antes de firmar el contrato.',
    'payment.trust.eyebrow': 'Transparencia y seguridad',
    'payment.trust.heading': 'Proceso de pago seguro y transparente',
    'payment.trust.sub': 'Todas las condiciones se acuerdan antes de firmar. Los pagos solo se realizan sobre la base de un contrato de arrendamiento firmado.',
    'payment.card1.title': 'Consulta y aclaración',
    'payment.card1.text': 'Los interesados envían primero una consulta de alquiler con el período deseado, número de personas y motivo de la estancia. Las preguntas abiertas sobre equipamiento, gastos, duración y proceso se aclaran por escrito o por teléfono.',
    'payment.card2.title': 'Presentación digital del apartamento',
    'payment.card2.text': 'Como las visitas presenciales no siempre son posibles, ofrecemos una llamada telefónica, videollamada y fotos o vídeos adicionales según acuerdo. Una visita in situ solo es posible según disponibilidad y presencia del propietario.',
    'payment.card3.title': 'Contrato y pago',
    'payment.card3.text': 'El pago solo se realiza tras acordar todos los detalles y sobre la base de un contrato de arrendamiento de duración determinada. La renta, fianza, gastos y plazos de pago se establecen de forma transparente en el contrato. Sin pagos anticipados sin aclarar.',
    'payment.viewing.title': 'Nota sobre las visitas',
    'payment.viewing.text': 'El apartamento puede estar ocupado en el momento deseado o el propietario no está permanentemente en Mallorca. Por ello, las visitas presenciales no siempre son posibles. Presentamos el apartamento de forma transparente de manera digital y respondemos todas las preguntas antes de firmar.',
    'payment.modal.eyebrow': 'Modalidades',
    'payment.modal.heading': 'Modalidades de pago',
    'payment.modal.sub': 'Claro, planificable y documentado por escrito.',
    'payment.modal.bank.title': 'Transferencia bancaria',
    'payment.modal.bank.text': 'Pago mediante transferencia a la cuenta alemana del propietario.',
    'payment.modal.monthly.title': 'Mensual por adelantado',
    'payment.modal.monthly.text': 'La renta vence mensualmente al inicio de cada período de facturación.',
    'payment.modal.docs.title': 'Documentación escrita',
    'payment.modal.docs.text': 'Todos los detalles de pago, plazos e importes están recogidos en el contrato de arrendamiento y documentados de forma clara.',
    'payment.cta.heading': '¿Tiene preguntas?',
    'payment.cta.text': 'Respondemos con gusto todas las preguntas sobre el proceso de pago, el contrato de arrendamiento y el procedimiento — antes de firmar.',

    // PaymentProcessSection steps
    'payment.steps.eyebrow': 'Proceso',
    'payment.steps.heading': 'Cómo funciona el proceso de pago',
    'payment.steps.sub1': 'Transparente, trazable y solo tras una base contractual clara.',
    'payment.steps.sub2': 'Para que ambas partes tengan seguridad de planificación, el proceso se realiza paso a paso — desde la consulta hasta la entrada.',
    'payment.step1.title': 'Revisar consulta',
    'payment.step1.text': 'Nos envía sus fechas de alquiler deseadas. Comprobamos la disponibilidad y le respondemos con todos los detalles relevantes.',
    'payment.step2.title': 'Recibir contrato',
    'payment.step2.text': 'Tras la confirmación, recibirá el contrato de arrendamiento con duración, renta, fianza y todas las condiciones para su revisión.',
    'payment.step3.title': 'Depositar fianza',
    'payment.step3.text': 'La fianza se abona antes del inicio del arrendamiento conforme al contrato. Los detalles de pago se le facilitan por escrito de antemano.',
    'payment.step4.title': 'Pago mensual',
    'payment.step4.text': 'La renta se paga mensualmente por adelantado, manteniendo el proceso claro y planificable para ambas partes.',
    'payment.step5.title': 'Entrada tras la firma',
    'payment.step5.text': 'La entrada tiene lugar tras la ejecución completa del contrato y el pago de los importes acordados.',
    'payment.trust1': 'Detalles de pago por escrito',
    'payment.trust2': 'Condiciones de alquiler claras',
    'payment.trust3': 'Entrada solo tras contrato firmado',

    // Apartment page
    'apartment.tabs.rooms': 'Habitaciones',
    'apartment.tabs.equipment': 'Equipamiento',
    'apartment.tabs.floorplan': 'Plano y Fotos',
    'apartment.header.title': 'El Apartamento',
    'apartment.header.sub': '2 dormitorios · 2 baños · Balcón con vistas al mar · Piscina',
    'apartment.equip.cat1.item1': 'WiFi 300 Mbit/s — ideal para videollamadas',
    'apartment.equip.cat1.item2': '2 puestos de trabajo completos',
    'apartment.equip.cat1.item3': '1× escritorio de altura regulable',
    'apartment.equip.cat1.item4': '2× monitores externos (24″ Full HD)',
    'apartment.equip.cat1.item5': 'Smart TV 75″ con apps de streaming',
    'apartment.equip.cat2.item1': 'Vitrocerámica de inducción 4 zonas',
    'apartment.equip.cat2.item2': 'Horno y microondas',
    'apartment.equip.cat2.item3': 'Lavavajillas de tamaño completo',
    'apartment.equip.cat2.item4': 'Frigorífico con congelador',
    'apartment.equip.cat2.item5': 'Cafetera y hervidor',
    'apartment.equip.cat2.item6': 'Utensilios de cocina y cubertería completos',
    'apartment.equip.cat3.item1': 'Aire acondicionado central para todas las habitaciones',
    'apartment.equip.cat3.item2': 'Ventiladores de techo',
    'apartment.equip.cat3.item3': 'Toldo eléctrico en el balcón',
    'apartment.equip.cat3.item4': 'Persianas de oscurecimiento',
    'apartment.equip.cat3.item5': 'Colchones y ropa de cama de calidad',
    'apartment.equip.cat3.item6': 'Toallas y artículos de baño incluidos',
    'apartment.equip.cat3.item7': 'Calefacción en invierno con radiador de aceite eléctrico + A/C (calor/frío)',
    'apartment.equip.cat4.item1': 'Balcón con vistas al mar',
    'apartment.equip.cat4.item2': 'Muebles de salón exterior',
    'apartment.equip.cat4.item3': 'Piscina comunitaria',
    'apartment.equip.cat4.item4': 'Acceso privado al mar',
    'apartment.equip.cat4.item6': 'Sombrilla y tumbonas',
    'apartment.rules.title': 'Normas de la casa',
    'apartment.rules.1.title': 'Sin fiestas',
    'apartment.rules.1.desc': 'El apartamento está pensado para estancias tranquilas. Las fiestas, eventos y reuniones ruidosas no están permitidas.',
    'apartment.rules.2.title': 'Respeto a los vecinos',
    'apartment.rules.2.desc': 'Por favor, evite la música alta y respete los horarios de silencio y el entorno residencial del complejo.',
    'apartment.rules.3.title': 'Cumplir el reglamento',
    'apartment.rules.3.desc': 'El reglamento interno del complejo residencial debe respetarse durante toda la estancia.',
    'apartment.rules.4.title': 'Mascotas bajo acuerdo',
    'apartment.rules.4.desc': 'Las mascotas solo están permitidas previa consulta y aprobación. Por favor, trátelo de antemano.',
    'apartment.floorplan.hint': 'Haga clic en una habitación del plano para ver las fotos.',
    'apartment.cta.title': '¿Le interesa?',
    'apartment.cta.sub': 'Escríbanos — respondemos con rapidez.',
    'apartment.cta.btn': 'Enviar consulta de alquiler',

    // Canyamel page
    'canyamel.map.eyebrow': 'Ubicación',
    'canyamel.map.heading': 'Canyamel en Mallorca',
    'canyamel.features.eyebrow': 'Entorno residencial',

    // FAQ nudge
    'faq.nudge.text': '¿Tiene más preguntas?',
    'faq.nudge.link': 'Escríbanos a través del formulario de contacto.',

    // Footer
    'footer.apartment': 'El Apartamento',
    'footer.location': 'Canyamel, Mallorca · España',

    // Feature72 (Homepage)
    'feature.eyebrow': 'El Apartamento',
    'feature.heading': 'Características de un vistazo',
    'feature.sub': 'Todo lo que hace cómoda su estancia: internet rápido, vistas al mar, una distribución bien pensada y un clima agradable.',
    'feature.wifi.title': '300 Mbit/s Fibra',
    'feature.wifi.desc': 'Internet de fibra rápido e ilimitado – ideal para trabajo remoto, videollamadas y streaming.',
    'feature.seaview.title': 'Vistas al mar desde cada habitación',
    'feature.seaview.desc': 'Impresionantes vistas al mar – desde el salón, dormitorios y otras zonas de estar.',
    'feature.bedrooms.title': '2 Dormitorios y 2 Baños',
    'feature.bedrooms.desc': 'Distribución cómoda con dos dormitorios separados y dos baños completos.',
    'feature.ac.title': 'Aire acondicionado de calidad',
    'feature.ac.desc': 'Aire acondicionado moderno para una temperatura agradable – fiable incluso en los días cálidos de verano.',

    // MallorcaLocationMap
    'canyamel.map.desc': 'Canyamel se encuentra en el tranquilo noreste de Mallorca – cerca del mar, rodeada de naturaleza y con fácil acceso a los pueblos cercanos.',
    'canyamel.map.popup': 'Canyamel – Noreste de Mallorca',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};