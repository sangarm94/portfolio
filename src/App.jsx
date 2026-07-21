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
  },
  {
    title: "ETNAFLIX",
    subtitle: "Application mobile de découverte de films",
    description:
      "Application mobile développée avec React Native permettant de découvrir des films, consulter leurs informations et récupérer les données depuis l'API TMDB.",
    technologies: ["React Native", "Expo", "JavaScript", "TMDB API"],
  },
  {
    title: "DevOps-as-a-Chat",
    subtitle: "Assistant DevOps conversationnel",
    description:
      "Application permettant d'interagir avec des fonctionnalités DevOps à travers une interface de chat capable de distinguer informations, propositions et actions.",
    technologies: ["React", "TypeScript", "FastAPI", "Docker", "Git"],
  },
  {
    title: "FashionFolio",
    subtitle: "Assistant vestimentaire intelligent",
    description:
      "Application intégrant un dressing numérique, un assistant styliste basé sur l'intelligence artificielle et des fonctionnalités de génération de tenues.",
    technologies: ["React Native", "Python", "FastAPI", "Gemini"],
  },
  {
    title: "Hyrule Castle",
    subtitle: "Jeu RPG en ligne de commande",
    description:
      "Jeu de rôle développé en Go avec système de combat, gestion des personnages, statistiques, soins, ennemis et affrontement contre un boss.",
    technologies: ["Go", "JSON"],
  },
  {
    title: "Cloud Photo",
    subtitle: "Application Cloud avec stockage S3",
    description:
      "Application permettant d'envoyer et stocker des images dans un environnement AWS simulé à l'aide de LocalStack, Flask et Docker.",
    technologies: ["Python", "Flask", "AWS S3", "LocalStack", "Docker"],
  },
];

const skills = [
  {
    title: "Développement",
    description: "Développement web, mobile et programmation générale.",
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
    <div className="min-h-screen bg-[#080b12] text-white">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#accueil" className="text-xl font-black tracking-tight">
            MS<span className="text-blue-500">.</span>
          </a>

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

          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            Me contacter
          </a>
        </nav>
      </header>

      <main>
        {/* ACCUEIL */}
        <section
          id="accueil"
          className="relative flex min-h-screen items-center overflow-hidden"
        >
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
            <div className="max-w-4xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>

                <span className="text-sm text-gray-300">
                  À la recherche d'une alternance
                </span>
              </div>

              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                Portfolio
              </p>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Mohamed
                <span className="block text-gray-400">Sangar.</span>
              </h1>

              <h2 className="mt-8 text-xl font-medium text-gray-300 md:text-2xl">
                Étudiant en informatique à l'ETNA
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Je conçois des projets mêlant développement, systèmes, IoT et
                intelligence artificielle. Je recherche actuellement une
                alternance en tant que
                <span className="font-semibold text-white">
                  {" "}
                  technicien support informatique.
                </span>
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projets"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
                >
                  Découvrir mes projets
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Me contacter
                </a>
              </div>

              <div className="mt-14 flex flex-wrap items-center gap-3">
                <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
                  Technologies
                </span>

                {["Python", "React", "C++", "Linux", "Docker", "ESP32"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section
          id="apropos"
          className="border-t border-white/10 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                À propos
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                De la technique aux projets
                <span className="text-gray-500"> concrets.</span>
              </h2>
            </div>

            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-lg leading-8 text-gray-300">
                  Actuellement étudiant en informatique à
                  <span className="font-semibold text-white"> l'ETNA</span>, je
                  développe mes compétences à travers des projets mêlant
                  développement logiciel, systèmes, réseaux, IoT et
                  intelligence artificielle.
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  Mon expérience en tant qu'assistant technicien informatique
                  m'a permis d'évoluer dans un environnement professionnel,
                  notamment à travers l'assistance aux utilisateurs,
                  l'installation et la configuration de postes informatiques
                  ainsi que la résolution d'incidents techniques.
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  Je souhaite aujourd'hui poursuivre ma formation en alternance
                  afin de renforcer mes compétences techniques, gagner en
                  expérience et contribuer concrètement aux besoins
                  informatiques d'une entreprise.
                </p>
              </div>

              <div>
                <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                  Mon parcours
                </p>

                <div className="relative border-l border-white/10 pl-8">
                  <div className="relative pb-12">
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#080b12] bg-blue-500" />

                    <p className="text-sm font-semibold text-blue-400">
                      Aujourd'hui
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Formation informatique
                    </h3>

                    <p className="mt-1 text-gray-400">ETNA</p>
                  </div>

                  <div className="relative pb-12">
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#080b12] bg-gray-600" />

                    <p className="text-sm font-semibold text-gray-500">
                      Expérience professionnelle
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Assistant technicien informatique
                    </h3>

                    <p className="mt-1 text-gray-400">
                      Mairie de Boissy-Saint-Léger
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#080b12] bg-gray-700" />

                    <p className="text-sm font-semibold text-gray-500">
                      Formation initiale
                    </p>

                    <h3 className="mt-2 text-xl font-bold">
                      Baccalauréat STMG
                    </h3>

                    <p className="mt-1 text-gray-400">
                      Option Gestion-Finance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section
          id="projets"
          className="border-t border-white/10 bg-white/[0.015] py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                Réalisations
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Mes projets
                <span className="text-gray-500">.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                    project.featured
                      ? "border-blue-500/40 bg-blue-500/[0.06] md:col-span-2"
                      : "border-white/10 bg-white/[0.025] hover:border-white/20"
                  }`}
                >
                  {project.featured && (
                    <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      Projet mis en avant
                    </div>
                  )}

                  <p className="text-sm font-medium text-blue-400">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-7 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-8 font-semibold text-white transition group-hover:text-blue-400"
                  >
                    Découvrir le projet →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section
          id="competences"
          className="border-t border-white/10 py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                Compétences
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Un profil
                <span className="text-gray-500"> polyvalent.</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <article
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 font-mono text-lg font-black text-blue-400">
                    {skill.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {skill.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {skill.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-gray-300"
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
          className="relative overflow-hidden border-t border-white/10 py-24 md:py-32"
        >
          <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              {/* TEXTE */}
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                  Contact
                </p>

                <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                  Construisons quelque chose
                  <span className="text-gray-500"> ensemble.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                  Je recherche actuellement une alternance dans le domaine de
                  l'informatique, notamment en support informatique et
                  assistance utilisateurs.
                </p>

                <p className="mt-4 max-w-2xl leading-7 text-gray-500">
                  Vous pouvez me contacter directement par email ou consulter
                  mes projets et mon parcours professionnel.
                </p>

                {/* ACTIONS */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="mailto:sangar_m@etna-alternance.net"
                    className="rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-blue-500"
                  >
                    Envoyer un email
                  </a>

                  <a
                    href="/cv-mohamed-sangar.pdf"
                    download
                    className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    Télécharger mon CV
                  </a>
                </div>
              </div>

              {/* INFOS */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
                  Mes coordonnées
                </p>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>

                    <a
                      href="mailto:sangar_m@etna-alternance.net"
                      className="mt-1 inline-block font-semibold text-white transition hover:text-blue-400"
                    >
                      sangar_m@etna-alternance.net
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>

                    <p className="mt-1 font-semibold text-white">
                      Île-de-France
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Disponibilité
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Alternance informatique
                    </p>
                  </div>
                </div>

                {/* RÉSEAUX */}
                <div className="mt-10 border-t border-white/10 pt-8">
                  <p className="text-sm text-gray-500">
                    Retrouvez-moi également sur
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/sangarm94"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold transition hover:border-blue-500/50 hover:text-blue-400"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold transition hover:border-blue-500/50 hover:text-blue-400"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mohamed Sangar. Tous droits réservés.</p>

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

export default App;