export default function ToDoListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen flex flex-col">
      <header className="bg-stone-800 p-4">
        <h1 className="text-4xl text-center capitalize">web apps</h1>
      </header>

      <main className="h-screen flex flex-col gap-8 py-5 w-11/12 md:w-3/4 self-center">
        {children}
      </main>

      <footer className="bg-stone-800 py-4">
        <address className="text-center capitalize">pablo f. diaz</address>
      </footer>
    </div>
  );
}
