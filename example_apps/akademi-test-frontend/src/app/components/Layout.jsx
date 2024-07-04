function Layout({
  children,
  menuActions = [],
  title = "titulo de pagina",
}) {
  return (
    <section className="w-3/4 flex flex-col gap-4">
      <header className="border-b border-stone-300 pb-2 flex justify-between items-center">
        <h3 className="text-stone-300 font-bold uppercase">
          {title}
        </h3>

        {
          menuActions.length > 0 && menuActions.map((action) => action)
        }
      </header>

      <section>
        {children}
      </section>
    </section>
  );
}

export default Layout;
