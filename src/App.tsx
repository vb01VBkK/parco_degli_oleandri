/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Building2, 
  FileText, 
  Home, 
  Layers, 
  ShieldCheck, 
  Wind, 
  Volume2, 
  Layout, 
  Sun, 
  DoorClosed, 
  Palette, 
  Droplets, 
  Zap, 
  ArrowUpCircle, 
  Car, 
  Trees, 
  Settings2,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const contentSections = [
  {
    id: 'premessa',
    num: '01',
    title: 'Premessa',
    subtitle: 'Rifugio Residenziale',
    image: 'https://lh3.googleusercontent.com/d/1hBb-zKTfI_Bi7QbEJk5wj6KcBQKyjzzD',
    text: [
      `Il presente documento costituisce il **Capitolato Descrittivo di Vendita** relativo alle unità immobiliari facenti parte del complesso residenziale **“Parco Degli Oleandri Nola – Lotto 9 e Lotto 10”**, realizzato in Nola alla Via Circumvallazione, V° Traversa n. 9, e commercializzato dalla **Pro House S.r.l.**`,
      `Il capitolato è predisposto con finalità *illustrativa, descrittiva e commerciale* e ha lo scopo di rappresentare le caratteristiche generali dell’intervento, il livello qualitativo delle soluzioni costruttive adottate, il valore dell’involucro edilizio già realizzato, le principali dotazioni impiantistiche orientate al risparmio energetico, le finiture previste per le singole unità immobiliari e le caratteristiche delle parti comuni.`,
      `Le specifiche definitive della singola unità immobiliare saranno in ogni caso quelle risultanti dagli elaborati grafici, dalla documentazione allegata alla proposta o al preliminare di vendita e dagli eventuali accordi scritti intervenuti tra la parte venditrice e l’acquirente.`
    ]
  },
  {
    id: 'descrizione-generale',
    num: '02',
    title: 'Descrizione generale dell\'intervento',
    subtitle: 'L\'Involucro Evoluto',
    image: 'https://lh3.googleusercontent.com/d/1RrmKjZdn_REgicGskp1XrEiDrBrxilC8',
    text: [
      `Il complesso **Parco Degli Oleandri Nola – Lotto 9 e Lotto 10** è costituito da due edifici residenziali, ciascuno servito da un’unica scala, sviluppati su tre livelli fuori terra oltre ad un piano interrato destinato ai locali e agli spazi accessori previsti dal progetto.`,
      `Ciascun edificio comprende **dodici unità abitative** progettate secondo tagli residenziali di *tre vani e quattro vani*, con soluzioni pensate per garantire funzionalità degli ambienti, luminosità degli spazi, comfort abitativo e un elevato standard qualitativo sia sotto il profilo costruttivo sia sotto quello impiantistico.`,
      `L’intervento si inserisce in un contesto residenziale di nuova costruzione concepito per offrire una soluzione abitativa moderna, orientata al *vivere nel verde* e al *risparmio energetico*. Il progetto valorizza in modo particolare la qualità dell’involucro edilizio e la presenza di impianti evoluti, concepiti come elementi distintivi dell’iniziativa immobiliare e come leve concrete di comfort, efficienza e contenimento dei consumi.`
    ]
  },
  {
    id: 'contesto-residenziale',
    num: '03',
    title: 'Contesto residenziale',
    subtitle: 'Vivere nel Verde',
    image: 'https://lh3.googleusercontent.com/d/11kSOvJJYAma5Lb5K0ee3XlQ8CEE_uOtI',
    text: [
      `Il **Parco Degli Oleandri Nola – Lotto 9 e Lotto 10** è concepito come un complesso residenziale inserito in un contesto privato e già strutturato, pensato per offrire privacy, vivibilità e comfort all’interno di un ambiente ordinato e caratterizzato dalla presenza del **verde** quale elemento distintivo del progetto abitativo.`,
      `L’intervento è stato pensato per valorizzare la qualità dell’abitare attraverso una corretta distribuzione degli edifici, delle aree esterne e delle pertinenze, con l’obiettivo di creare un ambiente *armonioso e funzionale*, adatto ad una clientela che ricerca una nuova costruzione capace di coniugare comfort quotidiano, efficienza energetica e benessere abitativo in un contesto verde e riservato.`
    ]
  },
  {
    id: 'caratteristiche-tipologiche',
    num: '04',
    title: 'Caratteristiche tipologiche',
    subtitle: 'Razionalità Distributiva',
    image: 'https://lh3.googleusercontent.com/d/1Cam95-1LwLw7x9w-U2gYRShChNy46bCP',
    text: [
      `Le unità immobiliari del complesso sono costituite da appartamenti di *tre vani e quattro vani*, progettati secondo criteri di funzionalità e razionalità distributiva.`,
      `Le singole abitazioni potranno essere dotate, a seconda della tipologia, di terrazzi, giardini e spazi esterni pertinenziali, oltre al **box auto privato**. La composizione interna, la disposizione dei vani, gli affacci, le superfici e le pertinenze esclusive delle singole unità saranno quelle risultanti dai grafici di progetto e dalla documentazione contrattuale specifica riferita all’immobile prescelto.`
    ]
  },
  {
    id: 'struttura-tamponature',
    num: '05-06',
    title: 'Architettura & Involucro',
    subtitle: 'Solida Evoluzione',
    text: [
      `La struttura portante è in **cemento armato**, eseguita nel rispetto delle normative vigenti e delle più aggiornate disposizioni **antisismiche**. Tale impostazione costruttiva costituisce la base di un fabbricato solido, durevole e tecnicamente evoluto.`,
      `Le tamponature esterne sono realizzate mediante blocchi in laterizio **Poroton FV Plus MVI35019**, scelti per le loro caratteristiche di resistenza, inerzia termica e contributo alle prestazioni energetiche dell’edificio.`
    ],
    items: [
      { icon: ShieldCheck, title: 'Sicurezza Antisismica', desc: 'Rispetto delle normative **NTC 2018**.' },
      { icon: Layers, title: 'Involucro Poroton', desc: 'Isolamento termo-acustico di **eccellenza**.' }
    ]
  },
  {
    id: 'finiture',
    num: '07-15',
    title: 'Componenti & Finiture',
    subtitle: 'L\'Eleganza del Dettaglio',
    text: [
      `Materiali selezionati per estetica, sicurezza e durabilità. Ogni componente è scelto per integrarsi armoniosamente nel design del **Parco Degli Oleandri**.`,
      `Soglie e davanzali in **marmo Verde Marina**; pavimentazioni in gres porcellanato per esterni **SAIME** per balconi e terrazzi.`
    ],
    layout: 'grid-image',
    image: 'https://lh3.googleusercontent.com/d/1m1GUAz1t_nIE3H-Am-97TQKg8-EFnIcc',
    gallery: [
      'https://lh3.googleusercontent.com/d/165gudghf97_E7hr2LFv-Der6E3whOFUk',
      'https://lh3.googleusercontent.com/d/1AYkofL2NoeyiVGUhr0P6poJZHuDTfJp7',
      'https://lh3.googleusercontent.com/d/11I19tS720A9R4RgOwuAThAHnSGMSWwHy'
    ],
    gridItems: [
      { icon: Wind, title: 'Serramenti Nusco', desc: 'Infissi in PVC doppio vetro **Power 9000**.' },
      { icon: DoorClosed, title: 'Portoncino & Porte', desc: 'Blindato **Classe 3** e porte interne laminate.' },
      { icon: Palette, title: 'Pavimenti & Marmi', desc: 'Gres di prima scelta (**SAIME, Ragno, Piemme**).' },
      { icon: Droplets, title: 'Sanitari RAK', desc: 'Qualità **RAK Ceramics** e rubinetterie di design.' }
    ]
  },
  {
    id: 'consulta-finiture',
    num: '07b',
    title: 'Dettagli di Capitolato',
    subtitle: 'Consulta i Componenti',
    layout: 'consultation',
    items: [
      { icon: Wind, title: 'Serramenti Nusco', desc: 'Infissi in PVC doppio vetro **Power 9000**.' },
      { icon: DoorClosed, title: 'Portoncino & Porte', desc: 'Blindato **Classe 3** e porte interne laminate.' },
      { icon: Palette, title: 'Pavimenti & Marmi', desc: 'Gres di prima scelta (**SAIME, Ragno, Piemme**).' },
      { icon: Droplets, title: 'Sanitari RAK', desc: 'Qualità **RAK Ceramics** e rubinetterie di design.' }
    ]
  },
  {
    id: 'tecnologia',
    num: '16-17',
    title: 'Tecnologia & Energia',
    subtitle: 'Abitazioni Gas Free',
    text: [
      `Le unità immobiliari sono concepite secondo una logica impiantistica **totalmente elettrica**. Pompa di calore per il riscaldamento, raffrescamento e acqua calda.`,
      `Emissioni affidate a *fan coil* negli ambienti principali e termoarredi nei bagni. Impianto fotovoltaico da **4 kW** con accumulo da **5 kWh** per ogni unità.`
    ],
    items: [
      { icon: Zap, title: 'Domotica Bticino', desc: 'Sistema **Living Now** per il controllo smart.' },
      { icon: Wind, title: 'Climatizzazione', desc: 'Efficienza garantita dalla **pompa di calore**.' }
    ]
  },
  {
    id: 'servizi',
    num: '18-21',
    title: 'Dettagli Tecnici & Comuni',
    subtitle: 'Funzionalità Superiore',
    text: [
      `Il fabbricato è dotato di ascensore **Schindler** (portata **480 kg**). Box auto privati nel piano interrato finito in cemento lisciato.`,
      `Contesto urbanizzato con aree comuni verdi curate e impianti condominiali evoluti (*autoclave* e *addolcimento acque*).`
    ],
    items: [
      { icon: ArrowUpCircle, title: 'Ascensore', desc: 'Modello **Schindler**, portata 6 persone.' },
      { icon: Car, title: 'Box Auto', desc: 'Spazi privati e **sicuri** per ogni appartamento.' },
      { icon: Trees, title: 'Area Verde', desc: 'Aree esterne pensate per la massima **vivibilità**.' }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-sage/20 bg-brand-cream text-brand-ink">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="accent-text text-xs uppercase tracking-[0.6em] font-bold mb-8 text-brand-sage">Pro House S.r.l. Presenta</div>
          <h1 className="text-6xl lg:text-[7.5rem] font-serif italic mb-8 leading-[0.95] tracking-tighter text-slate-800">
            Parco Degli <br/>
            <span className="italic">Oleandri</span>
          </h1>
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="h-px w-12 bg-brand-sage opacity-40" />
            <span className="text-sm uppercase tracking-[0.4em] text-brand-sage font-bold">Nola — Lotto 9 e 10</span>
            <span className="h-px w-12 bg-brand-sage opacity-40" />
          </div>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed italic mb-12">
            Un'esperienza abitativa che fonde l'eleganza classica del design "Natural Tones" con le più avanzate tecnologie energetiche.
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <ChevronDown className="w-8 h-8 text-brand-sage opacity-40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      {contentSections.map((section, index) => {
        const isOdd = index % 2 !== 0;
        const isGridImage = section.layout === 'grid-image';
        const isConsultation = section.layout === 'consultation';

        if (isConsultation) {
          return (
            <section key={section.id} className="py-24 lg:py-32 bg-white border-y border-brand-sage/10">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 text-brand-sage">
                  {section.num} — {section.subtitle}
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif italic mb-16 text-slate-800">
                  {section.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {section.items?.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-8 bg-brand-cream rounded-[32px] border border-brand-sage/5 hover:border-brand-sage transition-all duration-300 text-left group flex flex-col h-full"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-brand-sage" />
                      </div>
                      <h3 className="text-lg font-serif italic mb-3 text-slate-800">
                        {item.title}
                      </h3>
                      <div className="text-sm text-slate-500 leading-relaxed">
                        <ReactMarkdown>{item.desc}</ReactMarkdown>
                      </div>
                      <div className="mt-auto pt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-sage opacity-0 group-hover:opacity-100 transition-opacity">
                        Consulta <ChevronRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section 
            key={section.id} 
            className={`py-24 lg:py-48 ${isOdd ? 'bg-brand-dark text-white/90' : 'bg-brand-cream'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {isGridImage ? (
                /* Grid Image Layout (Inspiration from screenshot) */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div>
                    <div className={`accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className={`text-4xl lg:text-6xl font-serif italic mb-8 leading-tight ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                      {section.title}
                    </h2>
                    <div className={`space-y-6 mb-12 markdown-body ${isOdd ? 'text-white/60' : 'text-slate-600'}`}>
                      {section.text.map((p, i) => (
                        <div key={i} className="leading-relaxed">
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-8">
                      {section.gridItems?.map((item, i) => (
                        <div key={i} className="flex gap-8 group">
                          <div className={`w-px h-12 transition-all duration-700 ${isOdd ? 'bg-white/20 group-hover:h-20' : 'bg-brand-sage/20 group-hover:h-20'}`} />
                          <div>
                            <h4 className="text-xl font-serif italic mb-2">{item.title}</h4>
                            <div className={`text-sm leading-relaxed ${isOdd ? 'text-white/40' : 'text-slate-500'}`}>
                              <ReactMarkdown>{item.desc}</ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 1 }}
                    >
                      <img 
                        src={section.image || `https://picsum.photos/seed/${section.id}/1000/1300`} 
                        alt={section.title}
                        className="w-full h-[700px] object-cover rounded-[56px] shadow-2xl skew-y-1"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                    <div className="absolute top-12 -right-8 space-y-4 hidden md:block">
                      <div className="natural-card px-8 py-5 flex items-center gap-4 bg-white shadow-xl translate-x-2">
                        <Sun className="text-brand-sage w-6 h-6" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-800">Luminosità Naturale</span>
                      </div>
                      <div className="natural-card px-8 py-5 flex items-center gap-4 bg-white shadow-xl">
                        <Droplets className="text-brand-sage w-6 h-6" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-800">Finiture Premium</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Layout */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                  <div className={index % 4 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className={`text-5xl font-serif italic mb-8 leading-tight ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                      {section.title}
                    </h2>
                    <div className={`space-y-6 markdown-body ${isOdd ? 'text-white/60' : 'text-slate-600'}`}>
                      {section.text.map((p, i) => (
                        <div key={i} className="leading-relaxed">
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 4 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    {section.items ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {section.items.map((item, i) => (
                          <div key={i} className={`${isOdd ? 'dark-card' : 'natural-card'} p-10 flex flex-col h-full`}>
                            <item.icon className="w-10 h-10 text-brand-sage mb-8" />
                            <h3 className="text-2xl font-serif italic mb-4">{item.title}</h3>
                            <div className={`text-sm leading-relaxed flex-grow markdown-body ${isOdd ? 'text-white/40' : 'text-slate-500'}`}>
                              <ReactMarkdown>{item.desc}</ReactMarkdown>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative">
                        <img 
                          src={section.image || `https://picsum.photos/seed/${section.id}/800/1000`} 
                          alt={section.title}
                          className="w-full h-[600px] object-cover rounded-[56px] shadow-2xl"
                          referrerPolicy="no-referrer"
                        />
                        <div className={`absolute -bottom-12 -left-12 p-8 max-w-xs ${isOdd ? 'bg-white/10 backdrop-blur-md rounded-[32px]' : 'natural-card'}`}>
                          <p className={`text-sm italic ${isOdd ? 'text-white/80' : 'text-slate-500'}`}>
                            "Un'architettura che dialoga con la natura circostante, garantendo privacy e comfort."
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Gallery Addition */}
              {section.gallery && (
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                      <img 
                        src={img} 
                        alt={`${section.title} gallery ${i}`}
                        className="w-full h-80 object-cover rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )
      })}

      {/* Technical Summary - Final Table */}
      <section className="bg-brand-cream py-32 lg:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <h2 className="text-5xl font-serif italic mb-4">Specifiche Tecniche</h2>
            <p className="text-slate-500 italic max-w-xl">Riepilogo delle caratteristiche principali del complesso residenziale.</p>
          </div>
          <div className="natural-card p-12 overflow-hidden border-brand-sage/20 bg-white shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-8 px-6 text-left font-serif italic text-2xl text-slate-800">Caratteristica</th>
                    <th className="py-8 px-6 text-left font-serif italic text-2xl text-slate-800">Dettaglio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { field: 'Composizione', desc: 'Due edifici residenziali (3 piani + interrato)' },
                    { field: 'Unità immobiliari', desc: '12 appartamenti per scala' },
                    { field: 'Tipologie', desc: '3 e 4 vani con ampi terrazzi o giardini' },
                    { field: 'Sicurezza', desc: 'Classe antisismica aggiornata, portoncini Classe 3' },
                    { field: 'Efficientamento', desc: 'Gas Free, Fotovoltaico 4 kW, Accumulo 5 kWh' },
                    { field: 'Domotica', desc: 'Bticino Living Now integrata' },
                  ].map((row, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-8 px-6 font-bold text-slate-800 text-base">{row.field}</td>
                      <td className="py-8 px-6 text-slate-400 italic text-base group-hover:text-brand-sage transition-colors">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-24 text-center text-white/90">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <Building2 className="w-12 h-12 text-brand-sage mx-auto mb-8 opacity-40" />
            <h2 className="text-5xl font-serif italic mb-6">Parco Degli Oleandri</h2>
            <p className="text-white/40 text-lg uppercase tracking-[0.3em] font-light">Pro House S.r.l.</p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 mb-4">
            Capitolato Descrittivo di Vendita — 2026
          </div>
          <div className="text-xs italic text-white/30 max-w-2xl mx-auto">
            Ogni dettaglio è stato studiato per offrire il massimo equilibrio tra comfort e sostenibilità.
          </div>
        </div>
      </footer>
    </div>
  );
}
