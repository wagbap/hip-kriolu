import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UPCOMING_SHOWS } from '../../data/shows';

export function NextShow() {
  const [index, setIndex] = useState(0);
  const total = UPCOMING_SHOWS.length;

  const show = UPCOMING_SHOWS[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // Teclado ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [total]);

  if (!show) return null;

  return (
    <section className="relative px-5 md:px-12 py-16 md:py-20">
      {/* Glow decorativo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[600px] h-[300px] bg-kriolu-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-[1100px] mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-kriolu-accent/25 bg-gradient-to-br from-kriolu-panel via-kriolu-deep to-kriolu-panel shadow-slider">
          <div className="absolute top-0 left-0 right-0 h-px bg-track-fade" />

          {/* Seta esquerda */}
          <button
            type="button"
            onClick={prev}
            aria-label="Show anterior"
            disabled={total <= 1}
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-kriolu-bg/70 backdrop-blur-md border border-kriolu-accent/30 text-kriolu-accent text-xl font-bold transition-all hover:bg-kriolu-accent hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-kriolu-bg/70 disabled:hover:text-kriolu-accent"
          >
            ←
          </button>

          {/* Seta direita */}
          <button
            type="button"
            onClick={next}
            aria-label="Próximo show"
            disabled={total <= 1}
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-kriolu-bg/70 backdrop-blur-md border border-kriolu-accent/30 text-kriolu-accent text-xl font-bold transition-all hover:bg-kriolu-accent hover:text-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-kriolu-bg/70 disabled:hover:text-kriolu-accent"
          >
            →
          </button>

          {/* Conteúdo */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 p-6 md:p-10 md:px-20 items-center">
            {/* Data */}
            <div className="flex flex-col items-center justify-center px-6 py-4 md:px-10 md:py-8 rounded-2xl bg-kriolu-accent/10 border border-kriolu-accent/30 shadow-glow min-w-[140px] md:min-w-[180px]">
              <span className="text-7xl md:text-8xl lg:text-9xl font-black text-kriolu-accent leading-[0.85] tabular-nums drop-shadow-[0_0_30px_rgba(77,166,255,0.6)]">
                {show.day}
              </span>
              <span className="text-lg md:text-2xl font-bold tracking-[6px] text-white/90 uppercase mt-3">
                {show.month}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-widest text-white/40 mt-2">
                {show.year}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-kriolu-accent/15 border border-kriolu-accent/40 text-kriolu-accent text-[10px] font-bold uppercase tracking-widest">
                ♛ Próximo Show
              </span>

              <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
                <Link
                  to={`/artista/${show.artistId}`}
                  className="hover:text-kriolu-accent transition-colors"
                >
                  {show.artistName}
                </Link>
              </h3>

              <p className="flex items-center gap-2 text-sm md:text-base text-white/65">
                <span className="text-kriolu-accent">📍</span>
                <span className="font-semibold text-white/85">{show.venue}</span>
                <span className="text-white/40">·</span>
                <span>{show.address}, {show.city}</span>
              </p>

              <div className="flex items-center gap-3 mt-1">
                <span className="text-kriolu-accent text-2xl">🕒</span>
                <span className="text-4xl md:text-5xl font-black text-white tabular-nums leading-none drop-shadow-[0_0_20px_rgba(77,166,255,0.4)]">
                  {show.time}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent-btn text-white text-xs font-bold tracking-widest uppercase shadow-cta hover:-translate-y-1 hover:scale-105 hover:shadow-ctaHover transition-all whitespace-nowrap w-fit mx-auto md:mx-0"
            >
              Bilhetes →
            </a>
          </div>

          {/* Indicador de posição + dots */}
          {total > 1 && (
            <div className="border-t border-white/5 px-6 md:px-10 py-4 flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40 tabular-nums">
                {String(index + 1).padStart(2, '0')}{' '}
                <span className="text-white/20">/</span>{' '}
                {String(total).padStart(2, '0')}
              </span>

              <div className="flex items-center gap-2">
                {UPCOMING_SHOWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Ir para show ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? 'w-6 bg-kriolu-accent shadow-glow'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}