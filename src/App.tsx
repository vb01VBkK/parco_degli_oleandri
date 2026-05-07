/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment } from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  Building2, 
  MapPin,
  Maximize,
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
  ChevronRight,
  Thermometer,
  Cpu,
  Smartphone,
  Users,
  Weight
} from 'lucide-react';

interface ContentSection {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  image?: string;
  bgImage?: string;
  text: string[];
  layout?: 'grid-image' | 'consultation' | 'standard' | 'split-text' | 'stacked-grid';
  items?: { icon: any; title: string; desc: string }[];
  gridItems?: { icon: any; title: string; desc: string }[];
  gallery?: string[];
  stackedGallery?: string[];
  quote?: string;
  stats?: { label: string; value: string }[];
  partitionSchema?: { label: string; thickness: string; color: string }[];
}

const contentSections: ContentSection[] = [
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
    id: 'struttura',
    num: '05',
    title: 'Struttura',
    subtitle: 'Solidità & Sicurezza',
    image: 'https://lh3.googleusercontent.com/d/1Cam95-1LwLw7x9w-U2gYRShChNy46bCP',
    text: [
      `La struttura portante è in **cemento armato**, eseguita nel rispetto delle normative vigenti e delle più aggiornate disposizioni **antisismiche**.`,
      `Tale impostazione costruttiva costituisce la base di un fabbricato solido, durevole e tecnicamente evoluto, garantendo la massima sicurezza per te e la tua famiglia.`
    ],
    items: [
      { icon: ShieldCheck, title: 'Sicurezza Antisismica', desc: 'Rispetto delle normative **NTC 2018**.' },
      { icon: Layers, title: 'Cemento Armato', desc: 'Struttura solida e duratura nel tempo.' }
    ]
  },
  {
    id: 'tamponature',
    num: '06',
    title: 'Tamponature esterne e isolamento dell’involucro',
    subtitle: 'Qualità Termoigrometrica',
    text: [
      `Le tamponature esterne risultano già realizzate mediante blocchi in laterizio tipo **Poroton FV Plus MVI35019**, dimensioni 24,5 × 35 × 19 cm, scelti per le loro caratteristiche di resistenza, inerzia termica e contributo alle prestazioni termoigrometriche dell’edificio. L’involucro già definito rappresenta uno degli elementi più qualificanti del complesso, poiché contribuisce in modo diretto al benessere interno e al risparmio energetico.`,
      `L’isolamento termico dell’involucro risulta già garantito dall’impiego dei blocchi di tamponatura sopra descritti, dalla corretta risoluzione dei ponti termici in corrispondenza di travi e pilastri in cemento armato e dalla qualità prestazionale dei serramenti esterni. La continuità del sistema involucro-serramento è stata impostata per limitare le dispersioni, migliorare la stabilità termica degli ambienti e accrescere l’efficienza energetica dell’abitazione.`,
      `L’insieme delle soluzioni adottate è finalizzato a migliorare il comfort interno degli ambienti, contenere la dispersione energetica, contribuire alla stabilità termoigrometrica dell’edificio e valorizzare il profilo energetico dell’intervento, rendendo l’involucro un elemento centrale della qualità abitativa proposta.`
    ]
  },
  {
    id: 'isolamento-acustico',
    num: '07',
    title: 'Divisori tra appartamenti e isolamento acustico',
    subtitle: 'Comfort & Riservatezza',
    text: [
      `I divisori tra unità immobiliari contigue sono realizzati con sistema a **doppia fodera** in laterizio alveolato, costituito da due strati di muratura intervallati da isolante acustico dello spessore di **5 cm**, al fine di incrementare le prestazioni fonoisolanti tra appartamenti adiacenti.`,
      `Tale soluzione costruttiva contribuisce a garantire un miglior comfort abitativo e una più efficace separazione acustica tra le diverse unità, in linea con il livello qualitativo dell’intervento.`
    ],
    partitionSchema: [
      { label: 'Laterizio Alveolato', thickness: '12 cm', color: 'bg-orange-200' },
      { label: 'Isolante Acustico', thickness: '5 cm', color: 'bg-brand-sage/40' },
      { label: 'Laterizio Alveolato', thickness: '12 cm', color: 'bg-orange-200' }
    ]
  },
  {
    id: 'tramezzature',
    num: '08',
    title: 'Tramezzature interne',
    subtitle: 'Flessibilità & Leggerezza',
    text: [
      `Le tramezzature interne delle singole unità immobiliari saranno realizzate con pannelli di **gessofibra** su struttura in alluminio, soluzione che consente buona regolarità delle superfici, contenimento dei pesi e flessibilità nella distribuzione interna degli ambienti.`,
      `Le pareti interne saranno opportunamente finite e predisposte per ricevere le lavorazioni di completamento e tinteggiatura.`
    ]
  },
  {
    id: 'facciate',
    num: '09',
    title: 'Facciate esterne',
    subtitle: 'Immagine Moderna',
    text: [
      `Le facciate del complesso risultano realizzate con **intonaco termico**, integrate da rivestimenti in piastrelle estetiche e completate con pitturazione idonea alla protezione dagli agenti atmosferici, così da coniugare immagine architettonica e prestazioni dell’involucro.`,
      `La composizione dei prospetti è definita in coerenza con il progetto architettonico del complesso, con l’obiettivo di conferire all’intervento un’immagine moderna, ordinata e durevole nel tempo, valorizzando al contempo le prestazioni complessive del fabbricato.`
    ]
  },
  {
    id: 'copertura',
    num: '10',
    title: 'Copertura',
    subtitle: 'Protezione & Efficienza',
    text: [
      `La copertura risulta realizzata in **cemento armato**, con idoneo sistema di isolamento costituito da pannelli in **EPS** dello spessore di **10 cm**, completato da strato di guaina elastomerica e finitura superiore in guaina ardesiata.`,
      `La stratigrafia adottata è finalizzata a garantire adeguate prestazioni di impermeabilizzazione, protezione dell’edificio e contributo al contenimento delle dispersioni termiche, migliorando il comportamento complessivo della copertura in termini di efficienza e durabilità.`
    ]
  },
  {
    id: 'serramenti',
    num: '11',
    title: 'Serramenti esterni e oscuranti',
    subtitle: 'Qualità Nusco',
    text: [
      `I serramenti esterni risultano realizzati in **PVC con doppio vetro**, sistema **Power 9000 della Nusco S.p.A.**, scelti per le loro prestazioni in termini di isolamento termico, tenuta all’aria e all’acqua, comfort abitativo e contenimento dei consumi energetici.`,
      `Gli oscuranti risultano costituiti da **tapparelle in alluminio coibentato**, idonee a migliorare la protezione solare, la durabilità e il comfort degli ambienti interni, contribuendo al controllo dell’irraggiamento e al miglioramento delle prestazioni dell’involucro.`
    ]
  },
  {
    id: 'porte',
    num: '12',
    title: 'Portoncino d’ingresso e porte interne',
    subtitle: 'Sicurezza & Personalità',
    text: [
      `Ogni unità immobiliare sarà dotata di **portoncino blindato di ingresso in classe 3**, idoneo a garantire sicurezza, protezione e adeguato inserimento estetico rispetto al livello qualitativo del fabbricato.`,
      `Le porte interne saranno previste secondo la tipologia standard di capitolato, con modelli in finitura microlaminata o equivalente, in colorazioni classiche quali bianco, noce nazionale o similari, selezionabili dal cliente tra quelle comprese nel campionario standard predisposto dalla parte venditrice presso i propri fornitori di riferimento.`,
      `Eventuali richieste relative a modelli, finiture, soluzioni fuori misura o varianti non comprese nel campionario standard costituiranno extra capitolato e saranno oggetto di separata valutazione economica, compatibilmente con lo stato di avanzamento dei lavori.`
    ]
  },
  {
    id: 'pavimenti',
    num: '13',
    title: 'Pavimenti e rivestimenti interni',
    subtitle: 'Estetica di Pregio',
    layout: 'grid-image',
    image: 'https://lh3.googleusercontent.com/d/1m1GUAz1t_nIE3H-Am-97TQKg8-EFnIcc',
    gallery: [
      'https://lh3.googleusercontent.com/d/165gudghf97_E7hr2LFv-Der6E3whOFUk',
      'https://lh3.googleusercontent.com/d/1AYkofL2NoeyiVGUhr0P6poJZHuDTfJp7',
      'https://lh3.googleusercontent.com/d/11I19tS720A9R4RgOwuAThAHnSGMSWwHy'
    ],
    text: [
      `Le pavimentazioni interne delle unità immobiliari, relative alla zona giorno, alla zona notte e ai locali bagno, saranno previste secondo una tipologia standard di capitolato che consente all’acquirente di selezionare il materiale preferito tra le collezioni messe a disposizione presso i fornitori indicati dalla società venditrice.`,
      `La fornitura standard comprenderà pavimenti in gres porcellanato di primaria qualità, disponibili in diversi effetti estetici e formati, scelti dal cliente tra le soluzioni comprese nel campionario base. A titolo indicativo, il campionario potrà comprendere prodotti di marchi quali **SAIME, Ragno, Piemme** e similari.`,
      `Nei bagni e sulla parete della cucina saranno previsti rivestimenti coordinati coordinati con il livello qualitativo dell’intervento, selezionabili dal cliente. I rivestimenti saranno previsti fino a un’altezza massima indicativa di **2,30 m** da terra.`,
      `L’acquirente potrà personalizzare l’aspetto estetico dell’immobile scegliendo i materiali compresi nella tipologia standard; eventuali richieste extra saranno soggette a relativo adeguamento economico.`
    ]
  },
  {
    id: 'sanitari',
    num: '14',
    title: 'Sanitari, rubinetterie e tinteggiature interne',
    subtitle: 'Benessere Quotidiano',
    layout: 'stacked-grid',
    stackedGallery: [
      'https://lh3.googleusercontent.com/d/1IyAtLSCo_vTief1zcD9-PeenRhRGNdZO',
      'https://lh3.googleusercontent.com/d/1PxbfnS8IDcw6PhDTc9OJuab5YNXopJs1',
      'https://lh3.googleusercontent.com/d/1g1RkSdGc033STiakN5_UYnKF4IHeW1l-'
    ],
    text: [
      `I sanitari dei bagni saranno in porcellana di primaria qualità (es. **RAK Ceramics**) secondo la tipologia standard di capitolato. Le rubinetterie saranno selezionabili dal cliente tra le proposte disponibili presso i fornitori di riferimento.`,
      `Nei bagni sarà previsto piatto doccia slim; il box doccia non è incluso nella fornitura standard. Nel bagno padronale potrà essere prevista la vasca o la doccia in funzione della tipologia dell’unità e delle scelte del cliente.`,
      `Le superfici interne delle unità immobiliari saranno rifinite mediante pitturazione con prodotti **Caparol** o similari; nei bagni saranno utilizzati prodotti specifici antimuffa.`
    ]
  },
  {
    id: 'marmi-balconi',
    num: '15',
    title: 'Soglie, davanzali, balconi e terrazzi',
    subtitle: 'Dettagli di Valore',
    bgImage: 'https://lh3.googleusercontent.com/d/11kSOvJJYAma5Lb5K0ee3XlQ8CEE_uOtI',
    text: [
      `Le soglie e i davanzali saranno realizzati in **marmo Verde Marina**, materiale scelto per le sue caratteristiche estetiche, di resistenza e di durabilità.`,
      `I balconi e i terrazzi saranno pavimentati con gres porcellanato per esterni **SAIME**, idoneo all’utilizzo esterno e scelto per garantire resistenza agli agenti atmosferici, praticità di manutenzione e continuità estetica.`
    ]
  },
  {
    id: 'gas-free',
    num: '16',
    title: 'Abitazioni gas free: impianto termico, climatizzazione e acqua calda sanitaria',
    subtitle: 'Efficienza Sostenibile',
    text: [
      `Le unità immobiliari sono concepite secondo una logica impiantistica **totalmente elettrica**, risultando pertanto completamente svincolate dall’utilizzo del gas per una casa più moderna, più sicura e pienamente coerente con la sostenibilità.`,
      `L’impianto termico è previsto con sistema alimentato da **pompa di calore** ad alta efficienza per gestire in modo integrato riscaldamento, raffrescamento e produzione di acqua calda sanitaria.`,
      `L’emissione è affidata a **fan coil** installati negli ambienti principali e termoarredi nei bagni. Il sistema è collegato ad un serbatoio di accumulo da **280 litri** per l’acqua calda sanitaria.`
    ]
  },
  {
    id: 'domotica-solar',
    num: '17',
    title: 'Impianto elettrico, domotica, fotovoltaico con accumulo, videocitofono e antifurto',
    subtitle: 'Tecnologia Evoluta',
    text: [
      `L’impianto elettrico è di **Livello 2** con componentistica **Bticino** e sistema di domotica **Living Now**, che consente il controllo di tapparelle, punti luce, consumi e condizionamento.`,
      `Ogni unità è dotata di impianto **fotovoltaico di 4 kW** con sistema di **accumulo da 5 kWh**, riducendo il prelievo dalla rete e valorizzando il risparmio energetico.`,
      `Il complesso è dotato di videocitofono **Comelit PoE VIP**. Ogni unità è predisposta o dotata di impianto antifurto filare Bticino, integrabile nel sistema domotico.`
    ]
  },
  {
    id: 'ascensore',
    num: '18',
    title: 'Ascensore',
    subtitle: 'Accessibilità Schindler',
    text: [
      `Ciascun fabbricato sarà dotato di impianto ascensore a servizio di tutti i piani, compreso il piano interrato, con capienza di **6 persone** e portata pari a **480 kg**, di marca **Schindler**.`,
      `L’impianto sarà realizzato in conformità alla normativa vigente per garantire comfort, funzionalità e continuità di servizio.`
    ],
    stats: [
      { label: 'Capienza', value: '6 Persone' },
      { label: 'Portata', value: '480 Kg' }
    ]
  },
  {
    id: 'box-auto-comuni',
    num: '19',
    title: 'Box auto, Aree esterne comuni e Impianti',
    subtitle: 'Praticità & Servizi',
    layout: 'split-text',
    text: [
      `### Box auto e piano interrato\n\nOgni appartamento sarà dotato di **box auto privato** con pavimentazione in cemento levigato e lisciato. Saranno inoltre presenti posti auto nelle aree esterne al parco. Il piano interrato sarà completato coerentemente con la funzione di autorimessa.`,
      `### Aree esterne e impianti condominiali\n\nI fabbricati sono inseriti nel **Parco Degli Oleandri**. Ciascun fabbricato dispone di impianto di **autoclave**, **addolcimento delle acque** e serbatoio da **2.000 litri** per garantire continuità di servizio e qualità della risorsa idrica.`
    ]
  },
  {
    id: 'clausole',
    num: '20',
    title: 'Personalizzazioni, materiali equivalenti e clausole finali',
    subtitle: 'Garanzie & Trasparenza',
    text: [
      `Il presente capitolato individua una tipologia standard di materiali e finiture. Le parti strutturali, l'involucro edilizio e tamponature risultano già definite; restano selezionabili finiture e componenti interni.`,
      `Le immagini, i render e le planimetrie hanno valore esclusivamente descrittivo e commerciale. Ai fini della compravendita faranno fede esclusivamente il presente capitolato descrittivo di vendita e gli accordi sottoscritti tra le parti.`
    ]
  },
  {
    id: 'riepilogo-finale',
    num: '21',
    title: 'I nostri appartamenti in breve',
    subtitle: 'Sintesi Tecnica',
    bgImage: 'https://lh3.googleusercontent.com/d/1g5q2jyD_P3KykPulYJxVmDDUixscu0KR',
    layout: 'standard',
    gridItems: [
      { icon: Thermometer, title: 'Climatizzazione', desc: 'Pompa di calore, fan coil e accumulo 280lt per ACS.' },
      { icon: Cpu, title: 'Domotica', desc: 'Sistema Living Now Bticino per luci e tapparelle.' },
      { icon: Zap, title: 'Fotovoltaico', desc: 'Impianto da 4 kW con accumulo da 5 kWh per unità.' },
      { icon: Smartphone, title: 'Smart Access', desc: 'Videocitofono Comelit PoE VIP e antifurto Bticino.' }
    ],
    text: []
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
          <div className="mt-16 max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-[40px] p-8 md:p-12 shadow-sm border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left">
              {[
                { icon: MapPin, label: 'UBICAZIONE', value: 'Via Circumvallazione, V° Traversa n. 9' },
                { icon: Building2, label: 'COMPOSIZIONE', value: '2 Edifici, 3 Piani fuori terra' },
                { icon: Layers, label: 'UNITÀ', value: '12 Appartamenti per edificio' },
                { icon: Maximize, label: 'TIPOLOGIE', value: '3 e 4 Vani con Terrazzi/Giardini' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-brand-sage/5 shrink-0">
                    <item.icon className="w-6 h-6 text-[#C2A878]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-xl lg:text-2xl font-serif italic text-slate-800 leading-tight">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex justify-center mt-12"
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
            className={`py-24 lg:py-48 relative overflow-hidden ${isOdd ? 'bg-brand-dark text-white/90' : 'bg-brand-cream'}`}
          >
            {section.bgImage && (
              <div className="absolute inset-0 z-0">
                <img 
                  src={section.bgImage} 
                  alt="" 
                  className={`w-full h-full object-cover ${section.id === 'riepilogo-finale' ? 'opacity-30 grayscale' : 'opacity-50 ' + (isOdd ? 'grayscale invert' : 'grayscale')}`}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 ${section.id === 'riepilogo-finale' ? 'bg-brand-sage/60' : (isOdd ? 'bg-brand-dark/40' : 'bg-brand-cream/40')}`} />
              </div>
            )}
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
              {section.id === 'riepilogo-finale' ? (
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <div className="accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 text-white/80">
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif italic text-white">
                      {section.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {section.gridItems?.map((item, i) => (
                      <div key={i} className="bg-white/80 backdrop-blur-sm p-8 rounded-[32px] border border-white shadow-sm text-center">
                        <div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <item.icon className="w-6 h-6 text-[#C2A878]" />
                        </div>
                        <h3 className="text-lg font-serif italic mb-2 text-slate-800">{item.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[40px] border border-white shadow-sm flex flex-col md:flex-row items-center gap-10 text-left">
                    <div className="w-20 h-20 bg-brand-cream rounded-[24px] flex items-center justify-center shrink-0">
                      <Building2 className="w-10 h-10 text-[#C2A878]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif italic mb-3 text-slate-800">Dotazioni Condominiali</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Ascensore <strong>Schindler</strong> (6 persone), impianto autoclave, addolcitore acque e serbatoio da 2.000 litri. Box auto privati con pavimentazione in cemento levigato.
                      </p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-3 px-4 py-2 bg-brand-cream/50 rounded-xl border border-brand-sage/10">
                          <Users className="w-4 h-4 text-brand-sage" />
                          <span className="text-xs font-bold text-slate-700">6 Persone</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 bg-brand-cream/50 rounded-xl border border-brand-sage/10">
                          <Weight className="w-4 h-4 text-brand-sage" />
                          <span className="text-xs font-bold text-slate-700">630 Kg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : section.layout === 'stacked-grid' ? (
                /* Stacked Grid Layout (One wide top image, two below) */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                  <div className={index % 4 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                    <div className={`accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className={`text-4xl lg:text-6xl font-serif italic mb-8 leading-tight ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                      {section.title}
                    </h2>
                    <div className={`space-y-6 mb-12 markdown-body text-justify ${isOdd ? 'text-white/60' : 'text-slate-600'}`}>
                      {section.text.map((p, i) => (
                        <div key={i} className="leading-relaxed">
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 4 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Top Wide Image */}
                      <div className="col-span-2">
                        <motion.div
                          whileInView={{ opacity: 1, y: 0 }}
                          initial={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.8 }}
                        >
                          <img 
                            src={section.stackedGallery?.[0]} 
                            alt="" 
                            className="w-full h-48 object-cover rounded-[32px] shadow-lg"
                            referrerPolicy="no-referrer"
                          />
                        </motion.div>
                      </div>
                      {/* Bottom Two Images */}
                      <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <img 
                          src={section.stackedGallery?.[1]} 
                          alt="" 
                          className="w-full h-64 object-cover rounded-[32px] shadow-lg"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                      <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <img 
                          src={section.stackedGallery?.[2]} 
                          alt="" 
                          className="w-full h-64 object-cover rounded-[32px] shadow-lg"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : section.layout === 'split-text' ? (
                /* Split Text Layout (Two columns with line in the middle) */
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-16">
                    <div className={`accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className={`text-5xl font-serif italic mb-8 leading-tight ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                      {section.title}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
                    {/* Vertical Divider */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200" />
                    
                    <div className="space-y-6 markdown-body text-left">
                      <ReactMarkdown>{section.text[0]}</ReactMarkdown>
                    </div>
                    <div className="space-y-6 markdown-body text-left">
                      <ReactMarkdown>{section.text[1]}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ) : isGridImage ? (
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
                <div className={`grid grid-cols-1 ${(!section.items && !section.image && !section.gridItems) ? 'max-w-3xl mx-auto text-center' : 'lg:grid-cols-2 gap-24'}`}>
                  <div className={(!section.items && !section.image && !section.gridItems) ? 'order-1' : (index % 4 === 0 ? 'order-1' : 'order-1 lg:order-2')}>
                    <div className={`accent-text text-[10px] uppercase tracking-[0.4em] font-bold mb-4 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                      {section.num} — {section.subtitle}
                    </div>
                    <h2 className={`text-5xl font-serif italic mb-8 leading-tight ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                      {section.title}
                    </h2>
                    <div className={`space-y-6 markdown-body ${isOdd ? 'text-white/60' : 'text-slate-600'} ${(!section.items && !section.image && !section.gridItems) ? 'mx-auto' : ''}`}>
                      {section.text.map((p, i) => (
                        <div key={i} className="leading-relaxed">
                          <ReactMarkdown>{p}</ReactMarkdown>
                        </div>
                      ))}
                    </div>

                    {section.stats && (
                      <div className={`mt-16 pt-16 flex justify-center items-center gap-16 border-t ${isOdd ? 'border-white/10' : 'border-slate-200'} ${(!section.items && !section.image && !section.gridItems) ? 'mx-auto max-w-sm' : ''}`}>
                        {section.stats.map((stat, idx) => (
                          <React.Fragment key={idx}>
                            <div className="text-center">
                              <div className={`text-[10px] uppercase tracking-[0.3em] font-bold mb-3 ${isOdd ? 'text-brand-sage' : 'text-brand-sage'}`}>
                                {stat.label}
                              </div>
                              <div className={`text-3xl font-serif italic ${isOdd ? 'text-white' : 'text-slate-800'}`}>
                                {stat.value}
                              </div>
                            </div>
                            {idx < section.stats.length - 1 && (
                              <div className={`w-px h-12 ${isOdd ? 'bg-white/10' : 'bg-slate-200'}`} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {section.partitionSchema && (
                      <div className="mt-16 pt-16 border-t border-slate-200">
                        <div className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-sage text-center">
                          Schema Stratigrafico Divisorio
                        </div>
                        <div className="flex flex-col gap-1 max-w-md mx-auto relative group">
                          {section.partitionSchema.map((layer, idx) => (
                            <div key={idx} className="relative flex items-center justify-center">
                              <div 
                                className={`w-full h-16 ${layer.color} border border-black/5 rounded-sm flex items-center justify-center transition-all duration-500 group-hover:h-20`}
                              >
                                <div className="text-center px-4">
                                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-800/60 leading-none mb-1">
                                    {layer.label}
                                  </div>
                                  <div className="text-sm font-serif italic text-slate-800">
                                    {layer.thickness}
                                  </div>
                                </div>
                              </div>
                              {/* Connector Lines */}
                              {idx < section.partitionSchema!.length - 1 && (
                                <div className="absolute -left-6 top-full h-1 w-px bg-slate-300" />
                              )}
                            </div>
                          ))}
                          {/* Total Indicator */}
                          <div className="absolute -right-8 top-0 bottom-0 flex flex-col justify-center">
                            <div className="h-full w-px bg-slate-300 relative">
                              <div className="absolute top-0 left-1/2 -ml-1 w-2 h-px bg-slate-300" />
                              <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-px bg-slate-300" />
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold tracking-widest text-slate-400 whitespace-nowrap">
                                TOTALE ~ 29 CM
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {(section.items || section.image || (!section.items && !section.image && !section.gridItems && false)) && (
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
                          {section.quote && (
                            <div className={`absolute -bottom-12 -left-12 p-8 max-w-xs ${isOdd ? 'bg-white/10 backdrop-blur-md rounded-[32px]' : 'natural-card'}`}>
                              <p className={`text-sm italic ${isOdd ? 'text-white/80' : 'text-slate-500'}`}>
                                "{section.quote}"
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
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
