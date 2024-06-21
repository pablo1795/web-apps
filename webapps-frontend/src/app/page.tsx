import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen flex flex-col">
      <header className="bg-stone-800 p-4">
        <h1 className="text-4xl text-center capitalize">web apps</h1>
      </header>

      <main className="h-screen flex flex-col gap-8 py-5 w-11/12 md:w-3/4 self-center">
        <section className="bg-stone-800 flex flex-col gap-2">
          <header>
            <h2 className="uppercase font-bold text-xl">apps</h2>
          </header>

          <div className="grid md:grid-cols-3">
            <Link href={'/to-do-list'}>
              <article className="bg-stone-700 px-4 py-2 rounded-xl">
                <header>
                  <h3 className="capitalize font-semibold">to do list</h3>
                </header>
                <div>
                  <p>App de listado de tareas.</p>
                </div>
              </article>
            </Link>
          </div>
        </section>

        <section className="bg-stone-800 flex flex-col gap-2">
          <header>
            <h2 className="uppercase font-bold text-xl">Videojuegos</h2>
          </header>

          <div className="grid md:grid-cols-3">
            <Link href={'/#'}>
              <article className="bg-stone-700 px-4 py-2 rounded-xl">
                <header>
                  <h3 className="capitalize font-semibold">videojuego</h3>
                </header>
                <div>
                  <p>futura tarea...</p>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-stone-800 py-4">
        <address className="text-center capitalize">pablo f. diaz</address>
      </footer>
    </div>
  );
}
