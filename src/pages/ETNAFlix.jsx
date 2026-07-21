import { Link } from "react-router";

function ETNAFlix() {
  const technologies = [
    "React Native",
    "Expo",
    "JavaScript",
    "TMDB API",
    "Fetch API",
    "FlatList",
  ];

  const features = [
    {
      title: "Catalogue de films",
      description:
        "Récupération et affichage dynamique d'une sélection de films depuis l'API TMDB.",
    },
    {
      title: "Affiches et informations",
      description:
        "Affichage des posters, titres et informations associées à chaque film.",
    },
    {
      title: "Interface mobile",
      description:
        "Création d'une interface pensée pour smartphone avec une présentation claire et responsive.",
    },
    {
      title: "Connexion à une API",
      description:
        "Utilisation de requêtes HTTP afin de récupérer les données de films depuis un service externe.",
    },
    {
      title: "Gestion des données",
      description:
        "Utilisation des hooks React pour charger, stocker et mettre à jour les données de l'application.",
    },
    {
      title: "Affichage en grille",
      description:
        "Organisation des films sous forme de grille avec plusieurs affiches par ligne grâce à FlatList.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080b12] text-white">
      {/* NAVBAR */}
      <header className="border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-black">
            MS<span className="text-blue-500">.</span>
          </Link>

          <Link
            to="/"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-blue-500 hover:text-white"
          >
            ← Retour au portfolio
          </Link>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 py-24 md:py-32">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                  Application mobile
                </div>

                <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
                  ETNAFLIX
                  <span className="text-blue-500">.</span>
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-300">
                  Une application mobile permettant de découvrir des films et
                  d'afficher leurs informations grâce à l'intégration de l'API
                  TMDB.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex min-h-[380px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.025]">
                <div className="text-center">
                  <div className="text-8xl">🎬</div>

                  <p className="mt-6 text-lg font-bold">
                    ETNAFLIX
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    React Native • Expo • TMDB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTE */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
                  Le projet
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Une application mobile autour du cinéma
                </h2>
              </div>

              <div className="space-y-6 leading-8 text-gray-400">
                <p>
                  ETNAFLIX, initialement développé sous le nom MyMovieApp, est
                  un projet mobile réalisé avec React Native et Expo.
                </p>

                <p>
                  L'objectif était de créer une application capable de
                  récupérer des données provenant d'une API externe et de les
                  présenter dans une interface simple et adaptée au mobile.
                </p>

                <p>
                  Le projet m'a permis de travailler sur la consommation d'une
                  API REST, la gestion des états React et l'affichage dynamique
                  de listes de données.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FONCTIONNEMENT */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Fonctionnement
            </p>

            <h2 className="mt-4 text-4xl font-black">
              De TMDB jusqu'à l'écran du smartphone
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              <Step
                number="01"
                title="Application"
                description="L'utilisateur ouvre l'application."
              />

              <Arrow />

              <Step
                number="02"
                title="Requête API"
                description="L'application envoie une requête vers TMDB."
              />

              <Arrow />

              <Step
                number="03"
                title="Données"
                description="TMDB retourne les films et leurs informations."
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-5">
              <Step
                number="04"
                title="React Native"
                description="Les données sont stockées dans l'état de l'application."
              />

              <Arrow />

              <Step
                number="05"
                title="Affichage"
                description="Les films apparaissent sous forme de cartes avec leurs affiches."
              />
            </div>
          </div>
        </section>

        {/* FONCTIONNALITÉS */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Fonctionnalités
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black">
              Une interface dynamique alimentée par des données externes.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
                >
                  <span className="text-sm font-black text-blue-500">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MA CONTRIBUTION */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Ma contribution
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Ce que j'ai développé
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Contribution
                number="01"
                title="Création de l'application"
                description="Mise en place du projet mobile avec React Native et Expo."
              />

              <Contribution
                number="02"
                title="Connexion à TMDB"
                description="Intégration de l'API TMDB afin de récupérer les films et leurs informations."
              />

              <Contribution
                number="03"
                title="Gestion des données"
                description="Utilisation de useState et useEffect pour charger et stocker les données provenant de l'API."
              />

              <Contribution
                number="04"
                title="Interface utilisateur"
                description="Création d'une interface mobile avec affichage des affiches de films sous forme de grille."
              />

              <Contribution
                number="05"
                title="Affichage dynamique"
                description="Utilisation de FlatList pour gérer efficacement l'affichage de plusieurs films."
              />

              <Contribution
                number="06"
                title="Débogage"
                description="Correction des erreurs de requêtes API, de syntaxe JSX et d'affichage des données."
              />
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Challenges
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Problèmes rencontrés et solutions
            </h2>

            <div className="mt-12 space-y-4">
              <Challenge
                title="Connexion à l'API TMDB"
                solution="Construction correcte de l'URL de requête et utilisation de fetch pour récupérer les données JSON."
              />

              <Challenge
                title="Gestion de l'affichage mobile"
                solution="Utilisation de FlatList avec plusieurs colonnes afin d'organiser correctement les affiches sur l'écran."
              />

              <Challenge
                title="Chargement asynchrone des données"
                solution="Utilisation de useEffect pour lancer la requête au démarrage et de useState pour stocker les films reçus."
              />
            </div>
          </div>
        </section>

        {/* APPRENTISSAGES */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-10 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                Ce que ce projet m'a apporté
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                Mes premières bases solides en développement mobile.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                Ce projet m'a permis de comprendre le fonctionnement d'une
                application React Native, la récupération de données depuis une
                API externe et la manière de construire une interface mobile
                à partir de données dynamiques.
              </p>
            </div>
          </div>
        </section>

        {/* RETOUR */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-semibold text-gray-400 transition hover:text-white"
            >
              ← Retour à tous mes projets
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <span className="text-xs font-black text-blue-500">{number}</span>

      <h3 className="mt-4 font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="hidden items-center justify-center text-2xl text-gray-700 md:flex">
      →
    </div>
  );
}

function Contribution({ number, title, description }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
      <span className="font-mono text-sm font-bold text-blue-500">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-gray-500">{description}</p>
    </article>
  );
}

function Challenge({ title, solution }) {
  return (
    <article className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:grid-cols-[0.7fr_1.3fr]">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600">
          Problème
        </p>

        <h3 className="mt-3 font-bold">{title}</h3>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          Solution
        </p>

        <p className="mt-3 leading-7 text-gray-400">{solution}</p>
      </div>
    </article>
  );
}

export default ETNAFlix;