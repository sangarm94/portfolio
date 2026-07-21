import { Link } from "react-router";

function DeskBot() {
  const technologies = [
    "ESP32-S3",
    "C++",
    "PlatformIO",
    "Python",
    "FastAPI",
    "Gemini",
    "Wi-Fi",
    "IoT",
  ];

  const features = [
    {
      title: "Interaction vocale",
      description:
        "Le robot est conçu pour écouter les questions de l'utilisateur grâce à un microphone et transmettre l'audio au système de traitement.",
    },
    {
      title: "Intelligence artificielle",
      description:
        "Les demandes sont traitées par un backend utilisant une IA conversationnelle afin de générer des réponses adaptées.",
    },
    {
      title: "Expressions visuelles",
      description:
        "Un écran OLED permet d'afficher différents visages et émotions afin de rendre les interactions plus naturelles.",
    },
    {
      title: "Mouvements",
      description:
        "Un servomoteur permet au robot d'orienter sa tête et d'ajouter des mouvements pendant les interactions.",
    },
    {
      title: "Détection de proximité",
      description:
        "Un capteur ultrason permet au robot de détecter la présence ou la distance d'un utilisateur ou d'un obstacle.",
    },
    {
      title: "Communication Wi-Fi",
      description:
        "L'ESP32 communique avec un backend FastAPI sur le réseau afin d'accéder aux différents services d'intelligence artificielle.",
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
                  Projet IoT & Intelligence Artificielle
                </div>

                <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
                  DeskBot
                  <span className="text-blue-500">.</span>
                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-9 text-gray-300">
                  Un robot assistant intelligent capable d'interagir avec son
                  utilisateur grâce à la voix, l'intelligence artificielle et
                  différents composants électroniques.
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
                  <div className="text-8xl">🤖</div>

                  <p className="mt-6 text-lg font-bold">
                    DeskBot
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    ESP32-S3 • IA • IoT
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
                  Pourquoi DeskBot ?
                </h2>
              </div>

              <div className="space-y-6 leading-8 text-gray-400">
                <p>
                  DeskBot est un projet réalisé dans le cadre de ma formation
                  à l'ETNA. L'objectif est de concevoir un robot de bureau
                  capable d'interagir naturellement avec son utilisateur.
                </p>

                <p>
                  Le projet combine plusieurs domaines : programmation
                  embarquée, intelligence artificielle, développement backend,
                  communication réseau, électronique et conception 3D.
                </p>

                <p>
                  Mon travail porte notamment sur la programmation de l'ESP32,
                  l'intégration des différents composants électroniques et la
                  communication entre le robot et le backend d'intelligence
                  artificielle.
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
              Comment fonctionne le robot ?
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-5">
              <ArchitectureStep
                number="01"
                title="Utilisateur"
                description="L'utilisateur parle au robot."
              />

              <ArchitectureArrow />

              <ArchitectureStep
                number="02"
                title="ESP32"
                description="Le robot capture et transmet les informations."
              />

              <ArchitectureArrow />

              <ArchitectureStep
                number="03"
                title="Backend"
                description="FastAPI gère la communication avec les services IA."
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-5">
              <ArchitectureStep
                number="04"
                title="Intelligence artificielle"
                description="Gemini génère une réponse adaptée."
              />

              <ArchitectureArrow />

              <ArchitectureStep
                number="05"
                title="Réponse"
                description="Le robot restitue la réponse et adapte ses réactions."
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
              Un robot capable d'écouter, comprendre et réagir.
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

        {/* MATÉRIEL */}
        <section className="border-y border-white/10 bg-white/[0.015] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500">
                  Matériel
                </p>

                <h2 className="mt-4 text-4xl font-black">
                  Composants intégrés
                </h2>

                <p className="mt-6 max-w-xl leading-8 text-gray-400">
                  Le robot combine plusieurs composants électroniques pilotés
                  par un microcontrôleur ESP32-S3.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "ESP32-S3",
                  "Écran OLED",
                  "Microphone I2S",
                  "Servomoteur",
                  "Capteur ultrason",
                  "LEDs",
                  "Buzzer",
                  "Connexion Wi-Fi",
                ].map((component) => (
                  <div
                    key={component}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 text-sm text-blue-400">
                      ✓
                    </span>

                    <span className="font-medium text-gray-300">
                      {component}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MA CONTRIBUTION */}
        <section className="py-24">
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
                title="Programmation de l'ESP32"
                description="Développement en C++ avec PlatformIO pour gérer les différents composants et états du robot."
              />

              <Contribution
                number="02"
                title="Intégration des composants"
                description="Connexion et programmation de l'écran OLED, du servomoteur, du microphone, des LEDs et des différents capteurs."
              />

              <Contribution
                number="03"
                title="Communication avec le backend"
                description="Mise en place de la communication Wi-Fi entre l'ESP32 et une API FastAPI."
              />

              <Contribution
                number="04"
                title="Interaction avec l'IA"
                description="Intégration du système permettant de transmettre les demandes utilisateur vers Gemini et de récupérer les réponses."
              />

              <Contribution
                number="05"
                title="Tests et diagnostic"
                description="Tests matériels, analyse des logs série et résolution des problèmes liés aux composants et aux communications."
              />

              <Contribution
                number="06"
                title="Travail en équipe"
                description="Utilisation de Git et GitLab avec différentes branches afin de collaborer sur le firmware ESP32 et le backend."
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
                title="Communication entre l'ESP32 et le backend"
                solution="Configuration de la connexion Wi-Fi et utilisation de l'adresse IP locale du serveur FastAPI afin de permettre la communication sur le même réseau."
              />

              <Challenge
                title="Pilotage des composants électroniques"
                solution="Tests indépendants des différents composants et analyse des logs série afin d'isoler plus facilement les problèmes matériels ou logiciels."
              />

              <Challenge
                title="Organisation d'un projet multi-technologies"
                solution="Séparation du projet en plusieurs modules : gestion Wi-Fi, affichage OLED, servo, audio, intelligence artificielle et contrôleur principal."
              />
            </div>
          </div>
        </section>

        {/* SUITE */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/[0.05] p-10 md:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
                Projet en cours
              </p>

              <h2 className="mt-5 text-3xl font-black md:text-4xl">
                DeskBot continue d'évoluer.
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                Les prochaines étapes concernent notamment la finalisation de
                l'interaction vocale, l'intégration complète des composants,
                l'amélioration des mouvements et l'assemblage final du robot
                dans sa coque imprimée en 3D.
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

function ArchitectureStep({ number, title, description }) {
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

function ArchitectureArrow() {
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

export default DeskBot;