function App() {
  return (
    <div className="min-h-screen bg-[#080b12] text-white">

      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080b12]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* LOGO */}
          <a
            href="#accueil"
            className="text-xl font-black tracking-tight"
          >
            MS<span className="text-blue-500">.</span>
          </a>

          {/* NAVIGATION */}
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

          {/* BOUTON CONTACT */}
          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-blue-500 hover:text-blue-400"
          >
            Me contacter
          </a>

        </nav>
      </header>


      {/* HERO */}
      <main>
        <section
          id="accueil"
          className="relative flex min-h-screen items-center overflow-hidden"
        >

          {/* EFFET DE FOND */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">

            <div className="max-w-4xl">

              {/* DISPONIBILITÉ */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">

                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>

                <span className="text-sm text-gray-300">
                  À la recherche d'une alternance
                </span>

              </div>


              {/* TITRE */}
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-500">
                Portfolio
              </p>

              <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

                Mohamed

                <span className="block text-gray-400">
                  SANGARE
                </span>

              </h1>


              {/* DESCRIPTION */}
              <h2 className="mt-8 text-xl font-medium text-gray-300 md:text-2xl">
                Étudiant en informatique à l'ETNA
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">

                Je conçois des projets mêlant développement,
                systèmes, IoT et intelligence artificielle.

                Je recherche actuellement une alternance en tant que

                <span className="font-semibold text-white">
                  {" "}technicien support informatique.
                </span>

              </p>


              {/* BOUTONS */}
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


              {/* TECHNOLOGIES */}
              <div className="mt-14 flex flex-wrap items-center gap-3">

                <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-gray-600">
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


          {/* SCROLL */}
          <a
            href="#apropos"
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition hover:text-white md:flex"
          >
            <span className="text-xs uppercase tracking-[0.25em]">
              Découvrir
            </span>

            <span className="text-xl">
              ↓
            </span>
          </a>

        </section>


        {/* PLACEHOLDERS POUR LES PROCHAINES SECTIONS */}

        <section
          id="apropos"
          className="min-h-screen border-t border-white/10"
        />

        <section
          id="projets"
          className="min-h-screen border-t border-white/10"
        />

        <section
          id="competences"
          className="min-h-screen border-t border-white/10"
        />

        <section
          id="contact"
          className="min-h-screen border-t border-white/10"
        />

      </main>

    </div>
  );
}

export default App;