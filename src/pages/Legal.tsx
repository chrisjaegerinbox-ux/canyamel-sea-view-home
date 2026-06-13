import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scale, FileText, ShieldCheck } from 'lucide-react';

type LegalTab = 'datenschutz' | 'impressum' | 'rechtliches';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug">{title}</h2>
    <div className="font-sans text-sm text-muted-foreground leading-relaxed space-y-0">
      {children}
    </div>
  </div>
);

const Legal = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const hashToTab = (hash: string): LegalTab => {
    if (hash === '#impressum') return 'impressum';
    if (hash === '#rechtliches') return 'rechtliches';
    return 'datenschutz';
  };

  const [activeTab, setActiveTab] = useState<LegalTab>(() => hashToTab(location.hash));

  useEffect(() => {
    setActiveTab(hashToTab(location.hash));
  }, [location.hash]);

  const tabs: { id: LegalTab; label: string }[] = [
    { id: 'datenschutz', label: t('privacy.heroTitle') },
    { id: 'impressum', label: t('imprint.title') },
    { id: 'rechtliches', label: t('legal.title') },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="page-header">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-semibold text-foreground">Rechtliches</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-sans text-sm font-medium px-6 py-4 border-b-2 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-azure text-azure'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose-custom">

            {/* Datenschutz — hardcoded DE, DSGVO-konform */}
            {activeTab === 'datenschutz' && (
              <div className="space-y-8">

                {/* ── Hilfsfunktionen als inline-Elemente ── */}

                {/* 1. Verantwortlicher */}
                <Section title="1. Verantwortlicher">
                  <p>Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:</p>
                  <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 px-5 py-4 font-sans text-sm text-foreground/80 leading-relaxed">
                    Christian Jaeger<br />
                    c/o Petra Kortmann<br />
                    Dahlmannsbusch 10<br />
                    48282 Emsdetten<br />
                    Deutschland<br />
                    <span className="mt-2 block">E-Mail: chris.jaeger.inbox@gmail.com</span>
                  </div>
                  <p className="mt-3">Weitere Angaben sind im{' '}
                    <button onClick={() => setActiveTab('impressum')} className="text-azure hover:underline underline-offset-2 font-medium">
                      Impressum
                    </button>{' '}zu finden.
                  </p>
                </Section>

                {/* 2. Verarbeitung bei Mietanfragen */}
                <Section title="2. Verarbeitung personenbezogener Daten bei Mietanfragen">
                  <p>Wenn Sie uns über das Kontakt- oder Mietanfrageformular personenbezogene Daten übermitteln, verarbeiten wir die von Ihnen angegebenen Informationen zur Bearbeitung Ihrer Anfrage sowie zur Anbahnung, Vorbereitung und gegebenenfalls Durchführung eines Mietverhältnisses.</p>
                  <p className="mt-3">Hierzu können insbesondere folgende Daten gehören:</p>
                  <ul className="mt-2 space-y-1.5 ml-4">
                    {['Name', 'E-Mail-Adresse', 'Telefonnummer', 'Gewünschter Mietzeitraum', 'Anzahl der Personen', 'Inhalt Ihrer Nachricht', 'Weitere freiwillige Angaben im Zusammenhang mit Ihrer Mietanfrage'].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">Rechtsgrundlage ist <strong className="font-medium text-foreground/80">Art. 6 Abs. 1 lit. b DSGVO</strong>, soweit die Verarbeitung zur Bearbeitung vorvertraglicher Anfragen oder zur Durchführung eines Mietvertrags erforderlich ist. Soweit wir Daten zur Dokumentation, IT-Sicherheit, Missbrauchsvermeidung oder Rechtsverteidigung verarbeiten, erfolgt dies auf Grundlage von <strong className="font-medium text-foreground/80">Art. 6 Abs. 1 lit. f DSGVO</strong>.</p>
                </Section>

                {/* 3. Kontaktformular und Datenübermittlung via Formspree */}
                <Section title="3. Kontaktformular und Datenübermittlung">
                  <p>Für die Übermittlung von Kontakt- und Mietanfragen über das Formular auf dieser Website wird der Dienst <strong className="font-medium text-foreground/80">Formspree</strong> (Formspree, Inc., USA) genutzt. Die von Ihnen im Formular eingetragenen Angaben werden an Formspree übermittelt und uns anschließend per E-Mail zugestellt. Formspree verarbeitet die Daten auf Basis eines Auftragsverarbeitungsvertrags und verfügt über geeignete Garantien für die Datenübermittlung in die USA. Weitere Informationen finden Sie in der Datenschutzerklärung von Formspree unter <span className="text-azure">formspree.io/legal/privacy-policy</span>.</p>
                  <p className="mt-3">Die übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Mietanfrage verwendet. Die Nutzung des Formulars ist freiwillig. Sie können uns alternativ direkt per E-Mail kontaktieren.</p>
                </Section>

                {/* 4. Weitergabe von Daten */}
                <Section title="4. Weitergabe von Daten">
                  <p>Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies zur Bearbeitung der Mietanfrage, zur Vorbereitung oder Durchführung eines Mietverhältnisses, zur technischen Bereitstellung der Website oder aufgrund gesetzlicher Pflichten erforderlich ist. Eine Weitergabe kann insbesondere an folgende Empfänger erfolgen:</p>
                  <ul className="mt-2 space-y-1.5 ml-4">
                    {[
                      'Formspree, Inc. (USA) — technische Übermittlung der Formularanfragen per E-Mail',
                      'E-Mail-Provider zur Zustellung und Bearbeitung der Anfrage',
                      'Dienstleister im Zusammenhang mit der Wohnungsverwaltung, Übergabe oder Abwicklung des Mietverhältnisses',
                      'Behörden, Steuerberater, Rechtsberater oder Gerichte, soweit dies gesetzlich erforderlich oder zur Rechtsdurchsetzung notwendig ist',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">Eine Weitergabe zu Werbezwecken erfolgt nicht.</p>
                </Section>

                {/* 5. Hosting */}
                <Section title="5. Hosting und Server-Logfiles">
                  <p>Beim Aufruf dieser Website werden durch den Hosting-Anbieter technisch notwendige Daten verarbeitet, um die Website sicher und stabil bereitzustellen. Hierzu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp und Betriebssystem sowie die übertragene Datenmenge gehören.</p>
                  <p className="mt-3">Die Verarbeitung erfolgt auf Grundlage von <strong className="font-medium text-foreground/80">Art. 6 Abs. 1 lit. f DSGVO</strong>. Das berechtigte Interesse liegt in der sicheren, stabilen und fehlerfreien Bereitstellung der Website.</p>
                  <p className="mt-3">Hosting-Anbieter: <strong className="font-medium text-foreground/80">[Hosting-Anbieter bitte vor Veröffentlichung ergänzen]</strong></p>
                </Section>

                {/* 6. Cookies und lokale Speicherung */}
                <Section title="6. Cookies und lokale Speicherung">
                  <p>Diese Website verwendet keine Analyse- oder Marketing-Cookies. Es findet kein Tracking zu Werbezwecken statt.</p>
                  <p className="mt-3">Zur Speicherung der von Ihnen gewählten Spracheinstellung (Deutsch, Englisch oder Spanisch) wird der lokale Browserspeicher (<em>localStorage</em>) Ihres Geräts genutzt. Diese Speicherung erfolgt ausschließlich auf Ihrem Gerät, enthält keine personenbezogenen Daten und dient ausschließlich der nutzerfreundlichen Funktion der Sprachauswahl. Eine Übermittlung an Server findet dabei nicht statt.</p>
                </Section>

                {/* 7. Google Fonts */}
                <Section title="7. Externe Schriftarten (Google Fonts)">
                  <p>Diese Website lädt Schriftarten über den Dienst <strong className="font-medium text-foreground/80">Google Fonts</strong> der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) von externen Servern (<span className="text-foreground/70">fonts.googleapis.com</span>, <span className="text-foreground/70">fonts.gstatic.com</span>). Beim Aufruf einer Seite wird dadurch eine Verbindung zu Googles Servern hergestellt, bei der Ihre IP-Adresse übertragen wird.</p>
                  <p className="mt-3">Rechtsgrundlage ist <strong className="font-medium text-foreground/80">Art. 6 Abs. 1 lit. f DSGVO</strong>. Das berechtigte Interesse liegt in der einheitlichen und zuverlässigen Darstellung der Schriftarten. Weitere Informationen finden Sie in der Datenschutzerklärung von Google unter <span className="text-azure">policies.google.com/privacy</span>.</p>
                </Section>

                {/* 8. Kartenmaterial */}
                <Section title="8. Kartenmaterial (MapLibre GL / OpenFreeMap)">
                  <p>Auf der Seite „Canyamel &amp; Umgebung" wird eine interaktive Karte eingeblendet. Hierfür werden Karten-Tiles vom Dienst <strong className="font-medium text-foreground/80">OpenFreeMap</strong> (<span className="text-foreground/70">tiles.openfreemap.org</span>) geladen. Beim Laden der Karte wird eine Verbindung zu den Servern von OpenFreeMap hergestellt, wobei Ihre IP-Adresse übertragen wird. Die Kartendarstellung selbst erfolgt über die clientseitige Bibliothek <strong className="font-medium text-foreground/80">MapLibre GL</strong>, die lokal im Browser ausgeführt wird.</p>
                  <p className="mt-3">Rechtsgrundlage ist <strong className="font-medium text-foreground/80">Art. 6 Abs. 1 lit. f DSGVO</strong>. Das berechtigte Interesse liegt in der ortsrelevanten Information der Besucher.</p>
                </Section>

                {/* 9. Speicherdauer */}
                <Section title="9. Speicherdauer">
                  <p>Personenbezogene Daten aus Kontakt- oder Mietanfragen werden nur so lange gespeichert, wie dies für die Bearbeitung der Anfrage, die Durchführung eines Mietverhältnisses oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.</p>
                  <p className="mt-3">Kommt kein Mietverhältnis zustande, werden die Daten gelöscht, sobald sie für die Bearbeitung der Anfrage nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten oder berechtigte Interessen entgegenstehen. Kommt ein Mietverhältnis zustande, können relevante Vertrags- und Abrechnungsdaten entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert werden.</p>
                </Section>

                {/* 10. Betroffenenrechte */}
                <Section title="10. Rechte der betroffenen Personen">
                  <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
                  <ul className="mt-2 space-y-1.5 ml-4">
                    {[
                      'Recht auf Auskunft über die verarbeiteten personenbezogenen Daten (Art. 15 DSGVO)',
                      'Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
                      'Recht auf Löschung (Art. 17 DSGVO)',
                      'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                      'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                      'Recht auf Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)',
                      'Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)',
                      'Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde (Art. 77 DSGVO)',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3">Zur Ausübung Ihrer Rechte können Sie uns jederzeit über die unter Ziffer 1 genannten Kontaktdaten erreichen.</p>
                </Section>

                {/* 11. Beschwerde */}
                <Section title="11. Beschwerderecht bei einer Aufsichtsbehörde">
                  <p>Sie haben das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt (Art. 77 DSGVO). Zuständige Aufsichtsbehörde für den Verantwortlichen ist:</p>
                  <div className="mt-3 rounded-lg border border-border/60 bg-muted/30 px-5 py-4 font-sans text-sm text-foreground/80 leading-relaxed">
                    Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)<br />
                    Kavalleriestraße 2–4<br />
                    40213 Düsseldorf<br />
                    <span className="text-azure">ldi.nrw.de</span>
                  </div>
                </Section>

                {/* 12. Datensicherheit */}
                <Section title="12. Datensicherheit">
                  <p>Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten gegen Verlust, Missbrauch, unbefugten Zugriff, Veränderung oder Offenlegung zu schützen. Die Übertragung dieser Website erfolgt verschlüsselt per HTTPS.</p>
                </Section>

                {/* 13. Urheberrecht — visuell abgesetzt */}
                <div className="border-t border-border/40 pt-8">
                  <Section title="13. Urheberrecht und Bildmaterial">
                    <p>Alle Texte, Fotos, Grundrisse, Grafiken und sonstigen Inhalte dieser Website sind urheberrechtlich geschützt.</p>
                    <p className="mt-3">Eine Nutzung, Vervielfältigung, Weitergabe, Bearbeitung oder öffentliche Zugänglichmachung – insbesondere der Fotos der Wohnung – ist ohne ausdrückliche vorherige Zustimmung nicht gestattet. Dies gilt auch für die Nutzung in anderen Inseraten, Portalen, sozialen Netzwerken oder KI-Systemen. Zuwiderhandlungen können zivil- und strafrechtlich verfolgt werden.</p>
                  </Section>
                </div>

                {/* Stand */}
                <p className="font-sans text-xs text-muted-foreground/60 pt-2">
                  Stand: Juni 2026. Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich die Website, die eingesetzten technischen Dienste oder die rechtlichen Anforderungen ändern.
                </p>

              </div>
            )}

            {/* Impressum */}
            {/* Impressum — hardcoded, § 5 DDG */}
            {activeTab === 'impressum' && (
              <div className="space-y-8">

                <Section title="Angaben gemäß § 5 DDG">
                  <div className="rounded-lg border border-border/60 bg-muted/30 px-5 py-4 leading-relaxed">
                    Christian Jaeger<br />
                    c/o Hamann Kortmann<br />
                    Dahlmannsbusch 10<br />
                    48282 Emsdetten<br />
                    Deutschland
                  </div>
                </Section>

                <Section title="Kontakt">
                  <p>E-Mail: canyamel.stay@gmail.com</p>
                </Section>

                <Section title="Verantwortlich für den Inhalt">
                  <div className="rounded-lg border border-border/60 bg-muted/30 px-5 py-4 leading-relaxed">
                    Christian Jaeger<br />
                    c/o Hamann Kortmann<br />
                    Dahlmannsbusch 10<br />
                    48282 Emsdetten<br />
                    Deutschland
                  </div>
                </Section>

                <Section title="Verbraucherstreitbeilegung">
                  <p>Wir sind weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </Section>

                <div className="border-t border-border/40 pt-8">
                  <Section title="Urheberrecht">
                    <p>Die auf dieser Website verwendeten Texte, Fotos, Grundrisse, Grafiken und sonstigen Inhalte sind urheberrechtlich geschützt.</p>
                    <p className="mt-3">Eine Nutzung, Vervielfältigung, Bearbeitung, Weitergabe oder öffentliche Zugänglichmachung – insbesondere der Fotos der Wohnung – ist ohne vorherige ausdrückliche Zustimmung nicht gestattet. Dies gilt auch für die Nutzung in anderen Inseraten, Portalen, sozialen Netzwerken oder KI-Systemen. Zuwiderhandlungen können zivil- und strafrechtlich verfolgt werden.</p>
                  </Section>
                </div>

                <p className="font-sans text-xs text-muted-foreground/60 pt-2">Stand: Juni 2026</p>

              </div>
            )}

            {/* Rechtliche Grundlage */}
            {activeTab === 'rechtliches' && (
              <div className="space-y-4">

                {/* Section cards */}
                {[
                  { icon: Scale,      title: t('legal.section1Title'), text: t('legal.section1Text') },
                  { icon: FileText,   title: t('legal.section2Title'), text: t('legal.section2Text') },
                  { icon: ShieldCheck,title: t('legal.section3Title'), text: t('legal.section3Text') },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-border/60 bg-card shadow-warm-sm p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg bg-azure/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-azure" />
                      </div>
                      <div>
                        <h2 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                          {title}
                        </h2>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
