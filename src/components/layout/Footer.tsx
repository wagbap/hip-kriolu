import { Link } from 'react-router-dom';
import {
  CrownIcon,
  InstagramIcon,
  YoutubeIcon,
  SpotifyIcon,
  TiktokIcon,
} from '../ui/Icons';

const LINK_GROUPS = [
  {
    title: 'Arquivo',
    links: [
      { label: "MC's",    href: '/#mc' },
      { label: "DJ's",    href: '/#dj' },
      { label: 'Writers', href: '/#writers' },
      { label: 'B-Boys',  href: '/#bboy' },
    ],
  },
  {
    title: 'Conteúdo',
    links: [
      { label: 'Álbuns',      href: '/#albuns' },
      { label: 'Videoclips',  href: '/#videoclips' },
      { label: 'Battles',     href: '/#battles' },
      { label: 'Entrevistas', href: '/#entrevistas' },
    ],
  },
  {
    title: 'Cultura',
    links: [
      { label: 'Rap',    href: '/#rap' },
      { label: 'Graff',  href: '/#graff' },
      { label: 'Break',  href: '/#break' },
      { label: 'Agenda', href: '/#agenda' },
    ],
  },
  {
    title: 'Sobre',
    links: [
      { label: 'Contactos', href: '/#contactos' },
      { label: 'Sobre Nós', href: '/#sobre' },
      { label: 'Imprensa',  href: '/#imprensa' },
      { label: 'Colabora',  href: '/#colabora' },
    ],
  },
];

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'YouTube',   href: 'https://youtube.com',   Icon: YoutubeIcon },
  { label: 'Spotify',   href: 'https://spotify.com',   Icon: SpotifyIcon },
  { label: 'TikTok',    href: 'https://tiktok.com',    Icon: TiktokIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-kriolu-accent/10 bg-kriolu-deep">
      {/* Linha decorativa no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-track-fade" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16">
        {/* Topo: Logo + colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          {/* Logo + tagline */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 font-extrabold text-lg tracking-widest uppercase text-white hover:text-kriolu-accent transition-colors w-fit"
            >
              <CrownIcon size={22} className="text-kriolu-accent" />
              Hip Kriolu
            </Link>

            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Arquivo vivo da cultura Hip Hop em Portugal.
              Rap, Graff, Break e muito mais — tudo num só sítio.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3 mt-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 transition-all hover:bg-kriolu-accent/15 hover:border-kriolu-accent/40 hover:text-kriolu-accent hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 4 colunas de links */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-kriolu-accent">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/5 pt-10 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
              Fica a par do que sai
            </h4>
            <p className="text-xs text-white/50">
              Novos lançamentos, eventos e battles direto no teu email.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto items-center gap-2"
          >
            <input
              type="email"
              placeholder="o.teu@email.com"
              className="flex-1 md:w-72 bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 rounded-lg outline-none transition-all placeholder:text-white/30 focus:border-kriolu-accent focus:ring-2 focus:ring-kriolu-accent/30"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-accent-btn text-white text-xs font-bold uppercase tracking-widest shadow-cta hover:-translate-y-0.5 hover:shadow-ctaHover transition-all whitespace-nowrap"
            >
              Subscrever
            </button>
          </form>
        </div>

        {/* Base: copyright + links legais */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {year}{' '}
            <span className="text-white/60 font-semibold">Hip Kriolu</span>.
            Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-kriolu-accent transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-kriolu-accent transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-kriolu-accent transition-colors">
              Cookies
            </a>
            <span className="flex items-center gap-1.5 text-kriolu-accent">
              <CrownIcon size={14} />
              Feito em Cabo verde
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}