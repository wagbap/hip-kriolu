import { useCounters } from '../../hooks/useCounters';

export function CounterBar() {
  const { values, configs } = useCounters();

  return (
    <section className="w-full px-5 py-10 md:py-14 flex flex-wrap items-center justify-center gap-6 md:gap-14 bg-kriolu-panel/60 border-y border-kriolu-accent/15">
      {configs.map(({ key, label }) => (
        <div key={key} className="flex flex-col items-center gap-2 text-center">
          <span className="text-xs md:text-sm tracking-widest uppercase text-white/50 font-semibold">
            {label}
          </span>
          <span className="text-3xl md:text-4xl font-extrabold text-kriolu-accent tabular-nums drop-shadow-[0_0_16px_rgba(77,166,255,0.7)]">
            {values[key].toLocaleString('pt-PT')}
          </span>
        </div>
      ))}
    </section>
  );
}