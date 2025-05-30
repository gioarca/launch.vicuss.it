import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BorgoForm from "../components/BorgoForm";
import scrollToSection from "../hooks/utils/scrollToSection";
import { useLocation } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
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

  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="m-7 text-center sm:mx-28">
        <h1 className="font-bold text-2xl m-5">{t("title")}</h1>
        <p className="text-lg font-medium text-gray-700">{t("tagline")}</p>
        <p className="mt-3">{t("intro")}</p>

        <a href={"/borghi"}>
          <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
            {t("callToActionButtonText")}
          </button>
        </a>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="flex text-center items-center justify-center"
          alt="Village Image"
        />
        <div className="m-5 text-center sm:m-28">
          <h2 className="text-xl font-semibold mb-3">{t("whatIsVicus")}</h2>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p className="mt-2">{t("whyChooseUs")}</p>

          <ul className="text-left mt-5 space-y-3 list-disc list-inside">
            <li>{t("points_1")}</li>
            <li>{t("points_2")}</li>
            <li>{t("points_3")}</li>
          </ul>

          <a href={"/about"}>
            <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
              {t("footerButtonText")}
            </button>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1527207821461-71c52ee17ef4?q=80&w=3101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Community Images of Villages"
        />
        <div className="m-5 sm:m-28">
          <h2 className="text-lg font-bold mb-3">
            {t("uniqueSellingPointsTitle")}
          </h2>
          <p>{t("uniqueSellingPointsDescription")}</p>
          <h2 className="text-lg font-bold mt-5 mb-3">
            {t("uniqueSellingPointsTitle2")}
          </h2>
          <p>{t("uniqueSellingPointsDescription2")}</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1597066342637-a59531e40c13?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Pietrapertosa"
        />
        <div className="m-5 sm:m-28">
          <h2 className="text-lg font-bold mb-3">
            {t("callToActionHeadline")}
          </h2>
          <p>{t("uniqueSellingPointsDescription")}</p>
          <h2 className="text-lg font-bold mt-5 mx-12 mb-3">
            {t("callToActionBody")}
          </h2>
          <a href={"/borghi"}>
            <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
              {t("callToActionButtonText")}
            </button>
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
          alt="Melfi"
        />
      </div>
      {/* Aggiungiamo sia id che ref alla sezione contatti per poterla raggiungere in entrambi i modi */}
      <section id="contact" ref={contactRef} className="mt-10 scroll-mt-20">
        <BorgoForm />
      </section>
    </motion.div>
  );
}

export default Home;
