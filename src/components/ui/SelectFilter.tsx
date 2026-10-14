import type { ChangeEvent } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface Props {
  label?: string;
  value: string | number;
  options: Option[];
  onChange: (value: string | number) => void;
}

export function SelectFilter({ label, value, options, onChange }: Props) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const raw = e.target.value;
    const parsed = /^\d+$/.test(raw) ? Number(raw) : raw;
    onChange(parsed);
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
          {label}
        </span>
      )}
      <select
        value={value}
        onChange={handleChange}
        className="bg-kriolu-panel border border-kriolu-accent/30 text-white text-sm font-semibold tracking-wide px-4 py-2.5 rounded-lg outline-none cursor-pointer transition-all hover:border-kriolu-accent focus:border-kriolu-accent focus:ring-2 focus:ring-kriolu-accent/30 min-w-[180px]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-kriolu-panel text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}