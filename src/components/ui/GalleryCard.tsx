import { Link } from 'react-router-dom';
import type { Artist } from '../../types';
import { PinIcon, UsersIcon } from './Icons';

interface Props {
  artist: Artist;
}

export function GalleryCard({ artist }: Props) {
  return (
    <Link
      to={`/artista/${artist.id}`}
      className="group flex flex-col items-center gap-3 shrink-0 cursor-pointer"
    >
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-kriolu-card shadow-card transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-cardHover">
        <img
          src={artist.img}
          alt={artist.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay de hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 text-left">
          <div className="translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white font-extrabold text-base leading-tight">
              {artist.name}
            </p>

            {artist.location && (
              <p className="flex items-center gap-1.5 text-kriolu-accent text-[11px] font-semibold mt-1">
                <PinIcon size={11} />
                {artist.location}
              </p>
            )}

            {artist.group && artist.group !== '—' && (
              <p className="flex items-center gap-1.5 text-white/75 text-[11px] font-medium mt-0.5">
                <UsersIcon size={11} />
                {artist.group}
              </p>
            )}

            <p className="text-white/55 text-[10px] font-bold uppercase tracking-widest mt-1.5">
              {artist.role}
            </p>

            {/* Categorias como badges minimalistas */}
            {artist.categories.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {artist.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="text-[9px] font-bold uppercase tracking-wider text-kriolu-accent/80 bg-kriolu-accent/10 px-1.5 py-0.5 rounded"
                  >
                    {cat.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nome + função sempre visíveis por baixo */}
      <div className="text-center">
        <div className="text-base font-extrabold text-white group-hover:text-kriolu-accent transition-colors">
          {artist.name}
        </div>
        <div className="text-[11px] font-semibold tracking-widest uppercase text-white/60">
          {artist.role}
        </div>
      </div>
    </Link>
  );
}