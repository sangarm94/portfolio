import { useState } from "react";
import { Link, Route, Routes } from "react-router";

import DeskBot from "./pages/DeskBot";
import ETNAFlix from "./pages/ETNAFlix";
import FashionFolio from "./pages/FashionFolio";

const projects = [
  {
    title: "DeskBot",
    subtitle: "Robot assistant intelligent",
    description:
      "Conception d'un robot connecté basé sur un ESP32-S3, capable d'interagir avec l'utilisateur grâce à l'intelligence artificielle, la reconnaissance vocale et différents composants IoT.",
    technologies: [
      "ESP32-S3",
      "C++",
      "PlatformIO",
      "FastAPI",
      "Gemini",
      "IoT",
    ],
    featured: true,
    path: "/projets/deskbot",
  },
  {
    title: "ETNAFLIX",
    subtitle: "Application mobile de découverte de films",
    description:
      "Application mobile développée avec React Native permettant de découvrir des films, consulter leurs informations et récupérer les données depuis l'API TMDB.",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "TMDB API",
    ],
    path: "/projets/etnaflix",
  },
  {
    title: "FashionFolio",
    subtitle: "Assistant vestimentaire intelligent",
    description:
      "Application mobile combinant dressing numérique, assistant styliste basé sur l'intelligence artificielle et génération de tenues personnalisées.",
    technologies: [
      "React Native",
      "Python",
      "FastAPI",
      "Gemini",
      "SQLite",
    ],
    path: "/projets/fashionfolio",
  },
];

const skills = [
  {
    title: "Développement",
    description:
      "Développement web, mobile et programmation générale.",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C++",
      "Go",
      "HTML",
      "CSS",
      "React",
      "React Native",
    ],
    icon: "</>",
  },
  {
    title: "Systèmes & Réseaux",
    description:
      "Administration de postes, diagnostic et notions de fonctionnement réseau.",
    items: [
      "Windows 10/11",
      "Linux",
      "TCP/IP",
      "Configuration de postes",
      "Diagnostic",
      "Support utilisateurs",
      "GLPI",
    ],
    icon: ">_",
  },
  {
    title: "Backend & API",
    description:
      "Création et consommation d'API pour connecter différents services.",
    items: [
      "FastAPI",
      "Flask",
      "REST API",
      "SQLite",
      "SQLAlchemy",
      "TMDB API",
      "Gemini API",
    ],
    icon: "{ }",
  },
  {
    title: "DevOps & Cloud",
    description:
      "Versionnement, conteneurisation et découverte des environnements cloud.",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "LocalStack",
      "AWS S3",
      "WSL",
    ],
    icon: "∞",
  },
  {
    title: "IoT & Embarqué",
    description:
      "Programmation de microcontrôleurs et intégration de composants électroniques.",
    items: [
      "ESP32-S3",
      "PlatformIO",
      "Arduino",
      "OLED",
      "Capteurs",
      "Servomoteurs",
      "I2S",
      "Wi-Fi",
    ],
    icon: "◈",
  },
  {
    title: "Intelligence artificielle",
    description:
      "Intégration de services d'IA dans des applications et projets connectés.",
    items: [
      "Gemini",
      "IA conversationnelle",
      "Speech-to-Text",
      "Text-to-Speech",
      "Prompting",
      "Automatisation",
      "N8N",
    ],
    icon: "✦",
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projets/deskbot"
        element={<DeskBot />}
      />

      <Route
        path="/projets/etnaflix"
        element={<ETNAFlix />}
      />

      <Route
        path="/projets/fashionfolio"
        element={<FashionFolio />}
      />
    </Routes>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#080b12] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
        <nav className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="flex h-[76px] items-center justify-between">
            {/* LOGO */}
            <a
              href="#accueil"
              onClick={closeMenu}
              className="text-xl font-black tracking-tight"
            >
              MS<span className="text-blue-500">.</span>
            </a>

            {/* NAVIGATION DESKTOP */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#accueil"
                className="text-sm text-white transition hover:text-blue-400"
              >
                Accueil
              </a>

              <a
                href="#apropos"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                À propos
              </a>

              <a
                href="#projets"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Projets
              </a>

              <a
                href="#competences"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Compétences
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 transition hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* BOUTON CONTACT DESKTOP */}
            <a
              href="#contact"
              className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400 md:block"
            >
              Me contacter
            </a>

            {/* BOUTON HAMBURGER MOBILE */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition hover:bg-white/[0.07] md:hidden"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-white transition duration-300 ${
                    menuOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-full bg-white transition duration-300 ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-full bg-white transition duration-300 ${
                    menuOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* MENU MOBILE */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              menuOpen
                ? "max-h-[450px] border-t border-white/10 pb-5 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col pt-4">
              <MobileNavLink
                href="#accueil"
                onClick={closeMenu}
              >
                Accueil
              </MobileNavLink>

              <MobileNavLink
                href="#apropos"
                onClick={closeMenu}
              >
                À propos
              </MobileNavLink>

              <MobileNavLink
                href="#projets"
                onClick={closeMenu}
              >
                Projets
              </MobileNavLink>

              <MobileNavLink
                href="#competences"
                onClick={closeMenu}
              >
                Compétences
              </MobileNavLink>

              <MobileNavLink
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </MobileNavLink>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold transition hover:bg-blue-500"
              >
                Me contacter
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ACCUEIL */}
        <section
          id="accueil"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-6 md:pb-0 md:pt-24">
            <div className="max-w-4xl">
              {/* DISPONIBILITÉ */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 sm:mb-8 sm:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-xs text-gray-300 sm:text-sm">
                  À la recherche d'une alternance
                </span>
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
                Portfolio
              </p>

              <h1 className="text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Mohamed

                <span className="block text-gray-400">
                  Sangar.
                </span>
              </h1>

              <h2 className="mt-7 text-lg font-medium text-gray-300 sm:text-xl md:mt-8 md:text-2xl">
                Étudiant en informatique à l'ETNA
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:leading-8 md:text-lg">
                Je conçois des projets mêlant développement,
                systèmes, IoT et intelligence artificielle. Je
                recherche actuellement une alternance en tant que
                <span className="font-semibold text-white">
                  {" "}
                  technicien support informatique.
                </span>
              </p>

              {/* BOUTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projets"
                  className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500 sm:w-auto sm:px-7"
                >
                  Découvrir mes projets
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto sm:px-7"
                >
                  Me contacter
                </a>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-10 flex flex-wrap items-center gap-2 sm:mt-14 sm:gap-3">
                <span className="mb-1 mr-2 w-full text-xs font-semibold uppercase tracking-widest text-gray-600 sm:mb-0 sm:w-auto">
                  Technologies
                </span>

                {[
                  "Python",
                  "React",
                  "C++",
                  "Linux",
                  "Docker",
                  "ESP32",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section
          id="apropos"
          className="border-t border-white/10 py-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm sm:tracking-[0.35em]">
                À propos
              </p>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                De la technique aux projets
                <span className="text-gray-500">
                  {" "}
                  concrets.
                </span>
              </h2>
            </div>

            <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-base leading-8 text-gray-300 sm:text-lg">
                  Actuellement étudiant en informatique à
                  <span className="font-semibold text-white">
                    {" "}
                    l'ETNA
                  </span>
                  , je développe mes compétences à travers des
                  projets mêlant développement logiciel, systèmes,
                  réseaux, IoT et intelligence artificielle.
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  Mon expérience en tant qu'assistant technicien
                  informatique m'a permis d'évoluer dans un
                  environnement professionnel, notamment à travers
                  l'assistance aux utilisateurs, l'installation et la
                  configuration de postes informatiques ainsi que la
                  résolution d'incidents techniques.
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  Je souhaite aujourd'hui poursuivre ma formation en
                  alternance afin de renforcer mes compétences
                  techniques, gagner en expérience et contribuer
                  concrètement aux besoins informatiques d'une
                  entreprise.
                </p>
              </div>

              {/* PARCOURS */}
              <div>
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
                  Mon parcours
                </p>

                <div className="relative border-l border-white/10 pl-7 sm:pl-8">
                  <TimelineItem
                    active
                    label="Aujourd'hui"
                    title="Formation informatique"
                    organization="ETNA"
                  />

                  <TimelineItem
                    label="Expérience professionnelle"
                    title="Assistant technicien informatique"
                    organization="Mairie de Boissy-Saint-Léger"
                  />

                  <TimelineItem
                    last
                    label="Formation initiale"
                    title="Baccalauréat STMG"
                    organization="Option Gestion-Finance"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section
          id="projets"
          className="border-t border-white/10 bg-white/[0.015] py-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm sm:tracking-[0.35em]">
                Réalisations
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Mes projets
                <span className="text-gray-500">.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                Une sélection de projets mettant en avant mes
                compétences en développement mobile, intelligence
                artificielle, IoT et développement backend.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 sm:p-7 ${
                    project.featured
                      ? "border-blue-500/40 bg-blue-500/[0.06] md:col-span-2"
                      : "border-white/10 bg-white/[0.025] hover:border-white/20"
                  }`}
                >
                  {project.featured && (
                    <div className="mb-5 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 sm:mb-6">
                      Projet mis en avant
                    </div>
                  )}

                  <p className="text-sm font-medium text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-300 sm:px-3"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={project.path}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-white transition group-hover:text-blue-400 sm:mt-8"
                  >
                    Découvrir le projet
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section
          id="competences"
          className="border-t border-white/10 py-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-6">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm sm:tracking-[0.35em]">
                Compétences
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Un profil
                <span className="text-gray-500">
                  {" "}
                  polyvalent.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {skills.map((skill) => (
                <article
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-mono text-base font-black text-blue-400 sm:h-12 sm:w-12 sm:text-lg">
                    {skill.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold sm:mt-6">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {skill.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-gray-300 sm:px-3"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-white/10 py-20 sm:py-24 md:py-32"
        >
          <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-blue-500 sm:text-sm sm:tracking-[0.35em]">
                  Contact
                </p>

                <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  Construisons quelque chose
                  <span className="text-gray-500">
                    {" "}
                    ensemble.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                  Je recherche actuellement une alternance dans le
                  domaine de l'informatique, notamment en support
                  informatique et assistance utilisateurs.
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                  Vous pouvez me contacter directement par email ou
                  consulter mes projets et mon parcours professionnel.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="mailto:sangar_m@etna-alternance.net"
                    className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:-translate-y-1 hover:bg-blue-500 sm:w-auto sm:px-7"
                  >
                    Envoyer un email
                  </a>

                  <button
                    type="button"
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-gray-500 sm:w-auto sm:px-7"
                  >
                    CV bientôt disponible
                  </button>
                </div>
              </div>

              {/* COORDONNÉES */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 sm:text-sm">
                  Mes coordonnées
                </p>

                <div className="mt-7 space-y-6 sm:mt-8">
                  <ContactInfo
                    label="Email"
                    value="sangar_m@etna-alternance.net"
                    href="mailto:sangar_m@etna-alternance.net"
                  />

                  <ContactInfo
                    label="Localisation"
                    value="Île-de-France"
                  />

                  <ContactInfo
                    label="Disponibilité"
                    value="Alternance informatique"
                  />
                </div>

                <div className="mt-8 border-t border-white/10 pt-7 sm:mt-10 sm:pt-8">
                  <p className="text-sm text-gray-500">
                    Retrouvez-moi également sur
                  </p>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="https://github.com/sangarm94"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold transition hover:border-blue-500/50 hover:text-blue-400 sm:py-2"
                    >
                      GitHub ↗
                    </a>

                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-gray-600 sm:py-2"
                    >
                      LinkedIn bientôt disponible
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Mohamed Sangar. Tous droits réservés.
          </p>

          <a
            href="#accueil"
            className="transition hover:text-white"
          >
            Retour en haut ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="border-b border-white/[0.06] py-4 text-sm font-medium text-gray-300 transition hover:text-blue-400"
    >
      {children}
    </a>
  );
}

function TimelineItem({
  active = false,
  last = false,
  label,
  title,
  organization,
}) {
  return (
    <div className={`relative ${last ? "" : "pb-10 sm:pb-12"}`}>
      <span
        className={`absolute -left-[35px] top-1 h-4 w-4 rounded-full border-4 border-[#080b12] sm:-left-[37px] ${
          active
            ? "bg-blue-500"
            : "bg-gray-600"
        }`}
      />

      <p
        className={`text-sm font-semibold ${
          active
            ? "text-blue-400"
            : "text-gray-500"
        }`}
      >
        {label}
      </p>

      <h3 className="mt-2 text-lg font-bold sm:text-xl">
        {title}
      </h3>

      <p className="mt-1 text-sm text-gray-400 sm:text-base">
        {organization}
      </p>
    </div>
  );
}

function ContactInfo({ label, value, href }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className="mt-1 inline-block break-all font-semibold text-white transition hover:text-blue-400"
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 font-semibold text-white">
          {value}
        </p>
      )}
    </div>
  );
}

export default App;