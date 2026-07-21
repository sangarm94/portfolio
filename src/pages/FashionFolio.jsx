import { Link } from "react-router";

function FashionFolio() {
  const technologies = [
    "React Native",
    "Python",
    "FastAPI",
    "Gemini",
    "SQLite",
    "SQLAlchemy",
    "REST API",
  ];

  const features = [
    {
      title: "Dressing numérique",
      description:
        "Gestion d'une garde-robe virtuelle permettant de centraliser les vêtements de l'utilisateur.",
    },
    {
      title: "Génération de tenues",
      description:
        "Création de propositions de tenues à partir des vêtements disponibles grâce à l'intelligence artificielle.",
    },
    {
      title: "Styliste virtuel",
      description:
        "Assistant conversationnel permettant à l'utilisateur de demander des conseils vestimentaires.",
    },
    {
      title: "Profil utilisateur",
      description:
        "Gestion des informations et préférences de l'utilisateur afin de personnaliser l'expérience.",
    },
    {
      title: "API Backend",
      description:
        "Communication entre l'application mobile et un backend FastAPI pour gérer les données et les fonctionnalités IA.",
    },
    {
      title: "Fonctionnalités sociales",
      description:
        "Préparation d'une dimension communautaire permettant de partager des inspirations et des tenues.",
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
                  Application mobile & Intelligence Artificielle
                </div>

                <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
                  FashionFolio
                  <span className="text-blue-500">.</span>
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-300">
                  Une application mobile intelligente dédiée à la mode,
                  combinant dressing numérique, génération de tenues et
                  assistant styliste alimenté par l'intelligence artificielle.
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

              {/* VISUEL TEMPORAIRE */}
              <div className="flex min-h-[380px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.025]">
                <div className="text-center">
                  <div className="text-8xl">👗</div>

                  <p className="mt-6 text-lg font-bold">
                    FashionFolio
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Mobile • API • Intelligence Artificielle
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
                  La mode assistée par l'intelligence artificielle
                </h2>
              </div>

              <div className="space-y-6 leading-8 text-gray-400">
                <p>
                  FashionFolio est une application pensée pour aider les
                  utilisateurs à organiser leur garde-robe et à trouver plus
                  facilement des idées de tenues adaptées à leurs besoins.
                </p>

                <p>
                  Le projet combine une application mobile, un backend FastAPI,
                  une base de données et l'intégration de Gemini pour apporter
                  une dimension intelligente aux recommandations vestimentaires.
                </p>

                <p>
                  L'objectif était de créer une expérience capable de réunir
                  gestion de vêtements, génération de tenues, conseils
                  personnalisés et fonctionnalités sociales dans une seule
                  application.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Architecture
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Comment fonctionne FashionFolio ?
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              <Step
                number="01"
                title="Application mobile"
                description="L'utilisateur interagit avec son dressing et l'assistant."
              />

              <Arrow />

              <Step
                number="02"
                title="API FastAPI"
                description="Le backend reçoit et traite les différentes requêtes."
              />

              <Arrow />

              <Step
                number="03"
                title="Base de données"
                description="Les informations utilisateurs et vêtements sont enregistrées."
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-5">
              <Step
                number="04"
                title="Gemini"
                description="L'intelligence artificielle génère des conseils ou des tenues."
              />

              <Arrow />

              <Step
                number="05"
                title="Résultat"
                description="L'application affiche une recommandation personnalisée."
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
              Une application pensée autour de l'utilisateur.
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
              Ce que j'ai réalisé
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Contribution
                number="01"
                title="Backend FastAPI"
                description="Participation à la mise en place d'une API permettant de gérer les utilisateurs, la garde-robe et la génération de tenues."
              />

              <Contribution
                number="02"
                title="Gestion des données"
                description="Utilisation de SQLite et SQLAlchemy pour enregistrer et manipuler les données de l'application."
              />

              <Contribution
                number="03"
                title="Intégration de Gemini"
                description="Connexion du backend à l'intelligence artificielle afin de générer des recommandations de tenues."
              />

              <Contribution
                number="04"
                title="API REST"
                description="Création et utilisation de routes permettant au frontend mobile de communiquer avec le backend."
              />

              <Contribution
                number="05"
                title="Application mobile"
                description="Travail sur une interface regroupant dressing, assistant styliste, fonctionnalités sociales et profil utilisateur."
              />

              <Contribution
                number="06"
                title="Travail en équipe"
                description="Organisation du projet en groupe avec séparation des responsabilités entre frontend, backend et fonctionnalités intelligentes."
              />
            </div>
          </div>
        </section>

        {/* ENDPOINTS */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Backend
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Une API au cœur de l'application
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              Le backend permet de centraliser la logique métier et de faire
              communiquer l'application mobile avec la base de données et les
              services d'intelligence artificielle.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <Endpoint
                method="USERS"
                route="/users"
                description="Gestion des utilisateurs."
              />

              <Endpoint
                method="WARDROBE"
                route="/wardrobe"
                description="Gestion des vêtements du dressing."
              />

              <Endpoint
                method="AI"
                route="/generate-outfit"
                description="Génération de tenues grâce à Gemini."
              />
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
              Challenges
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Problèmes rencontrés et solutions
            </h2>

            <div className="mt-12 space-y-4">
              <Challenge
                title="Communication frontend et backend"
                solution="Mise en place d'une API REST claire avec FastAPI afin de séparer la logique mobile de la gestion des données."
              />

              <Challenge
                title="Génération de recommandations cohérentes"
                solution="Utilisation de Gemini avec des instructions structurées afin de générer des propositions de tenues adaptées."
              />

              <Challenge
                title="Gestion de plusieurs fonctionnalités"
                solution="Organisation de l'application en plusieurs espaces : dressing, chat styliste, social et profil."
              />
            </div>
          </div>
        </section>

        {/* APPRENTISSAGES */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-10 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                Ce que ce projet m'a apporté
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                Relier mobile, backend, données et intelligence artificielle.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                FashionFolio m'a permis de travailler sur une architecture
                complète reliant une application mobile à une API, une base de
                données et un service d'intelligence artificielle. Ce projet
                m'a également permis de mieux comprendre la séparation entre
                frontend, backend et logique métier.
              </p>
            </div>
          </div>
        </section>

        {/* RETOUR */}
        <section className="border-t border-white/10 py-16">
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
      <span className="text-xs font-black text-blue-500">
        {number}
      </span>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
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

      <h3 className="mt-4 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-500">
        {description}
      </p>
    </article>
  );
}

function Endpoint({ method, route, description }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <span className="text-xs font-bold text-blue-400">
        {method}
      </span>

      <p className="mt-4 font-mono text-lg font-bold text-white">
        {route}
      </p>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {description}
      </p>
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

        <h3 className="mt-3 font-bold">
          {title}
        </h3>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          Solution
        </p>

        <p className="mt-3 leading-7 text-gray-400">
          {solution}
        </p>
      </div>
    </article>
  );
}

export default FashionFolio;