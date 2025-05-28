import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import BorgoForm from "../components/BorgoForm";
import scrollToSection from "../hooks/utils/scrollToSection";
import { useLocation } from "react-router-dom";
import { StarIcon } from "@heroicons/react/20/solid";

function Home() {
  const contactRef = useRef(null);
  const location = useLocation();

  // Controlla se c'è un hash nell'URL
  useEffect(() => {
    // Se c'è il hash #contact nell'URL, scorriamo fino a quella sezione
    if (location.hash === "#contact" && contactRef.current) {
      // Aggiungiamo un piccolo timeout per assicurarci che il DOM sia completamente caricato
      setTimeout(() => {
        scrollToSection(contactRef);
      }, 100);
    }
  }, [location]);

  // Definizione delle sezioni con immagini e alt
  const sections = [
    {
      id: "hero",
      image:
        "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Borgo italiano tradizionale",
    },
    {
      id: "about",
      image:
        "https://images.unsplash.com/photo-1696524274209-6c18e4d0dc91?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Casamicciola - Borgo storico",
    },
    {
      id: "features",
      image:
        "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pietrapertosa - Borgo medievale",
    },
    {
      id: "cta",
      image:
        "https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Melfi - Paesaggio italiano",
    },
  ];

  // Animazione di entrata
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {/* Hero Section - Modernizzato */}
      <div className="px-4 py-12 md:py-20 max-w-6xl mx-auto text-center">
        <motion.h1
          className="font-bold text-3xl md:text-4xl mb-6 text-gray-900"
          {...fadeInUp}
        >
          La tua vita smart in borghi autentici
        </motion.h1>
        <motion.p
          className="text-xl font-medium text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Lontano dal caos, vicino alla natura
        </motion.p>
        <motion.p
          className="text-lg text-gray-600  max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Un viaggio di gruppo tra storia, tradizioni culinarie e bellezze
          nascoste.
        </motion.p>
        <motion.p
          className="text-lg text-gray-900 font-bold max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Porta il tuo pc, al resto pensiamo noi!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <a href="/#contact">
            <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
              Inizia la tua avventura
            </button>
          </a>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* About Section */}
        <section className="relative">
          <div className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={sections[0].image}
              className="w-full h-full object-cover object-center"
              alt={sections[0].alt}
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
            <motion.div
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 -mt-20 md:-mt-32 relative z-10"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                Cos'è Vicus?
              </h2>
              <p className="text-gray-700 mb-4">
                Vicus è la tua guida digitale per scoprire, lavorare e vivere i
                piccoli centri più affascinanti d'Italia. Ogni borgo ha una
                storia unica da raccontare, tradizioni autentiche da preservare
                e bellezze naturali mozzafiato da ammirare.
              </p>
              <p className="text-gray-700 mb-6">
                Attraverso la piattaforma, potrai pianificare il tuo viaggio con
                altre persone come te, scoprire eventi locali, conoscere la
                storia, le tradizioni del luogo e vivere esperienze autentiche
                lontano dal turismo di massa.
              </p>
              <p className="text-gray-800 font-medium mb-6">
                Perché scegliere Vicus?
              </p>

              <ul className="text-left space-y-3 list-disc list-inside text-gray-700 mb-8">
                <li>
                  Esperienze autentiche immerse nella storia e nella cultura
                  locale
                </li>
                <li>
                  Accoglienza professionale dal nostro staff ma allo stesso
                  tempo calorosa e genuina degli abitanti del posto
                </li>
                <li>
                  Sapori unici e tradizioni culinarie tramandate da generazioni
                </li>
                <li>
                  Connessione internet veloce e affidabile per lavorare in smart
                  working
                </li>
                <li>
                  Disconnessione garantita! La slow life sarà il tuo mantra
                </li>
              </ul>

              <div className="text-center">
                <a href="/about">
                  <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
                    Scopri di più
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Patrimonio Storico Inestimabile
                </h2>
                <p className="text-gray-700 mb-8">
                  Ogni luogo conserva secoli di storia nelle sue mura antiche,
                  nelle chiese medievali e nei palazzi nobiliari. Un patrimonio
                  artistico e culturale che ti lascerà senza fiato.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Natura e Paesaggi Unici
                </h2>
                <p className="text-gray-700 mb-8">
                  Immersi in paesaggi da cartolina, tra colline verdeggianti,
                  montagne maestose e coste mozzafiato. La natura qui è ancora
                  incontaminata e offre scenari indimenticabili.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Un pacchetto completo
                </h2>
                <p className="text-gray-700">
                  Non dovrai sbatterti per organizzare il tutto, la piattaforma
                  lo farà al posto tuo: partirai insieme a persone con gli
                  stessi interessi e passioni, condividerai esperienze uniche e
                  vivrai momenti indimenticabili.
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <img
                  src={sections[1].image}
                  className="w-full h-auto rounded-lg shadow-xl"
                  alt={sections[1].alt}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={sections[2].image}
                  className="w-full h-auto rounded-lg shadow-xl"
                  alt={sections[2].alt}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1], x: [50, 0] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Inizia il tuo viaggio oggi
                </h2>
                <p className="text-gray-700 mb-8">
                  Non aspettare oltre per vivere un'esperienza indimenticabile.
                  I borghi italiani ti aspettano con le loro storie millenarie,
                  i sapori autentici e l'ospitalità che solo l'Italia sa
                  offrire.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 md:py-24 bg-red-800 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
            <motion.h2
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight"
            >
              Pronto per la tua prossima avventura?
            </motion.h2>

            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="/#contact">
                <button
                  className="px-8 py-3 font-semibold bg-white text-red-800 rounded-full
                     hover:bg-yellow-400 hover:text-red-900
                     transition-all duration-300 ease-in-out
                     shadow-lg hover:shadow-xl
                     focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-opacity-70"
                >
                  Prenota il tuo posto
                </button>
              </a>
            </motion.div>
          </div>

          {/* Elemento decorativo di sfondo */}
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
        </section>

        {/* Final Image */}
        <div className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
          <img
            src={sections[3].image}
            className="w-full h-full object-cover object-center"
            alt={sections[3].alt}
          />
        </div>
      </div>

      {/* Reviews */}
      {/* Testimonials */}
      <section id="reviews" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-3">
              Cosa dicono i nostri viaggiatori
            </h1>
            <p className="text-gray-600">
              Le esperienze autentiche creano ricordi indimenticabili
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                name: "Marco D.",
                location: "Verona",
                text: "Un'esperienza incredibile! Ho scoperto borghi che non immaginavo esistessero. Le guide locali erano fantastiche.",
                avatar: "M",
              },
              {
                name: "Chiara M.",
                location: "Milano",
                text: "Vicus mi ha fatto innamorare dell'Italia in un modo completamente nuovo. Ogni borgo ha il suo carattere e fascino.",
                avatar: "C",
              },
              {
                name: "Cristina L.",
                location: "Firenze",
                text: "Perfetto per chi cerca autenticità. Lontano dalle folle turistiche, immerso nella vera cultura italiana.",
                avatar: "C",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-center">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-red-800 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight"
          >
            Unisciti a decine di viaggiatori
          </motion.h2>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-5">
              che hanno già scoperto la magia dei borghi italiani
            </p>
            <a href="/#contact">
              <button
                className="px-8 py-3 font-semibold bg-white text-red-800 rounded-full
                     hover:bg-yellow-400 hover:text-red-900
                     transition-all duration-300 ease-in-out
                     shadow-lg hover:shadow-xl
                     focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-opacity-70"
              >
                Prenota il tuo posto
              </button>
            </a>
          </motion.div>
        </div>

        {/* Elemento decorativo di sfondo */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-12 md:py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BorgoForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
