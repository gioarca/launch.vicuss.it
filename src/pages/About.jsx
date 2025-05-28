// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";

// function About() {
//   const { t } = useTranslation();

//   // Definizione delle animazioni
//   const fadeIn = {
//     initial: { opacity: 0 },
//     whileInView: { opacity: 1 },
//     transition: { duration: 0.8 },
//     viewport: { once: true },
//   };

//   const fadeInUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.8 },
//     viewport: { once: true },
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-white pb-16"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Hero section */}
//       <section className="relative">
//         <div className="w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden">
//           <motion.img
//             src="https://images.unsplash.com/photo-1541855127-2e944b899d9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="w-full h-full object-cover object-center"
//             alt="Matera"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.5 }}
//           />
//         </div>
//       </section>

//       {/* Main content section */}
//       <section className="max-w-4xl mx-auto px-4 py-12">
//         <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             {...fadeIn}
//           >
//             <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-30 px-8 py-4 rounded-lg shadow-lg">
//               {t("welcome")}
//             </h1>
//           </motion.div>
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             {...fadeIn}
//           >
//             <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-30 px-8 py-4 rounded-lg shadow-lg">
//               {t("welcome")}
//             </h1>
//           </motion.div>

//           <motion.div className="space-y-6 text-center" {...fadeInUp}>
//             <p className="text-lg font-medium text-gray-800">
//               <span className="inline-block bg-gray-100 px-3 py-1 rounded-md">
//                 {t("borghi_initiative")}
//               </span>
//             </p>

//             <p className="text-gray-700">{t("promote_revitalization")}</p>
//             <p className="text-gray-700">{t("dedicated_to_change")}</p>

//             <motion.p
//               className="text-2xl font-bold text-red-800 my-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               {t("entrepreneurs_creators")}
//             </motion.p>

//             <p className="text-gray-700">{t("authentic_lifestyle")}</p>
//             <p className="text-gray-700">{t("remember_roots")}</p>

//             <motion.p
//               className="text-xl font-bold text-red-800 my-6"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               {t("slow_and_authentic")}
//             </motion.p>

//             <p className="text-gray-700">{t("find_villages")}</p>
//             <p className="text-gray-700">{t("shared_vision")}</p>
//           </motion.div>

//           <motion.hr
//             className="my-8 border-gray-200"
//             initial={{ width: "0%" }}
//             whileInView={{ width: "100%" }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           />

//           <motion.div
//             className="space-y-6 text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             <p className="text-lg font-medium text-gray-800">
//               {t("curious_about_project")}
//             </p>
//             <p className="text-gray-700 mb-6">{t("click_to_learn_more")}</p>

//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               className="inline-block"
//             >
//               <a href="/#contact">
//                 <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
//                   {t("signUp")}
//                 </button>
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }

// export default About;

// import { motion } from "framer-motion";

// function About() {
//   // Testi in italiano (sostituisce useTranslation)
//   const t = (key) => {
//     const translations = {
//       welcome: "Benvenut*!",
//       usp: "Immergiti nella magia dei piccoli centri storici italiani, dove ogni pietra racconta una storia millenaria e ogni vicolo nasconde tesori autentici da scoprire.",
//       callToActionButtonText: "Scopri VICUS",
//       whatIsVicus: "Cos'è VICUS?",
//       description1:
//         "Una piattaforma che collega giovani professionisti nel digitale, creativi, sviluppatori, digital marketers con una missione chiara:",
//       description2: "riscoprire il SUD, viverlo, lavorarci.",
//       features_title: "Per remote workers e freelancers",
//       points1:
//         "Spazi di coworking attrezzati: dove produttività e relax si incontrano.",
//       points2: "Connessioni veloci: per lavorare ovunque senza compromessi.",
//       points3:
//         "Esperienze autentiche: dalla cucina locale ai tour culturali, vivi il borgo come un abitante.",
//       feature2_title:
//         "Per un weekend lungo, un mese o solo un'esperienza unica",
//       points_1: "Trova alloggi accessibili e immersi nella storia.",
//       points_2:
//         "Abbraccia uno stile di vita più slow, senza rinunciare al comfort moderno.",
//       points_3:
//         "Scopri borghi selezionati per qualità della vita, bellezza e servizi.",
//       whyChooseUs: "Perché VICUS è il tuo match perfetto?",
//       uniqueSellingPointsTitle: "Una community di visionari",
//       uniqueSellingPointsDescription:
//         "Professionisti e lavoratori da remoto che condividono il desiderio di un cambiamento reale.",
//       uniqueSellingPointsTitle2: "Un pacchetto completo",
//       uniqueSellingPointsDescription2:
//         "Coworking, alloggi, esperienze e supporto in un'unica piattaforma.",
//       uniqueSellingPointsTitle3: "Vita autentica e connessioni genuine",
//       uniqueSellingPointsDescription3:
//         "Scopri la cultura locale, partecipa ad eventi e incontra altre persone che hanno gli stessi tuoi interessi o anche no! 😉",
//       callToActionHeadline: "Ti immagini qui?",
//       callToActionBody:
//         "Svegliati con la vista sulle colline, lavora in un coworking di design, e concludi la giornata gustando i sapori autentici del borgo. Questo è VICUS: il tuo stile di vita ideale.",
//       signUp: "Cambia il tuo stile di vita",
//     };
//     return translations[key] || key;
//   };

//   // Animazioni ottimizzate
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 },
//     viewport: { once: true, margin: "-100px" },
//   };

//   const staggerContainer = {
//     initial: {},
//     whileInView: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const fadeIn = {
//     initial: { opacity: 0 },
//     whileInView: { opacity: 1 },
//     transition: { duration: 0.8 },
//     viewport: { once: true },
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section Migliorata */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <motion.div
//           className="absolute inset-0 z-0"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1541855127-2e944b899d9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             className="w-full h-full object-cover"
//             alt="Matera"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </motion.div>

//         <motion.div
//           className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             {t("welcome")}
//           </h1>
//           <motion.p
//             className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.9 }}
//             transition={{ duration: 1, delay: 0.8 }}
//           >
//             {t("usp")}
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.2 }}
//           >
//             <a href="/#contact" className="inline-block">
//               <button className="bg-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
//                 {t("callToActionButtonText")}
//               </button>
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Cosa è VICUS */}
//           <motion.div
//             className="text-center mb-20"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="whileInView"
//           >
//             <motion.h2
//               className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
//               variants={fadeInUp}
//             >
//               {t("whatIsVicus")}
//             </motion.h2>

//             <motion.div
//               className="max-w-4xl mx-auto space-y-8"
//               variants={staggerContainer}
//             >
//               <motion.p
//                 className="text-xl md:text-2xl text-gray-700 leading-relaxed"
//                 variants={fadeInUp}
//               >
//                 {t("description1")}
//               </motion.p>

//               <motion.p
//                 className="text-3xl md:text-4xl font-bold text-red-800"
//                 variants={fadeInUp}
//               >
//                 {t("description2")}
//               </motion.p>
//             </motion.div>
//           </motion.div>

//           {/* Features Grid */}
//           <motion.div
//             className="grid md:grid-cols-2 gap-16 mb-20"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="whileInView"
//           >
//             {/* Per Remote Workers */}
//             <motion.div
//               className="bg-gray-50 rounded-2xl p-8 md:p-12"
//               variants={fadeInUp}
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
//                 {t("features_title")}
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points1")}
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points2")}
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points3")}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Per Esperienze */}
//             <motion.div
//               className="bg-red-50 rounded-2xl p-8 md:p-12"
//               variants={fadeInUp}
//             >
//               <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
//                 {t("feature2_title")}
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points_1")}
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points_2")}
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 bg-red-800 rounded-full mt-3 flex-shrink-0"></div>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {t("points_3")}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* USP Section */}
//           <motion.div
//             className="text-center mb-20"
//             variants={staggerContainer}
//             initial="initial"
//             whileInView="whileInView"
//           >
//             <motion.h2
//               className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
//               variants={fadeInUp}
//             >
//               {t("whyChooseUs")}
//             </motion.h2>

//             <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//               <motion.div className="text-center" variants={fadeInUp}>
//                 <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-6 flex items-center justify-center">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-gray-900">
//                   {t("uniqueSellingPointsTitle")}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {t("uniqueSellingPointsDescription")}
//                 </p>
//               </motion.div>

//               <motion.div className="text-center" variants={fadeInUp}>
//                 <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-6 flex items-center justify-center">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-gray-900">
//                   {t("uniqueSellingPointsTitle3")}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {t("uniqueSellingPointsDescription3")}
//                 </p>
//               </motion.div>

//               <motion.div className="text-center" variants={fadeInUp}>
//                 <div className="w-16 h-16 bg-red-800 rounded-full mx-auto mb-6 flex items-center justify-center">
//                   <svg
//                     className="w-8 h-8 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
//                     />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-gray-900">
//                   {t("uniqueSellingPointsTitle2")}
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   {t("uniqueSellingPointsDescription2")}
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden"
//             {...fadeIn}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//             <div className="relative z-10">
//               <motion.h2
//                 className="text-3xl md:text-5xl font-bold mb-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//               >
//                 {t("callToActionHeadline")}
//               </motion.h2>

//               <motion.p
//                 className="text-xl md:text-2xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 0.95, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 {t("callToActionBody")}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 viewport={{ once: true }}
//               >
//                 <a href="/#contact">
//                   <button className="bg-white text-red-800 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
//                     {t("signUp")}
//                   </button>
//                 </a>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default About;

import { motion } from "framer-motion";

// Sezione Testi in Italiano
const translations = {
  // Hero
  welcome: "Benvenut*!",
  usp: "Immergiti nella magia dei piccoli centri storici italiani, dove ogni pietra racconta una storia millenaria e ogni vicolo nasconde tesori autentici da scoprire.",
  callToActionButtonText: "Scopri VICUS",

  // Cos'è VICUS
  whatIsVicus: "Cos'è VICUS?",
  description1:
    "Una piattaforma che collega giovani professionisti nel digitale, creativi, sviluppatori e digital marketers con una missione chiara:",
  description2: "riscoprire il SUD, viverlo, lavorarci.",

  // Features per Remote Workers
  features_title: "Per remote workers e freelancers",
  remotePoints: [
    "Spazi di coworking attrezzati: dove produttività e relax si incontrano.",
    "Connessioni veloci: per lavorare ovunque senza compromessi.",
    "Esperienze autentiche: dalla cucina locale ai tour culturali, vivi il borgo come un abitante.",
  ],

  // Features per Esperienze
  experience_title: "Per un weekend lungo, un mese o solo un'esperienza unica",
  experiencePoints: [
    "Trova alloggi accessibili e immersi nella storia.",
    "Abbraccia uno stile di vita più slow, senza rinunciare al comfort moderno.",
    "Scopri borghi selezionati per qualità della vita, bellezza e servizi.",
  ],

  // USP
  whyChooseUs: "Perché VICUS è il tuo match perfetto?",
  uspCards: [
    {
      title: "Una community di visionari",
      description:
        "Professionisti e lavoratori da remoto che condividono il desiderio di un cambiamento reale.",
    },
    {
      title: "Un pacchetto completo",
      description:
        "Coworking, alloggi, esperienze e supporto in un'unica piattaforma.",
    },
    {
      title: "Vita autentica e connessioni genuine",
      description:
        "Scopri la cultura locale, partecipa ad eventi e incontra altre persone con interessi comuni (o diversi)! 😉",
    },
  ],

  // CTA Finale
  callToActionHeadline: "Ti immagini qui?",
  callToActionBody:
    "Svegliati con la vista sulle colline, lavora in un coworking di design e concludi la giornata gustando i sapori autentici del borgo. Questo è VICUS: il tuo stile di vita ideale.",
  signUp: "Cambia il tuo stile di vita",
};

// Animazioni
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, margin: "-100px" },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const t = (key) => translations[key] || key;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1541855127-2e944b899d9a"
            alt="Matera"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t("welcome")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{t("usp")}</p>
          <a href="/#contact" className="inline-block">
            <button className="bg-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              {t("callToActionButtonText")}
            </button>
          </a>
        </motion.div>
      </section>

      {/* Cos'è VICUS */}
      <section className="py-20 px-4">
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            {...fadeInUp}
          >
            {t("whatIsVicus")}
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-700" {...fadeInUp}>
              {t("description1")}
            </p>
            <p className="text-3xl font-bold text-red-800" {...fadeInUp}>
              {t("description2")}
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {/** Remote Workers */}
          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
            {...fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              {t("features_title")}
            </h3>
            {translations.remotePoints.map((pt, i) => (
              <div key={i} className="flex items-start space-x-4 mb-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2" />
                <p className="text-gray-700">{pt}</p>
              </div>
            ))}
          </motion.div>
          {/** Experiences */}
          <motion.div
            className="bg-red-50 rounded-2xl p-8 md:p-12"
            {...fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              {t("experience_title")}
            </h3>
            {translations.experiencePoints.map((pt, i) => (
              <div key={i} className="flex items-start space-x-4 mb-4">
                <span className="w-2 h-2 bg-red-800 rounded-full mt-2" />
                <p className="text-gray-700">{pt}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* USP Cards */}
        <motion.div
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            {...fadeInUp}
          >
            {t("whyChooseUs")}
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {translations.uspCards.map((card, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-xl shadow-md"
                {...fadeInUp}
              >
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Finale */}
        <motion.div
          className="bg-gradient-to-r from-red-800 to-red-900 rounded-3xl p-8 md:p-16 text-center text-white"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("callToActionHeadline")}
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            {t("callToActionBody")}
          </p>
          <a href="/#contact">
            <button className="bg-white text-red-800 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              {t("signUp")}
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
