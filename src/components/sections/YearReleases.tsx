import { useMemo, useState } from 'react';
import { ARTISTS, YEARS } from '../../data/artists';
import { Link } from 'react-router-dom';

type YearValue = number | 'all';

const CURRENT_YEAR = 2026;

export function YearReleases() {
  const [year, setYear] = useState<YearValue>(CURRENT_YEAR);

  const filteredArtists = useMemo(() => {
    if (year === 'all') return ARTISTS;
    return ARTISTS.filter((a) => a.year === year);
  }, [year]);

  const currentLabel =
    year === 'all' ? 'Todas as Edições' : `Lançados em ${year}`;

  return (
    <section className="px-5 md:px-12 pt-8 pb-32">
      {/* Cabeçalho com título + select */}
      <div className="max-w-[1600px] mx-auto mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-sm font-bold tracking-[3px] uppercase text-white/50">
            <span className="w-8 h-0.5 bg-kriolu-accent shadow-glow" />
            Edições por Ano
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            {currentLabel}
          </h2>
        </div>

        <div className="flex items-end gap-3">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              Ano de Lançamento
            </span>
            <select
              value={year}
              onChange={(e) => {
                const raw = e.target.value;
                setYear(raw === 'all' ? 'all' : Number(raw));
              }}
              className="bg-kriolu-panel border border-kriolu-accent/30 text-white text-sm font-semibold tracking-wide px-4 py-2.5 rounded-lg outline-none cursor-pointer transition-all hover:border-kriolu-accent focus:border-kriolu-accent focus:ring-2 focus:ring-kriolu-accent/30 min-w-[200px]"
            >
              {YEARS.map(({ value, label }) => (
                <option key={value} value={value} className="bg-kriolu-panel text-white">
                  {label}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-white/40 pb-3">
            {filteredArtists.length}{' '}
            {filteredArtists.length === 1 ? 'artista' : 'artistas'}
          </span>
        </div>
      </div>

      {/* Grid de cards — SÓ IMAGEM, sem texto nenhum */}
      <div className="max-w-[1600px] mx-auto flex flex-wrap gap-3 md:gap-4">
        {filteredArtists.map((artist) => (
          <Link
            key={artist.id}
            to={`/artista/${artist.id}`}
            className="group relative w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden bg-kriolu-card shadow-poster transition-all duration-500 hover:-translate-y-1 hover:scale-[1.05] hover:shadow-cardHover"
          >
            <img
              src={artist.img}
              alt={artist.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <p className="text-center text-white/40 py-20 text-sm">
          Sem artistas lançados neste ano.
        </p>
      )}
    </section>
  );
}