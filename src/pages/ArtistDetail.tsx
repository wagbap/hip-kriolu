import { useParams, Link } from 'react-router-dom';
import { ARTISTS } from '../data/artists';
import {
  AlbumIcon,
  SingleIcon,
  HandshakeIcon,
  VideoIcon,
  FolderIcon,
  MicIcon,
  PinIcon,
  UsersIcon,
  CalendarIcon,
  CrownIcon,
  ArrowLeftIcon,
  WaveformIcon,
} from '../components/ui/Icons';

export function ArtistDetail() {
  const { id } = useParams<{ id: string }>();
  const artist = ARTISTS.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="pt-40 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Artista não encontrado</h1>
        <Link to="/" className="text-kriolu-accent hover:underline">
          ← Voltar à home
        </Link>
      </div>
    );
  }

  const stats = [
    { Icon: AlbumIcon,     label: 'Álbuns',             value: 3  },
    { Icon: SingleIcon,    label: 'Singles',            value: 1  },
    { Icon: HandshakeIcon, label: 'Colaborações',       value: 1  },
    { Icon: VideoIcon,     label: 'Videoclips',         value: 5  },
    { Icon: MicIcon,       label: 'Entrevistas',        value: 1  },
    { Icon: WaveformIcon,  label: 'Instrumentais',      value: 74 },
    { Icon: FolderIcon,    label: 'Outros Projectos',   value: 0  },
  ];

  return (
    <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto pb-24">
      {/* Voltar */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-kriolu-accent text-sm font-bold uppercase tracking-widest mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeftIcon size={16} />
        Voltar
      </Link>

      {/* Cabeçalho do artista */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
        <img
          src={artist.img}
          alt={artist.name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-kriolu-accent/40 shadow-centerImg"
        />

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            {artist.name}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-white/60 mb-4 text-sm">
            {artist.location && (
              <span className="flex items-center gap-2">
                <PinIcon size={14} className="text-kriolu-accent" />
                {artist.location}
              </span>
            )}
            {artist.group && artist.group !== '—' && (
              <span className="flex items-center gap-2">
                <UsersIcon size={14} className="text-kriolu-accent" />
                {artist.group}
              </span>
            )}
            <span className="flex items-center gap-2">
              <CalendarIcon size={14} className="text-kriolu-accent" />
              {artist.year}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kriolu-accent/15 border border-kriolu-accent/40 text-kriolu-accent text-xs font-bold uppercase tracking-wider">
              <CrownIcon size={12} />
              {artist.role}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-wider">
              {artist.name}
            </span>
          </div>
        </div>
      </div>

      {/* Cards de conteúdo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-kriolu-card border border-white/5"
          >
            <div className="aspect-square bg-gradient-to-br from-kriolu-accent/20 to-kriolu-accentDark/20 flex items-center justify-center">
              <MicIcon size={40} className="text-kriolu-accent/80" />
            </div>
            <div className="p-4">
              <p className="font-bold text-white">{artist.name} Single</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                {artist.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {stats.map(({ Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between px-5 py-4 rounded-lg bg-kriolu-panel border border-white/5 hover:border-kriolu-accent/30 transition-colors"
          >
            <span className="flex items-center gap-3 text-white/80 text-sm font-semibold">
              <Icon size={18} className="text-kriolu-accent" />
              {label}
            </span>
            <span className="text-kriolu-accent font-bold tabular-nums">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Total de consultas */}
      <div className="mt-16 text-center">
        <p className="flex items-center justify-center gap-2 text-white/50 text-sm uppercase tracking-widest mb-4">
          <CrownIcon size={16} className="text-kriolu-accent" />
          Total de Consultas
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-kriolu-panel border border-white/5">
            <img
              src={artist.img}
              alt={artist.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-xs text-white/50 uppercase">{artist.role}</p>
              <p className="font-bold text-white">{artist.name}</p>
            </div>
            <span className="text-2xl font-black text-kriolu-accent ml-4 tabular-nums">
              8,18k
            </span>
          </div>

          <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-kriolu-panel border border-white/5">
            <CrownIcon size={24} className="text-kriolu-accent" />
            <div className="text-left">
              <p className="text-xs text-white/50 uppercase">Website</p>
              <p className="font-bold text-white">Hip Kriolu</p>
            </div>
            <span className="text-2xl font-black text-kriolu-accent ml-4 tabular-nums">
              1,14M
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}