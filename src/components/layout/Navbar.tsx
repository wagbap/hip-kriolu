const LINKS = ['Rap', 'Graff', 'Break', 'Agenda', 'Contactos'];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-5 md:px-12 py-4 flex items-center justify-between bg-kriolu-bg/85 backdrop-blur-xl border-b border-kriolu-accent/10">
      <div className="flex items-center gap-3 font-extrabold text-lg tracking-widest uppercase">
        <span className="text-kriolu-accent text-2xl drop-shadow-[0_0_8px_rgba(77,166,255,0.8)]">♛</span>
        <span>Hip Hop Kriolu</span>
      </div>

      <ul className="hidden md:flex gap-8 list-none">
        {LINKS.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-white/75 hover:text-kriolu-accent text-[13px] font-bold tracking-widest uppercase transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        {[
          { icon: '🗂', label: 'Arquivo' },
          { icon: '🔍', label: 'Pesquisar' },
        ].map(({ icon, label }) => (
          <button
            key={label}
            title={label}
            className="text-lg text-white/75 hover:text-kriolu-accent hover:scale-110 transition-all"
          >
            {icon}
          </button>
        ))}
      </div>
    </nav>
  );
}